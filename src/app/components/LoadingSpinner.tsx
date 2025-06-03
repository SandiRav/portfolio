export const LoadingSpinner = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative">
        <div className="size-6 rounded-full border-2 border-slate-200 sm:size-10"></div>
        <div className="absolute top-0 size-6 animate-spin rounded-full border-4 border-secondary-200 border-t-transparent sm:size-10"></div>
      </div>
    </div>
  );
};
