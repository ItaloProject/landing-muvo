import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import HeroMedia from "./HeroMedia";
import ProductMedia from "./ProductMedia";

/* vídeo de demonstração do produto: só é usado se o arquivo existir em public/products */
const productVideo = (file: string) =>
  existsSync(path.join(process.cwd(), "public", "products", file)) ? `/products/${file}` : null;

/* Mascote sticker: PNG transparente em public/hero (preferido sobre Rive/vídeo) */
const heroUsesMascot = existsSync(path.join(process.cwd(), "public", "hero", "muvo-mascot.png"));

/* ── ícones inline ─────────────────────────────────────────── */
function IconArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconChart() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path d="M3 16l4-5 4 3 5-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="1" y="1" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
function IconStore() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path d="M3 9.5V19a1 1 0 001 1h14a1 1 0 001-1V9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M1 6l1.5-4h17L21 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M1 6c0 1.657 1.343 3 3 3s3-1.343 3-3c0 1.657 1.343 3 3 3s3-1.343 3-3c0 1.657 1.343 3 3 3s3-1.343 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <rect x="2" y="2" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="9" cy="9" r="3.25" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="13.2" cy="4.8" r="0.9" fill="currentColor" />
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <rect x="2" y="2" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5.5 7.5V13M5.5 5.2v.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8.5 13V9.2c0-1.2.8-2 1.9-2 1 0 1.6.7 1.6 2V13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconTikTok() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M11.5 3c.4 1.8 1.7 3.1 3.5 3.5v2.2c-1.2-.1-2.3-.5-3.2-1.2v4.3A4.3 4.3 0 117.5 7.5c.4 0 .8.1 1.2.2v2.3a2.1 2.1 0 00-.9-.2 2.1 2.1 0 102.1 2.1V3h1.6z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconYouTube() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <rect x="1.5" y="4" width="15" height="10" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 7.2v3.6L11.2 9 8 7.2z" fill="currentColor" />
    </svg>
  );
}

const socialIcons = {
  instagram: IconInstagram,
  linkedin: IconLinkedIn,
  tiktok: IconTikTok,
  youtube: IconYouTube,
} as const;

/* ── dados dos produtos ─────────────────────────────────────── */
const products = [
  {
    id: "financeiro",
    label: "MUVO Financeiro",
    tagline: "Controle total da sua vida financeira.",
    description:
      "Planejamento mensal, acompanhamento de cartão de crédito, investimentos e metas — tudo num só lugar, com inteligência artificial integrada.",
    accent: "#f5f5f5",
    href: "https://ibank-rho.vercel.app/comecar",
    cta: "Testar grátis — 5 dias",
    icon: IconChart,
    features: [
      "Planejamento mensal por categorias",
      "Acompanhamento de investimentos",
      "Gênio AI — assistente financeiro",
      "Relatórios e metas de economia",
    ],
    screenshot: {
      src: "/products/financeiro-desktop.png",
      alt: "Tela de acesso do MUVO Financeiro",
    },
  },
  {
    id: "foods",
    label: "MUVO Foods",
    tagline: "Gestão completa para restaurantes.",
    description:
      "Cardápio digital, pedidos online com Pix integrado e painel de controle para pizzarias e restaurantes. Simples de usar, poderoso nos resultados.",
    /* tom quente leve — diferencia do Financeiro sem sair da identidade monocromática */
    accent: "#e8e2d6",
    href: "https://painel-cardapio.pages.dev",
    cta: "Testar grátis — 5 dias",
    icon: IconStore,
    features: [
      "Cardápio digital com QR Code",
      "Pedidos online e pagamento por Pix",
      "Painel de controle em tempo real",
      "Alertas de pedidos no Telegram",
    ],
    screenshot: {
      src: "/products/foods-desktop.png",
      alt: "Tela de acesso do MUVO Foods",
    },
  },
];

/* redes: preencha os hrefs; entradas sem link não aparecem no footer */
const socials = [
  { id: "instagram", label: "Instagram", href: "" },
  { id: "linkedin", label: "LinkedIn", href: "" },
  { id: "tiktok", label: "TikTok", href: "" },
  { id: "youtube", label: "YouTube", href: "" },
] as const;

/* ── página ─────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ── nav ── */}
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between gap-3 px-4 sm:px-6 md:px-12 h-14 border-b border-white/[0.06] backdrop-blur-md bg-[#0d0d0d]/80">
        <a href="#" aria-label="MUVO — início" className="inline-flex shrink-0 items-center">
          <Image
            src="/brand/muvo-lockup-dark.png"
            alt="MUVO"
            width={128}
            height={35}
            className="w-[72px] md:w-[96px] object-contain"
            style={{ height: "auto" }}
            sizes="96px"
            priority
          />
        </a>
        <nav className="flex items-center gap-4 text-xs text-white/50 sm:gap-6">
          <a href="#produtos" className="inline-flex min-h-11 items-center hover:text-white transition-colors">Produtos</a>
          <a href="#sobre" className="inline-flex min-h-11 items-center hover:text-white transition-colors">Sobre</a>
        </nav>
        <a
          href="#produtos"
          className="flex min-h-11 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg bg-white text-black text-xs font-semibold px-3 sm:px-3.5 hover:bg-white/90 transition-colors"
        >
          <span className="sm:hidden">Explorar</span>
          <span className="hidden sm:inline">Ver produtos</span>
          <IconArrow />
        </a>
      </header>

      {/* ── hero: mídia full-bleed, texto sobre scrim limpo (sem máscara radial no vídeo) ── */}
      <section className="relative isolate min-h-[92svh] overflow-hidden">
        <div className="absolute inset-0">
          <HeroMedia useMascot={heroUsesMascot} />
          {/* legibilidade: no mobile o texto fica embaixo; no desktop, à esquerda */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,13,13,0.2)_0%,rgba(13,13,13,0.12)_30%,rgba(13,13,13,0.55)_48%,rgba(13,13,13,0.92)_62%,#0d0d0d_100%)] lg:bg-[linear-gradient(90deg,#0d0d0d_0%,rgba(13,13,13,0.94)_32%,rgba(13,13,13,0.5)_55%,rgba(13,13,13,0.12)_76%,transparent_100%)]"
          />
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent md:h-28" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-7xl items-end px-6 pb-14 pt-[min(52svh,420px)] sm:pb-16 sm:pt-[min(54svh,480px)] lg:items-center lg:px-12 lg:pb-24 lg:pt-28">
          <div className="flex w-full max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="animate-fade-up delay-100 text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ferramentas que movem o seu negócio.
            </h1>

            <p className="animate-fade-up delay-200 mt-6 max-w-lg text-balance text-base leading-relaxed text-white/70 md:text-lg">
              O MUVO é uma marca com várias ferramentas práticas para você e
              para o seu negócio crescerem. Teste qualquer uma grátis por 5 dias.
            </p>

            <div className="animate-fade-up delay-300 mt-10 flex flex-col items-center gap-4 lg:items-start">
              <a
                href="#produtos"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f5f5f5] hover:bg-white text-[#0d0d0d] text-sm font-semibold px-6 py-3 transition-colors"
              >
                Conhecer as ferramentas <IconArrow />
              </a>
              <p className="text-sm text-white/55">
                <a href="#produto-financeiro" className="text-white/85 underline-offset-4 transition-colors hover:text-white hover:underline">
                  Para suas finanças
                </a>
                <span className="mx-2 text-white/25" aria-hidden>
                  ·
                </span>
                <a href="#produto-foods" className="text-white/85 underline-offset-4 transition-colors hover:text-white hover:underline">
                  Para o seu restaurante
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── produtos ── */}
      <section id="produtos" className="px-6 md:px-12 pb-32">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Nossas soluções</h2>
            <p className="mt-3 text-sm text-white/55 max-w-md mx-auto">
              Cada produto resolve um problema real. Escolha o seu e teste grátis por 5 dias.
            </p>
          </div>

          {products.map((p, i) => {
            const isEven = i % 2 === 0;
            const Icon = p.icon;
            const desktopMedia = {
              image: p.screenshot,
              video: productVideo(`${p.id}-desktop.mp4`),
              videoHd: productVideo(`${p.id}-desktop-hd.mp4`),
            };
            const mobileMedia = {
              image: { src: `/products/${p.id}-mobile.png`, alt: `Tela de acesso do ${p.label} no celular` },
              video: productVideo(`${p.id}-mobile.mp4`),
              videoHd: productVideo(`${p.id}-mobile-hd.mp4`),
            };
            return (
              <div
                key={p.id}
                id={`produto-${p.id}`}
                className="relative scroll-mt-24 rounded-2xl border overflow-hidden"
                style={{
                  borderColor: `${p.accent}33`,
                  background: `linear-gradient(135deg, ${p.accent}0a 0%, #111 60%)`,
                }}
              >
                {/* glow bg */}
                <div
                  className="absolute top-0 left-0 w-full h-1/2 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse 60% 40% at ${isEven ? "20%" : "80%"} 0%, ${p.accent}1a 0%, transparent 70%)`,
                  }}
                />

                <div className={`relative grid md:grid-cols-2 gap-0 ${isEven ? "lg:grid-cols-[0.8fr_1.2fr]" : "lg:grid-cols-[1.2fr_0.8fr] md:[&>*:first-child]:order-2"}`}>
                  {/* texto */}
                  <div className="flex flex-col justify-center p-8 md:p-12 gap-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl"
                        style={{ background: `${p.accent}18`, color: p.accent }}
                      >
                        <Icon />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold leading-tight" style={{ color: p.accent }}>{p.label}</h3>
                        <p className="mt-1 text-base font-semibold text-white/85">{p.tagline}</p>
                      </div>
                    </div>

                    <p className="text-sm text-white/50 leading-relaxed">{p.description}</p>

                    <ul className="flex flex-col gap-2">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                          <span
                            className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                            style={{ background: `${p.accent}18`, color: p.accent }}
                          >
                            <IconCheck />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div>
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.cta} — ${p.label} (abre em nova aba)`}
                        className="inline-flex min-h-11 items-center gap-2 rounded-xl text-sm font-semibold px-5 text-black transition-colors hover:brightness-110"
                        style={{ background: p.accent }}
                      >
                        {p.cta} <IconArrow />
                      </a>
                    </div>
                  </div>

                  {/* produto: vídeo ou imagem, com botão para ver no computador ou no celular */}
                  <div className="flex items-center justify-center p-6 md:p-10">
                    <ProductMedia
                      label={p.label}
                      delay={i * 1.5}
                      side={isEven ? "right" : "left"}
                      desktop={desktopMedia}
                      mobile={mobileMedia}
                    />
                  </div>
                </div>
              </div>
            );
          })}

          {/* Em breve — um teaser, sem lista de wishlist */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-8 md:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left">
            <h3 className="text-lg font-bold text-white">Em breve: MUVO Concursos</h3>
            <p className="text-sm text-white/55 leading-relaxed max-w-md">
              Organização de estudos e acompanhamento de editais — a próxima ferramenta da família MUVO.
            </p>
          </div>
        </div>
      </section>

      {/* ── sobre ── */}
      <section id="sobre" className="px-6 md:px-12 pb-32">
        <div className="max-w-5xl mx-auto rounded-2xl border border-white/5 overflow-hidden">
          <div
            className="relative px-8 md:px-16 py-16 text-center"
            style={{ background: "linear-gradient(135deg, rgba(245,245,245,0.04) 0%, #111 50%, rgba(245,245,245,0.02) 100%)" }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(245,245,245,0.06) 0%, transparent 70%)" }} />
            <div className="relative">
              <div className="flex justify-center mb-6">
                <Image
                  src="/logo.png"
                  alt="MUVO"
                  width={56}
                  height={56}
                  className="h-14 w-auto object-contain opacity-80"
                />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 max-w-2xl mx-auto leading-tight">
                Tecnologia acessível para quem quer crescer.
              </h2>
              <p className="text-sm text-white/50 leading-relaxed max-w-xl mx-auto mb-10">
                O MUVO nasceu da necessidade de ter ferramentas simples, bonitas e que realmente
                funcionem. Cada produto é desenvolvido com foco em quem vai usá-lo, e a
                família de ferramentas do MUVO continua crescendo.
              </p>
              {/* fechamento: escolher produto e ir pro teste — não só voltar a #produtos */}
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a
                  href="https://ibank-rho.vercel.app/comecar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#f5f5f5] hover:bg-white text-[#0d0d0d] text-sm font-semibold px-6 py-3 transition-colors"
                >
                  Testar Financeiro <IconArrow />
                </a>
                <a
                  href="https://painel-cardapio.pages.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold px-6 py-3 transition-colors"
                >
                  Testar Foods <IconArrow />
                </a>
              </div>
              <p className="mt-4 text-xs text-white/40">5 dias grátis em cada ferramenta</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── footer ── */}
      <footer className="border-t border-white/5 px-6 md:px-12 py-10">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/brand/muvo-lockup-dark.png"
                alt="MUVO"
                width={128}
                height={35}
                className="w-[72px] object-contain opacity-70"
                style={{ height: "auto" }}
                sizes="72px"
              />
              <span className="text-white/20 text-xs">·</span>
              <span className="text-xs text-white/55">
                © {new Date().getFullYear()} Todos os direitos reservados.
              </span>
            </div>
            <nav className="flex items-center gap-6 text-xs text-white/55">
              <a href="https://ibank-rho.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center hover:text-white transition-colors">Financeiro</a>
              <a href="https://painel-cardapio.pages.dev" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center hover:text-white transition-colors">Foods</a>
            </nav>
          </div>
          {socials.some((s) => s.href) && (
            <nav aria-label="Redes sociais" className="flex items-center justify-center md:justify-start gap-2">
              {socials
                .filter((s) => s.href)
                .map((s) => {
                  const Icon = socialIcons[s.id];
                  return (
                    <a
                      key={s.id}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      title={s.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/55 transition-colors hover:border-white/25 hover:text-white"
                    >
                      <Icon />
                    </a>
                  );
                })}
            </nav>
          )}
        </div>
      </footer>
    </div>
  );
}
