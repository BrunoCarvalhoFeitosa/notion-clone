"use client"
import { useRouter } from "next/navigation"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { toast } from "sonner"
import { Id } from "@/convex/_generated/dataModel"
import { Button } from "@/components/ui/button"
import { ConfirmModal } from "@/components/globals/modals/confirm-modal"

interface BannerProps {
    documentId: Id<"documents">
}

const Banner = ({ documentId }: BannerProps) => {
    const router = useRouter()
    const remove = useMutation(api.documents.remove)
    const restore = useMutation(api.documents.restore)

    const onRemove = () => {
        const promise = remove({ id: documentId })

        toast.promise(promise, {
            loading: "Deletando nota...",
            success: "Nota deletada.",
            error: "Falha ao deletar nota."
        })

        router.push("/documents")
    }

    const onRestore = () => {
        const promise = restore({ id: documentId })

        toast.promise(promise, {
            loading: "Restaurando nota...",
            success: "Nota restaurada.",
            error: "Falha ao restaurar nota."
        })
    }

    return (
        <div className="flex justify-center items-center gap-x-2 w-full p-2 text-sm text-center text-white bg-rose-500">
            <div>
                <p>Está nota está na lixeira</p>
            </div>
            <div>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={onRestore}
                    className="p-1 px-2 font-normal text-white border-white bg-transparent hover:bg-primary/5 hover:text-white"
                >
                    Restaurar nota
                </Button>
            </div>
            <div>
                <ConfirmModal onConfirm={onRemove}>
                    <Button
                        variant="outline"
                        size="sm"
                        className="p-1 px-2 font-normal text-white border-white bg-transparent hover:bg-primary/5 hover:text-white"
                    >
                        Deletar para sempre
                    </Button>
                </ConfirmModal>
            </div>
        </div>
    )
}

export default Banner