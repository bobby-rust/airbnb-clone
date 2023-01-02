import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Announcement from "./components/Announcement";

function App() {
    return (
        <>
            <Announcement />
            <div className='App'>
                <Header />
                <Navbar />
            </div>
        </>
    );
}

export default App;
