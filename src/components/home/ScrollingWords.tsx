import './ScrollingWords.css';

const ScrollingWords = () => {
  const words = ['Construction béton armé', 'Piscines à skimmers', 'MAINTENANCE', 'Piscines à débordement & Piscines miroir'];

  return (
    <section className="scrolling-words-section">
      <div className="scrolling-container">
        <div className="scrolling-content">
          {words.map((word, index) => (
            <span key={index} className="scrolling-word">
              {word}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {words.map((word, index) => (
            <span key={`dup-${index}`} className="scrolling-word">
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingWords;

