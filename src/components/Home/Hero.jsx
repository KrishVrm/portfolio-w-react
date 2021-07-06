import { Link } from "react-router-dom";

export const Hero = () => {
    return (
        <>
            <main className="hero">
                <section className="hero_left">
                <h1 className="headings headings_primary">Websites made perfect</h1>
                <p className="light-content">My name is Duke. I’m a designer/frontend developer living in India, Asia. If you are a business seeking a web presence or an employer looking to hire, you can get in touch with me here.</p>
                <Link to='/contact'>
                    <button onClick={e=>window.scrollTo(0, 0)} className="cta">Contact Me</button>
                </Link>
                </section>
                <section className="hero_image"></section>
            </main>

        </>
    )
}
