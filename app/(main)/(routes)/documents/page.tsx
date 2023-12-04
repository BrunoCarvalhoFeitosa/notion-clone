"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useUser } from "@clerk/clerk-react"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { PlusCircleIcon } from "lucide-react"

const DocumentPage = () => {
    const router = useRouter()
    const { user } = useUser()
    const create = useMutation(api.documents.create)

    const onCreate = () => {
        const promise = create({ title: "Sem título" })
            .then((documentId) => router.push(`/documents/${documentId}`))

        toast.promise(promise, {
            loading: "Criando uma nova nota...",
            success: "Nova nota criada.",
            error: "Erro ao criar nota."
        })
    }

    return (
        <div className="min-h-[100vh] flex flex-col justify-center items-center space-y-4">
            <div>
                <Image
                    src="/images/main/empty.png"
                    width="300"
                    height="300"
                    className="dark:filter dark:invert"
                    alt="Vazio"
                />
            </div>
            <div className="flex flex-col gap-y-1 text-center">
                <h2 className="p-0 m-0 leading-none">
                    Bem-vindo ao Notion de
                </h2>
                <h2 className="p-0 m-0 leading-none font-bold">
                    {user?.fullName}
                </h2>
            </div>
            <div>
                <Button onClick={onCreate} className="flex items-center gap-x-2">
                    <div>
                        <PlusCircleIcon className="w-4 h-4" />
                    </div>
                    <div>
                        Criar uma nota
                    </div>
                </Button>
            </div>
        </div>
    )
}

export default DocumentPage