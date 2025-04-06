export default function Footer() {

    const currentYear = new Date().getFullYear();

    const sections = [
        {
            title: "Nos reseaux",
            iconOnly: true,
            links: [
                { name: "Facebook", url: "https://www.facebook.com/louisbrailleesbly/" },
                { name: "Twitter_X", url: "https://x.com/collegelbesbly" },
            ]
        },
        {
            title: "Informations",
            iconOnly: false,
            links: [
                { name: "Mentions légales", url: "/mentions-legales" },
                { name: "Politique de confidentialité", url: "/politique-de-confidentialite" },
                { name: "Site du collège", url: "/plan-du-site" },
                { name: "Fiche du collège", url: "https://www.education.gouv.fr/annuaire/77450/esbly/college/0771361l/college-louis-braille.html" },
            ]
        },
        {
            title: "Contact",
            iconOnly: false,
            links: [
                { name: "Adresse de l'évènement",blank: true, url: "https://www.google.com/maps/place/Middle+School+Louis+Braille/@48.8965192,2.8051504,17z/data=!3m1!4b1!4m6!3m5!1s0x47e61d97445f427b:0x7545200b47346b3!8m2!3d48.8965192!4d2.8051504!16s%2Fg%2F1th27pxs?hl=en&entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D" },
                { name: "Date", url: "/contact" },
            ]
        }
    ]

    return (
        <footer className="footer">
            <section>
                {sections.map((section, index) => (
                    <div key={index} className="footer-section">
                        <h3>{section.title}</h3>
                        <ul className={section.iconOnly ? "footer-icons" : "footer-links"}>
                            {section.links.map((link, linkIndex) => {

                                const logoName = link.name.toLowerCase().replace(/\s/g, "_");
                                const logoSrc = `/assets/${logoName}_logo.svg`;

                                return (
                                    <li key={linkIndex}>
                                        <a
                                            href={link.url}
                                            {...(link.blank ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                        >
                                            {section.iconOnly ? (
                                                <img
                                                    src={logoSrc}
                                                    alt={link.name}
                                                    className="social-icon"
                                                    width={24}
                                                    height={24}
                                                />
                                            ) : (
                                                link.name
                                            )}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </section>
            <hr />
            <small>
                © {currentYear}&nbsp;
                <a href="https://www.education.gouv.fr/annuaire/77450/esbly/college/0771361l/college-louis-braille.html" >
                Collège Louis Braille
                </a> - Tous droits réservés - Création&nbsp;
                <a href="https://www.jsankare.dev/" >
                    Jordan Sankare
                </a>
            </small>
        </footer>
    );
}
