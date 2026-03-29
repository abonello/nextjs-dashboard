import DashboardSkeleton from "@/app/ui/skeletons";

export default function Loading() {
    return <DashboardSkeleton />;
    
    // return (
    //     <div className="flex h-full animate-pulse items-center justify-center rounded-xl bg-gray-50 p-4">
    //         <p className="text-gray-400">Loading Dashboard info...</p>
    //     </div>
    // );
}