export default function Loading() {
  return (
    <div className="p-6 space-y-4 animate-pulse">
      <div className="h-6 w-1/3 bg-gray-200 rounded" />
      <div className="h-4 w-2/3 bg-gray-200 rounded" />
      <div className="h-4 w-1/2 bg-gray-200 rounded" />
    </div>
  );
}
