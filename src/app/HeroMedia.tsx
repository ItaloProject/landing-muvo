"use client";

import gsap from "gsap";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import HeroVideo from "./HeroVideo";

type Props = {
  /** sticker PNG transparente em public/hero/muvo-mascot.png */
  useMascot: boolean;
  /** fallback: vídeo + Ken Burns */
  useVideo?: boolean;
};

/**
 * Plano do hero:
 * - Mascote PNG (preferido): sticker full-bleed à direita + intro/idle GSAP
 * - Vídeo: performance 1x + Ken Burns / parallax
 * Reduced motion: imagem/poster estático
 */
export default function HeroMedia({ useMascot, useVideo = !useMascot }: Props) {
  const planeRef = useRef<HTMLDivElement>(null);
  const idleTween = useRef<gsap.core.Tween | null>(null);
  const parallaxTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const cleaned = useRef(false);

  const startCameraIdle = useCallback(
    (opts?: { withParallax?: boolean }) => {
      const plane = planeRef.current;
      if (!plane || cleaned.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      const canParallax =
        !!opts?.withParallax &&
        isDesktop &&
        window.matchMedia("(hover: hover) and (pointer: fine)").matches;

      idleTween.current?.kill();
      idleTween.current = gsap.to(plane, {
        scale: useMascot ? 1.012 : 1.045,
        x: isDesktop ? (useMascot ? -5 : -14) : 0,
        y: isDesktop ? (useMascot ? 2 : 8) : -6,
        duration: 14,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      if (!canParallax) return;

      const xTo = gsap.quickTo(plane, "x", { duration: 1.15, ease: "power3.out" });
      const yTo = gsap.quickTo(plane, "y", { duration: 1.15, ease: "power3.out" });
      const onPointer = (e: PointerEvent) => {
        xTo((e.clientX / window.innerWidth - 0.5) * (useMascot ? 18 : 28));
        yTo((e.clientY / window.innerHeight - 0.5) * (useMascot ? 10 : 16));
      };

      clearTimeout(parallaxTimer.current);
      parallaxTimer.current = setTimeout(() => {
        if (cleaned.current) return;
        idleTween.current?.kill();
        idleTween.current = gsap.to(plane, {
          scale: useMascot ? 1.01 : 1.03,
          duration: 12,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
        window.addEventListener("pointermove", onPointer);
        (plane as HTMLDivElement & { __parallax?: typeof onPointer }).__parallax = onPointer;
      }, 900);
    },
    [useMascot],
  );

  useEffect(() => {
    const plane = planeRef.current;
    if (!plane) return;

    cleaned.current = false;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    gsap.set(plane, {
      transformOrigin: isDesktop ? "78% 48%" : "50% 28%",
      scale: useMascot ? (isDesktop ? 1.04 : 1.03) : 1.06,
      x: 0,
      y: 0,
      force3D: true,
    });

    const intro = gsap.to(plane, {
      scale: 1,
      duration: useMascot ? 1.35 : 1.8,
      ease: "power3.out",
      onComplete: () => {
        /* parallax só no desktop; mobile só idle leve */
        if (useMascot) startCameraIdle({ withParallax: isDesktop });
      },
    });

    return () => {
      cleaned.current = true;
      intro.kill();
      idleTween.current?.kill();
      clearTimeout(parallaxTimer.current);
      const handler = (plane as HTMLDivElement & { __parallax?: (e: PointerEvent) => void }).__parallax;
      if (handler) window.removeEventListener("pointermove", handler);
    };
  }, [useMascot, startCameraIdle]);

  return (
    <div ref={planeRef} className="hero-media-plane absolute inset-0 will-change-transform">
      <div className="absolute inset-0 bg-[#0d0d0d]" aria-hidden />

      {useMascot ? (
        <div className="absolute inset-0 overflow-hidden">
          {/*
            Mobile: zona superior (texto fica embaixo com scrim)
            Tablet+: cresce à direita
            Desktop: metade direita, personagem inteiro, alinhado ao copy
          */}
          <div
            className="
              absolute left-1/2 -translate-x-1/2
              top-[4.75rem] h-[min(42svh,340px)] w-[min(92vw,420px)]
              sm:top-[5rem] sm:h-[min(44svh,400px)] sm:w-[min(80vw,480px)]
              lg:left-auto lg:right-[4%] lg:translate-x-0
              lg:top-[9%] lg:bottom-[10%] lg:h-auto lg:w-[min(480px,40vw)]
              xl:right-[4%] xl:w-[min(560px,42vw)]
              2xl:right-[5%] 2xl:w-[min(600px,40vw)]
            "
          >
            <Image
              src="/hero/muvo-mascot.png"
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 92vw, (max-width: 1280px) 40vw, 42vw"
              className="object-contain object-center lg:object-right"
              aria-hidden
            />
          </div>
        </div>
      ) : (
        <>
          <div
            className="hero-poster absolute inset-0 bg-cover bg-[position:center_35%] lg:bg-[position:78%_center] motion-reduce:block"
            style={{ backgroundImage: "url(/hero/hero-poster.jpg)" }}
            aria-hidden
          />
          {useVideo && (
            <HeroVideo onEnded={() => startCameraIdle({ withParallax: true })} />
          )}
        </>
      )}
    </div>
  );
}
