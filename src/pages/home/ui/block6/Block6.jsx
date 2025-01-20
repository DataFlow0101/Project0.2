
import 'leaflet/dist/leaflet.css';
import { Container } from '../../../../shared/ui';
import './style.css'
const Block6 = () => {
  return (
    <div>
        <Container>
      <h1 className='text-[50px] font-bold'>Адрес нашей компании</h1>
      <p className='text-[18px] font-normal'>Адрес: Чуй 120, Бишкек, Кыргызстан</p>
      <div id="map" className='map-container' style={{ width: '100%', height: '500px' }}>
      <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093675!2d144.9537363155045!3d-37.81720997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5771b2d7d1b7b34!2sVictoria%20State%20Library!5e0!3m2!1sen!2sau!4v1633594372423!5m2!1sen!2sau"
                allowfullscreen="" loading="lazy"></iframe>
      </div>
      </Container>
    </div>
  );
};

export default Block6;
