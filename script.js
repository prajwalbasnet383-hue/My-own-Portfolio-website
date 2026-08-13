```css
/* =========================
   RESET
========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}


:root {

    --background: #07111f;

    --section: #0d1b2e;

    --card: #102239;

    --card-hover: #142b46;

    --primary: #38bdf8;

    --primary-dark: #0ea5e9;

    --white: #ffffff;

    --text: #cbd5e1;

    --muted: #8fa3b8;

    --border: #20364f;

}


/* =========================
   BODY
========================= */

body {

    font-family: "Inter", sans-serif;

    background: var(--background);

    color: var(--white);

    line-height: 1.6;

}


a {

    text-decoration: none;

    color: inherit;

}


button {

    font-family: inherit;

}


section {

    scroll-margin-top: 80px;

}


/* =========================
   NAVBAR
========================= */

header {

    position: fixed;

    top: 0;

    left: 0;

    width: 100%;

    z-index: 1000;

    background: rgba(7, 17, 31, 0.93);

    backdrop-filter: blur(15px);

    border-bottom: 1px solid var(--border);

}


.navbar {

    max-width: 1200px;

    height: 75px;

    margin: auto;

    padding: 0 25px;

    display: flex;

    align-items: center;

    justify-content: space-between;

}


.logo {

    font-size: 28px;

    font-weight: 800;

}


.logo span {

    color: var(--primary);

}


.nav-links {

    display: flex;

    gap: 30px;

    list-style: none;

}


.nav-links a {

    color: var(--text);

    font-size: 14px;

    transition: 0.3s;

}


.nav-links a:hover {

    color: var(--primary);

}


.menu-button {

    display: none;

    background: none;

    border: none;

    color: white;

    font-size: 25px;

    cursor: pointer;

}


/* =========================
   HERO
========================= */

.hero {

    min-height: 100vh;

    max-width: 1200px;

    margin: auto;

    padding: 130px 25px 70px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 60px;

}


.hero-content {

    flex: 1;

}


.hello {

    color: var(--primary);

    font-size: 14px;

    font-weight: 700;

    letter-spacing: 4px;

    margin-bottom: 15px;

}


.hero h1 {

    font-size: clamp(55px, 8vw, 90px);

    line-height: 1;

    margin-bottom: 20px;

}


.hero h2 {

    font-size: 32px;

    color: var(--text);

    margin-bottom: 20px;

}


.hero h2 span {

    color: var(--primary);

}


.hero-description {

    max-width: 650px;

    color: var(--muted);

    font-size: 17px;

    margin-bottom: 30px;

}


/* =========================
   BUTTONS
========================= */

.hero-buttons {

    display: flex;

    gap: 15px;

    flex-wrap: wrap;

}


.btn {

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 8px;

    padding: 13px 24px;

    border-radius: 8px;

    background: var(--primary);

    color: #03111c;

    font-weight: 700;

    border: 2px solid var(--primary);

    transition: 0.3s;

}


.btn:hover {

    transform: translateY(-3px);

    background: var(--primary-dark);

}


.btn-outline {

    background: transparent;

    color: var(--primary);

}


/* =========================
   SOCIAL LINKS
========================= */

.social-links {

    display: flex;

    gap: 15px;

    margin-top: 30px;

}


.social-links a {

    width: 42px;

    height: 42px;

    display: flex;

    align-items: center;

    justify-content: center;

    border: 1px solid var(--border);

    border-radius: 50%;

    color: var(--text);

    transition: 0.3s;

}


.social-links a:hover {

    color: var(--primary);

    border-color: var(--primary);

    transform: translateY(-3px);

}


/* =========================
   PROFILE
========================= */

.hero-image {

    flex: 0 0 350px;

}


.profile-circle {

    width: 330px;

    height: 330px;

    margin: auto;

    padding: 8px;

    border-radius: 50%;

    border: 3px solid var(--primary);

    overflow: hidden;

}


.profile-circle img {

    width: 100%;

    height: 100%;

    object-fit: cover;

    border-radius: 50%;

}


/* =========================
   SECTIONS
========================= */

.section {

    padding: 100px 25px;

}


.section-dark {

    background: var(--section);

}


.container {

    max-width: 1200px;

    margin: auto;

}


.section-title {

    text-align: center;

    margin-bottom: 60px;

}


.section-title p {

    color: var(--primary);

    font-size: 13px;

    font-weight: 700;

    letter-spacing: 3px;

}


.section-title h2 {

    font-size: 42px;

    margin-top: 5px;

}


/* =========================
   ABOUT
========================= */

.about-container {

    display: grid;

    grid-template-columns: 1fr 1.2fr;

    gap: 70px;

    align-items: center;

}


.about-image img {

    width: 100%;

    max-width: 400px;

    height: 380px;

    object-fit: cover;

    border-radius: 20px;

    border: 1px solid var(--border);

    margin: auto;

}


.about-content h3 {

    font-size: 30px;

    margin-bottom: 20px;

}


.about-content p {

    color: var(--muted);

    margin-bottom: 18px;

}


.personal-info {

    margin-top: 25px;

}


.personal-info div {

    display: flex;

    gap: 15px;

    margin: 10px 0;

}


.personal-info strong {

    min-width: 100px;

}


.personal-info span {

    color: var(--muted);

}


/* =========================
   SKILLS
========================= */

.skills-container {

    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 22px;

}


.skill-card {

    padding: 30px 25px;

    background: var(--card);

    border: 1px solid var(--border);

    border-radius: 12px;

    transition: 0.3s;

}


.skill-card:hover {

    transform: translateY(-8px);

    border-color: var(--primary);

    background: var(--card-hover);

}


.skill-card i {

    font-size: 40px;

    color: var(--primary);

    margin-bottom: 15px;

}


.skill-card h3 {

    margin-bottom: 8px;

}


.skill-card p {

    color: var(--muted);

    font-size: 14px;

}


/* =========================
   PROJECTS
========================= */

.projects-container {

    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 25px;

}


.project-card {

    background: var(--card);

    border: 1px solid var(--border);

    border-radius: 14px;

    overflow: hidden;

    transition: 0.3s;

}


.project-card:hover {

    transform: translateY(-8px);

    border-color: var(--primary);

}


.project-icon {

    height: 170px;

    display: flex;

    align-items: center;

    justify-content: center;

    background: #142941;

}


.project-icon i {

    font-size: 65px;

    color: var(--primary);

}


.project-content {

    padding: 25px;

}


.project-content h3 {

    margin-bottom: 12px;

}


.project-content p {

    color: var(--muted);

    font-size: 14px;

    margin-bottom: 15px;

}


.project-tags {

    display: flex;

    flex-wrap: wrap;

    gap: 7px;

    margin-bottom: 20px;

}


.project-tags span {

    background: #1a3048;

    color: var(--primary);

    padding: 5px 9px;

    border-radius: 5px;

    font-size: 12px;

}


.project-link {

    color: var(--primary);

    font-weight: 700;

}


/* =========================
   EDUCATION
========================= */

.timeline {

    max-width: 800px;

    margin: auto;

    position: relative;

}


.timeline::before {

    content: "";

    position: absolute;

    left: 10px;

    top: 0;

    bottom: 0;

    width: 2px;

    background: var(--primary);

}


.timeline-item {

    position: relative;

    padding-left: 50px;

    margin-bottom: 40px;

}


.timeline-dot {

    position: absolute;

    left: 0;

    top: 5px;

    width: 22px;

    height: 22px;

    border-radius: 50%;

    background: var(--primary);

    border: 5px solid var(--background);

}


.timeline-content {

    padding: 25px;

    background: var(--card);

    border: 1px solid var(--border);

    border-radius: 10px;

}


.timeline-content span {

    color: var(--primary);

    font-size: 13px;

    font-weight: 700;

}


.timeline-content h3 {

    margin: 5px 0;

}


.timeline-content p {

    color: var(--muted);

}


/* =========================
   CONTACT
========================= */

.contact-container {

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 70px;

}


.contact-info h3 {

    font-size: 30px;

    margin-bottom: 15px;

}


.contact-info > p {

    color: var(--muted);

    margin-bottom: 30px;

}


.contact-item {

    display: flex;

    align-items: center;

    gap: 18px;

    margin: 20px 0;

}


.contact-item i {

    width: 45px;

    height: 45px;

    display: flex;

    align-items: center;

    justify-content: center;

    color: var(--primary);

    border: 1px solid var(--border);

    border-radius: 8px;

}


.contact-item p {

    color: var(--muted);

}


/* =========================
   FORM
========================= */

form {

    display: flex;

    flex-direction: column;

    gap: 15px;

}


input,
textarea {

    width: 100%;

    padding: 15px;

    background: var(--card);

    border: 1px solid var(--border);

    border-radius: 8px;

    color: white;

    font-family: inherit;

    outline: none;

}


input:focus,
textarea:focus {

    border-color: var(--primary);

}


textarea {

    resize: vertical;

}


form button {

    border: none;

    cursor: pointer;

    width: fit-content;

}


/* =========================
   FOOTER
========================= */

footer {

    padding: 50px 25px;

    background: #040a13;

    text-align: center;

    border-top: 1px solid var(--border);

}


footer h2 {

    font-size: 30px;

}


footer h2 span {

    color: var(--primary);

}


footer p {

    color: var(--muted);

    margin: 8px 0;

}


.footer-social {

    display: flex;

    justify-content: center;

    gap: 18px;

    margin: 20px 0;

}


.footer-social a {

    font-size: 20px;

}


.footer-social a:hover {

    color: var(--primary);

}


.copyright {

    font-size: 12px;

}


/* =========================
   SCROLL TOP BUTTON
========================= */

#topButton {

    position: fixed;

    right: 25px;

    bottom: 25px;

    width: 45px;

    height: 45px;

    display: none;

    align-items: center;

    justify-content: center;

    border: none;

    border-radius: 50%;

    background: var(--primary);

    color: #03111c;

    cursor: pointer;

}


/* =========================
   TABLET
========================= */

@media (max-width: 850px) {

    .menu-button {

        display: block;

    }


    .nav-links {

        position: absolute;

        top: 75px;

        left: 0;

        width: 100%;

        display: none;

        flex-direction: column;

        padding: 25px;

        text-align: center;

        background: var(--background);

        border-bottom: 1px solid var(--border);

    }


    .nav-links.active {

        display: flex;

    }


    .hero {

        flex-direction: column-reverse;

        text-align: center;

    }


    .hero-image {

        flex: none;

    }


    .profile-circle {

        width: 250px;

        height: 250px;

    }


    .hero h1 {

        font-size: 60px;

    }


    .hero h2 {

        font-size: 25px;

    }


    .hero-buttons {

        justify-content: center;

    }


    .social-links {

        justify-content: center;

    }


    .about-container {

        grid-template-columns: 1fr;

    }


    .skills-container,
    .projects-container {

        grid-template-columns: repeat(2, 1fr);

    }


    .contact-container {

        grid-template-columns: 1fr;

    }

}


/* =========================
   MOBILE
========================= */

@media (max-width: 550px) {

    .section {

        padding: 75px 20px;

    }


    .hero {

        padding-left: 20px;

        padding-right: 20px;

    }


    .hero h1 {

        font-size: 50px;

    }


    .hero h2 {

        font-size: 22px;

    }


    .hero-description {

        font-size: 15px;

    }


    .hero-buttons {

        flex-direction: column;

    }


    .btn {

        width: 100%;

    }


    .skills-container,
    .projects-container {

        grid-template-columns: 1fr;

    }


    .section-title h2 {

        font-size: 34px;

    }


    .about-image img {

        height: 280px;

    }

}
```
