import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {

    return (
        <>
            <SectionTitle heading={"From 11.00am to 10.00pm"} subHeading={"Order Online"} >
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-20"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h1 className='text-white text-center text-4xl font-bold -mt-20 uppercase'>salads</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h1 className='text-white text-center text-4xl font-bold -mt-20 uppercase'>pizzas</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h1 className='text-white text-center text-4xl font-bold -mt-20 uppercase'>soups</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h1 className='text-white text-center text-4xl font-bold -mt-20 uppercase'>desserts</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <h1 className='text-white text-center text-4xl font-bold -mt-20 uppercase'>salads</h1>
                </SwiperSlide>
                
            </Swiper>
        </>
    );
};

export default Category;