export default function About() {
    return (

    <main className="aboutPage">
      <section className="section aboutPageIntro">
        <div className="container aboutPageGrid">
          <div className="aboutPageImageBox">
            <img
              src="/images/bea_5.jpeg"
              alt="Consulente immobiliare"
              className="aboutPageImage"
            />
          </div>

          <div className="aboutPageContent">
            {/* <p className="sectionLabel">Il mio approccio</p> */}
                          <p className="sectionLabel">Chi sono</p>

            <h2>
                Beatrice Arbarello
            </h2>
            <hr className="aboutPageDivider" />

           <p>
    Sono Beatrice Arbarello, nata a Torino nel 2000 e cresciuta in una famiglia
    di venditori. Fin da giovane ho sviluppato una naturale predisposizione per
    il contatto con le persone e per il mondo della vendita.
  </p> <p>
    Nel 2021 ho intrapreso il mio percorso nel <b>settore immobiliare</b>, iniziando a
    lavorare presso <b>Liberty Case</b> a <b>Orbassano</b>. Dopo una prima esperienza nel
    settore degli affitti, ho ampliato progressivamente la mia attività anche
    alle compravendite, seguendo i clienti in tutte le fasi della trattativa.
  </p>

  <p>
    Credo in un approccio basato su <b>trasparenza</b>, <b>disponibilità</b> e
    <b>professionalità</b>, valori fondamentali per affrontare con serenità uno dei
    momenti più importanti nella vita di una persona.
  </p>

  <p>
    In un mercato ricco di offerte, ritengo che la vera differenza stia nella
    capacità di ascoltare il cliente, comprenderne le esigenze e accompagnarlo
    con attenzione fino al risultato finale.
  </p>

          </div>
        </div>
      </section>

      <section className="section aboutStrengthSection">
        <div className="container">
          <div className="sectionHeading aboutStrengthHeading">
            <div>
              <p className="sectionLabel">Valori</p>
              <h2>Tre elementi che guidano il mio lavoro</h2>
            </div>
            <p className="muted maxText">
              Un metodo basato sull’ ascolto, sulla competenza e su un supporto
              costante in tutte le fasi della compravendita.
            </p>
          </div>

          <div className="aboutStrengthGrid">
            <article className="aboutStrengthCard">
              <span className="aboutStrengthNumber">01</span>
              <h3>Ascolto</h3>
              <p>
                Ogni esigenza viene analizzata con attenzione per costruire una
                strategia realmente adatta alla persona e all’immobile.
              </p>
            </article>

            <article className="aboutStrengthCard">
              <span className="aboutStrengthNumber">02</span>
              <h3>Competenza</h3>
              <p>
                La conoscenza del mercato locale e dei processi immobiliari mi
                permette di offrire indicazioni chiare, affidabili e concrete.
              </p>
            </article>

            <article className="aboutStrengthCard">
              <span className="aboutStrengthNumber">03</span>
              <h3>Affiancamento</h3>
              <p>
                Dal primo incontro fino alla conclusione della trattativa,
                accompagno il cliente con presenza costante e massima
                trasparenza.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  
    )
}