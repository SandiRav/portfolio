export default function Loading() {
  return (
    <div className="z-50 mx-auto mt-4 max-w-screen-lg px-5 lg:px-0">
      <div className="h-6 w-1/3 animate-pulse rounded bg-gray-200"></div>
      <div className="h-4 w-2/3 animate-pulse rounded bg-gray-100"></div>
      <div className="h-64 animate-pulse rounded-lg bg-gray-100"></div>
    </div>
  );
}
