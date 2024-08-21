import logo from "../../../assets/logo.svg"
import redLogo from "../../../assets/redLogo.svg"
import Icon from "../../Icon/Icon.tsx";
import {useEffect, useState} from "react";

const Navbar = () => {
    const navItems = [
        {
            title: "Product Series",
            list: [
                "Coffee shop",
                "CVS & Ho.Re.Ca",
                "OCS",
                "Home",
                "Accessories",
                "Shop now"
            ]
        },
        {
            title: "Service & Support",
            list: [
                "Our principles",
                "Contact specialist",
                "FAQs",
                " Watch tutorial",
                " Download manual"
            ]
        },
        {
            title: "About Us",
            list: [
                "Company",
                "Our business",
                "Our technology",
                " Our quality",
                "Contact Us"
            ]
        },
        {
            title: "Brand Center",
            list: [
                "News",
                "Videos",
                "Pictures"
            ]
        },
        {
            title: "Coffee Academy",
            list: [
                "Introduction",
                "Coffee experts",
                " Course center",
                "Photos",
                "Consult now"
            ]
        },
    ]

    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navList = navItems.map((item, index) => {
        return (
            <li key={index} className={"relative group h-full px-1"}>
                <p className={"transition-all cursor-pointer h-full flex items-center gap-1 ease-linear duration-200 group-hover:opacity-60"}>
                    {item.title}
                    <Icon name='bx-chevron-down' size="18px"/>
                </p>
                <div
                    className={"transition-all ease-linear duration-200 group-hover:inline-block hover:inline-block hidden absolute bg-white text-black w-full text-center rounded"}
                    style={{fontSize: "12px", boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)", top: "3.1rem"}}
                >
                    {item.list.map((navItem, navIndex) => {
                        return (
                            <p key={navIndex}
                               className={"cursor-pointer py-2 px-1 transition-all ease-linear duration-200 hover:text-red-600"}>
                                {navItem}
                            </p>
                        )
                    })}
                </div>
            </li>
        )
    })

    return (
        <div
            className={`w-full fixed top-0 z-50 transition-all ease-linear duration-200 ${isScrolled ? "bg-white text-black border-b-2 border-gray-200" : "bg-transparent text-white"} font-light`}
            style={{fontSize: "13px"}}
        >
            <div className={"w-11/12 mx-auto flex h-12 items-center justify-between gap-4"}>
                {
                    isScrolled ? (
                        <img className={"w-28"} src={redLogo} alt=""/>
                    ) : (
                        <img className={"w-28"} src={logo} alt=""/>
                    )
                }
                <ul className={"flex items-center h-full justify-between w-full"}
                    style={{maxWidth: "43rem"}}
                >
                    {navList}
                </ul>
                <div className={`flex items-center gap-3`}>
                    <div
                        className={`transition-all duration-200 ease-linear cursor-pointer flex items-center gap-1 ${isScrolled ? "text-red-700" : "hover:text-red-700"}`}>
                        <Icon name='bx-globe' size="20px"/>
                        languages
                    </div>
                    <div
                        className={`flex items-center transition-all duration-200 ease-linear cursor-pointer ${isScrolled ? "text-red-700" : "hover:text-red-700"}`}>
                        <Icon name='bx-search' size="20px"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;