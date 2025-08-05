
// import homeVideo from '../../assets/Videos/intro.mp4';
import homeVideo from '../../../public/videos/coverpage.mp4';
import Logo from '../../../public/Images/logo.jpg'

export default function Home() {
    return (
        <div className="min-h-screen relative overflow-hidden select-none">
            <div className="min-h-screen">
                <video 
                    src={homeVideo} 
                    autoPlay 
                    loop 
                    muted 
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
                ></video>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center z-1 px-4 sm:px-6 lg:px-8">
                    {/* Homepage Logo */}
                    <div className="mb-4 sm:mb-6 lg:mb-5">
                        <img 
                            src={Logo} 
                            alt="Impulse Logo" 
                            className="w-20 h-auto md:w-25 lg:w-30 xl:w-35 object-contain rounded-2xl"
                        />
                    </div>
                    
                    {/* Main Text */}
                    <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white">
                            Impulse
                        </h1>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-extrabold text-white leading-tight">
                            Storylines
                        </h1>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-md sm:max-w-none">
                        <button className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105 text-black font-semibold px-6 py-3 sm:px-8 sm:py-3 lg:px-10 lg:py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base lg:text-lg cursor-pointer">
                            Brochure
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}