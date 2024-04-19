interface ListSkeletonProps {
  length: number;
}

export default function ListSkeleton({ length }: ListSkeletonProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {Array.from({ length }, (_, index) => (
        <div className="flex flex-col gap-2" key={index}>
          <div className="aspect-square w-full animate-pulse bg-default"></div>
          <div className="h-5 w-full animate-pulse bg-default"></div>
          <div className="h-6 w-full animate-pulse bg-default"></div>
          <div className="h-5 w-full animate-pulse bg-default"></div>
          <div className="h-6 w-full animate-pulse bg-default"></div>
        </div>
      ))}
    </div>
  );
}
