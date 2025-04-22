export default function Loading() {
  return (
    <div className="max-w-screen-lg mx-auto px-5 z-50 mt-4 lg:px-0">
      <div className="h-6 bg-gray-200 rounded w-1/3 animate-pulse"></div>
      <div className="h-4 bg-gray-100 rounded w-2/3 animate-pulse"></div>
      <div className="h-64 bg-gray-100 rounded-lg animate-pulse"></div>
    </div>
  );
}
