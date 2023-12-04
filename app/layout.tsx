import type { Metadata } from "next"
import { ConvexClientProvider } from "@/components/providers/convex-provider"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { ModalProvider } from "@/components/providers/modal-provider"
import { EdgeStoreProvider } from "@/lib/edgestore"
import { Toaster } from "sonner"
import { Inter } from "next/font/google"
import "./common/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Escreva, planeje, compartilhe. Com a IA ao seu lado. - Notion",
    description: "Crie qualquer página, comunique qualquer ideia. Tudo no Notion é baseado na função arrastar e soltar: imagens, alternâncias, tarefas e até bases de dados...",
    icons: {
        icon: "/ico/favicon.ico",
        shortcut: "/ico/favicon.ico"
    },
    authors: {
        name: "Bruno Carvalho Feitosa",
        url: "https://br.linkedin.com/in/bruno-carvalho-feitosa"
    }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br" suppressHydrationWarning>
            <body className={inter.className}>
                <ConvexClientProvider>
                    <EdgeStoreProvider>
                        <ThemeProvider
                            attribute="class"
                            defaultTheme="system"
                            enableSystem
                            disableTransitionOnChange
                            storageKey="jotion-theme-2"
                        >
                            <ModalProvider />
                            <Toaster position="bottom-center" />
                            {children}
                        </ThemeProvider>
                    </EdgeStoreProvider>
                </ConvexClientProvider>
            </body>
        </html>
    )
}
