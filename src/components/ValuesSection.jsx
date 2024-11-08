

import Card from './card';
import './ValuesSection.css';  

const ValuesSection = () => {
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
      <h1>Our Values Are Not Just Words; They Are The Driving Force Behind Our Commitment To Our Clients, Our Team, And The Community We Serve.</h1>

      <div className="values-container">
        <div className="image-container">
          <img src="image.png"  alt="Worker on construction site" />
        </div>
        
        <div className="cards-grid">
          {values.map((value, index) => (
            <Card key={index} icon={value.icon} title={value.title} description={value.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
