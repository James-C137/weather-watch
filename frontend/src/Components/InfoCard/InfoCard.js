import './InfoCard.css';

const InfoCard = ({children, title}) => {
  return (
    <div className='info-card'>
      <p className='info-card-title'>{title}</p>
      <div className='info-card-contents'>{children}</div>
    </div>
  );
}

export default InfoCard;
