import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { morePhotos as more, photos } from "./photos";
import { WHATSAPP_URL } from "./links";

/* ---------- 1. Baralho de fotos que vira com a rolagem ---------- */

const deck = [
  {
    title: "Fermentação natural",
    text: "A massa leva o tempo que precisa. Por isso a borda sai leve e a digestão agradece.",
    img: photos.maos,
    alt: "Mãos abrindo a massa",
  },
  {
    title: "Forno a lenha",
    text: "Fogo de verdade, borda tostada e aquele sabor que forno elétrico nenhum entrega.",
    img: more.brie2,
    alt: "Pizza de brie e cogumelos saindo do forno",
  },
  {
    title: "Mesa cheia",
    text: "Pizza, drink e sobremesa no mesmo pedido. Aqui ninguém sai com fome.",
    img: more.zucchiniVinho,
    alt: "Pizza de abobrinha com taça de vinho",
  },
  {
    title: "Eventos e congelados",
    text: "Levamos a 1910 pro seu evento. E a massa congelada vai pra sua casa.",
    img: more.letreiro,
    alt: "Letreiro da 1910 na parede com pizza na mesa",
  },
];

const tilt = [-6, 4, -3, 7];

function DeckCard({ i, n, progress, img, alt }: { i: number; n: number; progress: MotionValue<number>; img: string; alt: string }) {
  const start = i / n;
  const end = (i + 1) / n;
  const last = i === n - 1;
  const y = useTransform(progress, [start, end], ["0%", last ? "0%" : "-130%"]);
  const rotate = useTransform(progress, [start, end], [tilt[i] ?? 0, last ? (tilt[i] ?? 0) : -22]);
  const x = useTransform(progress, [start, end], ["0%", last ? "0%" : "18%"]);
  return (
    <motion.figure className="deck__card" style={{ y, x, rotate, zIndex: n - i }}>
      <img src={img} alt={alt} loading="lazy" />
    </motion.figure>
  );
}

export function Deck() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(deck.length - 1, Math.floor(v * deck.length)));
  });

  if (reduce) {
    return (
      <section className="section deck deck--static">
        <div className="container-site deck__static">
          {deck.map((d) => (
            <figure key={d.title} className="deck__card deck__card--static">
              <img src={d.img} alt={d.alt} loading="lazy" />
              <figcaption><strong>{d.title}</strong> {d.text}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="deck" style={{ height: `${deck.length * 85}svh` }}>
      <div className="deck__sticky">
        <div className="container-site deck__grid">
          <div className="deck__text">
            <p className="eyebrow">Por que a 1910</p>
            <div className="deck__titles">
              {deck.map((d, i) => (
                <motion.h3
                  key={d.title}
                  className="deck__title"
                  animate={{ opacity: i === active ? 1 : 0.18 }}
                  transition={{ duration: 0.35 }}
                >
                  {d.title}
                </motion.h3>
              ))}
            </div>
            <motion.p key={active} className="deck__desc" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
              {deck[active].text}
            </motion.p>
          </div>
          <div className="deck__stage">
            {deck.map((d, i) => (
              <DeckCard key={d.title} i={i} n={deck.length} progress={scrollYProgress} img={d.img} alt={d.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 2. Fotos espalhadas em volta da frase ---------- */

const scatter = [
  { img: more.oreo, alt: "Pizza doce de Oreo", pos: { top: "4%", left: "6%" }, w: "13rem", speed: 160 },
  { img: more.gin, alt: "Gin tônica", pos: { top: "2%", right: "10%" }, w: "9rem", speed: 260 },
  { img: more.burrataColher, alt: "Burrata com pesto", pos: { top: "38%", left: "-2%" }, w: "11rem", speed: 90 },
  { img: more.morango, alt: "Pizza doce de morango", pos: { bottom: "4%", left: "18%" }, w: "10rem", speed: 220 },
  { img: more.menta, alt: "Drink de menta", pos: { bottom: "10%", right: "4%" }, w: "12rem", speed: 140 },
  { img: more.fachadaLogo, alt: "Logo da 1910 na fachada", pos: { top: "42%", right: "-3%" }, w: "9rem", speed: 300 },
];

function Floating({ s, progress }: { s: (typeof scatter)[number]; progress: MotionValue<number> }) {
  const y = useTransform(progress, [0, 1], [s.speed, -s.speed]);
  return (
    <motion.img
      className="scatter__img"
      src={s.img}
      alt={s.alt}
      loading="lazy"
      style={{ ...s.pos, width: s.w, y }}
    />
  );
}

export function Scatter() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0.15, 0.5], [0.92, 1]);
  return (
    <section ref={ref} className="scatter">
      {scatter.map((s) => (
        <Floating key={s.alt} s={s} progress={scrollYProgress} />
      ))}
      <motion.div className="scatter__center" style={{ scale }}>
        <p className="eyebrow">Toda quarta a domingo</p>
        <h2 className="scatter__title">
          Pizza de verdade.<br />Sem pressa e sem atalho.
        </h2>
        <a className="btn btn-brick" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          Reservar sua mesa
        </a>
      </motion.div>
    </section>
  );
}

/* ---------- 3. Faixa horizontal com texto em arco ---------- */

const strip = [
  { img: photos.salao, alt: "Salão da pizzaria" },
  { img: photos.burrata, alt: "Pizza de burrata" },
  { img: photos.mural, alt: "Mural de fotos" },
  { img: photos.calzone, alt: "Calzone" },
  { img: photos.aperol, alt: "Aperol" },
  { img: photos.fatia, alt: "Fatia com queijo puxando" },
  { img: photos.mesa, alt: "Mesa cheia" },
];

const arcWords = "salão   eventos   congelados   delivery   salão   eventos   congelados   delivery   ";

export function Strip() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-62%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -120]);
  return (
    <section ref={ref} className="strip">
      <div className="strip__sticky">
        <motion.div className="strip__row" style={{ x }}>
          {strip.map((s) => (
            <img key={s.alt} src={s.img} alt={s.alt} loading="lazy" />
          ))}
        </motion.div>
        <motion.svg className="strip__arc" viewBox="0 0 1000 1000" style={{ rotate }} aria-hidden="true">
          <defs>
            <path id="arc" d="M500,500 m-440,0 a440,440 0 1,1 880,0 a440,440 0 1,1 -880,0" />
          </defs>
          <text>
            <textPath href="#arc">{arcWords}</textPath>
          </text>
        </motion.svg>
      </div>
    </section>
  );
}
