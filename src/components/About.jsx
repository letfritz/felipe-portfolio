import {motion} from "framer-motion"
import { ABOUT_CONTENT } from "../constants"

const textVariants = {
    hidden: { opacity: 0, y: 50},
    visible: {
        opacity: 1,
        y: 0,
        transition: {duration: 0.6, ease: "easeOut"}
    }
}

const About = () => {
    return(
        <section className="px-6 py-10" id="sobre">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
                Sobre
            </h1>
            <div className="h-1 w-20 mb-8 bg-white"></div>
            <div className="max-w-4xl mx-auto bg-stone-600/10 rounded-2xl p-6">
                {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                    <motion.p
                        key={index}
                        className="text-xl md:text-xl lg:text-2xl mb-10 leading-relaxed text-justify"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        variants={textVariants}>
                            {paragraph}
                    </motion.p>
                ))}
            </div>
        </section>
    )
}

export default About