            R. João Pessoa, 965
            <br />
            Velha, Blumenau, SC
          </p>
          <table className="hours">
            <tbody>
              {hours.map(([d, h]) => (
                <tr key={d} className={h === "Fechado" ? "is-closed" : undefined}>
                  <td>{d}</td>
                  <td>{h}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="visit__price">Em média R$ 40 a R$ 60 por pessoa.</p>
          <div className="visit__actions">
            <a className="btn btn-brick" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Fazer reserva
            </a>
            <a className="btn btn-ghost-light" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              Como chegar
            </a>
          </div>
        </motion.div>
        <motion.img {...reveal} className="photo" src={photos.fachada} alt="Fachada da 1910 Pizzaria" loading="lazy" />
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
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer className="site-footer">
      <div className="container-site">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="site-footer__name"><Wordmark /></div>
            <p>Fermentação natural e forno a lenha em Blumenau.</p>
          </div>
          <nav aria-label="Explore">
            <h3 className="footer__title">Explore</h3>
            <ul className="footer__links">
              {explore.map(([label, href]) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="footer__title">Encontre a 1910</h3>
            <address className="footer__address">
              R. João Pessoa, 965
              <br />
              Velha, Blumenau, SC
            </address>
            <a className="footer__map" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              Como chegar <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div>
            <h3 className="footer__title">Vamos conversar</h3>
            <div className="footer__social">
              <a className="footer__btn" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Conversar no WhatsApp">
                <WhatsAppIcon /> WhatsApp
              </a>
              <a className="footer__btn" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram da 1910 Pizzaria">
                <InstagramIcon /> Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© 2026 Pizzaria 1910. Todos os direitos reservados.</p>
          <button type="button" className="footer__top" onClick={toTop}>
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
      ([entry]) => { if (entry) setHeroVisible(entry.isIntersecting); },
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      className={`wa-float${heroVisible ? " wa-float--hero-visible" : ""}`}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}
