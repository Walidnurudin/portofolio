import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const SliderComponent = ({ data, isMobile = false }) => {

    const settings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        dots: true,
        centerPadding: '10px',
        slidesToShow: 1,
        speed: 500,
    };

    return (
        <div>
            <Slider {...settings}>
                {data?.map((item, index) => (
                    <Image
                        key={index}
                        className={`w-full object-cover px-1 rounded-2xl ${isMobile ? 'aspect-[1/1.60]' : 'aspect-[1.60/1]'}`}
                        src={item?.image}
                        alt="image"
                    />
                ))}
            </Slider>
        </div>
    );
};

export default SliderComponent;