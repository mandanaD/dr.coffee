import "./Footer.css"
import Icon from "../../Icon/Icon.tsx";
import footerLogo from "../../../assets/footerLogo.png"

const Footer = () => {
    return (
        <div className={"footer w-full"}>
            <div className={"footer-top py-5 h-32 flex items-center text-white"}>
                <div className={"w-11/12 mx-auto px-16 footer-bottom-con flex justify-between"}>
                    <div className={"flex items-center footer-icon-container gap-3"}>
                        <div className={"footer-icon"}>
                            <Icon name='bx-cart' size="28px"/>
                        </div>
                        <div>
                            <h1 className={"font-bold"}>
                                Shop Now
                            </h1>
                            <p className={"blur-text mt-2"}>
                                Order coffee machines online
                            </p>
                        </div>
                    </div>
                    <div className={"flex items-center footer-icon-container gap-3"}>
                        <div className={"footer-icon"}>
                            <Icon name='bx-message-detail' size="28px"/>
                        </div>
                        <div>
                            <h1 className={"font-bold "}>
                                Service & Support
                            </h1>
                            <p className={"blur-text mt-2"}>
                                Efficient troubleshooting
                            </p>
                        </div>
                    </div>
                    <div className={"flex items-center footer-icon-container gap-3"}>
                        <div className={"footer-icon"}>
                            <Icon name='bx-headphone' size="28px"/>
                        </div>
                        <div>
                            <h1 className={"font-bold"}>
                                Contact Us
                            </h1>
                            <p className={"blur-text mt-2"}>
                                Dr. Coffee's contact info
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"footer-bottom blur-text "}>
                <div className={"w-11/12 mx-auto footer-bottom-con px-16"}>
                    <div className={"flex justify-between w-full footer-bottom-text"}>
                        <div className={"footer-items"}>
                            <h1 className={"text-white text-sm"}>
                                About Us
                            </h1>
                            <p>
                                Company
                            </p>
                            <p>
                                Our business
                            </p>
                            <p>
                                Our technology
                            </p>
                            <p>
                                Our quality
                            </p>
                            <p>
                                Contact Us
                            </p>
                        </div>
                        <div className={"footer-items"}>
                            <h1 className={"text-white text-sm"}>
                                Product Series
                            </h1>
                            <p>
                                Coffee shop
                            </p>
                            <p>
                                CVS & Ho.Re.Ca
                            </p>
                            <p>
                                OCS
                            </p>
                            <p>
                                Home
                            </p>
                            <p>
                                Accessories
                            </p>
                        </div>
                        <div className={"footer-items"}>
                            <h1 className={"text-white text-sm"}>
                                Shop now
                            </h1>
                            <p>
                                Service & Support
                            </p>
                            <p>
                                Our principles
                            </p>
                            <p>
                                Contact specialist
                            </p>
                            <p>
                                FAQs
                            </p>
                            <p>
                                Watch tutorial
                            </p>
                            <p>
                                Download manual
                            </p>
                        </div>
                        <div className={"footer-items"}>
                            <h1 className={"text-white text-sm "}>
                                Coffee Academy
                            </h1>
                            <p>
                                Introduction
                            </p>
                            <p>
                                Coffee experts
                            </p>
                            <p>
                                Course center
                            </p>
                            <p>
                                Photos
                            </p>
                            <p>
                                Consult now
                            </p>
                        </div>
                        <div className={"footer-items"}>
                            <h1 className={"text-white text-sm"}>
                                Brand Center
                            </h1>
                            <p>
                                News
                            </p>
                            <p>
                                Videos
                            </p>
                            <p>
                                Pictures
                            </p>
                        </div>
                    </div>
                    <div className={"flex gap-3 pb-7 footer-bottom-icon"}>
                        <Icon name='bxl-linkedin' size="23px"/>
                        <Icon name='bxl-facebook' size="23px"/>
                        <Icon name='bxl-twitter' size="23px"/>
                    </div>
                    <div className={"pt-5 pb-10 flex justify-between"}>
                        <p>
                        Copyright © 2021 Suzhou Dr.coffee System Technology Co., Ltd. 版权所有 苏ICP备17060705号-3
                        </p>
                        <img src={footerLogo} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;