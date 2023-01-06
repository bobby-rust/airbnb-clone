import "../header/header.css";

const Announcement = () => {
    const handleClick = () => {
        console.log("you learned more");
    };
    return (
        <div className='announcement-container'>
            <div className='announcement-text'>
                Show total prices up front{" "}
                <a onClick={handleClick}>Learn more</a>
            </div>
        </div>
    );
};

export default Announcement;
