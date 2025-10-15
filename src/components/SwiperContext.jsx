"use client";

import { createContext, useContext } from 'react';

export const SwiperContext = createContext({
  activeIndex: 0,
  slideTo: (_i) => {},
});

export const useSwiperController = () => useContext(SwiperContext);

