"use client"
import LoadingScreen from '@/components/LoadingScreen';
import { Suspense } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<LoadingScreen />}>
        {children}
      </Suspense>
    </main>
  );
}