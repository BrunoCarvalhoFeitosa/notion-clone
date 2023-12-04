"use client"
import { useState } from "react"
import { useMutation, useQuery } from "convex/react"
import { useParams, useRouter } from "next/navigation"
import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel"
import { toast } from "sonner"
import { Spinner } from "@/components/globals/spinner"
import { Input } from "@/components/ui/input"
import { SearchIcon, TrashIcon, UndoIcon } from "lucide-react"
import { ConfirmModal } from "@/components/globals/modals/confirm-modal"

const TrashBox = () => {
    const [search, setSearch] = useState("")
    const router = useRouter()
    const params = useParams()
    const documents = useQuery(api.documents.getTrash)
    const restore =  useMutation(api.documents.restore)
    const remove = useMutation(api.documents.remove)

    const filteredDocuments = documents?.filter((document) => {
        return document.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    })

    const onClick = (documentId: string) => {
        router.push(`/documents/${documentId}`)
    }

    const onRestore = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        documentId: Id<"documents">
    ) => {
        event.stopPropagation()

        const promise = restore({ id: documentId })

        toast.promise(promise, {
            loading: "Recuperando nota...",
            success: "Nota restaurada.",
            error: "Falha ao restaurar nota."
        })
    }

    const onRemove = (documentId: Id<"documents">) => {
        const promise = remove({ id: documentId })

        toast.promise(promise, {
            loading: "Deletando nota...",
            success: "Nota deletada.",
            error: "Falha ao deletar nota."
        })

        if (params.documentId === documentId) {
            router.push("/documents")
        }
    }

    if (documents === undefined) {
        return (
            <div className="h-[100vh] flex justify-center items-center p-4">
                <Spinner size="lg" />
            </div>
        )
    }

    return (
        <div className="text-sm">
            <div className="flex items-center gap-x-1 p-2">
                <SearchIcon className="w-4 h-4" />
                <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="h-7 px-2 focus-visible:ring-transparent bg-secondary"
                    placeholder="Filtrar por título"
                />
            </div>
            <div className="mt-2 px-1 pb-1">
                <p className="hidden last:block pb-2 text-xs text-center text-muted-foreground">
                    Nenhum documento encontrado.
                </p>
                {filteredDocuments?.map((document) => (
                    <div
                        key={document._id}
                        role="button"
                        onClick={() => onClick(document._id)}
                        className="flex justify-between items-center w-full text-sm text-primary rounded-sm hover:bg-primary/5"
                    >
                        <span className="truncate pl-2">
                            {document.title}
                        </span>
                        <div className="flex items-center">
                            <div
                                role="button"
                                onClick={(e) => onRestore(e, document._id)}
                                className="p-2 rounded-sm hover:bg-neutral-200"
                            >
                                <UndoIcon className="w-4 h-4 text-muted-foreground" />
                            </div>
                            <ConfirmModal onConfirm={() => onRemove(document._id)}>
                                <div
                                    role="button"
                                    className="p-2 rounded-sm hover:bg-neutral-200"
                                >
                                    <TrashIcon className="w-4 h-4 text-muted-foreground" />
                                </div>
                            </ConfirmModal>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrashBox