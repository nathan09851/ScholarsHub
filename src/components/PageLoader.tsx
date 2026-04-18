import { Skeleton } from "@/components/ui/skeleton";

const PageLoader = () => (
  <div className="min-h-screen px-4 pb-16 pt-28">
    <div className="mx-auto max-w-7xl space-y-8">
      <div className="surface-panel p-6 md:p-8">
        <Skeleton className="h-8 w-28 rounded-full" />
        <Skeleton className="mt-5 h-14 w-full max-w-2xl rounded-3xl" />
        <Skeleton className="mt-4 h-6 w-full max-w-xl rounded-2xl" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Skeleton className="h-28 rounded-[24px]" />
          <Skeleton className="h-28 rounded-[24px]" />
          <Skeleton className="h-28 rounded-[24px]" />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Skeleton className="h-64 rounded-[28px]" />
        <Skeleton className="h-64 rounded-[28px]" />
        <Skeleton className="h-64 rounded-[28px]" />
      </div>
    </div>
  </div>
);

export default PageLoader;
