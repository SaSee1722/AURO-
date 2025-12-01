"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Info, CheckCircle, XCircle } from "lucide-react"

interface ConfirmDialogProps {
    open: boolean
    title: string
    message: string
    confirmText?: string
    cancelText?: string
    variant?: "danger" | "warning" | "info" | "success"
    onConfirm: () => void
    onCancel: () => void
}

export function ConfirmDialog({
    open,
    title,
    message,
    confirmText = "Confirm",
    cancelText = "Cancel",
    variant = "warning",
    onConfirm,
    onCancel,
}: ConfirmDialogProps) {
    if (!open) return null

    const icons = {
        danger: <XCircle className="h-12 w-12 text-destructive" />,
        warning: <AlertTriangle className="h-12 w-12 text-orange-500" />,
        info: <Info className="h-12 w-12 text-primary" />,
        success: <CheckCircle className="h-12 w-12 text-success" />,
    }

    const iconBgs = {
        danger: "bg-destructive/10",
        warning: "bg-orange-500/10",
        info: "bg-primary/10",
        success: "bg-success/10",
    }

    return (
        <div
            className="fixed top-0 left-0 right-0 bottom-0 z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-200"
            style={{ position: 'fixed', inset: 0 }}
        >
            {/* Dialog */}
            <Card className="glass border-0 p-6 w-full max-w-sm shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 relative">
                <div className="flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className={`h-16 w-16 rounded-full ${iconBgs[variant]} flex items-center justify-center mb-4`}>
                        {icons[variant]}
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-foreground mb-2">{title}</h2>

                    {/* Message */}
                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{message}</p>

                    {/* Buttons */}
                    <div className="flex gap-3 w-full">
                        <Button
                            onClick={onCancel}
                            variant="outline"
                            className="flex-1 h-11 font-medium"
                        >
                            {cancelText}
                        </Button>
                        <Button
                            onClick={onConfirm}
                            className={`flex-1 h-11 font-medium ${variant === "danger"
                                    ? "bg-destructive hover:bg-destructive/90"
                                    : "bg-primary hover:bg-primary/90"
                                }`}
                        >
                            {confirmText}
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}
