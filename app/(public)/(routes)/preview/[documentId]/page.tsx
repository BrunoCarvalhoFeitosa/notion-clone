"use client"
import { useMemo } from "react"
import dynamic from "next/dynamic"
import { useMutation, useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel"
import Toolbar from "@/components/globals/toolbar"
import CoverImage from "@/components/globals/cover-image"
import { Skeleton } from "@/components/ui/skeleton"

interface DocumentIdPageProps {
    params: {
        documentId: Id<"documents">
    }
}

const DocumentIdPage = ({ params }: DocumentIdPageProps) => {
    const Editor = useMemo(
        () => dynamic(
            () => import("@/components/globals/editor"),
            { ssr: false }
        ),
    [])

    const document = useQuery(api.documents.getById, {
        documentId: params.documentId
    })

    const update = useMutation(api.documents.update)

    const onChange = (content: string) => {
        update({
            id: params.documentId,
            content
        })
    }

    if (document === undefined) {
        return (
            <div>
                <CoverImage.Skeleton />
                <div className="md:max-w-3xl lg:max-w-4xl mt-10 mx-auto">
                    <div className="space-y-4 pt-4 pl-8">
                        <Skeleton className="w-[50%] h-14" />
                        <Skeleton className="w-[80%] h-4" />
                        <Skeleton className="w-[40%] h-4" />
                        <Skeleton className="w-[60%] h-4" />
                    </div>
                </div>
            </div>
        )
    }

    if (document == null) {
        return (
            <div>
                Nada encontrado.
            </div>
        )
    }

    return (
        <div className="pb-40">
            <CoverImage preview url={document.coverImage} />
            <div className="max-w-[90%] md:max-w-[80%] mx-auto">
                <Toolbar preview initialData={document} />
                <Editor editable={false} onChange={onChange} initialContent={document.content} />
            </div>
        </div>
    )
}

export default DocumentIdPage