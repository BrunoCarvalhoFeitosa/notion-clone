"use client"
import { useParams } from "next/navigation"
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel"
import { MenuIcon } from "lucide-react"
import Title from "../Title"
import Banner from "../Banner"
import Menu from "../Menu"
import Publish from "../Publish"

interface NavbarProps {
    isCollapsed: boolean
    onResetWidth: () => void
}

const Navbar = ({ isCollapsed, onResetWidth }: NavbarProps) => {
    const params = useParams()
    const document = useQuery(api.documents.getById, {
        documentId: params.documentId as Id<"documents">
    })

    if (document === undefined) {
        return (
            <nav className="bg-background flex justify-between items-center px-3 py-2 w-full">
                <Title.Skeleton />
                <div className="flex items-center gap-x-2">
                    <Menu.Skeleton />
                </div>
            </nav>
        )
    }

    if (document === null) {
        return null
    }


    return (
        <>
            <nav className="flex items-center gap-x-4 py-2 px-3 w-full bg-background dark:bg-[#111]">
                {isCollapsed && (
                    <MenuIcon
                        role="button"
                        onClick={onResetWidth}
                        className="w-6 h-6 text-muted-foreground"
                    />
                )}
                <div className="flex justify-between items-center w-full">
                    <Title initialData={document} />
                    <div className="flex items-center gap-x-2">
                        <Publish initialData={document} />
                        <Menu documentId={document._id} />
                    </div>
                </div>
            </nav>
            {document.isArchived && (
                <Banner documentId={document._id} />
            )}
        </>
    )
}

export default Navbar