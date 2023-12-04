"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/variants"
import { Button } from "@/components/ui/button"
import { ArrowRight, CalendarDaysIcon, CheckCircle2Icon, FlagIcon, HomeIcon, InboxIcon, ListTodoIcon, PlaneIcon } from "lucide-react"

const WaysToUse = () => {
    return (
        <div className="px-8 xl:px-0">
            <div>
                <motion.h3
                    variants={fadeIn("down", 17)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="text-3xl sm:text-5xl md:text-6xl text-center font-bold"
                >
                    Infinitas maneiras de usá-lo
                </motion.h3>
                <motion.div
                    variants={fadeIn("down", 17.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="flex justify-center"
                >
                    <Button variant="link" className="mt-4 flex items-center gap-x-1 text-blue-500 text-md dark:bg-white">
                        <div>
                            Procurar todos os modelos
                        </div>
                        <div>
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </Button>
                </motion.div>
            </div>
            <div className="relative max-w-5xl mx-auto">
                <motion.div
                    variants={fadeIn("down", 19)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="flex justify-end absolute -top-32 right-0"
                >
                    <Image
                        src="/images/homepage/waysToUse/ways-to-use-image.png"
                        width="256"
                        height="249"
                        className="dark:filter dark:invert"
                        alt="Maneiras de usá-lo"
                    />
                </motion.div>
                <div className="flex flex-col md:flex-row gap-x-4  mt-40">
                    <motion.div
                        variants={fadeIn("right", 18)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="w-full md:w-[65%] flex flex-col justify-between bg-gray-100 dark:bg-zinc-800 rounded-lg"
                    >
                        <div className="p-8">
                            <div className="flex justify-center items-center mb-4 w-10 h-10 bg-none dark:bg-white rounded-full">
                                <HomeIcon className="text-orange-600" />
                            </div>
                            <h4 className="font-bold h-[50px]">
                                Wiki da empresa
                            </h4>
                            <Button variant="link" className="text-blue-500 text-md p-0 mt-8 dark:px-3 dark:bg-white">
                                <div>
                                    Obter modelo
                                </div>
                                <div>
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </Button>
                        </div>
                        <div className="flex justify-end">
                            <Image
                                src="/images/homepage/waysToUse/company-week.png"
                                width="500"
                                height="500"
                                className="object-cover"
                                alt="Wiki da empresa"
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", 18.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <div className="flex gap-x-4 max-w-5xl mx-auto mt-8">
                            <div className="flex-1 p-6 bg-gray-100 dark:bg-zinc-800 rounded-lg">
                                <div>
                                    <div className="flex justify-center items-center mb-4 w-10 h-10 bg-none dark:bg-white rounded-full">
                                        <FlagIcon className="text-blue-600" />
                                    </div>
                                    <h4 className="font-bold h-[50px]">
                                        Roadmap do produto
                                    </h4>
                                    <Button variant="link" className="text-blue-500 text-md p-0 mt-8 dark:w-full dark:bg-white">
                                        <div>
                                            Obter modelo
                                        </div>
                                        <div>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </Button>
                                </div>
                            </div>
                            <div className="flex-1 p-6 bg-gray-100 dark:bg-zinc-800 rounded-lg">
                                <div>
                                    <div className="flex justify-center items-center mb-4 w-10 h-10 bg-none dark:bg-white rounded-full">
                                        <CheckCircle2Icon className="text-orange-600" />
                                    </div>
                                    <h4 className="font-bold h-[50px]">
                                        OKRs
                                    </h4>
                                    <Button variant="link" className="text-blue-500 text-md p-0 mt-8 dark:w-full dark:bg-white">
                                        <div>
                                            Obter modelo
                                        </div>
                                        <div>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-x-4 max-w-5xl mx-auto mt-8">
                            <div className="flex-1 p-6 bg-gray-100 dark:bg-zinc-800 rounded-lg">
                                <div>
                                    <div className="flex justify-center items-center mb-4 w-10 h-10 bg-none dark:bg-white rounded-full">
                                        <ListTodoIcon className="text-yellow-600" />
                                    </div>
                                    <h4 className="font-bold h-[50px]">
                                        Anotações de reunião
                                    </h4>
                                    <Button variant="link" className="text-blue-500 text-md p-0 mt-8 dark:w-full dark:bg-white">
                                        <div>
                                            Obter modelo
                                        </div>
                                        <div>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </Button>
                                </div>
                            </div>
                            <div className="flex-1 p-6 bg-gray-100 dark:bg-zinc-800 rounded-lg">
                                <div>
                                    <div className="flex justify-center items-center mb-4 w-10 h-10 bg-none dark:bg-white rounded-full">
                                        <PlaneIcon className="text-black" />
                                    </div>
                                    <h4 className="font-bold h-[50px]">
                                        Planejador de férias
                                    </h4>
                                    <Button variant="link" className="text-blue-500 text-md p-0 mt-8 dark:w-full dark:bg-white">
                                        <div>
                                            Obter modelo
                                        </div>
                                        <div>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-x-4 max-w-5xl mx-auto mt-8">
                            <div className="flex-1 p-6 bg-gray-100 dark:bg-zinc-800 rounded-lg">
                                <div>
                                    <div className="flex justify-center items-center mb-4 w-10 h-10 bg-none dark:bg-white rounded-full">
                                        <CalendarDaysIcon className="text-green-600" />
                                    </div>
                                    <h4 className="font-bold h-[50px]">
                                        Calendário editorial
                                    </h4>
                                    <Button variant="link" className="text-blue-500 text-md p-0 mt-8 dark:w-full dark:bg-white">
                                        <div>
                                            Obter modelo
                                        </div>
                                        <div>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </Button>
                                </div>
                            </div>
                            <div className="flex-1 p-6 bg-gray-100 dark:bg-zinc-800 rounded-lg">
                                <div>
                                    <div className="flex justify-center items-center mb-4 w-10 h-10 bg-none dark:bg-white rounded-full">
                                        <InboxIcon className="text-purple-600" />
                                    </div>
                                    <h4 className="font-bold h-[50px]">
                                        Rastreador de hábitos
                                    </h4>
                                    <Button variant="link" className="text-blue-500 text-md p-0 mt-8 dark:w-full dark:bg-white">
                                        <div>
                                            Obter modelo
                                        </div>
                                        <div>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default WaysToUse