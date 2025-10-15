"use client";

import { useEffect, useState } from 'react';
import HorizontalSwiper from '../components/HorizontalSwiper';
import Loader from '../components/Loader';
import ScrollUpButton from '../components/ScrollUpButton';

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(id);
  }, []);

  if (loading) return <Loader />;

  return (
    <main className="w-screen h-screen overflow-hidden">
      <HorizontalSwiper />
      <ScrollUpButton />
    </main>
  );
}
