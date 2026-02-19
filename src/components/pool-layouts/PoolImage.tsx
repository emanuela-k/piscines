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
      { src: '/image/photo1.jpeg', alt: 'Terrasse bois et piscine' },
      { src: '/image/photo5.jpeg', alt: 'Piscine paysagée haut de gamme' },
      { src: '/image/photo3.jpeg', alt: 'Piscine avec pergola moderne' },
      { src: '/image/photo6.jpeg', alt: 'Bassin lumineux de nuit' },
      { src: '/image/image5.jpg', alt: 'Vue d’ensemble du bassin' },
      { src: '/image/photo7.jpeg', alt: 'Piscine familiale prête à l’usage' },
      { src: '/image/photo9.jpeg', alt: 'Piscine familiale prête à l’usage' },
      { src: '/image/image14.jpg', alt: 'Piscine familiale prête à l’usage' },
      { src: '/image/photo10.jpeg', alt: 'Piscine familiale prête à l’usage' },
      { src: '/image/photo9.jpeg', alt: 'Piscine familiale prête à l’usage' },
      { src: '/image/photo12.jpeg', alt: 'Piscine familiale prête à l’usage' },
      { src: '/image/image16.jpg', alt: 'Piscine familiale prête à l’usage' },
    ],
  },
  {
    id: 'construction',
    name: 'Construction & Rénovation',
    description:
      'Bassin sur-mesure, rénovation complète et finitions haut de gamme pour des piscines durables et harmonieuses.',
    images: [
      { src: '/image/constuction.jpg', alt: 'Construction de piscine béton armé' },
      { src: '/image/construction.jpg', alt: 'Chantier de piscine moderne' },
      { src: '/image/renovation1.jpg', alt: 'Rénovation piscine carrelage' },
     
    ],
  },
  {
    id: 'bien-etre',
    name: 'Bien-Être',
    description:
      'Espaces spa, hammam et détente conçus pour prolonger l’expérience aquatique et offrir un confort absolu.',
    images: [
      { src: '/image/spa1.jpg', alt: 'Spa nage intégré' },
      { src: '/image/spa2.jpg', alt: 'Espace spa premium' },
      { src: '/image/jakuzi.jpg', alt: 'Bain nordique en bois' },
      
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
