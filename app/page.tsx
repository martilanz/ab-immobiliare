import SimpleMap from "@/components/Map";
import GoogleReviewsSection from "@/components/Reviews";
import {
  HiOutlineHomeModern,
  HiOutlineDocumentCheck,
  HiOutlineMegaphone,
  HiOutlineCalculator,
  HiOutlineScale,
} from "react-icons/hi2";

const properties = [
  {
    id: 1,
    title: "Villa Moderna con Giardino",
    location: "Torino, Collina",
    price: "€ 890.000",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Attico di Pregio in Centro",
    location: "Milano, Brera",
    price: "€ 1.250.000",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Appartamento Luminoso",
    location: "Roma, Parioli",
    price: "€ 540.000",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
  },
];

const services = [
  {
    id: 1,
    title: "VALUTAZIONE GRATUITA",
    text: "Analisi accurata del valore dell’immobile in base a zona, stato e andamento del mercato.",
    icon: <HiOutlineHomeModern />,
  },
  {
    id: 2,
    title: "CONTROLLI COMUNALI",
    text: "Verifica documentale e urbanistica per una compravendita più sicura e trasparente.",
    icon: <HiOutlineDocumentCheck />,
  },
  {
    id: 3,
    title: "PUBBLICITA’",
    text: "Promozione dell’immobile con presentazione curata e visibilità sui canali principali.",
    icon: <HiOutlineMegaphone />,
  },
  {
    id: 4,
    title: "ASSISTENZA FINANZIARIA",
    text: "Supporto nella ricerca della soluzione economica più adatta alle esigenze del cliente.",
    icon: <HiOutlineCalculator />,
  },
  {
    id: 5,
    title: "NOTAIO",
    text: "Affiancamento fino al rogito con professionisti qualificati in ogni fase finale.",
    icon: <HiOutlineScale />,
  },
];

export default function HomePage() {
  let buttonHeroText = "scopri di più";
  let welcomeText = "benvenuti";

  return (
    <main>
      <header className="hero">
      <video
        className="heroVideo"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-fallback.jpg"
      >
        <source src="/videos/torino.mp4" type="video/mp4" />
      </video>

        <div className="heroOverlay" />

        <section className="heroContent container">
          <h1>{welcomeText.toUpperCase()}</h1>
          <img
            src="/images/ab_scontornato.png"
            alt="AB Immobiliare"
            className="heroLogo"
          />
          <a href="#about" className="heroScroll" aria-label="Vai alla sezione Chi sono">
            <span className="heroScrollMouse">
              <span className="heroScrollWheel"></span>
            </span>
            <span className="heroScrollArrow">↓</span>
          </a>
        </section>
      </header>

      <section id="about" className="section aboutSection">
        <div className="container aboutWrapper">
          {/* <div className="aboutImageBox">
            <img
              src="/images/bea_4.png"
              alt="Consulente immobiliare"
              className="aboutImage"
            />
          </div> */}

          <div className="aboutContent">
            {/* <p className="sectionLabel">Chi sono</p> */}

            <h2 className="aboutTitle creamCake">
              Il tuo obiettivo è vendere.
              <br />
              Il mio è farlo al meglio.
            </h2>

            <hr className="aboutDivider" />

            <p className="aboutText">
              Con una solida conoscenza del mercato immobiliare di Torino e della sua
              provincia, offro consulenze personalizzate per accompagnare ogni cliente
              nelle scelte più importanti legate alla propria casa.
            </p>

            <p className="aboutText">
              Vendere, acquistare o affittare un immobile è una decisione importante.
              Per questo lavoro con attenzione, trasparenza e professionalità,
              affiancando il cliente in ogni fase del percorso e mettendo sempre le
              sue esigenze al centro della trattativa.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="section servicesSection">
        <div className="container">
          <div className="sectionHeading servicesHeading">
            <div>
              <p className="sectionLabel">Servizi</p>
              <h2>Servizi pensati per accompagnarti in ogni fase</h2>
            </div>
            <p className="muted maxText">
              Un supporto concreto, chiaro e professionale per affrontare ogni
              passaggio della compravendita con maggiore serenità.
            </p>
          </div>

          <div className="servicesGrid">
            {services.map((service) => (
              <article key={service.id} className="serviceCardCompact">
                <div className="serviceIcon">{service.icon}</div>
                <div className="serviceContent">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


<GoogleReviewsSection></GoogleReviewsSection>

{/* 
      <section id="contact" className="section container contactBox">
        <div>
          <p className="sectionLabel">Contatti</p>
          <h2>Parliamo del tuo prossimo immobile</h2>
          <p className="muted">
            Che tu voglia vendere, acquistare o valorizzare una proprietà,
            possiamo costruire insieme il percorso più adatto.
          </p>
        </div>

        <form className="contactForm">
          <input type="text" placeholder="Nome e cognome" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Descrivi la tua richiesta" rows={5} />
          <button type="submit" className="btn btnPrimary">
            Invia richiesta
          </button>
        </form>
      </section> */}
    </main>
  );
}