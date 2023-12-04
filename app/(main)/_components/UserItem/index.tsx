"use client"
import { useUser, SignOutButton } from "@clerk/clerk-react"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronsLeftRightIcon } from "lucide-react"

const UserItem = () => {
    const { user } = useUser()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div role="button" className="flex items-center p-3 w-full hover: bg-primary/5">
                    <div className="flex items-center gap-x-2 max-w-[150px">
                        <Avatar className="w-5 h-5 md:w-7 md:h-7">
                            <AvatarImage src={user?.imageUrl} />
                        </Avatar>
                        <div className="text-start font-medium line-clamp-1">
                            {user?.fullName} Notion
                        </div>
                    </div>
                    <div className="ml-2 px-1 py-[2px] dark:bg-white rounded-sm transition">
                        <ChevronsLeftRightIcon className="w-4 h-4 text-muted-foreground rotate-90" />
                    </div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80" align="start" alignOffset={11} forceMount>
                <div className="flex flex-col space-y-4 p-2">
                    <div>
                        <p className="text-sm font-medium leading-none text-muted-foreground">
                            {user?.emailAddresses[0].emailAddress}
                        </p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <div className="rounded-md bg-secondary p-1">
                            <Avatar className="w-8 h-8">
                                <AvatarImage src={user?.imageUrl} />
                            </Avatar>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm line-clamp-1">
                                {user?.fullName}
                            </p>
                        </div>
                    </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="w-full text-muted-foreground cursor-pointer" asChild>
                    <SignOutButton>
                        Sair
                    </SignOutButton>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserItem