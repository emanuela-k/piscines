import PoolsGallery from '../components/pool-layouts/PoolImage';
import './PageHero.css';

const PoolLayouts = () => {
  return (
    <div>
      <div className="page-hero">
        <div className="page-hero-overlay">
          <h1 className="page-hero-title">NOS RÉALISATIONS</h1>
        </div>
      </div>
      <PoolsGallery />
    </div>
  );
};

export default PoolLayouts;
