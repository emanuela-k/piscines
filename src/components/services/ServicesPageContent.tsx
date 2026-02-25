import { useState } from 'react';
import './ServicesPageContent.css';

interface ServiceSection {
  id: string;
  number: string;
  title: string;
  background: string;
  description: string;
  bullets?: string[];
  groups?: {
    heading: string;
    items: string[];
  }[];
}

const serviceSections: ServiceSection[] = [
  {
    id: 'construction-renovation',
    number: '',
    title: 'CONSTRUCTION & RÉNOVATION',
    background: '/image/Pool-construction.jpeg',
    description:
      'En ce qui concerne la construction ou la rénovation de votre piscine, nous proposons une construction en béton armé, gage de solidité et d’étanchéité. Cette solution permet de réaliser des bassins de grandes dimensions, entièrement personnalisables selon vos envies, avec le revêtement de votre choix : carrelage, pierre, mosaïque, PVC armé ou liner. Que vous souhaitiez un écumage par skimmer, un débordement ou un effet miroir, tout est possible. Votre piscine peut également être équipée d’options de confort telles qu’une couverture automatique immergée, une station de massage ou une nage à contre-courant.',
    bullets: [
      'Construction béton armé avec blocs en polyester',
      'Construction béton armé',
      'Piscines coques',
      'Piscines à skimmers',
      'Piscines à débordement',
      'Piscines miroir',
    ],
    groups: [
      {
        heading: 'Personnalisation & options',
        items: [
          'Revêtements : carrelage, pierre, mosaïque, PVC armé, liner',
          'Écumeur, débordement ou effet miroir selon vos envies',
          'Couvertures automatiques immergées',
          'Stations de massage & nage à contre-courant',
        ],
      },
    ],
  },
  {
    id: 'bien-etre',
    number: '',
    title: 'BIEN-ÊTRE',
    background: '/image/spa2.jpg',
    description:
      'Créez un univers de détente sur-mesure. Nous vous accompagnons dans la conception et l’installation de vos espaces bien-être, pour prolonger l’expérience aquatique au-delà du bassin.',
    bullets: ['Spas nage', 'Spas', 'Sauna sur mesure', 'Bains nordiques', 'Hammam'],
  },
  {
    id: 'amenagement-exterieur',
    number: '',
    title: 'AMÉNAGEMENT EXTÉRIEUR',
    background: '/image/image1.jpg',
    description:
      'Nos équipes prennent en charge l’ensemble de votre paysage extérieur afin d’harmoniser vos espaces verts avec votre piscine et vos zones de vie.',
    groups: [
      {
        heading: 'Aménagement paysager',
        items: [
          'Plantations, engazonnement, haies et massifs',
          'Création de rocailles et jardins d’ambiance',
          'Pelouses naturelles ou synthétiques',
        ],
      },
      {
        heading: 'Maçonnerie paysagère',
        items: [
          'Terrasses, murets, escaliers extérieurs, bordures',
          'Pose de pavés, dalles, béton décoratif ou résine de sol',
          'Clôtures, portails, palissades et murets de soutènement',
        ],
      },
      {
        heading: 'Espace vert & eau',
        items: [
          'Entretien et valorisation globale des espaces verts',
          'Installation de bassins décoratifs, fontaines et points d’eau',
        ],
      },
    ],
  },
];

interface RealisationCategory {
  id: string;
  name: string;
  images: { src: string; alt: string }[];
  description: string;
}

const realisationCategories: RealisationCategory[] = [
  {
    id: 'construction',
    name: 'CONSTRUCTION & RÉNOVATION',
    description:
      'Des piscines sur-mesure pensées pour durer, avec un souci du détail à chaque étape du chantier.',
    images: [
      { src: '/image/renovation1.jpeg', alt: 'Construction de piscine béton armé' },
      { src: '/image/renovation2.jpeg', alt: 'Piscine moderne à débordement' },
      { src: '/image/renovation3.jpeg', alt: 'Piscine rénovée avec mosaïque' },
    ],
  },
  {
    id: 'bien-etre',
    name: 'BIEN-ÊTRE',
    description: 'Spas, saunas et hammams pour des moments de détente absolue à domicile.',
    images: [
      { src: '/image/spa1.jpg', alt: 'Spa nage intégré' },
      { src: '/image/jakuzi.jpg', alt: 'Bain nordique en bois' },
      { src: '/image/spa2.jpg', alt: 'Hammam contemporain' },
    ],
  },
  {
    id: 'amenagement',
    name: 'AMÉNAGEMENT EXTÉRIEUR',
    description:
      'Des jardins et terrasses élégantes, conçus pour sublimer votre environnement extérieur.',
    images: [
      { src: '/image/amenagement.jpeg', alt: 'Terrasse en bois avec piscine' },
      { src: '/image/mirmbajtje2.jpeg', alt: 'Jardin paysager moderne' },
      { src: '/image/mirmbajtje3.jpeg', alt: 'Aménagement extérieur avec pelouse' },
    ],
  },
  {
    id: 'services',
    name: 'SERVICES',
    description:
      'Nos équipes assurent la maintenance et l’optimisation continue de vos installations.',
    images: [
      { src: '/image/services1.jpeg', alt: 'Équipe de maintenance piscine' },
      { src: '/image/services2.jpeg', alt: 'Inspection technique de bassin' },
      { src: '/image/services3.jpeg', alt: 'Équipement technique piscine' },
    ],
  },
];

const serviceExpertise = [
  'Mise en service et hivernage',
  'Contrats d’entretien personnalisés',
  'Remplacement de liner ou PVC armé',
  'Recherche de fuites',
  'Diagnostic de pannes et réparations rapides',
];

const ServicesPageContent = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(realisationCategories[0].id);

  const activeCategory =
    realisationCategories.find((category) => category.id === activeCategoryId) ||
    realisationCategories[0];

  return (
    <div className="services-page-wrapper">
      {serviceSections.map((section) => (
        <section
          key={section.id}
          className={`service-highlight-section ${section.id}`}
          style={{ backgroundImage: `url(${section.background})` }}
        >
          <div className="service-highlight-overlay">
            <div className="service-highlight-content">
              <div className="service-label">
                <span className="service-number">{section.number}</span>
                <h2 className="service-title">{section.title}</h2>
              </div>
              <p className="service-description">{section.description}</p>
              {section.bullets && (
                <ul className="service-bullet-list">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {section.groups && (
                <div className="service-groups">
                  {section.groups.map((group) => (
                    <div key={group.heading} className="service-group-card">
                      <h3>{group.heading}</h3>
                      <ul>
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      <section className="services-gallery-section">
        <div className="gallery-header">
          <span className="gallery-label"></span>
          <h2 className="gallery-title">NOS RÉALISATIONS</h2>
          <p className="gallery-subtitle">
            Découvrez nos projets emblématiques et les univers que nous créons pour nos clients.
          </p>
        </div>
        <div className="gallery-layout">
          <div className="gallery-tabs">
            {realisationCategories.map((category) => (
              <button
                key={category.id}
                className={`gallery-tab ${activeCategoryId === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategoryId(category.id)}
                type="button"
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="gallery-display">
            <div className="gallery-description">
              <p>{activeCategory.description}</p>
            </div>
            <div className="gallery-images">
              {activeCategory.images.map((image) => (
                <figure key={image.src} className="gallery-image-card">
                  <img src={image.src} alt={image.alt} />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="services-expertise-section">
        <div className="expertise-header">
         
          <h2 className="expertise-title">SERVICES D’ACCOMPAGNEMENT</h2>
          <p className="expertise-subtitle">
            Nous veillons à la longévité de vos installations grâce à un suivi complet et réactif.
          </p>
        </div>
        <div className="expertise-cards">
          {serviceExpertise.map((item) => (
            <div key={item} className="expertise-card">
              <span className="card-icon">✓</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPageContent;

