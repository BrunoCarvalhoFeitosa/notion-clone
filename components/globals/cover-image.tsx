"use client"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useCoverImage } from "@/hooks/use-cover-image"
import { useMutation } from "convex/react"
import { useEdgeStore } from "@/lib/edgestore"
import { api } from "@/convex/_generated/api"
import { cn } from "@/lib/utils"
import { Id } from "@/convex/_generated/dataModel"
import { Button } from "@/components/ui/button"
import { ImageIcon, XIcon } from "lucide-react"
import { Skeleton } from "../ui/skeleton"

interface CoverImageProps {
   url?: string
   preview?: boolean  
}

const CoverImage = ({ url, preview }: CoverImageProps) => {
    const params = useParams()
    const coverImage = useCoverImage()
    const removeCoverImage = useMutation(api.documents.removeCoverImage)
    const { edgestore } = useEdgeStore()

    const onRemove = async () => {
        if (url) {
            await edgestore.publicFiles.delete({
                url: url
            })
        }

        removeCoverImage({
            id: params.documentId as Id<"documents">
        })
    }

    return (
        <div className={cn(
            "group relative w-full h-[35vh]",
            !url && "h-[12vh]",
            url && "bg-muted"
        )}>
            {!!url && (
                <Image
                    src={url}
                    fill
                    alt="Imagem de fundo"
                    className="object-cover"
                />
            )}
            {url && !preview && (
                <div className="absolute bottom-5 right-5 flex items-center gap-x-2 opacity-o group-hover:opacity-100">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => coverImage.onReplace(url)}
                        className="text-xs text-muted-foreground"
                    >
                        <div>
                            <ImageIcon className="w-4 h-4 mr-2" />
                        </div>
                        <div>
                            Mudar imagem
                        </div>
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={onRemove}
                        className="text-xs text-muted-foreground"
                    >
                        <div>
                            <XIcon className="w-4 h-4 mr-2" />
                        </div>
                        <div>
                            Remover imagem
                        </div>
                    </Button>
                </div>
            )}
        </div>
    )
}

CoverImage.Skeleton = function CoverSkelton() {
    return (
        <Skeleton className="w-full h-[12vh]" />
    )
}

export default CoverImage