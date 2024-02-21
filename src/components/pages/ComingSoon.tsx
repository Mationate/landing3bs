import { Image } from "../atoms/Image";
import Logo from "../../assets/logo-white.svg"
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";
import { SubscribeForm } from "../molecules/SubscribeForm";

const ComingSoon = () => {
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);
    const openModal = () => {
        setModal(!modal);
      };
    
      const spinner = () => {
        setVideoLoading(!videoLoading);
      };

    return (
        <>
           <div style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            }}
             className=" relative h-screen w-full flex flex-col items-center justify-center text-center text-white bg-cover bg-center">
    <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-90"></div>

    <Image as="a" href="/" className="z-10 h-16 sm:h-16 md:h-24 lg:h-24" image={Logo} alt="Logo" />
    <div className="z-10 text-sm">
            <p>
            Únete a la mejor comunidad de aprendizaje en línea para barberos y entusiastas de la barbería. 
            </p>
            <p>
            ¡Suscríbete para ser el primero en enterarte de nuestro lanzamiento!
            </p>
        </div>
    {/* <Countdown/> */}
    

    <div className="rounded-md shadow z-10 mt-5">
        <button onClick={openModal}
            className="w-full py-2 px-8 relative z-10 before:content-[''] before:absolute before:left-0 before:w-full before:h-0 before:bg-color3bs before:-z-10 hover:before:h-full before:transition-all before:duration-300 before:ease-in text-base border-2 border-color3bs before:top-0"
            >
            <span>Ver video</span>
            {modal ? (
                                <section style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
                                    <div style={{ padding: '20px'}}>
                                        <IoCloseOutline
                                        onClick={openModal}
                                        arial-label="Close modal"
                                        />
                                        <div>
                                        {videoLoading ? (
                                            <div className="modal__spinner">
                                            
                                            <BiLoaderAlt
                                            />
                                            </div>
                                        ) : null}
                                        <iframe
                                            className="modal__video-style"
                                            onLoad={spinner}
                                            loading="lazy"
                                            width="800"
                                            height="500"
                                            src="https://www.youtube.com/embed/R7Ql5ngasDg?si=c1Eb0KFF4sg3fCpw"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                        </div>
                                    </div>
                                </section>
                                ) : null}
        </button>
        <div className=" py-6">
            <SubscribeForm/>    
        </div>
    </div>

</div>
        </>
    )
}

export default ComingSoon