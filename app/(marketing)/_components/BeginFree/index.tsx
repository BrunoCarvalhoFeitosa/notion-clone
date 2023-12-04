"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/variants"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const BeginFree = () => {
    return (
        <div className="max-w-5xl mx-auto pt-16 md:pt-32">
            <div>
                <motion.h3
                    variants={fadeIn("down", 19.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="text-3xl sm:text-5xl md:text-6xl text-center font-bold"
                >
                    Comece gratuitamente
                </motion.h3>
                <motion.p
                    variants={fadeIn("down", 20)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="text-center py-6 px-8"
                >
                    Experimente o produto primeiro. Pague e adicione sua equipe depois.
                </motion.p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-y-2 gap-x-2">
                <motion.div
                    variants={fadeIn("right", 20.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="text-center py-6 px-8"
                >
                    <Button variant="default" className="font-bold text-md">
                        Teste o Notion gratuitamente
                    </Button>
                </motion.div>
                <motion.div
                    variants={fadeIn("left", 21)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="text-center px-8"
                >
                    <Button variant="link" className="text-blue-500 text-md flex gap-x-1 dark:bg-white">
                        <div>
                            Fale com a equipe de vendas
                        </div>
                        <div>
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </Button>
                </motion.div>
            </div>
            <motion.div
                variants={fadeIn("up", 21.5)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex justify-center mt-12"
            >
                <figure>
                    <Image
                        src="/images/homepage/beginFree/begin-free-image.png"
                        width="700"
                        height="500"
                        className="object-cover dark:filter dark:invert"
                        alt="Comece gratuitamente"
                    />
                </figure>
            </motion.div>
        </div>
    )
}

export default BeginFree