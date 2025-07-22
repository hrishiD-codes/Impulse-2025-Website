
// import homeVideo from '../../assets/Videos/intro.mp4';
// import ImpulseStyle from '../ImpulseStyle/impulseStyle.jsx';

// export default function Home() {
//     return (
//         <div className="min-h-screen relative overflow-hidden">
//             <div className="min-h-screen">
//                 <video src={homeVideo} autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover opacity-25"></video>
//             <ImpulseStyle/>
//             </div>


//         </div>
//     );
// }


import homeVideo from '../../assets/Videos/intro.mp4';
import ImpulseStyle from '../ImpulseStyle/impulseStyle.jsx';
import Marque1 from '../Marquee/marquee.jsx';

export default function Home() {
    return (
        <div className="min-h-screen relative overflow-hidden">
            <div className="min-h-screen">
                <video src={homeVideo} autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover opacity-25"></video>
                <ImpulseStyle />
                <div className='translate-y-60'>
                    <Marque1 />
                </div>
            </div>
        </div>
    );
}





