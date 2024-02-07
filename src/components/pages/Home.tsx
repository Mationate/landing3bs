import HeroSection from "../organs/HeroSection"
import NewsLetter from "../organs/NewsLetter"
import Services from "../organs/Services"
import TopDestination from "../organs/TopDestination"


const Home = () => {
    return (
        <>
            <HeroSection />
            <Services />
            <TopDestination />
            {/* <BookingSteps /> */}
            {/* <Testimonials /> */}
            <NewsLetter />
        </>
    )
}

export default Home