"use client"

import React, { forwardRef, useImperativeHandle, useRef, useState, useEffect } from "react"

interface CarouselItem {
  id: string
  type: "image" | "video"
  src: string
  alt?: string
  poster?: string
}

interface SimpleBoxCarouselProps {
  items: CarouselItem[]
  width: number
  height: number
  direction?: "top" | "bottom" | "left" | "right"
  autoPlay?: boolean
  autoPlayInterval?: number
  onIndexChange?: (index: number) => void
  enableDrag?: boolean
  perspective?: number
}

export interface SimpleBoxCarouselRef {
  goToIndex: (index: number) => void
  next: () => void
  previous: () => void
}

const SimpleBoxCarousel = forwardRef<SimpleBoxCarouselRef, SimpleBoxCarouselProps>(
  (
    {
      items,
      width,
      height,
      direction = "top",
      autoPlay = false,
      autoPlayInterval = 3000,
      onIndexChange,
      enableDrag = true,
      perspective = 1000,
    },
    ref
  ) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const isDragging = useRef(false)
    const startX = useRef(0)
    const startY = useRef(0)
    const currentRotationX = useRef(0)
    const currentRotationY = useRef(0)

    const depth = Math.min(width, height) * 0.5

    // Calculate face transforms based on direction
    const getFaceTransforms = () => {
      switch (direction) {
        case "top":
          return [
            `rotateX(90deg) translateZ(${height / 2}px)`, // top
            `rotateY(0deg) translateZ(${depth / 2}px)`,   // front
            `rotateX(-90deg) translateZ(${height / 2}px)`, // bottom
            `rotateY(180deg) translateZ(${depth / 2}px) rotateZ(180deg)`, // back
          ]
        case "bottom":
          return [
            `rotateX(-90deg) translateZ(${height / 2}px)`, // bottom
            `rotateY(0deg) translateZ(${depth / 2}px)`,    // front
            `rotateX(90deg) translateZ(${height / 2}px)`,  // top
            `rotateY(180deg) translateZ(${depth / 2}px) rotateZ(180deg)`, // back
          ]
        case "left":
          return [
            `rotateY(-90deg) translateZ(${width / 2}px)`, // left
            `rotateY(0deg) translateZ(${depth / 2}px)`,   // front
            `rotateY(90deg) translateZ(${width / 2}px)`,  // right
            `rotateY(180deg) translateZ(${depth / 2}px)`, // back
          ]
        case "right":
          return [
            `rotateY(90deg) translateZ(${width / 2}px)`,  // right
            `rotateY(0deg) translateZ(${depth / 2}px)`,   // front
            `rotateY(-90deg) translateZ(${width / 2}px)`, // left
            `rotateY(180deg) translateZ(${depth / 2}px)`, // back
          ]
        default:
          return []
      }
    }

    const faceTransforms = getFaceTransforms()

    // Calculate item indices for each face
    const getItemIndices = () => {
      const prevIndex = (currentIndex - 1 + items.length) % items.length
      const nextIndex = (currentIndex + 1) % items.length
      const afterNextIndex = (currentIndex + 2) % items.length
      return [prevIndex, nextIndex, afterNextIndex]
    }

    const [prevIndex, nextIndex, afterNextIndex] = getItemIndices()

    // Auto-play effect
    useEffect(() => {
      console.log("Auto-play setup:", { autoPlay, autoPlayInterval, itemsLength: items.length })
      if (!autoPlay) return

      const interval = setInterval(() => {
        if (!isDragging.current) {
          console.log("Auto-play advancing index")
          setCurrentIndex((prev) => (prev + 1) % items.length)
        }
      }, autoPlayInterval)

      return () => clearInterval(interval)
    }, [autoPlay, autoPlayInterval, items.length])

    // Notify parent of index change
    useEffect(() => {
      onIndexChange?.(currentIndex)
    }, [currentIndex, onIndexChange])

    // Drag handlers
    const handleMouseDown = (e: React.MouseEvent) => {
      if (!enableDrag) return
      isDragging.current = true
      startX.current = e.clientX
      startY.current = e.clientY
      e.preventDefault()
    }

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!isDragging.current || !enableDrag) return

      const deltaX = e.clientX - startX.current
      const deltaY = e.clientY - startY.current

      // Convert mouse movement to rotation
      const sensitivity = 0.5
      currentRotationX.current = deltaY * sensitivity
      currentRotationY.current = deltaX * sensitivity

      if (containerRef.current) {
        containerRef.current.style.transform = `translateZ(-${depth / 2}px) rotateX(${currentRotationX.current}deg) rotateY(${currentRotationY.current}deg)`
      }
    }

    const handleMouseUp = () => {
      if (!isDragging.current) return
      isDragging.current = false

      // Snap to nearest rotation
      const snapThreshold = 30
      if (Math.abs(currentRotationY.current) > snapThreshold) {
        if (currentRotationY.current > 0) {
          setCurrentIndex((prev) => (prev + 1) % items.length)
        } else {
          setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
        }
      }

      // Reset rotation
      currentRotationX.current = 0
      currentRotationY.current = 0
      if (containerRef.current) {
        containerRef.current.style.transform = `translateZ(-${depth / 2}px) rotateX(0deg) rotateY(0deg)`
      }
    }

    // Touch handlers
    const handleTouchStart = (e: React.TouchEvent) => {
      if (!enableDrag) return
      isDragging.current = true
      const touch = e.touches[0]
      startX.current = touch.clientX
      startY.current = touch.clientY
      e.preventDefault()
    }

    const handleTouchMove = (e: React.TouchEvent) => {
      if (!isDragging.current || !enableDrag) return

      const touch = e.touches[0]
      const deltaX = touch.clientX - startX.current
      const deltaY = touch.clientY - startY.current

      const sensitivity = 0.5
      currentRotationX.current = deltaY * sensitivity
      currentRotationY.current = deltaX * sensitivity

      if (containerRef.current) {
        containerRef.current.style.transform = `translateZ(-${depth / 2}px) rotateX(${currentRotationX.current}deg) rotateY(${currentRotationY.current}deg)`
      }
    }

    const handleTouchEnd = () => {
      handleMouseUp()
    }

    // Expose methods via ref
    useImperativeHandle(ref, () => ({
      goToIndex: (index: number) => {
        setCurrentIndex(index % items.length)
      },
      next: () => {
        setCurrentIndex((prev) => (prev + 1) % items.length)
      },
      previous: () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
      },
    }))

    return (
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          perspective: `${perspective}px`,
          perspectiveOrigin: "center center",
        }}
        className="relative"
      >
        <div
          ref={containerRef}
          style={{
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
            transform: `translateZ(-${depth / 2}px) rotateX(-15deg) rotateY(15deg)`,
            transition: isDragging.current ? "none" : "transform 0.6s ease-out",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Face 1 */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              transform: faceTransforms[0],
              backfaceVisibility: "hidden",
            }}
          >
            <img
              src={items[prevIndex]?.src}
              alt={items[prevIndex]?.alt || ""}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          {/* Face 2 */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              transform: faceTransforms[1],
              backfaceVisibility: "hidden",
            }}
          >
            <img
              src={items[currentIndex]?.src}
              alt={items[currentIndex]?.alt || ""}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          {/* Face 3 */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              transform: faceTransforms[2],
              backfaceVisibility: "hidden",
            }}
          >
            <img
              src={items[nextIndex]?.src}
              alt={items[nextIndex]?.alt || ""}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          {/* Face 4 */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              transform: faceTransforms[3],
              backfaceVisibility: "hidden",
            }}
          >
            <img
              src={items[afterNextIndex]?.src}
              alt={items[afterNextIndex]?.alt || ""}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    )
  }
)

SimpleBoxCarousel.displayName = "SimpleBoxCarousel"

export default SimpleBoxCarousel
