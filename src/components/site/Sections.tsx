import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { photos } from "./photos";
import zeroIcon from "@/assets/logo-zero.png.asset.json";

function Wordmark() {
  return (
    <span className="wordmark" aria-label="1910">
      <span aria-hidden="true">191</span>
      <img src={zeroIcon.url} alt="" aria-hidden="true" className="wordmark__zero" />
    </span>
  );
}

import { INSTAGRAM_URL, InstagramIcon, MAPS_URL, SocialIcons, WHATSAPP_URL, WhatsAppIcon } from "./links";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const onResize = () => {
      if (window.innerWidth > 767) setMenuOpen(false);
    };

    window.addEventListener("keydown", onEscape);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onEscape);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <style>{`
        .site-header__mobile-toggle,
        .site-header__mobile-nav {
          display: none;
        }

        @media (max-width: 767px) {
          .site-header {
            position: relative;
            z-index: 1000;
          }

          .site-header__icons,
          .site-header__nav {
            display: none !important;
          }

          .site-header__mobile-toggle {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 5px;
            width: 44px;
            height: 44px;
            margin-left: auto;
            padding: 0;
            border: 0;
            background: transparent;
            cursor: pointer;
          }

          .site-header__mobile-toggle span {
            width: 23px;
            height: 2px;
            border-radius: 2px;
            background: currentColor;
            transition: transform .3s ease, opacity .2s ease;
          }

          .site-header__mobile-toggle.is-open span:nth-child(1) {
            transform: translateY(7px) rotate(45deg);
          }

          .site-header__mobile-toggle.is-open span:nth-child(2) {
            opacity: 0;
          }

          .site-header__mobile-toggle.is-open span:nth-child(3) {
            transform: translateY(-7px) rotate(-45deg);
          }

          .site-header__mobile-nav {
            display: flex;
            flex-direction: column;
            gap: 24px;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            padding: 32px 8% 40px;
            background: #d83c0c;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transform: translateY(-12px);
            transition:
              opacity .3s ease,
              transform .3s ease,
              visibility .3s ease;
          }

          .site-header__mobile-nav.is-open {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            transform: translateY(0);
          }

          .site-header__mobile-nav a {
            color: #fff;
            text-decoration: none;
            font-size: 22px;
            font-weight: 500;
          }

          .wa-float--hero-visible {
            opacity: 0 !important;
            visibility: hidden !important;
            pointer-events: none !important;
            transform: translateY(16px);
          }

          .wa-float {
            transition:
              opacity .35s ease,
              visibility .35s ease,
              transform .35s ease;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .site-header__mobile-toggle span,
          .site-header__mobile-nav,
          .wa-float {
            transition: none !important;
          }
        }
      `}</style>

      <div className="container-site site-header__inner">
        <a
          href="#inicio"
          className="site-header__brand"
          aria-label="1910 Pizzaria"
          onClick={() => setMenuOpen(false)}
        >
          <span className="site-header__mark">
            <img src={photos.logo} alt="" width={64} height={64} />
          </span>
          <span className="site-header__name">
            <Wordmark />
          </span>
        </a>

        <nav className="site-header__nav" aria-label="Seções">
          <a href="#sobre">A casa</a>
          <a href="#cardapio">Cardápio</a>
          <a href="#avaliacoes">Avaliações</a>
          <a href="#visite">Visite</a>
        </nav>

        <div className="site-header__icons">
          <SocialIcons />
        </div>

        <button
          type="button"
          className={`site-header__mobile-toggle${menuOpen ? " is-open" : ""}`}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`site-header__mobile-nav${menuOpen ? " is-open" : ""}`}
        aria-label="Navegação mobile"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <a href="#sobre" onClick={() => setMenuOpen(false)}>
          A casa
        </a>
        <a href="#cardapio" onClick={() => setMenuOpen(false)}>
          Cardápio
        </a>
        <a href="#avaliacoes" onClick={() => setMenuOpen(false)}>
          Avaliações
        </a>
        <a href="#visite" onClick={() => setMenuOpen(false)}>
          Visite
        </a>
      </nav>
    </header>
  );
}

export function About() {
  return (
    <section className="section" id="sobre">
      <div className="container-site">
        <div className="about__grid">
          <motion.div className="about__frame" {...reveal}>
            <img
              src={photos.maos}
              alt="Mãos abrindo a massa da pizza"
              loading="lazy"
            />
          </motion.div>

          <motion.div className="about__text" {...reveal}>
            <p className="eyebrow">A casa</p>

            <h2
              className="title-serif"
              style={{
                marginTop: "0.75rem",
                marginBottom: "1.75rem",
              }}
            >
              A massa descansa. <em>A gente não.</em>
            </h2>

            <p>
              Fermentação natural pede tempo, e aqui ninguém apressa a massa.
              Ela descansa o quanto precisa, vai pro forno a lenha e sai com
              a borda leve, aerada e tostada do jeito que nenhum atalho
              entrega.
            </p>

            <p>
              E o dono está aqui. No salão, na frente do forno, nos vídeos
              respondendo pergunta de cliente e nas avaliações respondendo
              crítica. Pergunta boa ganha resposta. Crítica também.
            </p>

            <p>
              Fazemos eventos e temos congelados pra você levar a 1910 pra casa.
            </p>

            <blockquote className="about__quote">
              Temos 1910 motivos para responder essa avaliação, mas basta um:
              a verdade.
              <span>O dono, respondendo no Google</span>
            </blockquote>
          </motion.div>
        </div>

        <motion.img
          {...reveal}
          className="photo about__wide"
          src={photos.salao}
          alt="Salão da 1910 Pizzaria"
          loading="lazy"
        />
      </div>
    </section>
  );
}

const menu = [
  {
    name: "Entradas",
    desc: "Pra abrir a mesa sem cerimônia.",
    flavors: "Calzone de burrata com molho pesto",
    img: photos.calzone,
    alt: "Calzone cortado ao meio",
  },
  {
    name: "Pizzas salgadas",
    desc: "A maior parte do cardápio, com a fermentação natural no centro de tudo.",
    flavors: "Margherita, Burrata, Di Parma, Cogumelo, Quatro Queijos, Calabresa",
    img: photos.burrata,
    alt: "Pizza de burrata sobre a mesa de madeira",
  },
  {
    name: "Linha vegana",
    desc: "Linha própria e completa. Não é adaptação de última hora.",
    flavors: "Caipira, muçarela e pepperoni, todas em versão vegana",
    img: photos.zucchini,
    alt: "Pizza de abobrinha e cogumelos",
  },
  {
    name: "Pizzas doces",
    desc: "Porque ninguém vai embora sem sobremesa.",
    flavors: "Nutella, Oreo Dream, chocolate com morango",
    img: photos.nutella,
    alt: "Pizza doce de Nutella com amendoim",
  },
  {
    name: "Massas pré assadas e bebidas",
    desc: "Massa pronta pra montar em casa. E pra acompanhar, cervejas, vinho e drinks.",
    flavors: "Moscow Mule, gin tônica, Aperol e mais",
    img: photos.aperol,
    alt: "Drink de Aperol",
  },
];

export function Menu() {
  return (
    <section className="section menu" id="cardapio">
      <div className="container-site">
        <motion.div className="menu__head" {...reveal}>
          <p className="eyebrow">Cardápio</p>

          <h2 className="title-serif">
            Um pouco do que sai <em>do forno.</em>
          </h2>

          <p className="lead">
            Uma seleção. O cardápio completo a gente manda no WhatsApp.
          </p>
        </motion.div>

        <div className="menu__list">
          {menu.map((item, i) => (
            <motion.article
              className="menu__item"
              key={item.name}
              {...reveal}
            >
              <div className="menu__media">
                <img
                  className="photo"
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                />
              </div>

              <div>
                <span className="menu__num">0{i + 1}</span>
                <h3 className="menu__name">{item.name}</h3>
                <p className="menu__desc">{item.desc}</p>
                <p className="menu__flavors">{item.flavors}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="menu__note">
          <a
            className="btn btn-brick"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pedir o cardápio completo
          </a>
        </p>
      </div>
    </section>
  );
}

type Card =
  | {
      kind: "photo";
      img: string;
      alt: string;
      text?: string;
      who?: string;
    }
  | {
      kind: "text";
      text: string;
      who: string;
    };

const cards: Card[] = [
  {
    kind: "photo",
    img: photos.fatia,
    alt: "Fatia de pizza com queijo puxando",
    text: "Ingrediente bom, lugar bonito e aconchegante, drinks pra escolher e um preço que não assusta.",
    who: "Cliente no Google",
  },
  {
    kind: "text",
    text: "Uma das melhores pizzas napolitanas de fermentação natural que já comi na vida.",
    who: "Cliente no Google",
  },
  {
    kind: "photo",
    img: photos.mesa,
    alt: "Mesa com pizza margherita e sobremesas",
  },
  {
    kind: "photo",
    img: photos.burrataMao,
    alt: "Fatia de pizza de burrata",
    text: "Massa de crosta leve, entrega rápida com a pizza ainda quente, equipe atenciosa e preço justo.",
    who: "O que as avaliações repetem",
  },
  {
    kind: "photo",
    img: photos.mural,
    alt: "Mural de fotos na parede da pizzaria",
  },
  {
    kind: "photo",
    img: photos.brie,
    alt: "Pizza de brie e cogumelos com azeite",
  },
];

const angles = [-4, 3, -2, 5, -3, 2];

export function Reviews() {
  return (
    <section className="section reviews" id="avaliacoes">
      <div className="container-site">
        <motion.div className="reviews__head" {...reveal}>
          <p className="eyebrow">Avaliações</p>

          <div className="reviews__score">
            4,7
            <small>157 avaliações no Google</small>
          </div>

          <h2 className="title-serif">
            Quem come, <em>fala.</em>
          </h2>
        </motion.div>

        <div className="polaroids">
          {cards.map((c, i) => (
            <motion.figure
              key={i}
              className={
                c.kind === "text"
                  ? "polaroid polaroid--text"
                  : "polaroid"
              }
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: angles[i % angles.length] ?? 0,
              }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: (i % 3) * 0.08,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              whileHover={{ rotate: 0, scale: 1.02 }}
            >
              {c.kind === "photo" && (
                <img
                  src={c.img}
                  alt={c.alt}
                  loading="lazy"
                />
              )}

              {c.text && (
                <figcaption className="polaroid__caption">
                  {c.text}
                  <span>{c.who}</span>
                </figcaption>
              )}
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const hours: [string, string][] = [
  ["Segunda e terça", "Fechado"],
  ["Quarta e quinta", "18h às 22h30"],
  ["Sexta e sábado", "18h às 23h"],
  ["Domingo", "18h às 22h30"],
];

export function Visit() {
  return (
    <section className="section visit" id="visite">
      <div className="container-site visit__grid">
        <motion.div {...reveal}>
          <p className="eyebrow">Visite</p>

          <h2
            className="title-serif"
            style={{ marginTop: "0.75rem" }}
          >
            O forno acende <em>às 18h.</em>
          </h2>

          <p className="visit__address">
            R. João Pessoa, 965
            <br />
            Velha, Blumenau, SC
          </p>

          <table className="hours">
            <tbody>
              {hours.map(([d, h]) => (
                <tr
                  key={d}
                  className={h === "Fechado" ? "is-closed" : undefined}
                >
                  <td>{d}</td>
                  <td>{h}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="visit__price">
            Em média R$ 40 a R$ 60 por pessoa.
          </p>

          <div className="visit__actions">
            <a
              className="btn btn-brick"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Fazer reserva
            </a>

            <a
              className="btn btn-ghost-light"
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Como chegar
            </a>
          </div>
        </motion.div>

        <motion.img
          {...reveal}
          className="photo"
          src={photos.fachada}
          alt="Fachada da 1910 Pizzaria"
          loading="lazy"
        />
      </div>
    </section>
  );
}

const explore: [string, string][] = [
  ["Início", "#inicio"],
  ["Por que a 1910", "#por-que"],
  ["Salão e eventos", "#sobre"],
  ["Congelados", "#cardapio"],
  ["Contato", "#visite"],
];

export function Footer() {
  const toTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="site-footer">
      <div className="container-site">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="site-footer__name">
              <Wordmark />
            </div>

            <p>
              Fermentação natural e forno a lenha em Blumenau.
            </p>
          </div>

          <nav aria-label="Explore">
            <h3 className="footer__title">Explore</h3>

            <ul className="footer__links">
              {explore.map(([label, href]) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="footer__title">
              Encontre a 1910
            </h3>

            <address className="footer__address">
              R. João Pessoa, 965
              <br />
              Velha, Blumenau, SC
            </address>

            <a
              className="footer__map"
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Como chegar <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div>
            <h3 className="footer__title">
              Vamos conversar
            </h3>

            <div className="footer__social">
              <a
                className="footer__btn"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conversar no WhatsApp"
              >
                <WhatsAppIcon /> WhatsApp
              </a>

              <a
                className="footer__btn"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da 1910 Pizzaria"
              >
                <InstagramIcon /> Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © 2026 Pizzaria 1910. Todos os direitos reservados.
          </p>

          <button
            type="button"
            className="footer__top"
            onClick={toTop}
          >
            Voltar ao início <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export function MobileCta() {
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) {
          setHeroVisible(entry.isIntersecting);
        }
      },
      { threshold: 0 }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <a
      className={`wa-float${
        heroVisible ? " wa-float--hero-visible" : ""
      }`}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}
