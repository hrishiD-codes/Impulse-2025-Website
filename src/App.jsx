
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader/preloader.jsx';
import Navbar from './components/Navbar/navbar.jsx';
import Home from './components/Home/home.jsx';
import AboutImpulse from './components/AboutImpulse/aboutImpulse.jsx';
import ShadesOfImpulse from './components/shades/shades.jsx';
import Events from './components/Eventspages/event.jsx';
import MarqueeCombine from './components/Marquee/marqueCombine.jsx';
// import Organizer from './components/Organizer/organizer.jsx';
import Faq from './components/Faq/faq.jsx';
import Footer from './components/Footer/footer.jsx';
import Teams from './components/Teams/teams.jsx';

// Homepage content component
const HomePage = () => {
    const [isPreloaderDone, setIsPreloaderDone] = useState(false);
    return (
        <>
            {isPreloaderDone ? <Home /> : <Preloader onFinish={() => setIsPreloaderDone(true)} />}
            <div id="about">
                <AboutImpulse />
            </div>
            <div id="shades">
                <ShadesOfImpulse />
            </div>
            <div id="events">
                <Events />
            </div>
            <MarqueeCombine />
            <Faq />
            {/* <Organizer/> */}
            <Footer />
        </>
    );
};

const AppLayout = ({ children }) => {
    return (
        <>
            <>
                <Navbar />
                {children}
            </>
        </>
    );
};

const App = () => {
    return (
        <Router>
            <AppLayout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/teams" element={<Teams />} />
                </Routes>
            </AppLayout>
        </Router>
    );
};

export default App;