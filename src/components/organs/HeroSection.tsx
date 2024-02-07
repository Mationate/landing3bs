import { Image } from "../atoms/Image"
import "./styles.css";
import bgImage from "../../assets/HeroVector3bs.png"
import heroImage from "../../assets/hero-img.png"
import { Text } from "../atoms/Text"
import { HeroTexts } from "../particles/DataLists"
import { Button } from "../atoms/Button"
import { Play } from "@phosphor-icons/react"
import { Fade, Slide } from "react-awesome-reveal"
import { useState } from "react"
import { IoCloseOutline } from "react-icons/io5"
import { BiLoaderAlt } from "react-icons/bi"



  
const HeroSection = () => {
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);
    const openModal = () => {
        setModal(!modal);
      };
    
      const spinner = () => {
        setVideoLoading(!videoLoading);
      };


    return (
        <section className="w-full lg:h-screen md:h-[550px] h-[830px] relative overflow-x-hidden flex justify-end">
            <Image className="h-[60%] w-[80%] lg:h-[90vh] md:h-[50vh] lg:w-1/2 md:w-[55%]" image={bgImage} alt="Hero Background Vector" />
            <main className="w-full lg:h-full h-auto grid md:grid-cols-2 absolute top-0 left-0 lg:px-24 md:px-8 px-5 pt-24 md:pt-32 lg:pt-0">
                <div className="flex flex-col justify-center md:gap-6 gap-3 md:order-1 order-2">
                    <Text as="p" className="text-white uppercase tracking-widest lg:text-base  text-sm font-normal">
                        <Fade>{HeroTexts.firstText}</Fade>
                    </Text>
                    <Text as="h1" className=" text-white lg:text-7xl md:text-5xl text-3xl font-medium">
                        <Fade>{HeroTexts.secondText}</Fade>
                    </Text>
                    <Text as="p" className="text-white md:text-base text-sm text-justify font-light">
                        <Fade>{HeroTexts.thirdText}</Fade>
                    </Text>
                    <div className="w-full flex md:justify-start justify-between items-center lg:gap-12 md:gap-6 gap-0">
                        <Button type="button" className="outline-none border-none lg:px-7 px-5 py-3 bg-white text-black font-extralight rounded-lg">
                            {HeroTexts.firstButton}
                        </Button>
                        <div className="flex items-center lg:gap-6 gap-3 cursor-pointer">
                            <Text as="span" className="relative flex h-14 w-14">
                                <Text as="span" className="animate-ping absolute inline-flex h-full w-full rounded-full bg-color3bs opacity-75"></Text>
                                <Text as="span" className="relative flex justify-center items-center text-white rounded-full h-14 w-14 bg-white">
                                    <Play onClick={openModal} size={20} color="black" weight="fill" />
                                </Text>
                            </Text>
                            <button onClick={openModal} className="outline-none border-none">
                            {HeroTexts.secondButton}
                                {modal ? (
                                <section className="modal__bg">
                                    <div className="modal__align">
                                    <div className="modal__content" >
                                        <IoCloseOutline
                                        className="modal__close"
                                        arial-label="Close modal"
                                        />
                                        <div className="modal__video-align">
                                        {videoLoading ? (
                                            <div className="modal__spinner">
                                            <BiLoaderAlt
                                                className="modal__spinner-style"
                                            />
                                            </div>
                                        ) : null}
                                        <iframe
                                            className="modal__video-style"
                                            onLoad={spinner}
                                            loading="lazy"
                                            width="800"
                                            height="500"
                                            src="https://www.youtube.com/embed/4UZrsTqkcW4"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                        </div>
                                    </div>
                                    </div>
                                </section>
                                ) : null}
                            </button>

                        </div>

                    </div>
                </div>
                <div className="flex flex-col  justify-end md:order-2 order-1">
                    <Slide direction="right">
                        {/* <div className="h-[60%] w-[80%] lg:h-[90vh] md:h-[50vh] lg:w-1/2 md:w-[55%]">
                            <ReactPlayer controls url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
                        </div> */}
                        <Image image={heroImage} alt="Hero Image" className=" lg:h-[85%] lg:w-[90%] md:h-[100%] md:w-full w-[90%] h-[50vh]" />
                    </Slide>

                </div>
            </main>
        </section>
    )
}

export default HeroSection