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
function IconSpark() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path d="M11 2v3M11 17v3M2 11h3M17 11h3M4.93 4.93l2.12 2.12M14.95 14.95l2.12 2.12M4.93 17.07l2.12-2.12M14.95 7.05l2.12-2.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" />
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
    color: "emerald",
    accent: "#10b981",
    href: "https://ibank-rho.vercel.app",
    cta: "Acessar Financeiro",
    icon: IconChart,
    features: [
      "Planejamento mensal por categorias",
      "Acompanhamento de investimentos",
      "Gênio AI — assistente financeiro",
      "Relatórios e metas de economia",
    ],
    mockup: (
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#111] border border-white/5">
        {/* Simulação de UI */}
        <div className="p-5 flex flex-col gap-3">
          <div className="flex items-center gap-2 mb-1">
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
            <div className="h-2 w-24 rounded bg-white/10" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["Planejado", "Gasto real", "Sobra"].map((l, i) => (
              <div key={l} className="rounded-lg bg-white/5 p-3">
                <div className="h-5 w-12 rounded bg-white/10 mb-1.5" />
                <div className="text-[10px] text-white/30">{l}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-1.5 mt-1">
            {[70, 45, 90, 55].map((w, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-1.5 rounded-full bg-emerald-500/60" style={{ width: `${w}%` }} />
                <div className="h-1.5 w-8 rounded-full bg-white/10" />
              </div>
            ))}
          </div>
          <div className="mt-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-3">
            <div className="h-2 w-32 rounded bg-emerald-400/30 mb-1.5" />
            <div className="h-2 w-20 rounded bg-emerald-400/20" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "foods",
    label: "MUVO Foods",
    tagline: "Gestão completa para restaurantes.",
    description:
      "Cardápio digital, pedidos online com Pix integrado e painel de controle para pizzarias e restaurantes. Simples de usar, poderoso nos resultados.",
    color: "orange",
    accent: "#f97316",
    href: "https://painel-cardapio.pages.dev",
    cta: "Acessar Foods",
    icon: IconStore,
    features: [
      "Cardápio digital com QR Code",
      "Pedidos online e pagamento por Pix",
      "Painel de controle em tempo real",
      "Alertas de pedidos no Telegram",
    ],
    mockup: (
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#111] border border-white/5">
        <div className="p-5 flex flex-col gap-3">
          <div className="flex items-center gap-2 mb-1">
            <div className="h-2 w-2 rounded-full bg-orange-500" />
            <div className="h-2 w-28 rounded bg-white/10" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "Pedidos hoje", val: "12" },
              { label: "Faturamento", val: "R$ 847" },
            ].map(({ label, val }) => (
              <div key={label} className="rounded-lg bg-white/5 p-3">
                <div className="text-sm font-bold text-white/80 mb-1">{val}</div>
                <div className="text-[10px] text-white/30">{label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-1.5">
            {["Margherita", "Calabresa", "Frango com Catupiry"].map((p) => (
              <div key={p} className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                <div className="h-2 w-24 rounded bg-white/10" />
                <div className="h-4 w-12 rounded-full bg-orange-500/20 border border-orange-500/30" />
              </div>
            ))}
          </div>
          <div className="mt-1 rounded-lg bg-orange-500/10 border border-orange-500/20 p-2.5 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
            <div className="h-2 w-28 rounded bg-orange-400/30" />
          </div>
        </div>
      </div>
    ),
  },
];

/* ── stats ──────────────────────────────────────────────────── */
const stats = [
  { value: "2", label: "Produtos ativos" },
  { value: "100%", label: "Web, mobile e desktop" },
  { value: "Pix", label: "Pagamentos integrados" },
  { value: "AI", label: "Inteligência artificial" },
];

/* ── página ─────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen noise">
      {/* ── nav ── */}
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 h-14 border-b border-white/[0.06] backdrop-blur-md bg-[#0c0c0c]/80">
        <span className="text-sm font-semibold tracking-tight text-white select-none">
          MUVO
        </span>
        <nav className="hidden md:flex items-center gap-6 text-xs text-white/50">
          <a href="#produtos" className="hover:text-white transition-colors">Produtos</a>
          <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
        </nav>
        <a
          href="https://ibank-rho.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-lg bg-white text-black text-xs font-semibold px-3.5 py-1.5 hover:bg-white/90 transition-colors"
        >
          Começar grátis <IconArrow />
        </a>
      </header>

      {/* ── hero ── */}
      <section className="relative flex flex-col items-center text-center pt-36 pb-24 px-6 overflow-hidden">
        {/* glow orb */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[120px] opacity-20 pointer-events-none animate-glow"
          style={{ background: "radial-gradient(ellipse, #10b981 0%, transparent 70%)" }}
        />

        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-400 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Plataforma em constante evolução
          </span>
        </div>

        <h1 className="animate-fade-up delay-100 max-w-3xl text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] text-white">
          Ferramentas que{" "}
          <span className="text-emerald-400">movem</span>{" "}
          o seu negócio.
        </h1>

        <p className="animate-fade-up delay-200 mt-6 max-w-xl text-base md:text-lg text-white/50 leading-relaxed">
          Do controle financeiro pessoal à gestão de restaurantes — o MUVO
          reúne soluções práticas para você e para o seu negócio crescerem.
        </p>

        <div className="animate-fade-up delay-300 mt-10 flex flex-col sm:flex-row items-center gap-3">
          <a
            href="https://ibank-rho.vercel.app/comecar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-sm font-semibold px-6 py-3 transition-colors"
          >
            Começar agora <IconArrow />
          </a>
          <a
            href="#produtos"
            className="flex items-center gap-2 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 text-white text-sm font-medium px-6 py-3 transition-colors"
          >
            Ver produtos
          </a>
        </div>

        {/* stats strip */}
        <div className="animate-fade-up delay-400 mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5 w-full max-w-2xl">
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-[#0c0c0c] px-6 py-5 text-center">
              <p className="text-xl font-bold text-white">{value}</p>
              <p className="text-xs text-white/40 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── produtos ── */}
      <section id="produtos" className="px-6 md:px-12 pb-32">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Nossas soluções</h2>
            <p className="mt-3 text-sm text-white/40 max-w-md mx-auto">
              Cada produto foi construído para resolver um problema real, com foco em
              simplicidade e resultado.
            </p>
          </div>

          {products.map((p, i) => {
            const isEven = i % 2 === 0;
            const Icon = p.icon;
            const isEmerald = p.color === "emerald";
            return (
              <div
                key={p.id}
                className={`relative rounded-2xl border overflow-hidden ${isEmerald ? "border-emerald-500/20" : "border-orange-500/20"}`}
                style={{
                  background: `linear-gradient(135deg, ${isEmerald ? "rgba(16,185,129,0.04)" : "rgba(249,115,22,0.04)"} 0%, #111 60%)`,
                }}
              >
                {/* glow bg */}
                <div
                  className="absolute top-0 left-0 w-full h-1/2 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse 60% 40% at ${isEven ? "20%" : "80%"} 0%, ${isEmerald ? "rgba(16,185,129,0.1)" : "rgba(249,115,22,0.08)"} 0%, transparent 70%)`,
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
                        <p className="text-xs font-medium" style={{ color: p.accent }}>{p.label}</p>
                        <h3 className="text-lg font-bold text-white leading-tight">{p.tagline}</h3>
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
                        className="inline-flex items-center gap-2 rounded-xl text-sm font-semibold px-5 py-2.5 text-black transition-colors"
                        style={{ background: p.accent }}
                      >
                        {p.cta} <IconArrow />
                      </a>
                    </div>
                  </div>

                  {/* mockup */}
                  <div className="flex items-center justify-center p-6 md:p-10">
                    <div className="w-full max-w-xs animate-float" style={{ animationDelay: `${i * 1.5}s` }}>
                      {p.mockup}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Em breve */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 text-white/30">
              <IconSpark />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-xs font-medium text-white/30 mb-1.5 uppercase tracking-widest">Em breve</p>
              <h3 className="text-lg font-bold text-white mb-2">Mais soluções chegando</h3>
              <p className="text-sm text-white/40 leading-relaxed max-w-lg">
                Estamos construindo novos módulos para pequenas empresas: controle de estoque,
                CRM simples e gestão de fornecedores. O MUVO está crescendo.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/30 whitespace-nowrap">
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
              Novidades em breve
            </div>
          </div>
        </div>
      </section>

      {/* ── sobre ── */}
      <section id="sobre" className="px-6 md:px-12 pb-32">
        <div className="max-w-5xl mx-auto rounded-2xl border border-white/5 overflow-hidden">
          <div
            className="relative px-8 md:px-16 py-16 text-center"
            style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.06) 0%, #111 50%, rgba(249,115,22,0.04) 100%)" }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(16,185,129,0.08) 0%, transparent 70%)" }} />
            <div className="relative">
              <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest mb-4">Sobre o MUVO</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 max-w-2xl mx-auto leading-tight">
                Tecnologia acessível para quem quer crescer.
              </h2>
              <p className="text-sm text-white/50 leading-relaxed max-w-xl mx-auto mb-10">
                O MUVO nasceu da necessidade de ter ferramentas simples, bonitas e que realmente
                funcionem. Cada produto é desenvolvido com foco no usuário final — seja você
                controlando suas finanças ou gerenciando o seu restaurante.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://ibank-rho.vercel.app/comecar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-sm font-semibold px-6 py-3 transition-colors"
                >
                  Começar com o Financeiro <IconArrow />
                </a>
                <a
                  href="https://painel-cardapio.pages.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-orange-500/30 bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 text-sm font-medium px-6 py-3 transition-colors"
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
            <span className="text-sm font-bold text-white">MUVO</span>
            <span className="text-white/20 text-xs">·</span>
            <span className="text-xs text-white/30">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </span>
          </div>
          <nav className="flex items-center gap-6 text-xs text-white/30">
            <a href="https://ibank-rho.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Financeiro</a>
            <a href="https://painel-cardapio.pages.dev" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Foods</a>
            <a href="https://painel-admin-ashy.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Admin</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
