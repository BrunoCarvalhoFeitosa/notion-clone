"use client"
import Slider from "react-slick"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/variants"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const GlobalMovement = () => {
    const settings = {
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        variableHeight: true
    }

    return (
        <div className="max-w-5xl mx-auto py-16 md:py-32 px-8 xl:px-0">
            <div>
                <motion.h3
                    variants={fadeIn("down", 11.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="text-3xl sm:text-5xl md:text-6xl text-center font-bold"
                >
                    Participe de um movimento global. Libere sua criatividade.
                </motion.h3>
                <motion.p
                    variants={fadeIn("down", 12)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="text-center py-2 px-8"
                >
                    Nossa comunidade vibrante produz conteúdos, ensina cursos e organiza eventos em todo o mundo.
                </motion.p>
            </div>
            <motion.div
                variants={fadeIn("down", 12.5)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex justify-center"
            >
                <Button variant="link" className="mt-4 flex items-center gap-x-1 text-blue-500 text-md dark:bg-white">
                    <div>
                        Saiba mais
                    </div>
                    <div>
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </Button>
            </motion.div>
            <motion.div
                variants={fadeIn("right", 13)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="w-full flex justify-center pt-12 pb-6"
            >
                <figure>
                    <Image
                        src="/images/homepage/globalMovement/global-movement-image.png"
                        width="970"
                        height="121"
                        className="object-cover dark:filter dark:invert"
                        alt="Movimento global"
                    />
                </figure>
            </motion.div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-y-4 md:gap-y-0 gap-x-5">
                <motion.div
                    variants={fadeIn("right", 13.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="w-full md:w-[33%] md:min-h-[240px] p-8 bg-gray-100 dark:bg-zinc-800 rounded-lg"
                >
                    <h4 className="text-3xl md:text-4xl lg:text-6xl font-bold text-blue-500">
                        Mais de 1 milhão
                    </h4>
                    <p className="mt-3 text-xs md:text-lg font-medium">
                        de membros na comunidade
                    </p>
                </motion.div>
                <motion.div
                    variants={fadeIn("up", 14)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="w-full md:w-[33%] md:min-h-[240px] p-8 bg-gray-100 dark:bg-zinc-800 rounded-lg"
                >
                    <h4 className="text-3xl md:text-4xl lg:text-6xl font-bold text-blue-500">
                        Mais de 150
                    </h4>
                    <p className="mt-3 text-xs md:text-lg font-medium">
                        grupos comunidades
                    </p>
                </motion.div>
                <motion.div
                    variants={fadeIn("left", 14.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="w-full md:w-[33%] md:min-h-[240px] p-8 bg-gray-100 dark:bg-zinc-800 rounded-lg"
                >
                    <h4 className="text-3xl md:text-4xl lg:text-6xl font-bold text-blue-500">
                        Mais de 50
                    </h4>
                    <p className="mt-3 text-xs md:text-lg font-medium">
                        países representados
                    </p>
                </motion.div>
            </div>
            <div className="flex items-center flex-col lg:flex-row gap-y-12 lg:gay-0 gap-x-6 mt-8 w-full">
                <motion.div
                    variants={fadeIn("down", 15)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="flex flex-col justify-between flex-1 w-full md:min-h-[450px] bg-gray-100 dark:bg-zinc-800 rounded-lg"
                >
                    <div className="p-8">
                        <div>
                            <h4 className="text-lg font-bold">
                                Uma rede de apoio sempre ativa
                            </h4>
                            <p className="text-md md:w-[450px] lg:w-auto">
                                Troque configurações e compartilhe dicas em mais de 149 comunidades online.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src="/images/homepage/globalMovement/global-movement-community-image.png"
                            className="object-cover md:w-[65%]"
                            alt="Uma rede de apoio sempre ativa"
                        />
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeIn("left", 15.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="flex flex-col justify-between flex-1 w-full md:min-h-[450px] bg-gray-100 dark:bg-zinc-800 rounded-lg"
                >
                    <div className="p-8">
                        <div>
                            <h4 className="text-lg font-bold">
                                Escolha seu idioma
                            </h4>
                            <p className="text-md md:w-[450px] lg:w-auto">
                                No momento, o Notion está em inglês, coreano, japonês, francês e alemão. E outros idiomas estão por vir!
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <img
                            src="/images/homepage/globalMovement/global-movement-language-image.jpg"
                            className="flex justify-end w-[92%] object-cover"
                            alt="Escolha seu idioma"
                        />
                    </div>
                </motion.div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-y-6 lg:gap-y-0 md:gap-x-8 mt-8 w-full">
                <motion.div
                    variants={fadeIn("right", 16)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="w-full lg:w-[60%] bg-gray-100 dark:bg-zinc-800 p-8 pb-16 rounded-lg"
                >
                    <Slider {...settings}>
                        <div>
                            <div>
                                <figure>
                                    <div className="mb-4 overflow-hidden">
                                        <figure>
                                            <Image
                                                src="/images/homepage/globalMovement/global-movement-image-slide-01.jpg"
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                className="w-full md:h-[650px] object-cover hover:scale-125 transition-all duration-500 cursor-zoom-in"
                                                alt="Reunião da comunidade em Tóquio"
                                            />
                                        </figure>
                                    </div>
                                    <figcaption className="text-md text-center">
                                        Reunião da comunidade em Tóquio
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div>
                            <figure>
                                <div className="mb-4 overflow-hidden">
                                    <figure>
                                        <Image
                                            src="/images/homepage/globalMovement/global-movement-image-slide-02.jpg"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            className="w-full md:h-[650px] object-cover hover:scale-125 transition-all duration-500 cursor-zoom-in"
                                            alt="Evento de embaixadores do Notion em Nova York"
                                        />
                                    </figure>
                                </div>
                                <figcaption className="text-md text-center">
                                    Evento de embaixadores do Notion em Nova York
                                </figcaption>
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <div className="mb-4 overflow-hidden">
                                    <figure>
                                        <Image
                                            src="/images/homepage/globalMovement/global-movement-image-slide-03.jpg"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            className="w-full md:h-[650px] object-cover hover:scale-125 transition-all duration-500 cursor-zoom-in"
                                            alt="Conversa sobre estilos de organização do Notion em São Francisco"
                                        />
                                    </figure>
                                </div>
                                <figcaption className="text-md text-center">
                                    Conversa sobre estilos de organização do Notion em São Francisco
                                </figcaption>
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <div className="mb-4 overflow-hidden">
                                    <figure>
                                        <Image
                                            src="/images/homepage/globalMovement/global-movement-image-slide-04.jpg"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            className="w-full md:h-[650px] object-cover hover:scale-125 transition-all duration-500 cursor-zoom-in"
                                            alt="Um encontro em um café em Londres"
                                        />
                                    </figure>
                                </div>
                                <figcaption className="text-md text-center">
                                    Um encontro em um café em Londres
                                </figcaption>
                            </figure>
                        </div>
                    </Slider>
                </motion.div>
                <motion.div
                    variants={fadeIn("left", 16.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="flex flex-col gap-5 w-full lg:w-[40%]"
                >
                    <div className="p-8 bg-gray-100 dark:bg-zinc-800 rounded-lg md:min-h-[200px]">
                        <div className="flex items-center gap-x-4">
                            <div>
                                <figure>
                                    <Image
                                        src="/images/homepage/globalMovement/global-movement-user-01.png"
                                        width="50"
                                        height="50"
                                        className="rounded-full object-cover"
                                        alt="Deborah Mecca"
                                    />
                                </figure>
                            </div>
                            <div className="flex flex-col gap-y-1">
                                <span className="text-md font-bold">
                                    Deborah Mecca
                                </span>
                                <span>
                                    @DebMecca
                                </span>
                            </div>
                        </div>
                        <p className="mt-8 text-md">
                            I used to HATE documenting things. And then I started using <strong className="text-blue-500">@NotionHQ</strong> and I document a lot. A LOT A LOT. Now I just realize that it wasn't that I hated documenting, I just hated Google Docs.
                        </p>
                    </div>
                    <div className="p-8 bg-gray-100 dark:bg-zinc-800 rounded-lg md:min-h-[200px]">
                        <div className="flex items-center gap-x-4">
                            <div>
                                <figure>
                                    <Image
                                        src="/images/homepage/globalMovement/global-movement-user-02.png"
                                        width="50"
                                        height="50"
                                        className="rounded-full object-cover"
                                        alt="Deborah Mecca"
                                    />
                                </figure>
                            </div>
                            <div className="flex flex-col gap-y-1">
                                <span className="text-md font-bold">
                                    André Blackman
                                </span>
                                <span>
                                    @mindofandre
                                </span>
                            </div>
                        </div>
                        <p className="mt-8 text-md">
                            One of the most incredible things about <strong className="text-blue-500">@NotionHQ</strong> is the dynamic community being built - creating and sharing at its best.
                        </p>
                    </div>
                    <div className="p-8 bg-gray-100 dark:bg-zinc-800 rounded-lg md:min-h-[200px]">
                        <div className="flex items-center gap-x-4">
                            <div>
                                <figure>
                                    <Image
                                        src="/images/homepage/globalMovement/global-movement-user-03.png"
                                        width="50"
                                        height="50"
                                        className="rounded-full object-cover"
                                        alt="Deborah Mecca"
                                    />
                                </figure>
                            </div>
                            <div className="flex flex-col gap-y-1">
                                <span className="text-md font-bold">
                                    Oliver Peyre
                                </span>
                                <span>
                                    @opeyre
                                </span>
                            </div>
                        </div>
                        <p className="mt-8 text-md">
                            <strong className="text-blue-500">@NotionHQ</strong> Truly impressed by the velocity and quality of your work. Making using Notion even more fun week after week!
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default GlobalMovement