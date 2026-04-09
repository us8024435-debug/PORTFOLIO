'use client'

import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

import type { Application as SplineApp } from '@splinetool/runtime'

interface SplineSceneProps {
  scene: string
  className?: string
  onLoad?: (splineApp: SplineApp) => void
}

export function SplineScene({ scene, className, onLoad }: SplineSceneProps) {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
        onLoad={onLoad}
      />
    </Suspense>
  )
}
