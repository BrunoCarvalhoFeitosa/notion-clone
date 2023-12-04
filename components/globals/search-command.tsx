"use client"
import { useEffect, useState } from "react"
import { useQuery } from "convex/react"
import { useRouter } from "next/navigation"
import { useUser } from "@clerk/clerk-react"
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { useSearch } from "@/hooks/use-search"
import { api } from "@/convex/_generated/api"
import { FileIcon } from "lucide-react"

export const SearchCommand = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false)
    const { user } = useUser()
    const router = useRouter()
    const documents = useQuery(api.documents.getSearch)
    const toggle = useSearch((store) => store.toggle)
    const isOpen = useSearch((store) => store.isOpen)
    const onClose = useSearch((store) => store.onClose)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    useEffect(() => {
        const down = (event: KeyboardEvent) => {
           if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
            event.preventDefault()
            toggle()
           } 
        }

        document.addEventListener("keydown", down)

        return () => document.removeEventListener("keydown", down)
    }, [toggle])

    const onSelect = (id: string) => {
        router.push(`/documents/${id}`)
        onClose()
    }

    if (!isMounted) {
        return null
    }

    return (
        <div>
            <CommandDialog open={isOpen} onOpenChange={onClose}>
                <CommandInput
                    className="w-[90%] text-xs truncate"
                    placeholder={`Buscar documento no Notion de ${user?.fullName}`}
                />
                <CommandList>
                    <CommandEmpty>
                        Nenhum resultado encontrado.
                    </CommandEmpty>
                    <CommandGroup heading="Documentos">
                        {documents?.map((document) => (
                            <CommandItem
                                key={document._id}
                                value={`${document._id}-${document.title}`}
                                title={document.title}
                                onSelect={onSelect}
                            >
                                {document.icon ? (
                                    <p className="mr-2 text-[18px]">
                                        {document.icon}
                                    </p>
                                ) : (
                                    <FileIcon className="mr-2 w-4 h-4" />
                                )}
                                <span>
                                    {document.title}
                                </span>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </div>
    )
}