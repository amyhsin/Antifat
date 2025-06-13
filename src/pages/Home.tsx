import banner1 from "../assets/img/home/p1.jpg";
import banner2 from "../assets/img/home/p2.jpg";
import banner3 from "../assets/img/home/p3.jpg";
import banner4 from "../assets/img/home/p4.jpg";
import director from "../assets/img/home/director.png";
import doctors from "../assets/img/home/doctors.png";
import stethoscope from "../assets/img/home/stethoscope-icon.svg";
import scale from "../assets/img/home/weighing-scale-icon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const carouselImages = [banner1, banner2, banner3, banner4];

function Home() {
  return (
    <>
      <section id="home-banner">
        {/* <img src={banner1} alt="banner" /> */}
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          speed={2000}
          loop={true}
          className="image-carousel"
        >
          {carouselImages.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`slide-${index}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="image-carousel__overlay">
        <div className="image-carousel__text">
          <h1>敦仁診所</h1>
          <h3>TUN &nbsp; JEN &nbsp; CLINIC</h3>
          <hr className="divider" />
          <h2>五科罩得住 三心好醫師</h2>
        </div>
      </div>
      </section>
      <section id="home-intro">
        <div className="content">
          <div className="text">
            <div className="title">五科罩得住 三心好醫師</div>
            <div className="name">蕭敦仁 院長</div>
            <div className="paragraph">
              除了擁有肥胖醫學專科醫師執照外，蕭敦仁也是一位內科醫師、肝膽腸胃專科醫師、消化系內視鏡專科醫師及職業醫學專科醫師。
              同時擁有五張專科證書外，也是一位台灣大學公共衛生博士，他希望能在桃園這片土地扎根，做社區居家好醫師，當民眾有病痛，上門求診時，能以細心、關心及用心的「三心」來治癒病患。生命無價，健康最美。
            </div>
          </div>
          <div className="photo">
            <div className="img-container">
              <img src={director} alt="director" />
            </div>
          </div>
        </div>
      </section>
      <section id="home-main-services">
        <div className="content">
          <div className="title">主治項目</div>
          <div className="services">
            <div className="item">
              <div className="icon-container">
                <img src={stethoscope} alt="" />
              </div>
              <div className="text">腸胃內視鏡</div>
            </div>
            <div className="item">
              <div className="icon-container">
                <img src={scale} alt="" />
              </div>
              <div className="text">減重健康</div>
            </div>
            <div className="item">
              <div className="icon-container">
                <img src={stethoscope} alt="" />
              </div>
              <div className="text">肝病治療</div>
            </div>
            <div className="item">
              <div className="icon-container">
                <img src={scale} alt="" />
              </div>
              <div className="text">慢性病照護</div>
            </div>
            <div className="item">
              <div className="icon-container">
                <img src={stethoscope} alt="" />
              </div>
              <div className="text">一般內科</div>
            </div>
            <div className="item">
              <div className="icon-container">
                <img src={scale} alt="" />
              </div>
              <div className="text">健康檢查</div>
            </div>
          </div>
        </div>
      </section>
      <section id="home-doctors">
        <div className="text">
          <div className="title">醫療團隊</div>
          <div className="paragraph">
            憑藉著親切的問診態度與專業精湛的醫術，贏得民眾的好評與信任。醫師專業醫術與護理人員親切的服務態度，和依五行所規畫的診所，讓求診民眾對「敦仁診所」印象深刻。
          </div>
        </div>
        <div className="img-container">
          <img src={doctors} alt="doctors" />
        </div>
      </section>
      <section id="home-videos">
        <div className="content">
          <div className="title">最新影音</div>
          <div className="videos">
            <div className="video-frame">
              <iframe
                src="https://www.youtube.com/embed/I5C6EvbwBKE?si=8aeBBsojm6aJZiWP"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-frame">
              <iframe
                src="https://www.youtube.com/embed/sQOrPc6E8Nc?si=9q_fRyNxklySP5yj"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-frame">
              <iframe
                src="https://www.youtube.com/embed/p6S-bdZbgo0?si=YvamvkC9fiIDTgpf"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-frame">
              <iframe
                src="https://www.youtube.com/embed/rGyt88PBTc8?si=5Srizvxu_sWsDGDQ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="text">
            <p>隔周二中午12:30 YouTube頻道直播</p>
            <p>健康e觀點 知識全盤點</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
