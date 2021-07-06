import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const LikeMe = () => {
    return (
        <section className='likeMe'>
            <section className="left">
                <h1 className="headings headings_secondary">Impressed? Let's become friends!</h1>
                <Link to='/contact'>
                    <button onClick={e=>window.scrollTo(0, 0)} className="cta">Contact Me</button>
                </Link>
            </section>

            <section className="right">
                <h1 className="headings headings_secondary">Did not like me? View some of my projects!</h1>
                <Link to='/Projects'>
                    <button onClick={e=>window.scrollTo(0, 0)} className="cta">View Projects</button>
                </Link>
            </section>
        </section>
    )
}
