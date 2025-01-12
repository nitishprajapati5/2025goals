import { Skeleton } from "@/components/ui/skeleton"

export function PageLoading() {
  let skeletonNumber = 5
  return (
    <div className="flex min-h-screen justify-center flex-col items-center">
      {Array.from({ length: skeletonNumber }).map((_, index) => (
        <div key={index} className="space-y-6 w-full max-w-lg">
          <Skeleton className="h-12 w-12 rounded-full m-3" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
        </div>
      ))}
    </div>
  )
}
