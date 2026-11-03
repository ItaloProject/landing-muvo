import Image from "next/image";
import Link from "next/link";

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

/* ── dados dos produtos ─────────────────────────────────────── */
const products = [
  {
    id: "financeiro",
    label: "MUVO Financeiro",
    tagline: "Controle total da sua vida financeira.",
    description:
      "Planejamento mensal, acompanhamento de cartão de crédito, investimentos e metas — tudo num só lugar, com inteligência artificial integrada.",
    accent: "#f5f5f5",
    href: "https://ibank-rho.vercel.app",
    cta: "Acessar Financeiro",
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
    accent: "#f5f5f5",
    href: "https://painel-cardapio.pages.dev",
    cta: "Acessar Foods",
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

/* ── página ─────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ── nav ── */}
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 h-14 border-b border-white/[0.06] backdrop-blur-md bg-[#0d0d0d]/80">
        <Image
          src="/brand/muvo-lockup-dark.png"
          alt="MUVO"
          width={96}
          height={36}
          className="h-7 md:h-9 w-auto object-contain"
          priority
        />
        <nav className="hidden md:flex items-center gap-6 text-xs text-white/50">
          <a href="#produtos" className="hover:text-white transition-colors">Produtos</a>
          <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
        </nav>
        <a
          href="https://ibank-rho.vercel.app/comecar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-11 items-center gap-1.5 whitespace-nowrap rounded-lg bg-white text-black text-xs font-semibold px-3.5 hover:bg-white/90 transition-colors"
        >
          Começar com o Financeiro <IconArrow />
        </a>
      </header>

      {/* ── hero ── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[88svh] max-w-7xl content-center items-center gap-8 px-6 pb-16 pt-28 md:px-12 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          {/* texto */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="animate-fade-up delay-100 max-w-2xl text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ferramentas que movem o seu negócio.
            </h1>

            <p className="animate-fade-up delay-200 mt-6 max-w-xl text-balance text-base leading-relaxed text-white/55 md:text-lg">
              O MUVO é uma marca com várias ferramentas práticas para você e
              para o seu negócio crescerem. Comece pelo que você precisa hoje.
            </p>

            <div className="animate-fade-up delay-300 mt-10 flex flex-col items-center gap-3 sm:flex-row">
              <a
                href="https://ibank-rho.vercel.app/comecar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-[#f5f5f5] hover:bg-white text-[#0d0d0d] text-sm font-semibold px-6 py-3 transition-colors"
              >
                Começar com o Financeiro <IconArrow />
              </a>
              <a
                href="#produtos"
                className="flex items-center gap-2 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 text-white text-sm font-medium px-6 py-3 transition-colors"
              >
                Ver produtos
              </a>
            </div>
          </div>

          {/* vídeo do mascote: moldura própria, bordas esmaecidas para se fundir ao fundo */}
          <div className="relative mx-auto aspect-video w-full max-w-2xl lg:max-w-none [-webkit-mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]">
            <div
              className="hero-poster hidden absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(/hero/hero-poster.jpg)" }}
            />
            <video
              className="hero-video absolute inset-0 h-full w-full object-cover"
              src="/hero/hero.mp4"
              poster="/hero/hero-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* ── produtos ── */}
      <section id="produtos" className="px-6 md:px-12 pb-32">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Nossas soluções</h2>
            <p className="mt-3 text-sm text-white/55 max-w-md mx-auto">
              Cada produto foi construído para resolver um problema real, com foco em
              simplicidade e resultado.
            </p>
          </div>

          {products.map((p, i) => {
            const isEven = i % 2 === 0;
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className="relative rounded-2xl border overflow-hidden"
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

                <div className={`relative grid md:grid-cols-2 gap-0 ${!isEven ? "md:[&>*:first-child]:order-2" : ""}`}>
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

                    <div className="flex items-center gap-3">
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-2 rounded-xl text-sm font-semibold px-5 text-black transition-colors"
                        style={{ background: p.accent }}
                      >
                        {p.cta} <IconArrow />
                      </a>
                    </div>
                  </div>

                  {/* screenshot do produto */}
                  <div className="flex items-center justify-center p-6 md:p-10">
                    <div className="w-full animate-float" style={{ animationDelay: `${i * 1.5}s` }}>
                      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111] shadow-[0_24px_48px_-16px_rgba(0,0,0,0.6)]">
                        <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2.5">
                          <span className="h-2 w-2 rounded-full bg-white/15" />
                          <span className="h-2 w-2 rounded-full bg-white/15" />
                          <span className="h-2 w-2 rounded-full bg-white/15" />
                        </div>
                        <Image
                          src={p.screenshot.src}
                          alt={p.screenshot.alt}
                          width={640}
                          height={480}
                          className="block h-auto w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Em breve */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-8 md:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left">
            <h3 className="text-lg font-bold text-white">Mais soluções chegando</h3>
            <p className="text-sm text-white/55 leading-relaxed max-w-md">
              MUVO Concursos está a caminho, junto de controle de estoque, CRM simples e gestão de fornecedores.
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
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://ibank-rho.vercel.app/comecar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-[#f5f5f5] hover:bg-white text-[#0d0d0d] text-sm font-semibold px-6 py-3 transition-colors"
                >
                  Começar com o Financeiro <IconArrow />
                </a>
                <a
                  href="https://painel-cardapio.pages.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-medium px-6 py-3 transition-colors"
                >
                  Acessar Foods <IconArrow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── footer ── */}
      <footer className="border-t border-white/5 px-6 md:px-12 py-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/muvo-lockup-dark.png"
              alt="MUVO"
              width={72}
              height={28}
              className="h-7 w-auto object-contain opacity-70"
            />
            <span className="text-white/20 text-xs">·</span>
            <span className="text-xs text-white/55">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </span>
          </div>
          <nav className="flex items-center gap-6 text-xs text-white/55">
            <a href="https://ibank-rho.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center hover:text-white transition-colors">Financeiro</a>
            <a href="https://painel-cardapio.pages.dev" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center hover:text-white transition-colors">Foods</a>
            <a href="https://painel-admin-ashy.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center hover:text-white transition-colors">Admin</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
