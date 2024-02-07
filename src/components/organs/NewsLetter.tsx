import { Image } from "../atoms/Image"
import { Text } from "../atoms/Text"
import { SubscribeForm } from "../molecules/SubscribeForm"
import { NewsletterTexts } from "../particles/DataLists"
import groupOfPlus from "../../assets/plusGroup2.png"


const NewsLetter = () => {
    return (
        <section className="w-full my-32 flex justify-between relative items-start h-[400px]">
            <div className="w-full bg-color3/5 h-[100%] absolute flex flex-col items-center
            justify-center md:gap-16 gap-10 px-5">
                <Text as="h1" className="lg:text-3xl md:text-2xl text-xl text-center text-white lg:w-3/5 w-full">
                    {NewsletterTexts.firstText}
                </Text>
                <SubscribeForm />
            </div>
            <Image image={groupOfPlus} alt="Plus" className="absolute -bottom-16 right-2 h-32" />
        </section>
    )
}

export default NewsLetter