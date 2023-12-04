"use client"
import { useRouter } from "next/navigation"
import { useUser } from "@clerk/clerk-react"
import { useMutation } from "convex/react"
import { toast } from "sonner"
import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontalIcon, TrashIcon } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

interface MenuProps {
    documentId: Id<"documents">
}

const Menu = ({ documentId }: MenuProps) => {
    const router = useRouter()
    const { user } = useUser()
    const archive = useMutation(api.documents.archive)

    const onArchive = () => {
        const promise = archive({ id: documentId })

        toast.promise(promise, {
            loading: "Movendo para lixeira...",
            success: "Nota movido para lixeira.",
            error: "Erro ao arquivar nota."
        })

        router.push("/documents")
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                    <MoreHorizontalIcon className="w-4 h-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                alignOffset={8}
                className="max-w-60 md:max-w-[520px]"
                forceMount
            >
                <DropdownMenuItem>
                    <div className="flex items-center gap-x-1">
                        <div>
                            <TrashIcon className="w-4 h-4" />
                        </div>
                        <div>
                            Deletar
                        </div>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <div className="p-2 text-sm text-muted-foreground">
                    Última edição feita por: {user?.fullName}
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

Menu.Skeleton = function MenuSkeleton() {
    return (
        <Skeleton className="w-10 h-10 rounded-sm" />
    )
}

export default Menu