import React from 'react'


export const BlogPage = () => {
    document.title = 'Portfolio - Blog';
    return (
        <main className='blog-page'>
            <h1 className="headings headings_primary">My Blog (Under Development)</h1>
            <section className="blog-container">
                <section className="blog-content">
                    <h1 className='headings headings_secondary'>Blog Title</h1>
                    <p className="light-content">Blog content goes here. This is a dummy blog. I will be uploading blogs soon! Hope you will like them.</p>
                </section>
                <figure className="blog-pic"></figure>
            </section>
        </main>
    )
}
