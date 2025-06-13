import phone from "../img/home/icon-phone-solid.svg";
import location from "../img/home/icon-location-solid.svg";
import email from "../img/home/icon-email-solid.svg";
import fax from "../img/home/icon-fax-solid.svg";

function Footer() {
  return (
    <>
      <div className="footer-info">
        <div className="info">
          <div className="business-hours">
            <p>
              週一至週五：
              <br />
              上午：08:00-12:00
              <br />
              下午：13:30-17:30
              <br />
              晚上：17:30-21:30
              <br />
              <br />
            </p>
            <p>
              週六：
              <br />
              上午：08:00-12:00
              <br />
              下午：13:30-17:30
              <br />
              <br />
              週日休診
            </p>
            {/* <p></p> */}
          </div>
          <div className="contact">
            <div>
              <div className="phone contact-item">
                <div className="icon">
                  <img src={phone} alt="" />
                </div>
                <div className="text">03-4333888分機11~12</div>
              </div>
              <div className="fax contact-item">
                <div className="icon">
                  <img src={fax} alt="" />
                </div>
                <div className="text">03-4635353</div>
              </div>
              <div className="location contact-item">
                <div className="icon">
                  <img src={location} alt="" />
                </div>
                <div className="text">320桃園市中壢區忠孝路18號</div>
              </div>
              <div className="email contact-item">
                <div className="icon">
                  <img src={email} alt="" />
                </div>
                <div className="text">charity50192186@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.798447350583!2d121.25426037446229!3d24.972971177856028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346821ff2d299117%3A0xf507abdf0d8cd747!2z5pWm5LuB6Ki65omAKOezluWwv-eXhS9CQ-iCneeCji_muJvph43ploDoqLov5paw6Zmz5Luj6Kyd56eRL-WutumGq-enkS_li57lt6Xpq5TmqqIv6LaF6Z-z5rOiL-WBpeW6t-aqouafpS_oh6rlvovnpZ7ntpMp!5e0!3m2!1szh-TW!2stw!4v1748512194339!5m2!1szh-TW!2stw"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="social">
          <a
            href="https://www.facebook.com/antifat.com.tw/?locale=zh_TW"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/tj.clinic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/@tj.clinic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
      <div className="copyright">
        &copy; Copyright 2023 敦仁診所 - All Rights Reserved
      </div>
    </>
  );
}

export default Footer;
