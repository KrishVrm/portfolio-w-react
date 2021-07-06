export const Slider = () => {
  return (
      <main className="slider-section">
        <section className="title-container">
          <h1 className="headings headings_secondary">Skills and Experience</h1>
          <p className="light-content">These are the tools and languages I work with.</p>
        </section>
    
      <section className="slider">
          <figure className='slide' id='slide-3'></figure>
          <figure className='slide' id='slide-1'></figure>
          <figure className='slide' id='slide-5'></figure>
          {/* <figure className="slide" id='slide-8'></figure> */}
          <figure className='slide' id='slide-7'></figure>
          <figure className='slide' id='slide-2'></figure>
          <figure className='slide' id='slide-4'></figure>
          {/* <figure className='slide' id='slide-6'></figure> */}
      </section>
      </main>
  );
};