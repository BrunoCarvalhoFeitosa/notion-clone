"use client"
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/variants"

const Usage = () => {
    return (
        <div className="max-w-5xl mx-auto py-16 md:py-32 px-8 lg:px-0">
            <div>
                <motion.div
                    variants={fadeIn("down", 6.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="lg:w-[520px] mx-auto"
                >
                    <h2 className="text-3xl sm:text-4xl text-center font-bold">
                        Consolide as ferramentas. Reduza os custos.
                    </h2>
                </motion.div>
                <div className="md:w-3/4 mx-auto mt-12">
                    <motion.div
                        variants={fadeIn("down", 7)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <p className="font-serif text-xl md:text-3xl text-center">
                            "Nós nos desfizemos de uma dúzia de ferramentas diferentes por causa do que o Notion nos proporciona."
                        </p>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("up", 7.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="mt-3 text-end"
                    >
                        <p className="text-sm md:text-md font-bold">
                            Justin Watt
                        </p>
                        <p className="text-sm md:text-md">
                            Diretor de operações e marketing, MetaLab
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Usage