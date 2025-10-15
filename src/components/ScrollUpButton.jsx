"use client";

import { useSwiperController } from './SwiperContext';

export default function ScrollUpButton() {
  const { activeIndex, slideTo } = useSwiperController();
  if (activeIndex <= 0) return null;
  return (
    <button
      type="button"
      onClick={() => slideTo(0)}
      aria-label="Volver al inicio"
      className="fixed bottom-4 right-4 z-50 grid size-12 place-items-center rounded-full border border-border bg-black/60 text-white backdrop-blur hover:bg-black/80"
      title="Arriba"
    >
      <i className="ri-arrow-up-line text-2xl" />
    </button>
  );
}

