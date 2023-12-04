"use client"
import { useEffect, useState } from "react"
import { SettingsModal } from "@/components/globals/modals/settings-modal"
import { CoverImageModal } from "@/components/globals/modals/cover-image-modal"

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <>
            <SettingsModal />
            <CoverImageModal />
        </>
    )
}