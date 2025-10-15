"use client";

export default function Loader() {
  return (
    <div className="grid h-screen w-screen place-items-center bg-white dark:bg-neutral-950">
      <div className="relative">
        <div className="size-20 animate-spin rounded-full border-4 border-neutral-200 border-t-primary dark:border-neutral-800" />
      </div>
    </div>
  );
}

