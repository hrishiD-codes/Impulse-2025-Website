

import Marque1 from './marque1.jsx';
import Marque2 from './marque2.jsx';


export default function MarqueeCombine() {
    return (
        <>
            <div className='w-full h-[20rem] bg-black '>
                <div className="pt-[5rem]">
                    <Marque2 />
                    <Marque1 />
                </div>
            </div>
        </>
    )
}