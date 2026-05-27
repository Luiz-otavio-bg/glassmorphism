"use client";

import {
  BadgeCheck,
  Bell,
  CircleDollarSign,
  CreditCard,
  Gauge,
  Layers3,
  LayoutDashboard,
  Lightbulb,
  Lock,
  Music2,
  Sparkles,
  UserRound,
} from "lucide-react";
import type { ReactNode } from "react";
import type { Language } from "@/components/language-switch";

const content = {
  en: {
    principles: {
      kicker: "Principles",
      title: "What makes glass feel real",
      description:
        "Glassmorphism is not only blur. It is a balance of transparency, separation, contrast and carefully placed light.",
      items: [
        {
          title: "Transparency",
          text: "Use translucent surfaces to reveal depth without losing readability.",
          value: "8-16%",
        },
        {
          title: "Depth",
          text: "Stack layers with soft borders, shadow and distance from the background.",
          value: "3 layers",
        },
        {
          title: "Light",
          text: "Let highlights and gradients suggest a physical glass edge.",
          value: "soft glow",
        },
        {
          title: "Contrast",
          text: "Glass works when text still has a clear, calm hierarchy.",
          value: "AA feel",
        },
      ],
    },
    gallery: {
      kicker: "Component Gallery",
      title: "Reusable glass surfaces",
      description:
        "These examples make the project feel like a real design playground, not just a static visual experiment.",
      items: [
        {
          title: "Profile Card",
          body: "Designer profile with status, location and quick stats.",
        },
        {
          title: "Pricing Card",
          body: "Premium offer with a polished purchase surface.",
        },
        {
          title: "Login Panel",
          body: "Authentication form that feels focused and protected.",
        },
        {
          title: "Music Player",
          body: "Floating media controls with artwork-inspired color.",
        },
        {
          title: "Dashboard",
          body: "Metric tiles over a rich, atmospheric product background.",
        },
        {
          title: "Notification",
          body: "Small alert card with enough blur to stand apart.",
        },
      ],
    },
    comparison: {
      kicker: "Before & After",
      title: "From flat to atmospheric",
      description:
        "The same information can feel heavier or lighter depending on how layers, light and separation are handled.",
      flat: "Flat UI",
      glass: "Glass UI",
    },
    useCases: {
      kicker: "Use Cases",
      title: "Where this visual language shines",
      description:
        "Glass is best when the product needs a premium tone, rich background context and interface panels that float without feeling detached.",
      items: [
        "Dashboards",
        "Fintech apps",
        "Portfolios",
        "Music products",
        "Mobile widgets",
        "Premium landing pages",
      ],
    },
    practices: {
      kicker: "Best Practices",
      title: "Make it readable, not just shiny",
      description:
        "A strong glass interface is restrained. It gives content space to breathe and keeps the visual effects in service of clarity.",
      items: [
        "Use blur with intention, not as decoration everywhere.",
        "Keep text contrast stronger than the glass effect.",
        "Place glass over backgrounds with visible depth.",
        "Use thin borders to reveal the panel edge.",
        "Limit transparency on dense content areas.",
        "Combine motion with restraint so the interface stays usable.",
      ],
    },
    final: {
      kicker: "Final Showcase",
      title: "A complete glass dashboard",
      description:
        "A richer closing scene gives the page a destination and shows the style applied to a full product moment.",
      badge: "Live concept",
      product: "Aurora Analytics",
      body: "A premium dashboard concept using frosted panels, depth and motion to make dense data feel calm.",
      revenue: "Revenue",
      growth: "Growth",
      signal: "Signal strength",
      health: "Product health",
      activity: "Activity stream",
      events: [
        "New premium user joined",
        "Conversion card updated",
        "Checkout panel tested",
      ],
    },
  },
  pt: {
    principles: {
      kicker: "Princípios",
      title: "O que faz o vidro parecer real",
      description:
        "Glassmorphism não é apenas blur. É um equilíbrio entre transparência, separação, contraste e luz bem posicionada.",
      items: [
        {
          title: "Transparência",
          text: "Use superfícies translúcidas para revelar profundidade sem perder legibilidade.",
          value: "8-16%",
        },
        {
          title: "Profundidade",
          text: "Empilhe camadas com bordas suaves, sombra e distância do fundo.",
          value: "3 camadas",
        },
        {
          title: "Luz",
          text: "Use brilhos e gradientes para sugerir uma borda física de vidro.",
          value: "glow suave",
        },
        {
          title: "Contraste",
          text: "O vidro funciona quando o texto ainda tem hierarquia clara.",
          value: "leitura AA",
        },
      ],
    },
    gallery: {
      kicker: "Galeria de Componentes",
      title: "Superfícies de vidro reutilizáveis",
      description:
        "Estes exemplos fazem o projeto parecer um playground de design real, não apenas um experimento visual estático.",
      items: [
        {
          title: "Card de Perfil",
          body: "Perfil de designer com status, localização e métricas rápidas.",
        },
        {
          title: "Card de Preço",
          body: "Oferta premium com uma superfície de compra mais refinada.",
        },
        {
          title: "Painel de Login",
          body: "Formulário de autenticação com sensação de foco e proteção.",
        },
        {
          title: "Player de Música",
          body: "Controles flutuantes com cor inspirada na capa do álbum.",
        },
        {
          title: "Dashboard",
          body: "Métricas sobre um fundo rico, atmosférico e profundo.",
        },
        {
          title: "Notificação",
          body: "Pequeno alerta com blur suficiente para se destacar.",
        },
      ],
    },
    comparison: {
      kicker: "Antes e Depois",
      title: "Do plano ao atmosférico",
      description:
        "A mesma informação pode parecer mais pesada ou mais leve dependendo das camadas, luz e separação.",
      flat: "UI plana",
      glass: "UI de vidro",
    },
    useCases: {
      kicker: "Casos de Uso",
      title: "Onde essa linguagem visual brilha",
      description:
        "Vidro funciona melhor quando o produto pede tom premium, fundo rico e painéis que flutuam sem parecer soltos.",
      items: [
        "Dashboards",
        "Apps fintech",
        "Portfolios",
        "Produtos de música",
        "Widgets mobile",
        "Landing pages premium",
      ],
    },
    practices: {
      kicker: "Boas Práticas",
      title: "Faça ser legível, não apenas brilhante",
      description:
        "Uma boa interface de vidro é contida. Ela dá respiro ao conteúdo e usa efeitos visuais a favor da clareza.",
      items: [
        "Use blur com intenção, não como decoração em tudo.",
        "Mantenha o contraste do texto mais forte que o efeito de vidro.",
        "Coloque vidro sobre fundos com profundidade visível.",
        "Use bordas finas para revelar a extremidade do painel.",
        "Limite transparência em áreas com muito conteúdo.",
        "Combine movimento com moderação para manter a interface usável.",
      ],
    },
    final: {
      kicker: "Showcase Final",
      title: "Um dashboard glassmorphism completo",
      description:
        "Uma cena final mais rica dá destino à página e mostra o estilo aplicado a um momento real de produto.",
      badge: "Conceito live",
      product: "Aurora Analytics",
      body: "Um conceito de dashboard premium usando painéis foscos, profundidade e movimento para deixar dados densos mais calmos.",
      revenue: "Receita",
      growth: "Crescimento",
      signal: "Força do sinal",
      health: "Saúde do produto",
      activity: "Atividade recente",
      events: [
        "Novo usuário premium entrou",
        "Card de conversão atualizado",
        "Painel de checkout testado",
      ],
    },
  },
};

const componentIcons = [
  UserRound,
  CircleDollarSign,
  Lock,
  Music2,
  LayoutDashboard,
  Bell,
];

function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/70">
        {kicker}
      </p>
      <h2 className="font-sans text-4xl font-semibold tracking-tight text-white md:text-6xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-relaxed text-white/58 md:text-lg">
        {description}
      </p>
    </div>
  );
}

function GlassPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/[0.055] shadow-2xl shadow-black/20 backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

export default function GlassShowcase({ language }: { language: Language }) {
  const copy = content[language];

  return (
    <>
      <section
        id="principles"
        className="relative overflow-hidden bg-[#0f0f0f] px-5 py-24 sm:px-10 lg:px-24"
      >
        <div className="absolute left-[-8rem] top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-[-8rem] h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionHeading {...copy.principles} />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {copy.principles.items.map((principle) => (
              <GlassPanel key={principle.title} className="p-6">
                <div className="mb-8 flex items-center justify-between">
                  <Sparkles className="size-5 text-cyan-200" />
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/60">
                    {principle.value}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white">{principle.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{principle.text}</p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      <section
        id="components"
        className="relative overflow-hidden bg-gradient-to-b from-[#0f0f0f] to-[#0a192f] px-5 py-24 sm:px-10 lg:px-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading {...copy.gallery} />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {copy.gallery.items.map((example, index) => {
              const Icon = componentIcons[index];

              return (
                <GlassPanel key={example.title} className="group overflow-hidden p-6">
                  <div className="mb-8 flex items-start justify-between">
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-cyan-300/10 text-cyan-100">
                      <Icon className="size-5" />
                    </div>
                    <div className="h-2 w-20 rounded-full bg-gradient-to-r from-cyan-300/60 to-white/10" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{example.title}</h3>
                  <p className="mt-3 min-h-12 text-sm leading-6 text-white/55">
                    {example.body}
                  </p>
                  <div className="mt-8 grid grid-cols-3 gap-2">
                    <div className="h-16 rounded-2xl border border-white/10 bg-white/[0.045]" />
                    <div className="h-16 rounded-2xl border border-cyan-200/20 bg-cyan-300/[0.08]" />
                    <div className="h-16 rounded-2xl border border-white/10 bg-white/[0.045]" />
                  </div>
                </GlassPanel>
              );
            })}
          </div>
        </div>
      </section>

      <section id="comparison" className="bg-[#0a192f] px-5 py-24 sm:px-10 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading {...copy.comparison} />

          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-700/70 bg-slate-950 p-6">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-300">
                  {copy.comparison.flat}
                </span>
                <Gauge className="size-5 text-slate-500" />
              </div>
              <div className="space-y-4">
                <div className="h-16 rounded-xl bg-slate-800" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-32 rounded-xl bg-slate-800" />
                  <div className="h-32 rounded-xl bg-slate-800" />
                </div>
                <div className="h-24 rounded-xl bg-slate-800" />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/15 via-white/[0.04] to-indigo-500/15 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl">
              <div className="absolute right-8 top-8 h-32 w-32 rounded-full bg-cyan-300/20 blur-2xl" />
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-medium text-white">
                  {copy.comparison.glass}
                </span>
                <BadgeCheck className="size-5 text-cyan-100" />
              </div>
              <div className="relative space-y-4">
                <div className="h-16 rounded-xl border border-white/10 bg-white/[0.08] backdrop-blur-xl" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-32 rounded-xl border border-white/10 bg-white/[0.07] backdrop-blur-xl" />
                  <div className="h-32 rounded-xl border border-cyan-100/20 bg-cyan-300/[0.08] backdrop-blur-xl" />
                </div>
                <div className="h-24 rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="usecases"
        className="bg-gradient-to-b from-[#0a192f] via-[#0f172a] to-[#0f0f0f] px-5 py-24 sm:px-10 lg:px-24"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/70">
              {copy.useCases.kicker}
            </p>
            <h2 className="font-sans text-4xl font-semibold tracking-tight text-white md:text-6xl">
              {copy.useCases.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/58 md:text-lg">
              {copy.useCases.description}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {copy.useCases.items.map((item) => (
              <GlassPanel key={item} className="flex items-center gap-4 p-5">
                <div className="flex size-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                  <CreditCard className="size-4 text-cyan-100" />
                </div>
                <span className="font-medium text-white/85">{item}</span>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      <section id="practices" className="bg-[#0f0f0f] px-5 py-24 sm:px-10 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading {...copy.practices} />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {copy.practices.items.map((practice) => (
              <GlassPanel key={practice} className="flex gap-4 p-5">
                <Lightbulb className="mt-1 size-5 shrink-0 text-cyan-100" />
                <p className="text-sm leading-6 text-white/62">{practice}</p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      <section
        id="showcase"
        className="relative overflow-hidden bg-gradient-to-b from-[#0f0f0f] to-[#08111f] px-5 py-24 sm:px-10 lg:px-24"
      >
        <div className="absolute left-1/2 top-24 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading {...copy.final} />

          <GlassPanel className="grid gap-5 p-5 md:grid-cols-[0.8fr_1.2fr] md:p-8">
            <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
              <div className="mb-10 flex items-center justify-between">
                <Layers3 className="size-6 text-cyan-100" />
                <span className="rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-50">
                  {copy.final.badge}
                </span>
              </div>
              <h3 className="text-3xl font-semibold text-white">{copy.final.product}</h3>
              <p className="mt-4 text-sm leading-6 text-white/58">{copy.final.body}</p>
              <div className="mt-10 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <p className="text-xs text-white/45">{copy.final.revenue}</p>
                  <p className="mt-2 text-2xl font-semibold text-white">$82k</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <p className="text-xs text-white/45">{copy.final.growth}</p>
                  <p className="mt-2 text-2xl font-semibold text-cyan-100">+18%</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="min-h-56 rounded-3xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl">
                <p className="text-sm text-white/50">{copy.final.signal}</p>
                <div className="mt-8 flex h-28 items-end gap-3">
                  {[44, 64, 52, 82, 72].map((height) => (
                    <div
                      key={height}
                      className="flex-1 rounded-t-2xl bg-gradient-to-t from-cyan-400/25 to-cyan-100/80"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="min-h-56 rounded-3xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl">
                <p className="text-sm text-white/50">{copy.final.health}</p>
                <div className="mt-8 flex aspect-square max-h-32 items-center justify-center rounded-full border-[14px] border-cyan-200/70 bg-white/[0.04] text-3xl font-semibold text-white">
                  94
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl sm:col-span-2">
                <p className="text-sm text-white/50">{copy.final.activity}</p>
                <div className="mt-5 space-y-3">
                  {copy.final.events.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/15 px-4 py-3"
                    >
                      <span className="text-sm text-white/72">{item}</span>
                      <span className="h-2 w-2 rounded-full bg-cyan-200" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassPanel>
        </div>
      </section>
    </>
  );
}
