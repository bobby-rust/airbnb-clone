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
        slidesToScroll: 6,
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
                            navbarIcons.map(icon => {
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
                <button className='filter-button'>
                    <svg
                        viewBox='0 0 16 16'
                        xmlns='http://www.w3.org/2000/svg'
                        style={{
                            display: "block",
                            height: "14px",
                            width: "14px",
                            fill: "currentColor",
                        }}
                        aria-hidden='true'
                        role='presentation'
                        focusable='false'>
                        <path d='M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z'></path>
                    </svg>
                    <div className='filters-text'>Filters</div>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
