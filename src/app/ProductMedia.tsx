"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type View = "desktop" | "mobile";

type Media = {
  image: { src: string; alt: string };
  video: string | null;
  /* versão em alta qualidade, baixada só ao ampliar; sem ela, o modal usa o vídeo leve */
  videoHd?: string | null;
};

type Props = {
  label: string;
  delay: number;
  /* lado do card em que a mídia fica: o zoom do hover cresce para o lado livre */
  side: "left" | "right";
  desktop: Media;
  mobile: Media;
};

function IconMonitor() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <rect x="1.5" y="2.5" width="15" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 16h6M9 12.5V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <rect x="4.5" y="1.5" width="9" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 13.5h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconExpand() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <circle cx="7.5" cy="7.5" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11.5 11.5L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7.5 5.5v4M5.5 7.5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const views = [
  { id: "desktop", text: "Ver no computador", Icon: IconMonitor },
  { id: "mobile", text: "Ver no celular", Icon: IconPhone },
] as const;

const videoClass = "absolute inset-0 h-full w-full object-cover object-top motion-reduce:hidden";

function ExpandButton({ label, onClick, className }: { label: string; onClick: () => void; className: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Ampliar demonstração do ${label}`}
      title="Ampliar"
      className={`absolute z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/65 text-white backdrop-blur transition-colors hover:bg-black/85 ${className}`}
    >
      <IconExpand />
    </button>
  );
}

/* modal de ampliação: renderizado no body, porque o card usa transform (quebraria o position: fixed) */
function Lightbox({ media, label, view, onClose }: { media: Media; label: string; view: View; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const items = dialogRef.current.querySelectorAll<HTMLElement>("button, video[controls]");
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, [onClose]);

  const where = view === "desktop" ? "no computador" : "no celular";
  const source = media.videoHd ?? media.video;
  const mediaClass =
    "block h-auto w-auto max-h-[84vh] max-w-[min(92vw,1700px)] rounded-xl border border-white/10 bg-black";

  return createPortal(
    <div
      className="animate-fade-in fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Demonstração do ${label} ${where}`}
        className="relative"
        onClick={(e) => e.stopPropagation()}
      >
        {source ? (
          <video
            className={mediaClass}
            src={source}
            poster={media.image.src}
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img className={mediaClass} src={media.image.src} alt={media.image.alt} />
        )}
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          title="Fechar (Esc)"
          className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white backdrop-blur transition-colors hover:bg-black/90"
        >
          <IconClose />
        </button>
      </div>
    </div>,
    document.body,
  );
}

export default function ProductMedia({ label, delay, side, desktop, mobile }: Props) {
  /* no celular começa na moldura mobile; no desktop, na do computador */
  const [view, setView] = useState<View>("desktop");
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const media = view === "desktop" ? desktop : mobile;

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setView(mq.matches ? "mobile" : "desktop");
  }, []);

  return (
    <div className="flex w-full flex-col items-center gap-4 md:flex-row md:gap-5">
      <div className="flex w-full min-w-0 flex-1 items-center justify-center md:min-h-[24rem]">
        <div className="w-full animate-float" style={{ animationDelay: `${delay}s` }}>
          {/* zoom só com ponteiro fino (desktop); no toque o tap abre o lightbox */}
          <div
            className={`group relative transition-transform duration-500 ease-out motion-reduce:transition-none md:hover:z-20 motion-reduce:md:hover:scale-100 ${
              /* o telefone é alto (24rem): o card corta o que passa dele, então o zoom é menor que o da moldura do computador */
              view === "desktop" ? "md:hover:scale-[1.3]" : "md:hover:scale-[1.15]"
            } ${side === "left" ? "origin-[25%_50%]" : "origin-center"}`}
          >
            {view === "desktop" ? (
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111] transition-shadow duration-500 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.6)] group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)]">
                <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2.5">
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                </div>
                <div className="relative aspect-[1920/910] cursor-zoom-in" onClick={() => setOpen(true)}>
                  <Image
                    src={media.image.src}
                    alt={media.image.alt}
                    fill
                    sizes="(min-width: 1024px) 700px, 100vw"
                    className="object-cover object-center"
                  />
                  {media.video && (
                    <video
                      key={media.video}
                      className={videoClass}
                      src={media.video}
                      poster={media.image.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label={`Demonstração do ${label} no computador`}
                    />
                  )}
                  <ExpandButton label={label} onClick={() => setOpen(true)} className="bottom-2 right-2" />
                </div>
              </div>
            ) : (
              <div
                className="relative mx-auto h-[24rem] w-[11.4rem] cursor-zoom-in overflow-hidden rounded-[2rem] border-[6px] border-[#1c1c1c] bg-[#111] transition-shadow duration-500 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.6)] group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)]"
                onClick={() => setOpen(true)}
              >
                <Image
                  src={media.image.src}
                  alt={media.image.alt}
                  fill
                  sizes="340px"
                  className="object-cover object-top"
                />
                {media.video && (
                  <video
                    key={media.video}
                    className={videoClass}
                    src={media.video}
                    poster={media.image.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={`Demonstração do ${label} no celular`}
                  />
                )}
                <span className="absolute left-1/2 top-1.5 z-10 h-1.5 w-12 -translate-x-1/2 rounded-full bg-black/80" />
                <ExpandButton label={label} onClick={() => setOpen(true)} className="bottom-3 left-1/2 -translate-x-1/2" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        role="group"
        aria-label={`Escolha como ver o ${label}`}
        className="relative z-30 order-first flex gap-1 rounded-full border border-white/10 bg-white/5 p-1 md:order-last md:flex-col"
      >
        {views.map(({ id, text, Icon }) => {
          const active = view === id;
          return (
            <button
              key={id}
              type="button"
              aria-pressed={active}
              aria-label={text}
              title={text}
              onClick={() => setView(id)}
              className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
                active ? "bg-[#f5f5f5] text-[#0d0d0d]" : "text-white/55 hover:text-white"
              }`}
            >
              <Icon />
            </button>
          );
        })}
      </div>

      {open && <Lightbox media={media} label={label} view={view} onClose={close} />}
    </div>
  );
}
