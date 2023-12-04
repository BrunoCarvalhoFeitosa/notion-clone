"use client"
import { useSettings } from "@/hooks/use-settings"
import { ModeToggle } from "@/components/globals/mode-toggle"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"

export const SettingsModal = () => {
    const settings = useSettings()

    return (
        <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
            <DialogContent>
                <DialogHeader className="border-b pb-3">
                    <h2 className="text-lg font-medium">
                        Minhas configurações
                    </h2>
                </DialogHeader>
                <div className="flex justify-between items-center gap-x-4">
                    <div className="flex flex-col gap-y-2">
                        <Label>
                            Aparência
                        </Label>
                        <div className="text-sm text-muted-foreground">
                            Customize o Notion de acordo com a sua preferência de cor.
                        </div>
                    </div>
                    <ModeToggle />
                </div>
            </DialogContent>
        </Dialog>
    )
}