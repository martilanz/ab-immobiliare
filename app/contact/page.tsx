import SimpleMap from "@/components/Map";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaHome, FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactPage() {
    return (
        <main className="contactPage">

            <section className="section contactInfoSection">

                <div className="contactContent">            <img
                    src="/images/ab_scontornato_black.png"
                    alt="AB Immobiliare"
                    className="heroLogo"
                /></div>

                <div className="container">
                    <div className="sectionHeading servicesHeading">
                        <div>
                            <p className="sectionLabel">Contatti</p>
                            <h2>Rimaniamo in contatto</h2>
                        </div>
                        <p className="muted maxText">
                            Sono a tua disposizione per aiutarti nella vendita, nell’acquisto o
                            nella valorizzazione del tuo immobile.
                        </p>
                    </div>
                </div>

                <div className="container contactGrid">
                    <div className="contactCard">

                        <div className="contactInfo">
                            <div className="contactInfoItem">
                                <div className="contactIcon">
                                    <FaHome />
                                </div>

                                <div className="contactInfoText">
                                    <p className="sectionLabel">Indirizzo</p>
                                    <p>Via Vittorio Alfieri 8, Orbassano (TO)</p>
                                </div>
                            </div>
                        </div>

                        <div className="contactInfo">
                            <div className="contactInfoItem">
                                <div className="contactIcon">
                                    <FaEnvelope />
                                </div>

                                <div className="contactInfoText">
                                    <p className="sectionLabel">Email</p>
                                    <a href="mailto:info@libertycase.it" className="glowLink">info@libertycase.it</a>

                                </div>
                            </div>
                        </div>

                        <div className="contactInfo">
                            <div className="contactInfoItem">
                                <div className="contactIcon">
                                    <FaPhone />
                                </div>

                                <div className="contactInfoText">
                                    <p className="sectionLabel">Telefono</p>
                                    <a href="tel:+393939892078" className="glowLink"
                                    >+39 393 9892078</a>
                                    <a href="tel:+390119005113" className="glowLink"
                                    >+39 011 9005113</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>

                        {/* <form className="contactForm">
                            <input type="text" placeholder="Nome e cognome" />
                            <input type="email" placeholder="Email" />
                            <textarea placeholder="Descrivi la tua richiesta" rows={5} />
                            <button type="submit" className="btn btnPrimary">
                                Invia richiesta
                            </button>
                        </form> */}

                        <div className="contactCard">
                            <div className="contactInfo">
                                <div className="contactInfoItem">
                                    <div className="contactIcon">
                                        <FaWhatsapp />
                                    </div>

                                    <div className="contactInfoText">
                                        <p className="sectionLabel">WhatsApp</p>
                                        <a
                                            href="https://wa.me/393331234567"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Scrivici su WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="contactInfo">
                                <div className="contactInfoItem">
                                    <div className="contactIcon">
                                        <FaInstagram />
                                    </div>

                                    <div className="contactInfoText">
                                        <p className="sectionLabel">Instagram</p>
                                        <a
                                            href="https://www.instagram.com/libertycaseorbassano/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            @libertycaseorbassano
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="contactInfo">
                                <div className="contactInfoItem">
                                    <div className="contactIcon">
                                        <FaFacebookF />
                                    </div>

                                    <div className="contactInfoText">
                                        <p className="sectionLabel">Facebook</p>
                                        <a
                                            href="https://www.facebook.com/libertycaseorbassano/?locale=it_IT"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Liberty Case Immobiliare
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            <section className="section mapSection">
                <div className="container">
                    <div className="contactMapBox">
                        <SimpleMap />
                    </div>
                </div>
            </section>
        </main>
    );
}