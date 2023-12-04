"use client"
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/variants"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, SparklesIcon, BookOpenIcon, TargetIcon, FileTextIcon } from "lucide-react"

const TabOptions = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto px-8 xl:px-0">
            <motion.div
                variants={fadeIn("right", 2.5)}
                initial="hidden"
                animate="show"
                exit="hidden"
            >
                <Card className="group w-full bg-transparent min-h-[200px]">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-x-3">
                            <div className="bg-purple-200 p-1 rounded-md text-purple-600">
                                <SparklesIcon />
                            </div>
                            <div>IA</div>
                        </CardTitle>
                        <CardDescription className="translate-y-4 whitespace-pre-wrap pt-3 text-start group-hover:-translate-y-0 transition-transform duration-800">
                            Trabalhe menos. Escreva melhor. Pense maior. Pensei mais.
                        </CardDescription>
                        <div className="opacity-0 translate-y-4 flex items-center gap-x-3 font-bold text-purple-500 group-hover:opacity-100 group-hover:-translate-y-0 transition-transform duration-800">
                            <div>
                                Learn more
                            </div>
                            <div className="p-1 bg-transparent rounded-full dark:bg-white">
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </CardHeader>
                </Card>
            </motion.div>
            <motion.div
                variants={fadeIn("right", 3)}
                initial="hidden"
                animate="show"
                exit="hidden"
            >
                <Card className="group w-full bg-transparent min-h-[200px]">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-x-3">
                            <div className="bg-rose-100 p-1 rounded-md text-orange-600">
                                <BookOpenIcon />
                            </div>
                            <div>
                                Wikis
                            </div>
                        </CardTitle>
                        <CardDescription className="translate-y-4 whitespace-pre-wrap pt-3 text-start group-hover:-translate-y-0 transition-transform duration-800">
                            Centralize seu conhecimento. Sem ficar caçando respostas.
                        </CardDescription>
                        <div className="opacity-0 translate-y-4 flex items-center gap-x-3 font-bold text-orange-700 group-hover:opacity-100 group-hover:-translate-y-0 transition-transform duration-800">
                            <div>Learn more</div>
                            <div className="p-1 bg-transparent rounded-full dark:bg-white">
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </CardHeader>
                </Card>
            </motion.div>
            <motion.div
                variants={fadeIn("left", 3.5)}
                initial="hidden"
                animate="show"
                exit="hidden"
            >
                <Card className="group w-full bg-transparent min-h-[200px]">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-x-3">
                            <div className="bg-blue-200 p-1 rounded-md text-blue-600">
                                <TargetIcon />
                            </div>
                            <div>Projetos</div>
                        </CardTitle>
                        <CardDescription className="translate-y-4 whitespace-pre-wrap pt-3 text-start group-hover:-translate-y-0 transition-transform duration-800">
                            Gerencie trabalhos complexos sem caos. Com organização.
                        </CardDescription>
                        <div className="opacity-0 translate-y-4 flex items-center gap-x-3 font-bold text-blue-500 group-hover:opacity-100 group-hover:-translate-y-0 transition-transform duration-800">
                            <div>Learn more</div>
                            <div className="p-1 bg-transparent rounded-full dark:bg-white">
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </CardHeader>
                </Card>
            </motion.div>
            <motion.div
                variants={fadeIn("left", 4)}
                initial="hidden"
                animate="show"
                exit="hidden"
            >
                <Card className="group w-full bg-transparent min-h-[200px]">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-x-3">
                            <div className="bg-yellow-200 p-1 rounded-md text-yellow-600">
                                <FileTextIcon />
                            </div>
                            <div>
                                Documentos
                            </div>
                        </CardTitle>
                        <CardDescription className="translate-y-4 whitespace-pre-wrap pt-3 text-start group-hover:-translate-y-0 transition-transform duration-800">
                            Simples, poderoso, lindo. Anotação e documentos de última geração.
                        </CardDescription>
                        <div className="opacity-0 translate-y-4 flex items-center gap-x-3 font-bold text-yellow-500 group-hover:opacity-100 group-hover:-translate-y-0 transition-transform duration-800">
                            <div>Learn more</div>
                            <div className="p-1 bg-transparent rounded-full dark:bg-white">
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </CardHeader>
                </Card>
            </motion.div>
        </div>
    )
}

export default TabOptions