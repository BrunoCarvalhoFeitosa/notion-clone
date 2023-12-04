"use client"
import { useState } from "react"
import { useParams } from "next/navigation"
import { useCoverImage } from "@/hooks/use-cover-image"
import { SingleImageDropzone } from "../single-image-dropzone"
import { useEdgeStore } from "@/lib/edgestore"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { Id } from "@/convex/_generated/dataModel"

export const CoverImageModal = () => {
    const [file, setFile] = useState<File>()
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const params = useParams()
    const coverImage = useCoverImage()
    const update = useMutation(api.documents.update)
    const { edgestore } = useEdgeStore()

    const onClose = () => {
        setFile(undefined)
        setIsSubmitting(false)
        coverImage.onClose()
    }

    const onChange = async (file?: File) => {
        if (file) {
            setIsSubmitting(true)
            setFile(file)


            const res = await edgestore.publicFiles.upload({
                file,
                options: {
                    replaceTargetUrl: coverImage.url
                }
            })

            await update({
                id: params.documentId as Id<"documents">,
                coverImage: res.url
            })

            onClose()
        }
    }

    return (
        <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
            <DialogContent>
                <DialogHeader>
                    <h2 className="text-lg font-bold text-center">
                        Imagem de fundo
                    </h2>
                </DialogHeader>
                <SingleImageDropzone
                    className="w-full outline-none"
                    disabled={isSubmitting}
                    onChange={onChange}
                    value={file}
                />
            </DialogContent>
        </Dialog>
    )

}