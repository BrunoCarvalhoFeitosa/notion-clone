"use client"
import { ElementRef, useRef, useState } from "react"
import { useMutation } from "convex/react"
import { Doc } from "@/convex/_generated/dataModel"
import { useCoverImage } from "@/hooks/use-cover-image"
import { api } from "@/convex/_generated/api"
import TextareaAutosize from "react-textarea-autosize"
import { Button } from "@/components/ui/button"
import { ImageIcon, SmileIcon, XIcon } from "lucide-react"
import { IconPicker } from "../icon-picker"

interface ToolbarProps {
    initialData: Doc<"documents">
    preview?: boolean
}

const Toolbar = ({ initialData, preview }: ToolbarProps) => {
    const inputRef = useRef<ElementRef<"textarea">>(null)
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [value, setValue] = useState(initialData.title)
    const update = useMutation(api.documents.update)
    const removeIcon = useMutation(api.documents.removeIcon)
    const coverImage = useCoverImage()

    const enableInput = () => {
        if (preview) return 

        setIsEditing(true)
        setTimeout(() => {
            setValue(initialData.title)
            inputRef.current?.focus()
        }, 0)
    }

    const disableInput = () => setIsEditing(false)

    const onInput = (value: string) => {
        setValue(value)
        update({
            id: initialData._id,
            title: value || "Sem título"
        })
    }

    const onIconSelect = (icon:string) => {
        update({
            id: initialData._id,
            icon
        })
    }

    const onRemoveIcon = () => {
        removeIcon({
            id: initialData._id
        })
    }

    const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter") {
            event.preventDefault()
            disableInput()
        }
    }

    return (
        <div className="group relative text-center md:pl-[54px] md:text-start">
            {!!initialData.icon && !preview  && (
                <div className="pt-6 group/icon flex items-center gap-x-2">
                    <IconPicker onChange={onIconSelect}>
                        <p className="text-6xl hover:opacity-75 transition">
                            {initialData.icon}
                        </p>
                    </IconPicker>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={onRemoveIcon}
                        className="text-sm text-muted-foreground rounded-full opacity-0 group-hover/icon:opacity-100 transition"
                    >
                        <XIcon className="w-4 h-4" />
                    </Button>
                </div>
            )}
            {!!initialData.icon && preview && (
                <p className="pt-6 text-6xl">
                    {initialData.icon}
                </p>
            )}
            <div className="flex justify-center md:justify-start items-center gap-x-1 py-4 opacity-0 group-hover:opacity-100">
                {!initialData.icon && !preview && (
                    <IconPicker
                        onChange={onIconSelect}
                        asChild
                    >
                        <Button
                            variant="outline"
                            size="sm"
                            className="text-sm text-muted-foreground"
                        >
                            <SmileIcon className="w-4 h-4 mr-2" />
                            <div>
                                Adicionar ícone
                            </div>
                        </Button>
                    </IconPicker>
                )}
                {!initialData.coverImage && !preview && (
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={coverImage.onOpen}
                        className="text-muted-foreground"
                    >
                        <ImageIcon className="w-4 h-4 mr-2" />
                        <div>
                            Adicionar capa
                        </div>
                    </Button>   
                )}
            </div>
            {isEditing && !preview ? (
                <TextareaAutosize
                    ref={inputRef}
                    onBlur={disableInput}
                    onKeyDown={onKeyDown}
                    onChange={(e) => onInput(e.target.value)}
                    value={value}
                    className="text-5xl font-bold break-words bg-transparent outline-none text-[#3F3F3F] dark:text-[#CFCFCF] resize-none"
                />
            ) : (
                <div
                    onClick={enableInput}
                    className="pb-[11.5px] text-2xl md:text-5xl font-bold break-words text-[#3F3F3F] dark:text-[#CFCFCF]" 
                >
                    {initialData.title}
                </div>
            )}
        </div>
    )
}

export default Toolbar