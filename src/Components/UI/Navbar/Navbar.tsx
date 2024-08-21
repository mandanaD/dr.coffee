import logo from "../../../assets/logo.svg"
import redLogo from "../../../assets/redLogo.svg"
import Icon from "../../Icon/Icon.tsx";
import {useEffect, useState} from "react";
import "./Navbar.css"

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
    const [active, setActive] = useState<number>(-1)
    const [openNav, setOpenNav] = useState(false)
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
            <li key={index}
                onClick={() => setActive((pre)=>pre===index?-1:index)}
                className={"relative group min-h-16 lg:min-w-fit w-full lg:h-full px-1 border-b-2 border-gray-100 lg:border-none"}>
                <p className={`transition-all nav-p cursor-pointer h-16 lg:h-full flex items-center justify-between px-2 lg:px-0 lg:justify-center gap-1 ease-linear duration-200 ${active === index && "active-li"} lg:group-hover:opacity-60`}>
                    {item.title}
                    <Icon name='bx-chevron-down' size="18px"/>
                </p>
                <div
                    className={`transition-all inner-hover ease-linear duration-200 lg:group-hover:inline-block lg:hover:inline-block ${active === index && "active-item"} hidden lg:absolute bg-white text-black w-full text-start lg:text-center rounded`}
                    style={{fontSize: "12px", top: "3.6rem"}}
                >
                    {item.list.map((navItem, navIndex) => {
                        return (
                            <p key={navIndex}
                               className={"cursor-pointer py-2 px-3 lg:px-1 transition-all ease-linear duration-200 hover:text-red-600"}>
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
            <div className={"relative w-11/12 mx-auto flex h-12 items-center justify-between gap-4"}>
                {
                    isScrolled ? (
                        <img className={"w-28"} src={redLogo} alt=""/>
                    ) : (
                        <img className={"w-28"} src={logo} alt=""/>
                    )
                }
                <ul className={`${openNav ? "flex" : "hidden"} fixed nav-bar lg:bg-transparent bg-white inset-0 lg:static lg:flex flex-col lg:flex-row items-start lg:items-center h-screen lg:h-full lg:justify-between w-full px-6 lg:px-0`}
                >
                    <li className={"flex w-full justify-between items-center lg:hidden min-h-16 px-1 border-b-2 border-gray-100"}>
                        <div
                            className={`transition-all duration-200 ease-linear cursor-pointer flex items-center gap-2 font-bold`}>
                            <Icon name='bx-globe' size="20px"/>
                            <p>
                                languages
                            </p>
                            <p className={"font-light"}>
                                中文
                            </p>
                            <p className={"font-light"}>
                                |
                            </p>
                            <p className={"font-light text-red-600"}>
                                English
                            </p>
                        </div>
                        <p onClick={() => {
                            setOpenNav(false)
                            setActive(-1)
                        }}>
                            <Icon name='bx-x' color={"#c9151e"} size="32px"/>
                        </p>
                    </li>
                    {navList}
                </ul>
                <div className={`items-center gap-3 flex`}>
                    <div
                        className={`transition-all duration-200 ease-linear cursor-pointer hidden lg:flex items-center gap-1 ${isScrolled ? "text-red-700" : "hover:text-red-700"}`}>
                        <Icon name='bx-globe' size="20px"/>
                        languages
                    </div>
                    <div
                        className={`flex items-center transition-all duration-200 ease-linear cursor-pointer ${isScrolled ? "text-red-700" : "hover:text-red-700"}`}>
                        <Icon name='bx-search' size="20px"/>
                    </div>
                    <div
                        onClick={() => {
                            setOpenNav(true)
                            setActive(-1)
                        }}
                        className={`flex lg:hidden items-center transition-all duration-200 ease-linear cursor-pointer ${isScrolled ? "text-red-700" : "hover:text-red-700"}`}>
                        <Icon name='bx-menu' size="32px"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;