import { FaStar, FaGoogle } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Walter L.",
text: "Ormai ci conosciamo da un pò di anni e abbiamo avuto modo di usufruire dei loro servizi più volte e sempre con piena soddisfazione. Sono persone appassionate al loro lavoro, competenti e alla ricerca della piena soddisfazione dei clienti.Anche quest’ultima operazione si è svolta con la consueta professionalità guidandoci passo passo fino alla sua perfetta conclusione. Altamente consigliate"  ,  
rating: 5,
  },
  {
    id: 2,
    name: "Cristian G.",
    text: "Vi auguro di poter aver a che fare con Beatrice, Raffaella e Valentina. Ho concluso l’acquisto di una casa due settimane fa tramite il loro aiuto, e in questi ultimi mesi mi hanno sempre mostrato professionalità, gentilezza e disponibilità, seguendomi dall’inizio della trattativa fino alla stipula dell’atto e oltre! Una menzione d’onore per Beatrice che è stata splendida nel supportare ogni singolo bisogno e dubbio sempre in modo eccellente e premuroso. Consiglio vivamente di affidarvi a loro!",
    rating: 5,
  },
  {
    id: 3,
    name: "Massimo S.",
    text: "Negli ultimi anni Liberty case mi ha aiutato con una compravendita e con un affitto, mi sono trovato molto bene, mi sono venuti in contro su tutto e mi hanno supportato nelle difficoltà. Assolutamente consigliati.",
    rating: 5,
  },
];

export default function GoogleReviewsSection() {
  return (
    <section className="section reviewsSection">
      <div className="container">
        <div className="sectionHeading reviewsHeading">
          <div>
            <p className="sectionLabel">Recensioni</p>
            <h2>Cosa dicono i clienti</h2>
          </div>

          <div className="reviewsSummary">
            <div className="reviewsSummaryTop">
              <FaGoogle className="reviewsGoogleIcon" />
              <span className="reviewsScore">5.0</span>
            </div>

            <div className="reviewsStars" aria-label="Valutazione 4,6 su 5">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="reviewsCount">Basato su recensioni Google</p>
          </div>
        </div>

        <div className="reviewsGrid">
          {reviews.map((review) => (
            <article key={review.id} className="reviewCard">
              <div className="reviewCardTop">
                <div className="reviewAvatar">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h3>{review.name}</h3>
                  <div className="reviewStars">
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>
                </div>
              </div>

              <p className="reviewText">“{review.text}”</p>
            </article>
          ))}
        </div>

        <div className="reviewsCta">
          <a
            href="https://www.google.com/search?sa=X&sca_esv=dfbdd65afbf56d41&sxsrf=ANbL-n6_TFYVRKyXgAOaEiB0zFlSXBfTpA:1777294830654&q=Liberty+Case+Immobiliare+Recensioni&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxK2NDc1tDQ1M7A0MDIxMzYzMjM13MDI-IpR2SczKbWopFLBObE4VcEzNzc_KTMnM7EoVSEoNTk1rzgzPy9zESsxqgBQaMFWZgAAAA&rldimm=9751956090246362651&tbm=lcl&hl=it-IT&ved=2ahUKEwjI9KqYi46UAxVi5AIHHYocJe8Q9fQKegQIUBAG&biw=2400&bih=1181&dpr=0.8#lkt=LocalPoiReviews"
            target="_blank"
            rel="noreferrer"
            className="btn btnPrimary"
          >
            Lascia una recensione
          </a>
        </div>
      </div>
    </section>
  );
}