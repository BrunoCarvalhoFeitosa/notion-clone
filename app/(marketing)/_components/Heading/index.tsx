"use client"
import Image from "next/image"
import Link from "next/link"
import { useConvexAuth } from "convex/react"
import { SignInButton } from "@clerk/clerk-react"
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/variants"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Spinner } from "@/components/globals/spinner"

const Heading = () => {
    const { isAuthenticated, isLoading } = useConvexAuth()

    return (
        <main className="flex flex-col min-h-full">
            <div className="flex flex-1 flex-col justify-center md:justify-start items-center gap-y-6 max-w-5xl mx-auto px-6 pt-10 text-center">
                <div className="w-full">
                    <div className="flex flex-col justify-center items-center gap-y-4">
                        <div>
                            <motion.h1
                                variants={fadeIn("down", 0.5)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="text-3xl sm:text-5xl md:text-6xl font-bold"
                            >
                                Escreva, planeje, compartilhe. Com a IA ao seu lado.
                            </motion.h1>
                            <motion.h3
                                 variants={fadeIn("down", 1)}
                                 initial="hidden"
                                 animate="show"
                                 exit="hidden"
                                className="mt-3 text-base sm:text-xl md:text-2xl font-medium"
                            >
                                O Notion é o espaço conectado onde você trabalha melhor e com mais rapidez.
                            </motion.h3>
                        </div>
                        <motion.div
                            variants={fadeIn("down", 1.5)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                        >
                            {isLoading && (
                                <div className="w-full flex justify-center items-center">
                                    <Spinner size="lg" />
                                </div>
                            )}
                            {isAuthenticated && !isLoading && (
                                <Button className="text-sm md:text-lg" asChild>
                                    <Link href="/documents">
                                        <div className="mr-2">
                                            Acessar o Notion agora
                                        </div>
                                        <div>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </Link>
                                </Button>
                            )}
                            {!isAuthenticated && !isLoading && (
                                <SignInButton mode="modal">
                                    <Button className="text-sm md:text-lg">
                                        <div className="mr-2">
                                            Faça login e use o Notion gratuitamente
                                        </div>
                                        <div>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </Button>
                                </SignInButton>
                            )}
                        </motion.div>
                        <motion.div
                            variants={fadeIn("down", 2)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="mt-6 relative w-full h-[250px]"
                        >
                            <figure>
                                <Image
                                    fill
                                    src="/images/homepage/heading/heading-image.png"
                                    className="object-contain dark:filter dark:invert"
                                    alt="Hero"
                                />
                            </figure>
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Heading