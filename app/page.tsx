"use client";

import { useMemo, useState } from "react";

const vibes = [
  "Ultra-energetic street vibe",
  "Feel-good cinematic burst",
  "Late-night neon hustle",
  "Hyper-fast jump cuts",
  "Chill-but-confident swagger",
  "Bold storytelling hooks"
];

const niches = [
  "fitness transformation",
  "beauty hack",
  "memeable prank",
  "desi food craving",
  "self-growth micro-lesson",
  "budget travel flex"
];

const hooks = [
  "Stop scrolling if you want this secret",
  "POV: You only have 15 seconds to change everything",
  "Try this before it blows up",
  "This is how the pros actually do it",
  "You won't believe how simple this is",
  "If you're not doing this, you're missing out"
];

const actions = [
  "Flash the result in the first beat, then rewind",
  "Show a split-second fail, then drop the fix",
  "Layer captions with bold emojis matching each beat",
  "Cut to reaction shots synced to the beat drop",
  "Stack three quick tips with punchy transitions",
  "Use a duet-style callout to invite stitches"
];

const audios = [
  "fresh Bollywood lo-fi remix",
  "trending Punjabi bass drop",
  "retro synth wave on TikTok",
  "sped-up pop chorus climbing reels",
  "viral Afrobeat percussion loop",
  "emerging indie hook with 120BPM"
];

function randomPick<T>(items: T[], exclude?: T) {
  if (items.length === 1) return items[0];
  let candidate = exclude ?? items[0];
  while (candidate === exclude) {
    candidate = items[Math.floor(Math.random() * items.length)];
  }
  return candidate;
}

export default function Page() {
  const [seed, setSeed] = useState(() => Math.random().toString(36).slice(2));

  const prompt = useMemo(() => {
    const vibe = randomPick(vibes);
    const niche = randomPick(niches);
    const hook = randomPick(hooks);
    const action = randomPick(actions);
    const audio = randomPick(audios);

    return {
      headline: `${hook}!`,
      guidance: `Shoot a ${vibe} ${niche} short. ${action}.`,
      audio,
      cta: "End with an on-screen challenge + pinned comment prompt."
    };
  }, [seed]);

  return (
    <main
      style={{
        width: "100%",
        maxWidth: "720px",
        padding: "4rem 2rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        background: "rgba(255, 255, 255, 0.85)",
        borderRadius: "32px",
        boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.35)"
      }}
    >
      <header style={{ textAlign: "center" }}>
        <p
          style={{
            fontSize: "0.9rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#475569"
          }}
        >
          Viral Short Prompt
        </p>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 5vw, 3.8rem)",
            margin: "0.5rem 0",
            color: "#0f172a"
          }}
        >
          Drop a video idea that hits For You pages fast.
        </h1>
        <p style={{ color: "#334155", lineHeight: 1.6 }}>
          Tap the generator to spin up fresh, high-energy content prompts that
          are built for short-form virality.
        </p>
      </header>

      <section
        style={{
          display: "grid",
          gap: "1.5rem",
          padding: "2rem",
          borderRadius: "24px",
          background: "linear-gradient(135deg, #fef9c3, #fde68a)",
          color: "#111827"
        }}
      >
        <div>
          <p style={{ fontSize: "0.8rem", textTransform: "uppercase", fontWeight: 700 }}>
            Hook
          </p>
          <h2 style={{ fontSize: "1.6rem", margin: "0.3rem 0 0" }}>{prompt.headline}</h2>
        </div>
        <div>
          <p style={{ fontSize: "0.8rem", textTransform: "uppercase", fontWeight: 700 }}>
            Direction
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>{prompt.guidance}</p>
        </div>
        <div>
          <p style={{ fontSize: "0.8rem", textTransform: "uppercase", fontWeight: 700 }}>
            Sound
          </p>
          <p style={{ fontSize: "1.05rem" }}>Pair it with a {prompt.audio} to match the pace.</p>
        </div>
        <div>
          <p style={{ fontSize: "0.8rem", textTransform: "uppercase", fontWeight: 700 }}>
            CTA
          </p>
          <p style={{ fontSize: "1.05rem" }}>{prompt.cta}</p>
        </div>
      </section>

      <button
        type="button"
        onClick={() => setSeed(Math.random().toString(36).slice(2))}
        style={{
          padding: "0.95rem 1.5rem",
          borderRadius: "999px",
          border: "none",
          background: "#2563eb",
          color: "white",
          fontSize: "1.05rem",
          cursor: "pointer",
          display: "inline-flex",
          alignSelf: "center",
          alignItems: "center",
          gap: "0.5rem",
          transition: "transform 0.15s ease, box-shadow 0.15s ease",
          boxShadow: "0 10px 20px -10px rgba(37, 99, 235, 0.7)"
        }}
        onMouseDown={(event) => {
          (event.currentTarget as HTMLButtonElement).style.transform = "scale(0.98)";
        }}
        onMouseUp={(event) => {
          (event.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
        }}
      >
        Spin another idea
      </button>
    </main>
  );
}
