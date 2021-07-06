import React from 'react';
import { ProjectCards } from './ProjectCards';

export const ProjectsPage = () => {
    document.title = 'Portfolio - Projects';
    return (
        <main className="projects-section">
            <section className="title-container">
                <h1 className="headings headings_primary">My Work (Under Development)</h1>
                <p className="light-content">This is a list of my projects I have done so far.</p>
            </section>

        <main className='projects-container-1'>
            <h1 className="headings headings_secondary">Challenges from <a href="https://www.frontendmentor.io/challenges" target='_blank'>FrontendMentor</a></h1>

            <section className="project-cards-container">
                <ProjectCards/>
                <ProjectCards/>
                <ProjectCards/>
                <ProjectCards/>
            </section>
        </main>

        <main className='projects-container-2'>
            <h1 className="headings headings_secondary">Clones</h1>

            <section className="project-cards-container">
                <ProjectCards/>
                <ProjectCards/>
                <ProjectCards/>
            </section>
        </main>
        </main>
    )
}
