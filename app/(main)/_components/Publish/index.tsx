"use client"
import { useState } from "react"
import { Doc } from "@/convex/_generated/dataModel"
import { useOrigin } from "@/hooks/use-origin"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { toast } from "sonner"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { CheckIcon, CopyIcon, GlobeIcon } from "lucide-react"

interface PublishProps {
    initialData: Doc<"documents">
}

const Publish = ({ initialData }: PublishProps) => {
    const origin = useOrigin()
    const update = useMutation(api.documents.update)
    const [copied, setCopied] = useState<boolean>(false)
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const url = `${origin}/preview/${initialData._id}`

    const onPublish = () => {
        setIsSubmitting(true)

        const promise = update({
            id: initialData._id,
            isPublished: true
        }).finally(() => setIsSubmitting(false))

        toast.promise(promise, {
            loading: "Publicando nota...",
            success: "Nota publicada.",
            error: "Error ao publicar nota."
        })
    }

    const onUnpublish = () => {
        setIsSubmitting(true)

        const promise = update({
            id: initialData._id,
            isPublished: false
        }).finally(() => setIsSubmitting(false))

        toast.promise(promise, {
            loading: "Despublicando nota...",
            success: "Nota despublicada.",
            error: "Error ao despublicar nota."
        })
    }

    const onCopy = () => {
        navigator.clipboard.writeText(url)
        setCopied(true)

        setTimeout(() => {
            setCopied(false)
        }, 1000)
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                >
                    <div>
                        Publicar
                    </div>
                    {initialData.isPublished && (
                        <GlobeIcon className="ml-2 w-4 h-4 text-sky-500" />
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent
                className="w-auto"
                align="end"
                alignOffset={8}
                forceMount
            >
                {initialData.isPublished ? (
                    <div className="space-y-4">
                        <div className="flex items-center gap-x-2">
                            <GlobeIcon className="w-4 h-4 text-sky-500 animate-pulse" />
                            <p className="text-xs font-medium text-sky-500">
                                Esta nota já está publicada na web.
                            </p>
                        </div>
                        <div className="flex items-center">
                            <div>
                                <input
                                    type="text"
                                    value={url}
                                    className="px-2 flex-1 h-8 border rounded-l-md bg-muted truncate"
                                    disabled
                                />
                            </div>
                            <div>
                                <Button
                                    onClick={onCopy}
                                    disabled={copied}
                                    className="h-8 rounded-l-none"
                                >
                                    {copied ? (
                                        <CheckIcon className="w-4 h-4" />
                                    ) : (
                                        <CopyIcon className="w-4 h-4" />
                                    )}
                                </Button>
                            </div>
                        </div>
                        <Button
                            size="sm"
                            className="w-full text-xs"
                            disabled={isSubmitting}
                            onClick={onUnpublish}
                        >
                            Despublicar
                        </Button>
                    </div>
                ) : (
                    <div className="flex flex-col justify-center items-center">
                        <GlobeIcon className="mb-2 w-8 h-8 text-muted-foreground" />
                        <p className="text-sm font-medium mb-2">
                            Publicar esta nota
                        </p>
                        <span className="text-xs text-center text-muted-foreground mb-4">
                            Compartilhar seu trabalho com outras pessoas.
                        </span>
                        <Button
                            size="sm"
                            disabled={isSubmitting}
                            onClick={onPublish}
                            className="w-full text-xs"
                        >
                            Publicar
                        </Button>
                    </div>
                )}
            </PopoverContent>
        </Popover>
    )
}

export default Publish