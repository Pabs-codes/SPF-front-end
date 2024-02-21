import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);


const Home = () => {

    const handleDownload = (url) => {
        window.location.href = "https://github.com/cepdnaclk/e17-3yp-Smart-Pet-Feeder/raw/main/Mobile%20App%20APK/smart-pet-feeder.apk"
    }


    return (
        <section className="pt-0 pb-0" id="home">
            <div className="slider-bg flexslider">
                <ul className="slides">
                    <Swiper
                      autoplay={{
                        delay: 3000, // Change delay value (in milliseconds) as per your requirement
                        disableOnInteraction: false, // Enable/disable autoplay on user interaction
                    }}
                    >
                        <SwiperSlide>
                            <div
                                className="slide-img"
                                style={{
                                    background: `url(${require("../../assets/images/background/1.jpg")}) center center / cover scroll no-repeat`,
                                }}
                            />
                            <div className={"hero-text-wrap "}>
                                <div className="hero-text white-color">
                                    <div className="container text-center">
                                        <h2 className="white-color font-500 letter-spacing-5">
                                            WELCOME TO
                                        </h2>
                                        <h1 className="white-color text-uppercase font-700">
                                            Smart Pet Feeder
                                        </h1>
                                        <h3 className="white-color font-400 fst-italic">
                                            saving one pet won't change the world, but for that one pet
                                            the world will change forever
                                        </h3>

                                        <div className="text-center mt-30">
                                            <div
                                                className={"btn btn-animate btn-circle btn-color"}
                                            >
                                                     <span onClick={handleDownload}>
                                                        Mobile App
                                                        <i className="icofont icofont-arrow-right"/>
                                                    </span>


                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="slide-img"
                                style={{
                                    background: `url(${require("../../assets/images/background/home.jpg")}) center center / cover scroll no-repeat`,
                                }}
                            />
                            <div className={"hero-text-wrap "}>
                                <div className="hero-text white-color">
                                    <div className="container text-center">
                                        <h2 className="white-color font-500 letter-spacing-5">
                                        FEEDING FURRY FRIENDS
                                        </h2>
                                       
                                        <h3 className="white-color font-400 fst-italic">
                                        Every mealtime is a tail-wagging delight
                                        </h3>

                                        <div className="text-center mt-30">
                                            <div
                                                className={"btn btn-animate btn-circle btn-color"}
                                            >
                                                     <span onClick={handleDownload}>
                                                        Mobile App
                                                        <i className="icofont icofont-arrow-right"/>
                                                    </span>


                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                className="slide-img"
                                style={{
                                    background: `url(${require("../../assets/images/background/2.jpg")}) center center / cover scroll no-repeat`,
                                }}
                            />
                            <div className={"hero-text-wrap "}>
                                <div className="hero-text white-color">
                                    <div className="container text-center">
                                        <h2 className="white-color font-500 letter-spacing-5">
                                        PET WELLNESS MADE EASY
                                        </h2>
                                       
                                        <h3 className="white-color font-400 fst-italic">
                                        Healthy habits for happy hearts and paws.
                                        </h3>

                                        <div className="text-center mt-30">
                                            <div
                                                className={"btn btn-animate btn-circle btn-color"}
                                            >
                                                     <span onClick={handleDownload}>
                                                        Mobile App
                                                        <i className="icofont icofont-arrow-right"/>
                                                    </span>


                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                className="slide-img"
                                style={{
                                    background: `url(${require("../../assets/images/background/3.jpg")}) center center / cover scroll no-repeat`,
                                }}
                            />
                            <div className={"hero-text-wrap "}>
                                <div className="hero-text white-color">
                                    <div className="container text-center">
                                        <h2 className="white-color font-500 letter-spacing-5">
                                        TAILORING NUTRITION
                                        </h2>
                                       
                                        <h3 className="white-color font-400 fst-italic">
                                        Crafting meals as unique as your pet's personality.
                                        </h3>

                                        <div className="text-center mt-30">
                                            <div
                                                className={"btn btn-animate btn-circle btn-color"}
                                            >
                                                     <span onClick={handleDownload}>
                                                        Mobile App
                                                        <i className="icofont icofont-arrow-right"/>
                                                    </span>


                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                className="slide-img"
                                style={{
                                    background: `url(${require("../../assets/images/background/4.jpg")}) center center / cover scroll no-repeat`,
                                }}
                            />
                            <div className={"hero-text-wrap "}>
                                <div className="hero-text white-color">
                                    <div className="container text-center">
                                        <h2 className="white-color font-500 letter-spacing-5">
                                        CONNECTING THROUGH CARE
                                        </h2>
                                       
                                        <h3 className="white-color font-400 fst-italic">
                                        Building bonds one nibble at a time.
                                        </h3>

                                        <div className="text-center mt-30">
                                            <div
                                                className={"btn btn-animate btn-circle btn-color"}
                                            >
                                                     <span onClick={handleDownload}>
                                                        Mobile App
                                                        <i className="icofont icofont-arrow-right"/>
                                                    </span>


                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                className="slide-img"
                                style={{
                                    background: `url(${require("../../assets/images/background/5.jpg")}) center center / cover scroll no-repeat`,
                                }}
                            />
                            <div className={"hero-text-wrap "}>
                                <div className="hero-text white-color">
                                    <div className="container text-center">
                                        <h2 className="white-color font-500 letter-spacing-5">
                                        FEEDING THE FUTURE
                                        </h2>
                                       
                                        <h3 className="white-color font-400 fst-italic">
                                        Empowering pets, enriching lives, one dish at a time
                                        </h3>

                                        <div className="text-center mt-30">
                                            <div
                                                className={"btn btn-animate btn-circle btn-color"}
                                            >
                                                     <span onClick={handleDownload}>
                                                        Mobile App
                                                        <i className="icofont icofont-arrow-right"/>
                                                    </span>


                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                className="slide-img"
                                style={{
                                    background: `url(${require("../../assets/images/background/6.jpg")}) center center / cover scroll no-repeat`,
                                }}
                            />
                            <div className={"hero-text-wrap "}>
                                <div className="hero-text white-color">
                                    <div className="container text-center">
                                        <h2 className="white-color font-500 letter-spacing-5">
                                        THE HEARTBEAT OF HOME
                                        </h2>
                                       
                                        <h3 className="white-color font-400 fst-italic">
                                        Where love meets nourishment, and tails never stop wagging
                                        </h3>

                                        <div className="text-center mt-30">
                                            <div
                                                className={"btn btn-animate btn-circle btn-color"}
                                            >
                                                     <span onClick={handleDownload}>
                                                        Mobile App
                                                        <i className="icofont icofont-arrow-right"/>
                                                    </span>


                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </ul>
            </div>
        </section>
    )

};

export default Home;
