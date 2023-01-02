function NavbarRightArrow(props: any) {
    const { className, style, onClick } = props;
    const arrowStyles = {
        display: "block",
        fill: "none",
        height: "12px",
        width: "12px",
        stroke: "black",
        strokeWidth: "5.33333",
        overflow: "visible",
    };
    return (
        <div className={className} style={{ ...arrowStyles }} onClick={onClick}>
            <div className='arrow-wrapper arrow-wrapper-right'>
                <svg
                    viewBox='0 0 32 32'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                    role='presentation'
                    focusable='false'
                    style={{ ...arrowStyles }}>
                    <g fill='none'>
                        <path d='m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932'></path>
                    </g>
                </svg>
            </div>
        </div>
    );
}

export default NavbarRightArrow;
