'use client';

import { ReactQueryProvider } from '@/app/ReactQueryProvider';
import { NextUIProvider } from '@nextui-org/react';

export const runtime = "edge";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </ReactQueryProvider>
  )
}