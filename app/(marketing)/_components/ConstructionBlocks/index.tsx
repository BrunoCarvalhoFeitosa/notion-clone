"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/variants"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShuffleIcon, EyeIcon, PaletteIcon } from "lucide-react"

const ConstructionBlocks = () => {
    return (
        <div className="max-w-5xl mx-auto px-8 xl:px-0">
            <motion.h3
                variants={fadeIn("down", 8)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="text-3xl sm:text-5xl md:text-6xl text-center font-bold"
            >
                Blocos de construção poderosos
            </motion.h3>
            <div className="relative top-4 mt-8 z-10">
                <figure>
                    <Image
                        src="/images/homepage/constructionBlocks/construction-blocks-image.png"
                        width="256"
                        height="173"
                        className="dark:filter dark:invert"
                        alt="Imagem blocos de construção"
                    />
                </figure>
            </div>
            <div className="w-full p-8 bg-gray-100 dark:bg-zinc-800 rounded-lg">
                <motion.div
                    variants={fadeIn("down", 8.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    <div className="flex justify-center items-center mb-4 w-10 h-10 bg-none dark:bg-white rounded-full">
                        <ShuffleIcon className="text-blue-500" />
                    </div>
                    <div>
                        <h4 className="mb-2 text-md md:text-lg font-bold">
                            Visualize, filtre e ordene como quiser
                        </h4>
                        <p className="text-sm md:text-md md:w-[450px] lg:w-auto">
                            Exiba apenas tarefas atribuídas a você ou itens marcados como urgentes. Divida qualquer projeto do jeito que for mais prático para as suas necessidades.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeIn("up", 9)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    <Tabs defaultValue="frame" className="w-full mt-10">
                        <TabsContent value="frame" className="min-h-fit xl:min-h-[600px]">
                            <Card>
                                <CardContent className="p-0 space-y-2">
                                    <img
                                        src="/images/homepage/constructionBlocks/construction-blocks-frame.jpg"
                                        alt="Construção de blocos: quadro"
                                        className="w-full rounded-lg"
                                    />
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="table" className="min-h-fit xl:min-h-[600px]">
                            <Card>
                                <CardContent className="p-0 space-y-2">
                                    <img
                                        src="/images/homepage/constructionBlocks/construction-blocks-table.jpg"
                                        alt="Construção de blocos: tabela"
                                        className="w-full rounded-lg"
                                    />
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="timeline" className="min-h-fit xl:min-h-[600px]">
                            <Card>
                                <CardContent className="p-0 space-y-2">
                                    <img
                                        src="/images/homepage/constructionBlocks/construction-blocks-timeline.jpg"
                                        alt="Construção de blocos: cronograma"
                                        className="w-full rounded-lg"
                                    />
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="calendar" className="min-h-fit xl:min-h-[600px]">
                            <Card>
                                <CardContent className="p-0 space-y-2">
                                    <img
                                        src="/images/homepage/constructionBlocks/construction-blocks-calendar.jpg"
                                        alt="Construção de blocos: calendário"
                                        className="w-full rounded-lg"
                                    />
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="gallery" className="min-h-fit xl:min-h-[600px]">
                            <Card>
                                <CardContent className="p-0 space-y-2">
                                    <img
                                        src="/images/homepage/constructionBlocks/construction-blocks-gallery.jpg"
                                        alt="Construção de blocos: galeria"
                                        className="w-full rounded-lg"
                                    />
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="list" className="min-h-fit xl:min-h-[600px]">
                            <Card>
                                <CardContent className="p-0 space-y-2">
                                    <img
                                        src="/images/homepage/constructionBlocks/construction-blocks-list.jpg"
                                        alt="Construção de blocos: lista"
                                        className="w-full rounded-lg"
                                    />
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsList className="flex flex-wrap w-full mt-4">
                            <TabsTrigger value="frame">
                                Quadro
                            </TabsTrigger>
                            <TabsTrigger value="table">
                                Tabela
                            </TabsTrigger>
                            <TabsTrigger value="timeline">
                                Cronograma
                            </TabsTrigger>
                            <TabsTrigger value="calendar">
                                Calendário
                            </TabsTrigger>
                            <TabsTrigger value="gallery">
                                Galeria
                            </TabsTrigger>
                            <TabsTrigger value="list">
                                Lista
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </motion.div>
            </div>
            <div className="flex items-center flex-col lg:flex-row gap-y-12 lg:gay-0 gap-x-6 mt-8 w-full">
                <motion.div
                    variants={fadeIn("right", 9.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="flex-1 bg-gray-100 dark:bg-zinc-800 rounded-lg"
                >
                    <div className="p-8">
                        <div className="flex justify-center items-center mb-4 w-10 h-10 bg-none dark:bg-white rounded-full">
                            <EyeIcon className="text-blue-500" />
                        </div>
                        <div>
                            <h4 className="mb-2 text-md md:text-lg font-bold">
                                Personalize as informações que você acompanha
                            </h4>
                            <p className="text-sm md:text-md md:w-[450px] lg:w-auto">
                                Crie etiquetas, tags, proprietários e muito mais, para que todos tenham contexto e tudo fique organizado.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <img
                            src="/images/homepage/constructionBlocks/construction-blocks-customize-info.png"
                            className="w-[92%] object-cover"
                            alt="Customização"
                        />
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeIn("left", 10)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="flex-1 bg-gray-100 dark:bg-zinc-800 rounded-lg"
                >
                    <div className="p-8">
                        <div className="flex justify-center items-center mb-4 w-10 h-10 bg-none dark:bg-white rounded-full">
                            <PaletteIcon className="text-blue-500" />
                        </div>
                        <div>
                            <h4 className="mb-2 text-md md:text-lg font-bold">
                                Crie qualquer página, comunique qualquer ideia
                            </h4>
                            <p className="text-sm md:text-md md:w-[450px] lg:w-auto">
                                Tudo no Notion é baseado na função arrastar e soltar: imagens, alternâncias, tarefas e até bases de dados incorporadas.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <img
                            src="/images/homepage/constructionBlocks/construction-blocks-build-any-page-communicate-any-idea.png"
                            className="w-[92%] object-cover"
                            alt="Customização"
                        />
                    </div>
                </motion.div>
            </div>
            <div className="w-full mt-12">
                <div className="flex flex-col items-end justify-end">
                    <motion.div
                        variants={fadeIn("down", 10.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="w-3/4"
                    >
                        <p className="font-serif text-xl md:text-3xl text-center">
                            "O Notion se adapta às suas necessidades, podendo ser tão minimalista ou complexo quanto você quiser."
                        </p>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("up", 11)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="mt-3 text-end"
                    >
                        <p className="text-sm md:text-md font-bold">
                            Rahim Makani
                        </p>
                        <p className="text-sm md:text-md">
                            Diretor de produto, Matchgroup
                        </p>
                    </motion.div>
                </div>
                </div>
        </div>
    )
}

export default ConstructionBlocks