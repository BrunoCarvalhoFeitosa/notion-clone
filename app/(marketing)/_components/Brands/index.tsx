"use client"
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/variants"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Nike from "@/public/images/icons/nike"
import Figma from "@/public/images/icons/figma"
import Amazon from "@/public/images/icons/amazon"
import Pinterest from "@/public/images/icons/pinterest"
import Uber from "@/public/images/icons/uber"
import Pixar from "@/public/images/icons/pixar"
import Toyota from "@/public/images/icons/toyota"
import GeneralElectric from "@/public/images/icons/general-electric"

const Brands = () => {
    return (
        <div className="max-w-5xl mx-auto pt-16 md:pt-32 px-8 xl:px-0">
            <div>
                <motion.h3
                    variants={fadeIn("down", 5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="text-3xl sm:text-5xl md:text-6xl text-center font-bold"
                    >
                    Milhões de pessoas usam o Notion todos os dias
                </motion.h3>
                <motion.p
                    variants={fadeIn("down", 5.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="text-center pt-6 px-8"
                >
                    Capacitando as melhores equipes do mundo, das novas startups às grandes empresas.
                </motion.p>
            </div>
            <motion.div
                variants={fadeIn("down", 6)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mt-4 flex justify-center"
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
            <motion.div
                variants={fadeIn("up", 6.5)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="grid grid-cols-2 md:grid-cols-4 place-items-center place-content-center gap-x-8 mt-12"
            >
                <div className="flex justify-center items-center h-[120px]">
                    <Figma width="90" height="30" />
                </div>
                <div className="flex justify-center items-center h-[120px]">
                    <Nike width="90" />
                </div>
                <div className="flex justify-center items-center h-[120px]">
                    <Amazon width="90" height="30" />
                </div>
                <div className="flex justify-center items-center h-[120px]">
                    <Pinterest width="90" height="40" />
                </div>
                <div className="flex justify-center items-center h-[120px]">
                    <GeneralElectric width="55" height="55" />
                </div>
                <div className="flex justify-center items-center h-[120px]">
                    <Uber width="70" height="30" />
                </div>
                <div className="flex justify-center items-center h-[120px]">
                    <Pixar width="200" height="120" />
                </div>
                <div className="flex justify-center items-center h-[120px]">
                    <Toyota width="130" height="120" />
                </div>
            </motion.div>
        </div>
    )
}

export default Brands