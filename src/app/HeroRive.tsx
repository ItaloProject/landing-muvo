"use client";

import {
  Alignment,
  Fit,
  Layout,
  useRive,
  useStateMachineInput,
} from "@rive-app/react-webgl2";
import { useEffect, useRef, useState } from "react";

/**
 * public/hero/muvo.riv
 * Artboard: Muvo · State Machine: HeroSM (intro → idle)
 *
 * O .riv traz o wordmark "RIVE" no começo da intro.
 * Só revelamos depois do onPlay + delay — nunca a partir do onLoad cedo.
 */
export const RIVE_SRC = "/hero/muvo.riv";
export const RIVE_ARTBOARD = "Muvo";
export const RIVE_STATE_MACHINE = "HeroSM";

/** ms depois do onPlay até o mascote cobrir o logo do template */
const REVEAL_AFTER_PLAY_MS = 3200;

type Props = {
  className?: string;
  onReady?: () => void;
};

export default function HeroRive({ className, onReady }: Props) {
  const [revealed, setRevealed] = useState(false);
  const scheduled = useRef(false);
  const onReadyRef = useRef(onReady);
  onReadyRef.current = onReady;

  const scheduleRevealFromPlay = () => {
    if (scheduled.current) return;
    scheduled.current = true;
    window.setTimeout(() => {
      setRevealed(true);
      onReadyRef.current?.();
    }, REVEAL_AFTER_PLAY_MS);
  };

  const { rive, RiveComponent } = useRive({
    src: RIVE_SRC,
    artboard: RIVE_ARTBOARD,
    stateMachine: RIVE_STATE_MACHINE,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.CenterRight,
    }),
    onPlay: scheduleRevealFromPlay,
    onLoadError: () => {
      console.error("[HeroRive] falha ao carregar", RIVE_SRC);
    },
  });

  /* fallback: só se onPlay nunca disparar */
  useEffect(() => {
    if (!rive) return;
    const t = window.setTimeout(() => {
      if (!scheduled.current) scheduleRevealFromPlay();
    }, 2500);
    return () => window.clearTimeout(t);
  }, [rive]);

  const pointerX = useStateMachineInput(rive, RIVE_STATE_MACHINE, "pointerX");
  const pointerY = useStateMachineInput(rive, RIVE_STATE_MACHINE, "pointerY");

  useEffect(() => {
    if (!pointerX && !pointerY) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      if (pointerX) pointerX.value = x;
      if (pointerY) pointerY.value = y;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [pointerX, pointerY]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className ?? ""}`}>
      <div
        className="absolute inset-x-0 top-[7%] bottom-[10%] origin-center scale-[0.88] sm:top-[6%] sm:bottom-[9%] sm:scale-[0.9] lg:left-[26%] lg:right-[3%] lg:top-[5%] lg:bottom-[8%] lg:origin-[68%_50%] lg:scale-[0.86]"
        style={{
          opacity: revealed ? 1 : 0,
          transition: "opacity 700ms ease-out",
        }}
      >
        <RiveComponent className="h-full w-full" aria-hidden />
      </div>

      {/* dissolve a caixa cinza do artboard */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          opacity: revealed ? 1 : 0,
          transition: "opacity 700ms ease-out",
          background: [
            "linear-gradient(90deg,#0d0d0d 0%,rgba(13,13,13,0.95) 28%,transparent 52%)",
            "linear-gradient(270deg,#0d0d0d 0%,rgba(13,13,13,0.88) 10%,transparent 30%)",
            "linear-gradient(180deg,#0d0d0d 0%,rgba(13,13,13,0.8) 10%,transparent 24%)",
            "linear-gradient(0deg,#0d0d0d 0%,rgba(13,13,13,0.9) 14%,transparent 34%)",
          ].join(","),
        }}
        aria-hidden
      />

      {!revealed && (
        <div
          data-rive-mask
          className="pointer-events-none absolute inset-0 z-10 bg-[#0d0d0d]"
          aria-hidden
        />
      )}
    </div>
  );
}
