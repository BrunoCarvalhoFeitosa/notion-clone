"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useConvexAuth } from "convex/react"
import { useScrollNavbar } from "@/hooks/use-scroll-navbar"
import { SignInButton, UserButton } from "@clerk/clerk-react"
import { cn } from "@/lib/utils"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import { ModeToggle } from "@/components/globals/mode-toggle"
import { ArrowRight, ChevronDown, XIcon, SparklesIcon, BookOpenIcon, TargetIcon, FileTextIcon, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/globals/spinner"
import Notion from "@/public/images/icons/notion"

const Navbar = () => {
    const { isAuthenticated, isLoading } = useConvexAuth()
    const scrolled = useScrollNavbar()
    const [isOpen, setIsOpen] = useState<boolean>(true)

    return (
        <header className="sticky top-0 w-full bg-background z-50">
            {isOpen && (
                <div className="relative w-full px-10 bg-gray-100 dark:bg-zinc-800">
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-x-2 py-1 px-4">
                        <div className="hidden lg:block py-[1px] px-2 md:mb-2 lg:mb-0 bg-purple-700 rounded-full text-xs font-bold text-white">
                            Novo
                        </div>
                        <div className="hidden md:block">
                            <p className="text-[11px] md:text-sm text-center">
                                Apresentando o Notion Responde – uma maneira nova de conversar com o Notion.
                            </p>
                        </div>
                        <div>
                            <Button variant="link" className="text-[12px] md:text-sm font-bold flex gap-x-1 m-0 p-0">
                                <div>
                                    Inscreva-se no Notion Responde
                                </div>
                                <div>
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </Button>
                        </div>
                    </div>
                    <div className="absolute top-[50%] translate-y-[-50%] right-4 md:right-7">
                        <button onClick={() => setIsOpen(false)} className="p-0 m-0 cursor-pointer">
                            <XIcon />
                        </button>
                    </div>
                </div>
            )}
            <div className={cn("flex justify-between items-center gap-x-4 px-4 md:px-8 py-2 w-[98%] mx-auto", scrolled && "border-b shadow-sm")}>
                <div className="flex items-center gap-x-4">
                    <div>
                        <Notion width="35" height="35" />
                    </div>
                    <div className="hidden md:block">
                    <Menubar className="border-none">
                        <MenubarMenu>
                            <MenubarTrigger>
                                Produto
                                <ChevronDown className="w-4 h-4" />
                            </MenubarTrigger>
                            <MenubarContent>
                                <div className="flex p-2">
                                    <div className="flex flex-col gap-y-2 pr-4 border-r">
                                        <div className="flex items-center gap-x-3">
                                            <div>
                                                <BookOpenIcon className="text-orange-600" />
                                            </div>
                                            <div>
                                                <div className="text-md">
                                                    Wikis
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    Centralize seu conhecimento
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-x-3">
                                            <div>
                                                <TargetIcon className="text-blue-600" />
                                            </div>
                                            <div>
                                                <div className="text-md">
                                                    Projetos
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    Para todas as equipes e tamanhos
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-x-3">
                                            <div>
                                                <FileTextIcon className="text-yellow-600" />
                                            </div>
                                            <div>
                                                <div className="text-md">
                                                    Documentos
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    Simples e eficiente
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-x-3">
                                            <div>
                                                <SparklesIcon className="text-yellow-600" />
                                            </div>
                                            <div>
                                                <div className="text-md">
                                                    IA do Notion
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    Assistente integrado de IA
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-2 pl-4">
                                        <div className="flex items-center gap-x-3">
                                            <div>
                                                <div className="text-md">
                                                    Galeria de modelos
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    Configurações para você começar
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-x-3">
                                            <div>
                                                <div className="text-md">
                                                    História de clientes
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    Veja como as equipes usam o Notion
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-x-3">
                                            <div>
                                                <div className="text-md">
                                                    Conexões
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    Conecte o Notion às suas ferramentas
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger>
                                Baixar
                                <ChevronDown className="w-4 h-4" />
                            </MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    iOS e Android
                                </MenubarItem>
                                <MenubarItem>
                                    Mac e Windows
                                </MenubarItem>
                                <MenubarItem>
                                    Web Clipper
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger>
                                Soluções
                                <ChevronDown className="w-4 h-4" />
                            </MenubarTrigger>
                            <MenubarContent>
                                <div className="flex p-2">
                                    <div className="pr-4 border-r">
                                        <div className="mb-4 text-xs uppercase text-gray-500">
                                            Por tamanho de equipe
                                        </div>
                                        <div className="flex flex-col gap-y-2">
                                            <div className="flex items-center gap-x-2">
                                                <div>
                                                    <Image
                                                        src="/images/homepage/navbar/menu-size-enterprise.png"
                                                        width="50"
                                                        height="50"
                                                        alt="Enterprise"
                                                    />
                                                </div>
                                                <div>
                                                    <div className="text-md">
                                                        Enterprise
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        Recursos avançados para sua organização
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-x-2">
                                                <div>
                                                    <Image
                                                        src="/images/homepage/navbar/menu-size-small-business.png"
                                                        width="50"
                                                        height="50"
                                                        alt="Pequenas empresas"
                                                    />
                                                </div>
                                                <div>
                                                    <div className="text-md">
                                                        Pequenas empresas
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        Administre sua equipe com uma ferramenta
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-x-2">
                                                <div>
                                                    <Image
                                                        src="/images/homepage/navbar/menu-size-personal.png"
                                                        width="50"
                                                        height="50"
                                                        alt="Individual"
                                                    />
                                                </div>
                                                <div>
                                                    <div className="text-md">
                                                        Individual
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        Gratuito para indivíduos
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pl-4">
                                        <div className="mb-4 text-xs uppercase text-gray-500">
                                            Notion para
                                        </div>
                                        <div className="flex flex-col gap-y-2">
                                            <div className="text-md">
                                                Startups
                                            </div>
                                            <div className="text-md">
                                                Trabalho remoto
                                            </div>
                                            <div className="text-md">
                                                Educação
                                            </div>
                                            <div className="text-md">
                                                Organizações sem fins lucrativos
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger>
                                Recursos
                                <ChevronDown className="w-4 h-4" />
                            </MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    Blog
                                </MenubarItem>
                                <MenubarItem>
                                    Guias e tutoriais
                                </MenubarItem>
                                <MenubarItem>
                                    Webinars
                                </MenubarItem>
                                <MenubarItem>
                                    Centro de ajuda
                                </MenubarItem>
                                <MenubarItem>
                                    Documentação sobre API
                                </MenubarItem>
                                <MenubarItem>
                                    Comunidade
                                </MenubarItem>
                                <MenubarItem>
                                    Hire a consultant
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger>
                                Preço
                            </MenubarTrigger>
                        </MenubarMenu>
                        </Menubar>
                    </div>
                </div>
                <div>
                    <ul className="flex items-center gap-x-3">
                        <li>
                            {isLoading && (
                                <Spinner />
                            )}
                            {!isAuthenticated && !isLoading && (
                                <div className="flex items-center gap-x-2">
                                    <SignInButton mode="modal">
                                        <Button variant="ghost" size="sm">
                                            Login
                                        </Button>
                                    </SignInButton>
                                    <SignInButton mode="modal">
                                        <Button size="sm" className="hidden lg:block">
                                            Acesse o Notion gratuitamente
                                        </Button>
                                    </SignInButton>
                                </div>
                            )}
                            {isAuthenticated && !isLoading && (
                                <div className="flex items-center gap-x-2">
                                    <Button variant="ghost" size="sm" asChild>
                                        <Link href="documents">
                                            Acessar o Notion
                                        </Link>
                                    </Button>
                                    <UserButton
                                        afterSignOutUrl="/"
                                    />
                                </div>
                            )}
                        </li>
                        <li>
                            <ModeToggle />
                        </li>
                    </ul>
                </div>
                
            </div>
        </header>
    )
}

export default Navbar