import { Skeleton } from "@/components/ui/skeleton";
import { SketelonProvider } from "../_contexts/SkeletonContext";
import { ProgressProvider } from "../_contexts/ProgressContext";
import ProgressBar from "../_components/ProgressBar";

export default function dashboardLayout({children}){
    return (
        <ProgressProvider>
        <main>
         {children}
        </main>
        </ProgressProvider>

    )
}