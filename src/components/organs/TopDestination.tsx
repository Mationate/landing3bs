import { useCallback, useRef } from "react";
import { Text } from "../atoms/Text"
import { TopDestinationTexts } from "../particles/DataLists"
import Slider from "react-slick";
import { Card } from "../molecules/Card";
import City1 from "../../assets/gallery1.jpeg"
import City2 from "../../assets/gallery2.jpeg"
import City3 from "../../assets/gallery3.jpeg"
import City4 from "../../assets/gallery4.jpeg"
import City5 from "../../assets/gallery5.jpeg"
import City6 from "../../assets/gallery6.jpeg"
import { Button } from "../atoms/Button";
import { Book, CaretLeft, CaretRight } from "@phosphor-icons/react";


const TopDestination = () => {

    const sliderRef = useRef<Slider | null>();

    // Function for next button
    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();

        }
    };
    // function for previous button
    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }

    };

    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <></>,
        nextArrow: <></>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };

    const renderCities = useCallback((element: number) => {
        switch (element) {
            case 0:
                return City1;
            case 1:
                return City2;
            case 2:
                return City3;
            case 3:
                return City4;
            case 4:
                return City5;
            case 5:
                return City6;
            default:
                return "";
        }
    }, [])

    return (
        <section className="w-full h-auto flex flex-col items-center justify-center relative lg:px-24 md:px-20 px-6 my-20">
            <Text as="p" className="font-light text-base text-white tracking-widest">
                {TopDestinationTexts.firstText}
            </Text>
            <Text as="h2" className="md:text-4xl text-2xl font-medium capitalize text-white">
                {TopDestinationTexts.secondText}
            </Text>

            {/* Controllers  */}
            <div className="mt-12 w-full flex justify-end gap-5 items-center md:px-6 px-3">
                <Button onClick={previous} className="cursor-pointer outline-none border-none bg-color3bs text-white hover:bg-color3bs p-2 rounded-full" type="button">
                    <CaretLeft size={20} color="currentColor" weight="fill" />
                </Button>
                <Button onClick={next} className="cursor-pointer outline-none border-none bg-color3bs text-white hover:bg-color3bs p-2 rounded-full" type="button">
                    <CaretRight size={20} color="currentColor" weight="fill" />
                </Button>
            </div>

            {/* Slides  */}
            <div className="w-full h-auto mt-4">
                <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
                    {
                        TopDestinationTexts.cards.map((card, index) => (
                            <div key={index} className="md:px-6 px-3">
                                <Card cardClass="overflow-hidden shadow-md rounded-lg cursor-pointer group" imageAlt={card.country} imageSrc={renderCities(index)} imageWrapperClass="w-full h-[500px] overflow-hidden object-cover" cover="group-hover:scale-125 transition duration-500 ease object-cover" textWrapperClass="flex flex-col gap-4 w-full px-5 py-5">
                                    <div className="flex justify-between items-center">
                                        <Text as="h4" className="text-base font-medium text-white">
                                            {card.country}
                                        </Text>

                                    </div>
                                    <div className="w-full flex gap-4 items-center text-white">
                                        <Book size={20} color="currentColor" weight="fill" />
                                        <Text as="p" className=" text-white font-light text-base">
                                            {card.duration}
                                        </Text>
                                    </div>
                                </Card>
                            </div>
                        ))
                    }
                </Slider>
            </div>

        </section>
    )
}

export default TopDestination