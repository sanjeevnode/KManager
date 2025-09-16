"use client"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { secretStore } from "@/store"



export function DeleteAlert() {
    const {secretToDelete, setSecretToDelete} = secretStore();
    
    const handleOpenChange = (open: boolean) => {
        if (!open) {
            setSecretToDelete(null);
        }
    }

    const handleDelete = () => {
       console.log("Deleted secret with id:", secretToDelete?.id);
    }
    console.log("Rendering DeleteAlert, secretToDelete:", secretToDelete);
    return (
        <AlertDialog open={!!secretToDelete} onOpenChange={handleOpenChange}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete this secret.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete} className="bg-red-600 hover:bg-red-700">
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}