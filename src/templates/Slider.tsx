import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

import { imgUrl } from '@/components/imgUrl';

const Slider = ({ width = '100%' }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sliderPadding = isMobile ? 'pt-6' : 'pt-6';

  return (
    <div className={`w-full ${sliderPadding}`} style={{ width }}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        autoPlay
        infiniteLoop
        transitionTime={550}
      >
        <div className="w-full">
          <img
            src={`${imgUrl}/1.png`}
            alt="Slide 1"
            className="size-full object-contain"
          />
        </div>
        <div className="w-full">
          <img
            src={`${imgUrl}/2.png`}
            alt="Slide 2"
            className="size-full object-contain"
          />
        </div>
      </Carousel>
    </div>
  );
};

export { Slider };
