"use client"
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/variants"
import Notion from "@/public/images/icons/notion"

const Footer = () => {
    return (
        <motion.footer
            variants={fadeIn("up", 22)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-[98%] mx-auto py-12 border-t text-sm md:text-lg"
        >
            <div className="w-[90%] xl:w-3/5 mx-auto">
                <div className="flex flex-col md:flex-row justify-center gap-x-10">
                    <div>
                        <div className="mb-8">
                            <Notion width="35" height="35" />
                        </div>
                    </div>
                    <div className="grid gap-10 md:gap-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        <ul>
                            <li className="font-bold mb-2">
                                Produto
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Wikis
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Projetos
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Documentos
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                IA do Notion
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Ilustrações
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Novidades
                            </li>
                        </ul>
                        <ul>
                            <li className="font-bold mb-2">
                                Baixar
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                iOS
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Android
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Mac
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Windows
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Web Clipper
                            </li>
                        </ul>
                        <ul>
                            <li className="font-bold mb-2">
                                Primeiros passos
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Saia do Confluence
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Comparar com Asana
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Saia do Evernote
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Comparar com Monday
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Comparar com Clickup
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Comparar com Jira
                            </li>
                        </ul>
                        <ul>
                            <li className="font-bold mb-2">
                                Soluções
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Enterprise
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Pequenas empresas
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Uso pessoal
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Trabalho remoto
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Startups
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Educação
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Organização sem fins lucrativos
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                            Produto
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Design
                            </li>
                        </ul>
                        <ul>
                            <li className="font-bold mb-2">
                                Criar
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Integrações
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Modelos
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Documentações sobre API
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Guias e tutoriais
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Encontre um consultor
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Torne-se um afiliado
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Blog
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Comunidade
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Webinar
                            </li>
                        </ul>
                        <ul>
                            <li className="font-bold mb-2">
                                Recursos
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Preços
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Sobre nós
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Carreiras
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Kit de mídia
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Envie um e-mail para nós
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Segurança
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Configurações de cookies
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Terrmos e privacidade
                            </li>
                            <li className="text-gray-500 dark:text-white hover:text-blue-400 hover:underline cursor-pointer">
                                Status
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-end mt-12">
                    <p className="text-sm">
                        Não venda nem compartilhe minhas informações.
                    </p>
                    <p className="text-md text-gray-400">
                        © 2023 Notion Labs, Inc.
                    </p>
                </div>
            </div>
        </motion.footer>
    )
}

export default Footer