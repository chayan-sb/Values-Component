
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from './card';
import './ValuesSection.css';

const ValuesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: false,    
    });
  }, []);

  const values = [
    {
      icon: 'logo.svg', 
      title: 'Excellence',
      description: 'We are dedicated to delivering the best quality in every project.',
    },
    {
      icon: 'logo.svg',
      title: 'Integrity',
      description: 'We hold ourselves to the highest ethical standards.',
    },
    {
      icon: 'logo.svg',
      title: 'Sustainability',
      description: 'We prioritize eco-friendly practices for a smaller carbon footprint.',
    },
    {
      icon: 'logo.svg',
      title: 'Innovation',
      description: 'We embrace innovation as a means to improve and evolve.',
    },
  ];

  return (
    <section className="values-section">
      <h1 data-aos="fade-right">Our Values Are Not Just Words; They Are The Driving Force Behind Our Commitment To Our Clients, Our Team, And The Community We Serve.</h1>

      <div className="values-container">
        <div className="image-container" data-aos="fade-left">
          <img src="image.png" alt="Worker on construction site" />
        </div>

        <div className="cards-grid" data-aos="fade-left">
          {values.map((value, index) => (
            <Card key={index} icon={value.icon} title={value.title} description={value.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
