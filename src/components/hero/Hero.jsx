import styles from "./Hero.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const mockApi = [
    {
        image: "https://too.kg/wp-content/uploads/image_8.jpg",
        title: "Караван-сарай Таш-Рабат",
        description: "Таш-Рабат (также Ташрабат) — это древний караван-сарай, располагающийся на территории Нарынской области, находящийся недалеко от границы с Китаем, одна из ключевых частей древнего Великого Шелкового Пути."
    },
      {
        image: "https://central-asia.live/_next/image?url=https%3A%2F%2Fcentral-asia.live%2Fuploads%2Fburana-tower.jpg&w=3840&q=75",
        title: "Бурана: Минарет, хранящий тайны прошлого Кыргызстана",
        description: "Минарет Бурана, расположенный в Чуйской долине в Кыргызстане, - это древний минарет высотой 25 метров, который сохранился с 11-го века. Считается, что его построили в рамках древнего города Баласагун, который служил столицей Караканидской империи."
    },
]

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.slider}>
 <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          loop={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide >
            <div className={styles.slide} style={{
              backgroundImage: `url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/e3/37/06/das-sind-die-jeti-oguz.jpg?w=900&h=500&s=1)`
            }}>
              <h2>Title</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className={styles.slide} style={{
              backgroundImage: `url(https://mineconom.gov.kg/storage/posts/11244/176034895268eccb18c8921_medium.JPG)`
            }}>

              <h2>Title</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className={styles.slide} style={{
              backgroundImage: `url(https://dwc.kg/wp-content/uploads/2023/05/1647363922_10-vsegda-pomnim-com-p-ozero-chatir-kul-foto-11.jpg)`
            }}>

              <h2>Title</h2>
            </div>
          </SwiperSlide>
        </Swiper>
        </div>
        <div className={styles.news}>
            {mockApi.map(item => {
                return (
                    <div className={styles.newsCard}
                    style={{
                        backgroundImage: `url(${item.image})`
                    }}>
                        
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Hero