import { useState } from 'react';
import './PoolImage.css';

type GalleryCategory = {
  id: string;
  name: string;
  description: string;
  images: { src: string; alt: string }[];
};

const categories: GalleryCategory[] = [
  {
    id: 'piscines',
    name: 'Piscines',
    description:
      'Une sélection de piscines emblématiques, intérieures et extérieures, mettant en lumière la diversité de nos réalisations.',
    images: [
      { src: '/image/pishina1.jpeg', alt: 'Terrasse bois et piscine' },
      { src: '/image/pishina2.jpeg', alt: 'Piscine paysagée haut de gamme' },
      { src: '/image/pishina3.jpeg', alt: 'Piscine avec pergola moderne' },
      { src: '/image/pishina4.jpeg', alt: 'Bassin lumineux de nuit' },
      { src: '/image/pishina5.jpeg', alt: 'Vue d’ensemble du bassin' },
      { src: '/image/pishina6.jpeg', alt: 'Piscine familiale prête à l’usage' },
      { src: '/image/pishina7.jpeg', alt: 'Piscine familiale prête à l’usage' },
      { src: '/image/pishina8.jpeg', alt: 'Piscine familiale prête à l’usage' },
      { src: '/image/pishina9.jpeg', alt: 'Piscine familiale prête à l’usage' },
      { src: '/image/pishina10.jpeg', alt: 'Piscine familiale prête à l’usage' },
      { src: '/image/pishina11.jpeg', alt: 'Piscine familiale prête à l’usage' },
      { src: '/image/pishina12.jpeg', alt: 'Piscine familiale prête à l’usage' },
      { src: '/image/pushina14.jpeg', alt: 'Piscine familiale prête à l’usage' },
      { src: '/image/pishina15.jpeg', alt: 'Piscine familiale prête à l’usage' },
      { src: '/image/pishina16.jpeg', alt: 'Piscine familiale prête à l’usage' },
      { src: '/image/pishina17.jpeg', alt: 'Piscine familiale prête à l’usage' },
      { src: '/image/pishina18.jpeg', alt: 'Piscine familiale prête à l’usage' },
      { src: '/image/pishina19.jpeg', alt: 'Piscine familiale prête à l’usage' },
      { src: '/image/pishina20.jpeg', alt: 'Piscine familiale prête à l’usage' },

    ],
  },
  {
    id: 'construction',
    name: 'Construction & Rénovation',
    description:
      'Bassin sur-mesure, rénovation complète et finitions haut de gamme pour des piscines durables et harmonieuses.',
    images: [
    
     
    ],
  },
  {
    id: 'bien-etre',
    name: 'Bien-Être',
    description:
      'Espaces spa, hammam et détente conçus pour prolonger l’expérience aquatique et offrir un confort absolu.',
    images: [
    
      
    ],
  },
];

const PoolsGallery = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(categories[0].id);

  const activeCategory =
    categories.find((category) => category.id === activeCategoryId) ?? categories[0];

  return (
    <section className="projects-gallery-section">
      <div className="projects-gallery-header">
        <span className="projects-badge">NOS RÉALISATIONS</span>
        <h2>
          Explorer nos <span>Galerie </span>
        </h2>
        <p>
          Chaque projet est conçu comme une pièce unique. Naviguez entre nos réalisations pour
          découvrir le savoir-faire Edifix Sàrl.
        </p>
      </div>

      <div className="projects-gallery-body">
        <div className="projects-tabs">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`projects-tab ${activeCategoryId === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategoryId(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="projects-content">
          <div className="projects-description">
            <h3>{activeCategory.name}</h3>
            <p>{activeCategory.description}</p>
          </div>
          <div className="projects-grid">
            {activeCategory.images.map((image) => (
              <figure key={image.src} className="projects-card">
                <img src={image.src} alt={image.alt} />
                <figcaption>{image.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoolsGallery;
