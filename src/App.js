import React, { useState, useEffect } from "react";
import "./App.scss";
import HeroImageDesktop1 from "./assets/desktop-image-hero-1.jpg";
import HeroImageDesktop2 from "./assets/desktop-image-hero-2.jpg";
import HeroImageDesktop3 from "./assets/desktop-image-hero-3.jpg";
import HeroImageMobile1 from "./assets/mobile-image-hero-1.jpg";
import HeroImageMobile2 from "./assets/mobile-image-hero-2.jpg";
import HeroImageMobile3 from "./assets/mobile-image-hero-3.jpg";
import FurnitureImage1 from "./assets/image-about-light.jpg";
import FurnitureImage2 from "./assets/image-about-dark.jpg";
import HeroImage from "./components/hero-image/HeroImage";
import HeroContent from "./components/hero-content/HeroContent";
import SliderButton from "./components/slider/SliderButton";
import { ReactComponent as LeftArrow } from "./assets/icon-angle-left.svg";
import { ReactComponent as RightArrow } from "./assets/icon-angle-right.svg";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Hamburger from "./components/hamburger/Hamburger";
import Overlay from "./components/overlay/Overlay";
import MobileNavigation from "./components/mobile-nav/MobileNavigation";

function App() {
  // image source
  const imageSource = [
    {
      hero: {
        desktop: HeroImageDesktop1,
        mobile: HeroImageMobile1,
        alt: "3 chair with yellow beige and green color",
      },
    },
    {
      hero: {
        desktop: HeroImageDesktop2,
        mobile: HeroImageMobile2,
        alt: "white chair and table",
      },
    },
    {
      hero: {
        desktop: HeroImageDesktop3,
        mobile: HeroImageMobile3,
        alt: "black steel chair",
      },
    },
  ];

  // hero contents
  const heroContents = [
    {
      content: {
        title: "Discover innovative ways to decorate",
        description:
          "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
      },
    },
    {
      content: {
        title: "We are available all across the globe",
        description:
          "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
      },
    },
    {
      content: {
        title: "Manufactured with the best materials",
        description:
          "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
      },
    },
  ];

  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.code === "ArrowRight") {
        onNextHandler();
      } else if (e.code === "ArrowLeft") {
        onPrevHandler();
      }
    });
  });

  const onMobileMenuChange = () => {
    setOpen(!open);
  };

  const onNextHandler = () => {
    if (index === imageSource.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const onPrevHandler = () => {
    if (index <= 0) {
      setIndex(imageSource.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  // const currentPosition = (index, contentIndex) => {

  // };

  return (
    <div className="grid">
      <header className="header">
        <Overlay open={open} />
        <MobileNavigation open={open} />
        <Hamburger open={open} onClick={onMobileMenuChange} />
        <Logo />
        <Navigation />
      </header>
      <div className="slider">
        <SliderButton onClick={onPrevHandler}>
          <LeftArrow />
        </SliderButton>
        <SliderButton onClick={onNextHandler}>
          <RightArrow />
        </SliderButton>
      </div>
      <div className="hero__image-container">
        {imageSource.map((img, imgIndex) => {
          let position = "right";
          if (index === imgIndex) {
            position = "center";
          } else if (
            index - 1 === imgIndex ||
            (index === 0 && imgIndex === imageSource.length - 1)
          ) {
            position = "left";
          }

          return (
            <HeroImage
              key={imgIndex}
              mobile={img.hero.mobile}
              desktop={img.hero.desktop}
              alt={img.hero.alt}
              position={position}
            />
          );
        })}
      </div>
      <div className="hero__content-container">
        {heroContents.map((content, contIndex) => {
          let position = "right";

          if (index === contIndex) {
            position = "center";
          } else if (
            index - 1 === contIndex ||
            (index === 0 && contIndex === imageSource.length - 1)
          ) {
            position = "left";
          }

          return (
            <HeroContent
              key={contIndex}
              title={content.content.title}
              description={content.content.description}
              position={position}
            />
          );
        })}
      </div>
      <div className="furniture__bg--light">
        <img src={FurnitureImage1} alt="white chair" />
      </div>
      <div className="furniture__content">
        <h3 className="furniture__title">ABOUT OUR FURNITURE</h3>
        <p className="furniture__description">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className="furniture__bg--dark">
        <img src={FurnitureImage2} alt="center table and dark chair" />
      </div>
    </div>
  );
}

export default App;
