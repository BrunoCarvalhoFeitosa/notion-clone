"use client"
import { useRouter } from "next/navigation"
import { useUser } from "@clerk/clerk-react"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { Skeleton } from "@/components/ui/skeleton"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { ChevronDown, ChevronRight, LucideIcon, MoreHorizontal, Plus, Trash } from "lucide-react"

interface ItemProps {
    id?: Id<"documents">
    documentIcon?: string
    active?: boolean
    expanded?: boolean 
    isSearch?: boolean
    level?: number
    onExpand?: () => void
    onClick?: () => void
    label: string
    icon: LucideIcon
}

const Item = ({
    id,
    documentIcon,
    active,
    expanded,
    isSearch,
    level = 0,
    onExpand,
    onClick,
    label,
    icon: Icon
} : ItemProps) => {
    const { user } = useUser()
    const router = useRouter()
    const create = useMutation(api.documents.create)
    const archive = useMutation(api.documents.archive)
    const ChevronIcon = expanded ? ChevronDown : ChevronRight

    const onArchive = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation()

        if (!id) return

        const promise = archive({ id })
            .then(() => router.push(`/documents`))

        toast.promise(promise, {
            loading: "Movendo para lixeira...",
            success: "Nota enviada para lixeira.",
            error: "Erro ao deletar nota."
        })
    }

    const handleExpand = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation()

        onExpand?.()
    }

    const onCreate = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation()

        if (!id) return

        const promise = create({ title: "Sem título", parentDocument: id })
            .then((documentId) => {
                if (!expanded) {
                    onExpand?.()
                }

                router.push(`/documents/${documentId}`)
            })

        toast.promise(promise, {
            loading: "Criando uma nova nota...",
            success: "Nova nota criada.",
            error: "Erro ao criar nota."
        })
    }

    return (
        <div
            role="button"
            onClick={onClick}
            style={{ paddingLeft: level ? `${(level * 12) + 12}px` : "12px" }}
            className={cn(
                "group flex items-center w-full min-h-[32px] py-1 pr-3 text-sm font-medium text-muted-foreground hover:bg-primary/5",
                active && "bg-primary/5 text-primary"
            )}
        >
            {!!id && (
                <div
                    role="button"
                    className="mr-1 h-full rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-300"
                    onClick={handleExpand}
                >
                    <ChevronIcon className="w-4 h-4 shrink-0 text-muted-foreground/50" />
                </div>
            )}
            {documentIcon ? (
                <div className="shrink-0 mr-2 text-[18px]">
                    {documentIcon}
                </div>
            ) : (
                <Icon className="shrink-0 mr-2 text-muted-foreground w-[18px] h-[18px]" />
            )}
            <div className="truncate">
                {label}
            </div>
            {isSearch && (
                <kbd className="ml-auto pointer-events-none inline-flex items-center gap-1 h-5 select-none border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <span className="text-xs">⌘</span>K
                </kbd>
            )}
            {!!id && (
                <div className="ml-auto flex items-center gap-x-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger
                            onClick={(e) => e.stopPropagation()}
                            asChild
                        >
                            <div
                                role="button"
                                className="ml-auto h-full rounded-sm opacity-0 group-hover:opacity-100 hover:bg-neutral-300 dark:hover:bg-neutral-300"
                            >
                                <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-auto"
                            align="start"
                            side="right"
                            forceMount
                        >
                            <DropdownMenuItem onClick={onArchive}>
                                <Trash className="w-4 h-4 mr-2" />
                                Deletar
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <div className="px-3 text-xs text-muted-foreground">
                                Última edição feita por: {user?.fullName}
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <div
                        role="button"
                        onClick={onCreate}
                        className="ml-auto h-full opacity-0 group-hover:opacity-100 rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600"
                    >
                        <Plus className="w-4 h-4 text-muted-foreground" />
                    </div>
                </div>
            )}
        </div>
    )
}

Item.Skeleton = function ItemSekeleton({ level }: { level?: number }) {
    return (
        <div
            className="flex gap-y-2 py-[3px]"
            style={{paddingLeft: level ? `${(level * 12) + 25}px` : "12px"}}
        >
            <Skeleton className="w-4 h-4" />
            <Skeleton className="w-[30%] h-4" />
        </div>
    )
}

export default Item