"use client"
import { redirect } from "next/navigation"
import { useConvexAuth } from "convex/react"
import { Spinner } from "@/components/globals/spinner"
import Navigation from "./_components/Navigation"
import { SearchCommand } from "@/components/globals/search-command"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated, isLoading } = useConvexAuth()

    if (isLoading) {
        return (
            <div className="h-[100vh] flex justify-center items-center">
                <Spinner size="lg" />
            </div>
        )
    }

    if (!isAuthenticated) {
        return redirect("/")
    }
    
    return (
        <div className="h-full flex">
            <Navigation />
            <main className="min-h-[100vh] flex-1 overflow-y-auto dark:bg-[#1F1F1F]">
                <SearchCommand />
                {children}
            </main>
        </div>
    )
}

export default MainLayout