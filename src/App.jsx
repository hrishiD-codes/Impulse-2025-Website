
import { useState } from 'react';
import Preloader from './components/Preloader/preloader.jsx';
import Navbar from './components/Navbar/navbar.jsx';
import Home from './components/Home/home.jsx';
import Footer from './components/Footer/footer.jsx';
import Events from './components/Eventspages/event.jsx';
import Organizer from './components/Organizer/organizer.jsx';

const App = () => {
    const [isPreloaderDone, setIsPreloaderDone] = useState(false);

    return (
        <>
            {isPreloaderDone ? <Home /> : <Preloader onFinish={() => setIsPreloaderDone(true)} />}
            <Navbar />
            <Events/>
            <Organizer/>
            <Footer />
        </>
    );
};

export default App;
