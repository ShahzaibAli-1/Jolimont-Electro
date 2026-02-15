import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import sustainabilityImage from '../../assets/943c25941ad56caaa06164ca3dd68e8877004876.png';
import customerServiceImage from '../../assets/d07d4950c6179be2f9f1b5b0184107c4b78c0c9f.png';
import technicianWorkshopImage from '../../assets/4c55c549aa76c9933760180bf37125d5650421fd.png';
import expertisePartsImage from '../../assets/4c2a64e7c87570e9f7150bfce9b86b8c1f220076.png';
import sustainabilityForestImage from '../../assets/b37ecd35416f784ba521c43ce873ab8a0fe88e92.png';
import aiRepairImage from '../../assets/c20c16e8ecfff658b351d8c8ab18b1c285518fb1.png';

export function SustainabilityHelpSection() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: sustainabilityForestImage,
      title: t.sustainabilitySection.slide1Title,
      description: t.sustainabilitySection.slide1Desc,
      cta: t.sustainabilitySection.slide1Cta,
    },
    {
      image: aiRepairImage,
      title: t.sustainabilitySection.slide2Title,
      description: t.sustainabilitySection.slide2Desc,
      cta: t.sustainabilitySection.slide2Cta,
    },
    {
      image: expertisePartsImage,
      title: t.sustainabilitySection.slide3Title,
      description: t.sustainabilitySection.slide3Desc,
      cta: t.sustainabilitySection.slide3Cta,
    },
    {
      image: technicianWorkshopImage,
      title: t.sustainabilitySection.slide4Title,
      description: t.sustainabilitySection.slide4Desc,
      cta: t.sustainabilitySection.slide4Cta,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    appendDots: () => {
      const progress = (currentSlide / (slides.length - 1)) * 100;
      return (
        <div style={{ bottom: '30px' }}>
          <div style={{ 
            margin: '0 auto', 
            padding: '0px', 
            width: '200px', 
            height: '4px', 
            backgroundColor: 'rgba(255, 255, 255, 0.3)', 
            borderRadius: '2px',
            overflow: 'hidden'
          }}>
            <div 
              style={{
                height: '100%',
                width: `${progress}%`,
                backgroundColor: 'white',
                transition: 'width 0.5s ease',
                borderRadius: '2px'
              }}
            />
          </div>
        </div>
      );
    },
    customPaging: () => <div />,
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT COLUMN - Slider */}
          <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-lg">
            <Slider {...sliderSettings}>
              {slides.map((slide, index) => (
                <div key={index} className="relative h-[400px] sm:h-[450px]">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    {typeof slide.image === 'string' ? (
                      <ImageWithFallback
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Dark Overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 text-white">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 max-w-xl">
                      {slide.title}
                    </h3>
                    <p className="text-base sm:text-lg mb-6 max-w-lg leading-relaxed opacity-90">
                      {slide.description}
                    </p>
                    <Button
                      variant="outline"
                      className="w-fit bg-white text-gray-900 hover:bg-gray-100 border-none font-medium px-6 py-3"
                    >
                      {slide.cta}
                    </Button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* RIGHT COLUMN - Customer Help */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            {/* Support Image */}
            <div>
              <ImageWithFallback
                src={customerServiceImage}
                alt="Service client"
                className="w-full h-48 object-cover object-top"
              />
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col">
              <h4 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">
                {t.sustainabilitySection.helpTitle}
              </h4>
              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                {t.sustainabilitySection.helpDesc}
              </p>
              <Button
                className="w-full sm:w-auto font-medium"
                style={{ backgroundColor: '#305CDE' }}
                onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'customer-service' }))}
              >
                {t.sustainabilitySection.helpCta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}