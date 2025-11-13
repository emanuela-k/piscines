import { useState } from 'react';
import './Gallery.css';

interface Service {
  id: number;
  name: string;
  image: string;
  alt: string;
}

const services: Service[] = [
  {
    id: 1,
    name: 'Piscines Coque ',
    image: 'image/image5.jpg',
    alt: 'Construction de Piscine'
  },
  {
    id: 2,
    name: 'Piscines à skimmers',
    image: 'image/image10.jpg',
    alt: 'Conception de Piscine'
  },
  {
    id: 3,
    name: 'Piscines à débordement et piscines miroir',
    image: 'image/image16.jpg',
    alt: 'Rénovation de Piscine'
  },
  {
    id: 4,
    name: 'Piscines avec couvertures ',
    image: 'image/image18.jpg',
    alt: 'Maintenance de Piscine'
  },
  {
    id: 5,
    name: 'Piscines abstraite ',
    image: 'image/image15.jpg',
    alt: 'Entretien de Piscine'
  },
  {
    id: 6,
    name: 'Sauna sur mesure  ',
    image: 'image/spa1.jpg',
    alt: 'Entretien de Piscine'
  },
  {
    id: 7,
    name: 'Spas ',
    image: 'image/spa2.jpg',
    alt: 'Entretien de Piscine'
  },
  {
    id: 8,
    name: 'Jacuzzi ',
    image: 'image/jakuzi.jpg',
    alt: 'Entretien de Piscine'
  },
  {
    id: 9,
    name: 'Jacuzzi privé ',
    image: 'image/image2.jpg',
    alt: 'Entretien de Piscine'
  }
];

const Gallery = () => {
  const [selectedService, setSelectedService] = useState<number>(1);

  const handleServiceHover = (id: number) => {
    setSelectedService(id);
  };

  const currentService = services.find(service => service.id === selectedService) || services[0];

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2 className="gallery-title">
          NOS RÉALISATIONS
        </h2>
      </div>
      
      <div className="gallery-container">
        <div className="services-list">
          {services.map((service) => (
            <div
              key={service.id}
              className={`service-item ${selectedService === service.id ? 'active' : ''}`}
              onMouseEnter={() => handleServiceHover(service.id)}
            >
              <span className="service-name">{service.name}</span>
              <div className="service-arrow">
                {selectedService === service.id ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#0095ff"/>
                    <path d="M10 9l4 3-4 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="white" stroke="#e0e0e0" strokeWidth="1.5"/>
                    <path d="M10 9l4 3-4 3" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="gallery-image-container">
          <div className="image-wrapper">
            <img
              src={currentService.image}
              alt={currentService.alt}
              className="gallery-main-image"
              key={currentService.id}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
