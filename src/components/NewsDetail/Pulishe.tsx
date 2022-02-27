import {FaTelegramPlane,FaWhatsapp,FaEnvelope,FaLinkedinIn} from "react-icons/fa";
const Publishe=()=>{
    return(
        <div>
            <section className="w-80 h-16">
                <span className="block text-center">اشتراک گذاری </span>
                <ul className="flex w-52 h-6 mx-auto mt-2 px-10">
                    <li className="flex-row w-8 h-6 px-2">
                        <FaTelegramPlane/>
                    </li>
                    <li className="flex-row w-8 h-6 px-2">
                        <FaWhatsapp/>
                    </li>
                    <li className="flex-row w-8 h-6 px-2">
                        <FaEnvelope/>
                    </li>
                    <li className="flex-row w-8 h-6 px-2">
                        <FaLinkedinIn/> 
                    </li>
                </ul>
            </section>
        </div>
    );
}
export default Publishe;