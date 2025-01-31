import { Skeleton } from "@/components/ui/skeleton";
import { SketelonProvider } from "../_contexts/SkeletonContext";
import { ProgressProvider } from "../_contexts/ProgressContext";
import ProgressBar from "../_components/ProgressBar";
import { AuthProvider } from "../_contexts/AuthContext";

export default function dashboardLayout({children}){
    return (
        <main>
         {children}
        </main>

    )
}