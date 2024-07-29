import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './swiper.css'

const Gallery = ({ images }) => {
  return (
    <section class='w-[95%] mx-auto px-8 py-20 bg-background flex flex-col items-center justify-center gap-12 font-quicksand text-base text-center'>
      <h2 class='font-dancing text-5xl text-accent text-center'>Galería</h2>
      <p>Después de grandes momentos, sólo quedan magnificos recuerdos.</p>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        cssMode
        slidesPerView={1}
        spaceBetween={30}
        autoplay
        navigation
        pagination={{ clickable: true }}
        className='w-full max-w-xl aspect-[3/4] rounded-lg'
      >
        {
          images.map((image, index) =>
            <SwiperSlide key={index}>
              <img
                className='size-full object-cover object-bottom rounded-lg'
                src={image}
                alt={`Photo ${index + 1}`}
              />
            </SwiperSlide>
          )
        }
      </Swiper>
    </section>
  )
}

export default Gallery
