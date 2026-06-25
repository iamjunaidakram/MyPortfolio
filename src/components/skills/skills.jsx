import React from "react";
import Slider from "react-slick";
import "./style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HTMLIcon from "../../assets/skills/html.svg";
import CSSIcon from "../../assets/skills/css.svg";
import SCSSIcon from "../../assets/skills/scss.svg";
import JSIcon from "../../assets/skills/js.svg";
import AngularIcon from "../../assets/skills/angular.svg";
import ReactIcon from "../../assets/skills/react.svg";
import ShopifyIcon from "../../assets/skills/shopify.svg";
import WordpressIcon from "../../assets/skills/wordpress.svg";
import NuxtIcon from "../../assets/skills/nuxt.svg";

export default function Skills() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 7000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const skills = [
    { icon: HTMLIcon, name: "HTML" },
    { icon: CSSIcon, name: "CSS" },
    { icon: AngularIcon, name: "Angular" },
    { icon: SCSSIcon, name: "SCSS" },
    { icon: JSIcon, name: "JavaScript" },
    { icon: AngularIcon, name: "Angular" },
    { icon: ReactIcon, name: "React" },
    { icon: ShopifyIcon, name: "Shopify" },
    { icon: WordpressIcon, name: "WordPress" },
    { icon: NuxtIcon, name: "Nuxt" },
  ];

  return (
    <section className="skills">
      <div className="wrapper">
        <div className="title-wrapper">
          <div className="title">
            My <span className="italic">Tech</span> Stack
          </div>
          <div className="title">
            Tools Behind The <span className="italic">Work</span>
          </div>
        </div>

        <div className="skills-slider">
          <Slider {...settings}>
            {skills.map((skill, index) => (
              <div className="skills-logo" key={`${skill.name}-${index}`}>
                <div className="skills-card">
                  <img src={skill.icon} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}