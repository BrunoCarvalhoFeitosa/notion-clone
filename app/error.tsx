"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const Error = () => {
    return (
        <div className="h-[100vh] flex flex-col justify-center items-center space-y-4">
            <div>
                <Image
                    src="/images/main/error.png"
                    width="300"
                    height="300"
                    className="dark:filter dark:invert"
                    alt="Erro"
                />
            </div>
            <div>
                <h2 className="text-xl font-medium">
                    Algo deu errado.
                </h2>
            </div>
            <div>
                <Button asChild>
                    <Link href="/documents">
                        Voltar
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default Error