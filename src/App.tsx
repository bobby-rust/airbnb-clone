import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Announcement from "./components/announcement/Announcement";
import Listings from "./components/listings/Listings";

function App() {
    return (
        <>
            <Announcement />
            <div className='App'>
                <Header />
                <Navbar />
                <Listings />
            </div>
        </>
    );
}

export default App;
