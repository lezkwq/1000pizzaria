import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import heroArt from "@/assets/hero-1910.jpg";
import { WHATSAPP_URL } from "./links";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const artY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -70]);

  return (
    <section ref={ref} className="hero" id="inicio">
      <div className="container-site hero__stage">
        <motion.img
          src={heroArt}
          alt="Logo 1910 com pizza de fermentação natural saída do forno a lenha"
          className="hero__art"
          width={941}
          height={720}
          style={{ y: artY }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          fetchPriority="high"
        />


        <motion.h1
          className="hero__headline"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          Temos 1910 motivos. <em>Basta um: a pizza.</em>
        </motion.h1>

        <motion.p
          className="hero__sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          Fermentação natural, forno a lenha e dono no salão. Na Velha, em Blumenau.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <a className="btn btn-solid" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Reservar ou pedir
          </a>
          <a className="btn btn-ghost-light" href="#cardapio">
            Ver o cardápio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
