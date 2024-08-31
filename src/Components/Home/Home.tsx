import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"; // This imports the core Swiper CSS
import "swiper/css/pagination"; // This imports the pagination module CSS
import Reveal from "../Animation/Reveal.tsx";
import Opacity from "../Animation/Opacity.tsx";

import {Pagination, Autoplay} from "swiper/modules";
import Icon from "../Icon/Icon.tsx";

import "./Home.css"
import banner1 from "../../assets/home/banner1.jpg"
import banner2 from "../../assets/home/banner2.jpg"
import banner3 from "../../assets/home/banner3.jpg"
import banner4 from "../../assets/home/banner4.jpg"
import banner5 from "../../assets/home/banner5.jpg"

import pic2 from "../../assets/home/pic13.png"
import pic3 from "../../assets/home/pic14.png"
import pic4 from "../../assets/home/pic15.png"
import pic5 from "../../assets/home/pic16.png"

import explore1 from "../../assets/explore/explore1.jpg"
import explore2 from "../../assets/explore/explore2.jpg"
import product1 from "../../assets/explore/product1.png"
import product2 from "../../assets/explore/product2.png"
import explore3 from "../../assets/explore/explore3.jpg"
import explore4 from "../../assets/explore/explore4.jpg"
import product3 from "../../assets/explore/product3.png"
import product4 from "../../assets/explore/product4.png";

//technical
import technical1 from "../../assets/technical/technical1.jpg"
import technical2 from "../../assets/technical/technical2.jpg"
import technical3 from "../../assets/technical/technical3.jpg"
import technical4 from "../../assets/technical/technical4.jpg"


//news
import news1 from "../../assets/news/news1.jpg"
import news2 from "../../assets/news/news2.jpg"

const Home = () => {

    const exploreItems = [
        {
            title: "Coffee Shop",
            exploreImg: explore1,
            productImg: product1
        },
        {
            title: "CVS&HoReCa",
            exploreImg: explore2,
            productImg: product2
        },
        {
            title: "OCS",
            exploreImg: explore3,
            productImg: product3
        },
        {
            title: "HOME",
            exploreImg: explore4,
            productImg: product4
        },
    ]

    const exploreList = exploreItems.map((item, index) => {
        return (
            <Opacity key={index}
                     className={"relative group rounded overflow-hidden min-h-80 mb-10 w-full text-white flex justify-center"}
                     style={{aspectRatio: "8/3"}}
            >
                <img
                    className={"absolute object-cover inset-0 z-0 h-full w-full rounded transition-all ease-linear duration-700 group-hover:scale-105"}
                    src={item.exploreImg} alt=""/>
                <div className={"relative z-10 flex flex-col items-center mt-14"}>
                    <Reveal className={"w-fit"}>
                        <img className={"w-10"} src={item.productImg} alt=""/>
                    </Reveal>
                    <Reveal delay={0.2} className={"w-fit"}>
                        <h2 className={"my-7 sm:text-3xl text-2xl font-bold"}>
                            {item.title}
                        </h2>
                    </Reveal>
                    <Reveal delay={0.3} className={"w-fit"}>
                        <button
                            className={"flex font-light items-center text-black px-5 h-8 bg-white rounded-full transition-all duration-200 ease-linear hover:bg-red-600 hover:text-white"}
                            style={{fontSize: "12px"}}
                        >
                            Explore
                            <Icon name='bx-right-arrow-alt' size="20px"/>
                        </button>
                    </Reveal>
                </div>
            </Opacity>
        )
    })

    return (
        <div className={"min-h-screen"}>
            <div>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    centeredSlides={true}
                    autoplay={{
                        delay: 15000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper min-h-screen text-white capitalize"
                >
                    <SwiperSlide>
                        <div className={"banner-1"} style={{backgroundImage: `url(${banner1})`}}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"banner-2"} style={{backgroundImage: `url(${banner2})`}}>
                            <div
                                className={"w-10/12 h-full mx-auto flex items-center gap-20 lg:justify-start justify-center"}>
                                <img className={"lg:inline-block hidden"} src={pic2} alt="My Image"/>
                                <div className={"lg:inline-block flex flex-col items-center"}>
                                    <h1 className={"sm:text-4xl text-3xl font-bold mb-10"}>
                                        The entire city is my cafe
                                    </h1>
                                    <button
                                        className={"h-10 text-sm px-6 outline outline-white rounded-full flex items-center gap-1 transition-all ease-linear duration-200 hover:outline-red-700 hover:bg-red-700"}>
                                        in the coffee shop
                                        <Icon name='bx-right-arrow-alt' size="20px"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"banner-3"} style={{backgroundImage: `url(${banner3})`}}>
                            <div
                                className={"w-10/12 h-full mx-auto flex items-center gap-20 lg:justify-start justify-center"}>
                                <img className={"lg:inline-block hidden"} src={pic3} alt="My Image"/>
                                <div className={"lg:inline-block flex flex-col items-center"}>
                                    <h1 className={"sm:text-4xl text-3xl font-bold mb-10"}>
                                        The joy of coffee, anytime, anywhere
                                    </h1>
                                    <button
                                        className={"h-10 text-sm px-6 outline outline-white rounded-full flex items-center gap-1 transition-all ease-linear duration-200 hover:outline-red-700 hover:bg-red-700"}>
                                        On the go
                                        <Icon name='bx-right-arrow-alt' size="20px"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"banner-4"} style={{backgroundImage: `url(${banner4})`}}>
                            <div
                                className={"w-10/12 h-full mx-auto flex items-center gap-20 lg:justify-start justify-center"}>
                                <img className={"lg:inline-block hidden"} src={pic4} alt="My Image"/>
                                <div className={"lg:inline-block flex flex-col items-center"}>
                                    <h1 className={"sm:text-4xl text-3xl font-bold mb-10"}>
                                        Commit to every shining moment.
                                    </h1>
                                    <button
                                        className={"h-10 text-sm px-6 outline outline-white rounded-full flex items-center gap-1 transition-all ease-linear duration-200 hover:outline-red-700 hover:bg-red-700"}>
                                        At work
                                        <Icon name='bx-right-arrow-alt' size="20px"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"banner-5"} style={{backgroundImage: `url(${banner5})`}}>
                            <div
                                className={"w-10/12 h-full mx-auto flex items-center gap-20 lg:justify-start justify-center"}>
                                <img className={"lg:inline-block hidden"} src={pic5} alt="My Image"/>
                                <div className={"lg:inline-block flex flex-col items-center"}>
                                    <h1 className={"sm:text-4xl text-3xl font-bold mb-10"}>
                                        Coffee.Couch. Cozy me.
                                    </h1>
                                    <button
                                        className={"h-10 text-sm px-6 outline outline-white rounded-full flex items-center gap-1 transition-all ease-linear duration-200 hover:outline-red-700 hover:bg-red-700"}>
                                        At home
                                        <Icon name='bx-right-arrow-alt' size="20px"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="explore w-11/12 mx-auto">
                <div className={"text-center mt-20 mb-10"}>
                    <Reveal className={"w-full"}>
                        <h1 className={"sm:text-3xl text-2xl font-bold mb-2"}>EXPLORE PRODUCTS</h1>
                    </Reveal>
                    <Reveal className={"w-full"}>
                        <p className={"text-sm font-light"}>
                            Premium coffee any time & anywhere
                        </p>
                    </Reveal>
                    <Reveal className={"w-full"}>
                        <p className={"text-sm font-light"}>
                            Pleasant coffee experience dedicated to you
                        </p>
                    </Reveal>
                </div>
                {exploreList}
            </div>
            <div className="w-11/12 mx-auto mt-5 mb-10 rounded pb-10" style={{background: "#f7f7f7"}}>
                <div className="flex flex-col items-center pt-20 pb-10">
                    <Reveal className={"w-full"}>
                        <h1 className={"sm:text-3xl text-2xl text-center font-bold mb-2"}>TECHNOLOGICAL
                            EXPLORATION</h1>
                    </Reveal>
                    <Reveal className={"w-fit"}>
                        <p className={"text-sm font-light"}>
                            Customer-oriented, technology-driven
                        </p>
                    </Reveal>
                    <Reveal className={"w-fit"}>
                        <button
                            className="px-4 bg-black text-white rounded-full h-8 flex items-center mt-8 transition-all ease-linear duration-200 hover:bg-red-600">
                            Explore
                            <Icon name='bx-right-arrow-alt' size="20px"/>
                        </button>
                    </Reveal>
                </div>
                <div className={"px-4 lg:px-24"}>
                    <div className={"flex justify-between gap-2 sm:gap-5"}>
                        <Reveal className={"rounded-2xl overflow-hidden"}>
                            <img src={technical1}
                                 className={"w-full transition-all ease-linear duration-500 hover:scale-105"} alt=""/>
                        </Reveal>
                        <div className={"flex flex-col justify-between"}>
                            <div className={"flex justify-between w-full flex-col sm:flex-row"}>
                                <Reveal delay={0.2} className={"overflow-hidden rounded-2xl flex-img"}>
                                    <img className={"transition-all ease-linear duration-500 hover:scale-105"}
                                         src={technical2} alt=""/>
                                </Reveal>
                                <Reveal delay={0.3} className={"overflow-hidden rounded-2xl flex-img"}>
                                    <img className={"transition-all ease-linear duration-500 hover:scale-105"}
                                         src={technical3} alt=""/>
                                </Reveal>
                            </div>
                            <Reveal delay={0.4} className={"w-full sm:inline-block hidden overflow-hidden rounded-2xl"}>
                                <img className={"w-full transition-all ease-linear duration-500 hover:scale-105"}
                                     src={technical4} alt=""/>
                            </Reveal>
                        </div>
                    </div>
                    <div className={"w-full inline-block mt-2 sm:hidden overflow-hidden rounded-2xl"}>
                        <img className={"w-full transition-all ease-linear duration-500 hover:scale-105"}
                             src={technical4} alt=""/>
                    </div>
                </div>
            </div>
            <div className={"w-11/12 mx-auto pb-10 grid grid-cols-1 md:grid-cols-2 gap-4"}>
                <Reveal delay={0.2} className={"relative w-full group min-h-72 rounded overflow-hidden text-white"}
                        style={{aspectRatio: "8/6"}}
                >
                    <img src={news1}
                         className={"absolute w-full h-full rounded transition-all ease-linear duration-700 group-hover:scale-105"}
                         alt=""/>
                    <div className={"relative z-10 flex flex-col items-center mt-14"}>
                        <h2 className={"sm:text-3xl text-2xl font-bold"}>
                            Product Distribution
                        </h2>
                        <p className={"mt-4 mb-8 w-11/12 text-center"}>
                            Dr. Coffee's product and services now cover 100+ countries and regions
                        </p>
                        <button
                            className={"flex font-light items-center text-black px-5 h-8 bg-white rounded-full transition-all duration-200 ease-linear hover:bg-red-600 hover:text-white"}
                            style={{fontSize: "12px"}}
                        >
                            Explore
                            <Icon name='bx-right-arrow-alt' size="20px"/>
                        </button>
                    </div>
                </Reveal>
                <Reveal delay={0.3}
                        className={"relative h-full w-full min-h-72 group rounded overflow-hidden text-white"}
                        style={{aspectRatio: "8/6"}}
                >
                    <img src={news2}
                         className={"absolute w-full h-full rounded transition-all ease-linear duration-700 group-hover:scale-105"}
                         alt=""/>
                    <div className={"relative z-10 flex flex-col items-center mt-14"}>
                        <h2 className={"sm:text-3xl text-2xl font-bold"}>
                            Latest News
                        </h2>
                        <p className={"mt-4 mb-8"}>
                            All the latest updates about Dr. Coffee
                        </p>
                        <button
                            className={"flex font-light items-center text-black px-5 h-8 bg-white rounded-full transition-all duration-200 ease-linear hover:bg-red-600 hover:text-white"}
                            style={{fontSize: "12px"}}
                        >
                            Explore
                            <Icon name='bx-right-arrow-alt' size="20px"/>
                        </button>
                    </div>
                </Reveal>
            </div>
        </div>
    )
}
export default Home;