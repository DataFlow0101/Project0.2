import { Container } from '../../../../shared/ui';
import './style.css';

const Block6 = () => {
  return (
    <div>
      <Container>
        <h1 className="text-[50px] font-bold">Адрес нашей компании</h1>
        <p className="text-[18px] font-normal">Адрес: Чуй 120, Бишкек, Кыргызстан</p>
        <div id="map" className="map-container" style={{ width: '100%', height: '500px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2129.27300353009!2d74.5994155232056!3d42.87637118195465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc8a87307b%3A0x1ed381e3e0d88a5d!2sIlbirs%2C%20Chuy%20Ave%2C%20Bishkek!5e0!3m2!1sen!2skg!4v1737367228839!5m2!1sen!2skg"
            style={{ border: 0, width: '100%', height: '100%' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </div>
  );
};

export default Block6;
