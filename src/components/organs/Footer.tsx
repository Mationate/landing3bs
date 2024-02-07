import { Image } from "../atoms/Image"
import logo from "../../assets/logo2.png"
import { Text } from "../atoms/Text"
import { FooterTexts } from "../particles/DataLists"
import { List } from "../atoms/List"
import { Link } from "react-router-dom"
import { FacebookLogo, InstagramLogo, TwitterLogo } from "@phosphor-icons/react"
import app from "../../assets/appdownload.png"


const Footer = () => {
    return (
        <footer className="w-full flex flex-col bg-black ">
            <section className="w-full h-auto grid lg:grid-cols-5 md:grid-cols-3 lg:px-20 md:px-12 px-6 py-16 gap-7 md:gap-4 lg:gap-0">
                <div className="flex flex-col items-start gap-4">
                    <Image className="w-28" image={logo} alt="Logo" as="a" href="/" />
                    <Text className="text-sm text-white" as="p">
                        {FooterTexts.underLogoText}
                    </Text>
                </div>

                <div className="flex flex-col md:items-center gap-4 md:mt-8">
                    <Text className="text-xl text-white" as="h2">
                        {FooterTexts.quickLinks.caption}
                    </Text>
                    <ul className="flex flex-col gap-2">
                        {
                            FooterTexts.quickLinks.links.map((link, index) => (
                                <List key={index} className="text-sm">
                                    <Link to={link.url} className="text-white transition-all duration-300 hover:underline">{link.name}</Link>
                                </List>
                            ))
                        }
                    </ul>
                </div>

                <div className="flex flex-col md:items-center gap-4 md:mt-8">
                    <Text className="text-xl text-white" as="h2">
                        {FooterTexts.contacts.caption}
                    </Text>
                    <ul className="flex flex-col md:ml-12 gap-2">
                        {
                            FooterTexts.contacts.links.map((link, index) => (
                                <List key={index} className="text-sm">
                                    <Link to={link.url} className="text-white transition-all duration-300 hover:underline">{link.name}</Link>
                                </List>
                            ))
                        }
                    </ul>
                </div>

                <div className="flex flex-col lg:items-center gap-4 md:mt-8">
                    <Text className="text-xl text-white" as="h2">
                        {FooterTexts.more.caption}
                    </Text>
                    <ul className="flex flex-col gap-2 lg:ml-10">
                        {
                            FooterTexts.more.links.map((link, index) => (
                                <List key={index} className="text-sm">
                                    <Link to={link.url} className="text-white transition-all duration-300 hover:underline">{link.name}</Link>
                                </List>
                            ))
                        }
                    </ul>
                </div>

                <div className="flex flex-col lg:items-center w-full md:mt-8 gap-4">
                    <ul className="w-full flex items-center lg:justify-center gap-4">
                        <List>
                            <Link to={`/`} className="text-white border-[1px] border-white p-2.5 flex rounded-full transition-all duration-300 ease-in hover:bg-gradient-to-tr from-color1 to-color2 hover:text-white">
                                <FacebookLogo size={15} color="currentColor" weight="fill" />
                            </Link>
                        </List>
                        <List>
                            <Link to={`/`} className="text-white border-[1px] border-white p-2.5 flex rounded-full transition-all duration-300 ease-in hover:bg-gradient-to-tr from-color1 to-color2 hover:text-white">
                                <InstagramLogo size={15} color="currentColor" weight="fill" />
                            </Link>
                        </List>
                        <List>
                            <Link to={`/`} className="text-white border-[1px] border-white p-2.5 flex rounded-full transition-all duration-300 ease-in hover:bg-gradient-to-tr from-color1 to-color2 hover:text-white">
                                <TwitterLogo size={15} color="currentColor" weight="fill" />
                            </Link>
                        </List>
                    </ul>

                    <Text as="p" className="text-base font-light text-white">
                        Discover Our App
                    </Text>
                    <Image image={app} className="w-28" alt="App Download" as="a" href="/" />
                </div>
            </section>
            <Text className="text-center bg-black text-white text-xs py-6 font-light">
                Copyright 2024. 3BSLAB, Todos los derechos reservados.
            </Text>
        </footer>
    )
}

export default Footer