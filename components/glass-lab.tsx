"use client";

import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import type { Language } from "@/components/language-switch";

const controlSettings = [
  { key: "blur", min: 0, max: 32, suffix: "px" },
  { key: "opacity", min: 2, max: 24, suffix: "%" },
  { key: "border", min: 0, max: 40, suffix: "%" },
  { key: "shadow", min: 0, max: 60, suffix: "%" },
] as const;

type ControlKey = (typeof controlSettings)[number]["key"];

const initialValues: Record<ControlKey, number> = {
  blur: 18,
  opacity: 8,
  border: 18,
  shadow: 35,
};

const labCopy = {
  en: {
    kicker: "Glass Lab",
    title: "Tune the glass in real time",
    description:
      "Adjust blur, opacity, border and shadow to feel how each decision changes the weight of the same card. This turns the page into a small learning tool.",
    controls: {
      blur: "Blur",
      opacity: "Opacity",
      border: "Border",
      shadow: "Shadow",
    },
    preview: "Preview",
    card: "Glass Card",
    balance: "Balance",
    cssHint: "backdrop-filter",
    background: "background",
  },
  pt: {
    kicker: "Glass Lab",
    title: "Ajuste o vidro em tempo real",
    description:
      "Controle blur, opacidade, borda e sombra para sentir como cada decisão muda o peso do mesmo card. Assim a página vira uma pequena ferramenta de aprendizado.",
    controls: {
      blur: "Blur",
      opacity: "Opacidade",
      border: "Borda",
      shadow: "Sombra",
    },
    preview: "Prévia",
    card: "Card de Vidro",
    balance: "Saldo",
    cssHint: "backdrop-filter",
    background: "background",
  },
};

export default function GlassLab({ language }: { language: Language }) {
  const [values, setValues] = useState(initialValues);
  const copy = labCopy[language];

  const updateValue = (key: ControlKey, value: number) => {
    setValues((current) => ({ ...current, [key]: value }));
  };

  const glassStyle = {
    backgroundColor: `rgb(255 255 255 / ${values.opacity / 100})`,
    borderColor: `rgb(255 255 255 / ${values.border / 100})`,
    backdropFilter: `blur(${values.blur}px)`,
    WebkitBackdropFilter: `blur(${values.blur}px)`,
    boxShadow: `0 32px 90px rgb(0 0 0 / ${values.shadow / 100})`,
  };

  return (
    <section
      id="lab"
      className="relative overflow-hidden bg-gradient-to-b from-[#0f0f0f] via-[#111827] to-[#0a192f] px-5 py-24 sm:px-10 lg:px-24"
    >
      <div className="absolute left-[-6rem] top-24 h-72 w-72 rounded-full bg-fuchsia-400/10 blur-3xl" />
      <div className="absolute bottom-20 right-[-4rem] h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <div className="mb-6 flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-cyan-100 backdrop-blur-xl">
            <SlidersHorizontal className="size-5" />
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/70">
            {copy.kicker}
          </p>
          <h2 className="font-sans text-4xl font-semibold tracking-tight text-white md:text-6xl">
            {copy.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/58 md:text-lg">
            {copy.description}
          </p>

          <div className="mt-10 space-y-5 rounded-3xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
            {controlSettings.map((control) => (
              <label key={control.key} className="block">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-white/82">
                    {copy.controls[control.key]}
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/58">
                    {values[control.key]}
                    {control.suffix}
                  </span>
                </div>
                <input
                  type="range"
                  min={control.min}
                  max={control.max}
                  value={values[control.key]}
                  onChange={(event) => updateValue(control.key, Number(event.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-cyan-200"
                  aria-label={copy.controls[control.key]}
                />
              </label>
            ))}
          </div>
        </div>

        <div className="relative min-h-[34rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(103,232,249,0.24),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.22),transparent_30%),linear-gradient(135deg,#08111f,#172554_55%,#020617)] p-6">
          <div className="absolute left-10 top-10 h-28 w-28 rounded-full bg-cyan-200/40 blur-2xl" />
          <div className="absolute bottom-12 right-12 h-40 w-40 rounded-full bg-fuchsia-300/30 blur-2xl" />
          <div className="absolute left-12 top-1/2 h-16 w-52 rotate-12 rounded-full bg-white/18" />

          <div
            className="relative z-10 mx-auto mt-12 max-w-md rounded-[1.75rem] border p-6 text-white"
            style={glassStyle}
          >
            <div className="mb-10 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/48">
                  {copy.preview}
                </p>
                <h3 className="mt-2 text-3xl font-semibold">{copy.card}</h3>
              </div>
              <div className="size-12 rounded-2xl border border-white/15 bg-white/10" />
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/15 p-4">
                <p className="text-sm text-white/52">{copy.balance}</p>
                <p className="mt-2 text-3xl font-semibold">$12,840</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-4">
                  <p className="text-xs text-white/48">{copy.controls.blur}</p>
                  <p className="mt-2 text-xl font-semibold">{values.blur}px</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-4">
                  <p className="text-xs text-white/48">{copy.controls.opacity}</p>
                  <p className="mt-2 text-xl font-semibold">{values.opacity}%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 right-6 z-10 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-xs text-white/48 backdrop-blur-xl">
            {copy.cssHint}: blur({values.blur}px); {copy.background}: rgba(255,255,255,
            {values.opacity / 100});
          </div>
        </div>
      </div>
    </section>
  );
}
