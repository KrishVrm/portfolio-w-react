import React from 'react'
import { AiFillInstagram } from 'react-icons/ai';
import { SiFiverr } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';

export const ContactPage = () => {
    document.title = 'Portfolio - Contact Me';
    const iconStyles = {
        height: 'auto',
        width: '3em'
    }
    return (
        <main className='contactPage-container'>
            
            <section className="title_container">
                <h1 className="headings headings_primary">Contact Me</h1>
                <p className="light-content">It seems like you are starting to like me. Lets have a chat!</p>
            </section>

            <section className="form-bigContainer">
                <form className='form-container'>
                    <h1 className='headings headings_secondary'>Send me an email</h1>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" name="" placeholder='Enter your email' id="email" className='primary-input'/>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name=""  placeholder='Enter your full name' className='primary-input' id="name"/>
                    <label htmlFor="message">Your Message</label>
                    <textarea name="" id="message" placeholder='Enter your message'></textarea>
                    <button className='primary-btn' type="submit" onClick={e=>e.preventDefault()}>Send</button>
                </form>

                <figure className="between-line"></figure>

                <section className="social-media-icons-container">
                    <h1 className='headings headings_secondary'>Get me here</h1>
                    <section className="social-media-icons">
                        <a href='https://www.instagram.com/potatodukee/' target='_blank'><figure className='ico'><AiFillInstagram style={iconStyles}/></figure></a>
                        <a href='https://www.fiverr.com/krishvrm?up_rollout=true' target='_blank'><figure className='ico'><SiFiverr style={iconStyles}/></figure></a>
                        <a href='https://github.com/KrishVrm' target='_blank'><figure className='ico'><SiGithub style={iconStyles}/></figure></a>
                    </section>
                </section>

            </section>
        </main>
    )
}
