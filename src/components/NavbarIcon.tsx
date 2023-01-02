type NavbarIconProps = {
    img: string;
    title: string;
};

const NavbarIcon = (props: NavbarIconProps) => {
    return (
        <div className='navbar-icon'>
            <img src={props.img} alt={props.title} />
            <div className='navbar-title-container'>
                <span className='navbar-title'>{props.title}</span>
            </div>
            <div className='navbar-icon-underline'></div>
        </div>
    );
};

export default NavbarIcon;
