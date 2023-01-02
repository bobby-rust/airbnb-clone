import Slider from "react-slick";
import data from "../data.json";
import NavbarIcon from "./NavbarIcon";
import NavbarLeftArrow from "./NavbarLeftArrow";
import NavbarRightArrow from "./NavbarRightArrow";
import "./navbar.css";

const Navbar = () => {
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 13,
        slidesToScroll: 9,
        nextArrow: <NavbarRightArrow />,
        prevArrow: <NavbarLeftArrow />,
        speed: 600,
        className: "slider-container",
        variableWidth: true,
    };
    console.log(
        data.data.presentation.explore.sections.sections[0].section.filterItems
    );
    const navbarIcons =
        data.data.presentation.explore.sections.sections[0].section.filterItems;
    return (
        <div className='navbar-container'>
            <div className='slider-container-container'>
                <div className='slider-container'>
                    <Slider {...settings}>
                        {navbarIcons &&
                            navbarIcons.map((icon) => {
                                return (
                                    <NavbarIcon
                                        img={icon.imageUrl}
                                        title={icon.title}
                                    />
                                );
                            })}
                    </Slider>
                </div>
            </div>
            <div className='filter-button-container'>
                <button className='filter-button'>Filters</button>
            </div>
        </div>
    );
};

export default Navbar;
