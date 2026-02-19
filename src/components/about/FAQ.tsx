import { useState } from 'react';
import './FAQ.css';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "Dans quel pays offrez-vous vos services ?",
      answer: "Nous offrons nos services dans l'arc lémanique, à Genève et à Lausanne."
    },
    {
      id: 2,
      question: "Quels types de piscines construisez-vous ?",
      answer: "Construction en béton armé avec blocs en polyester :\n• Construction en béton armé\n• Piscines coque\n• Piscines à skimmers\n• Piscines à débordement et piscines miroir"
    },
    {
      id: 3,
      question: "Quels autres services offrons-nous en dehors des piscines ?",
      answer: "Maçonnerie, rénovations, aménagements extérieurs, dépannage et entretien"
    },
    {
      id: 4,
      question: "Comment varient les prix des piscines ?",
      answer: "Nous ne donnons pas de prix en ligne."
    },
    {
      id: 5,
      question: "Quels sont les horaires des services ?",
      answer: "Les horaires réguliers sont :\n8h00 – 12h00\n13h00 – 17h00\nPour les interventions d'urgence : service 24h/24 et 7j/7."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-left">
          <div className="faq-image-wrapper">
            <img src="/image/piscines5.jpg" alt="Pool construction" className="faq-image" />
          </div>
        </div>
        
        <div className="faq-right">
          <h2 className="faq-title">
            Vous avez des <span className="highlight">questions</span>, nous avons des <span className="highlight">réponses</span>
          </h2>
          
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={faq.id} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-icon">
                    {openIndex === index ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    )}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p className="faq-answer-text">{faq.answer.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < faq.answer.split('\n').length - 1 && <br />}
                      </span>
                    ))}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

