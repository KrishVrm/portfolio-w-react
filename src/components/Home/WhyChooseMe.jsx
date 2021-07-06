import React from 'react'


export const WhyChooseMe = () => {
    return (
        <main className='testimonial'>
            <section className="title-container">
                <h1 className="headings headings_secondary">Why Choose Me?</h1>
                <p className="light-content">Here are some facts that you may like about me.</p>
            </section>

            <section className="cards_container">
                <figure className="card">
                    <section className="card_image img1"></section>
                    <h1 className="headings_tertiary headings">Quality</h1>
                    <p className="light-content">It saves you time and money when you know it will be done right the first time!</p>
                </figure>

                <figure className="card"> 
                    <section className="card_image img2"></section>
                    <h1 className="headings_tertiary headings">Teamwork</h1>
                    <p className="light-content">Development is most satisfying when I can collaborate with you as a long-term partner</p>
                </figure>

                <figure className="card">
                    <section className="card_image img3"></section>
                    <h1 className="headings_tertiary headings">Reliability</h1>
                    <p className="light-content">I love helping my clients look good for their clients by always delivering on time.</p>
                </figure>
            </section>
        </main>
    )
}
