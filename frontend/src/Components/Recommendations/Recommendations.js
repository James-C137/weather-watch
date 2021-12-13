import './Recommendations.css';

// Components
import InfoCard from '../InfoCard/InfoCard';

const Recommendations = ({recommendations}) => {
  const renderClothing = () => {
    const clothingElements = [];
    recommendations?.clothing.forEach(clothing => {
      clothingElements.push(
        <div key={clothing}>{clothing}</div>
      );
    });
    return clothingElements;
  }

  const renderAccessories = () => {
    const accessoryElements = [];
    recommendations?.accessories.forEach(accessory => {
      accessoryElements.push(
        <div key={accessory}>{accessory}</div>
      );
    })
    return accessoryElements;
  }

  return (
    <InfoCard title='RECOMMENDATIONS'>
      <div className='recommendations'>
        {
          recommendations?.clothing?.length > 0 &&
          <div>
            <p><b>Clothing</b></p>
            { renderClothing() }
          </div>
        }
        {
          recommendations?.accessories?.length > 0 &&
          <div>
            <p><b>Accessories</b></p>
            { renderAccessories() }
          </div>
        }
      </div>
    </InfoCard>
    
  );
}

export default Recommendations;
