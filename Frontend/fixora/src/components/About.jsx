import WhyChooseFixora from './WhyChooseFixora';

const About = () => {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <span className="about-badge">
          ✦ ABOUT FIXORA
        </span>

        <h1>
          Making Everyday Fixes
          <br />
          <span>Simple & Reliable</span>
        </h1>

        <p>
          FIXORA helps people find the right professionals for their
          everyday problems. From home repairs to essential services,
          we aim to make finding help easier and more convenient.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="about-content-grid">
        <article className="about-content">
          <div className="about-icon">🎯</div>

          <h2>Our Mission</h2>

          <p>
            Our mission is to simplify the process of finding local
            service professionals. We want to make everyday repairs
            and home services easier to discover and access.
          </p>
        </article>

        <article className="about-content">
          <div className="about-icon">🚀</div>

          <h2>Our Vision</h2>

          <p>
            We envision a platform where customers can discover
            suitable service providers with confidence and where
            skilled professionals can connect with more customers.
          </p>
        </article>
      </section>

      {/* Why Choose Fixora */}
      <section className="about-why-section">
        <div className="about-section-heading">
          <span className="about-small-title">
            WHY FIXORA?
          </span>

          <h2>
            Why Choose <span>FIXORA?</span>
          </h2>

          <p>
            Designed to make finding everyday services simpler.
          </p>
        </div>

        <WhyChooseFixora />
      </section>

      {/* Closing Section */}
      <section className="about-cta">
        <h2>Let's Make Things Easier Together.</h2>

        <p>
          Find the service you need. Connect with the right professional.
        </p>
      </section>
    </main>
  );
};

export default About;