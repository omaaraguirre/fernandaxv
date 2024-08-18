import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './swiper.css'

const Gallery = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      cssMode
      slidesPerView={1}
      spaceBetween={30}
      autoplay
      navigation
      pagination={{ clickable: true }}
      className='w-full max-w-[80vw] h-auto md:max-h-[80svh] md:w-auto aspect-[3/4] rounded-lg'
    >
      {
        images.map((image, index) =>
          <SwiperSlide key={index}>
            <img
              className='size-full object-cover object-bottom rounded-lg'
              src={image}
              alt={`Photo ${index + 1}`}
              loading='lazy'
            />
          </SwiperSlide>
        )
      }
    </Swiper>
  )
}

export default Gallery
