"use client"

import type React from "react"
import {
  forwardRef,
  memo,
  type ReactNode,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react"

import { cn } from "@/lib/utils"

interface CarouselItem {
  /**
   * Unique identifier for the carousel item
   */
  id: string
  /**
   * The type of media: "image" or "video"
   */
  type: "image" | "video"
  /**
   * Source URL for the image or video
   */
  src: string
  /**
   * (Optional) Alternative text for images
   */
  alt?: string
  /**
   * (Optional) Poster image for videos (displayed before playback)
   */
  poster?: string
}

/**
 * Props for a single face of the cube in the BoxCarousel.
 */
interface FaceProps {
  /**
   * The CSS transform string to position and rotate the face in 3D space.
   */
  transform: string
  /**
   * Optional additional CSS class names for the face.
   */
  className?: string
  /**
   * Optional React children to render inside the face.
   */
  children?: ReactNode
  /**
   * Optional inline styles for the face.
   */
  style?: React.CSSProperties
}

const CubeFace = memo(({ transform, className, children, style }: FaceProps) => (
  <div className={cn("absolute overflow-hidden", className)} style={{ transform, ...style }}>
    {children}
  </div>
))

CubeFace.displayName = "CubeFace"

const MediaRenderer = memo(
  ({
    item,
    className,
  }: {
    item: CarouselItem
    className?: string
  }) => {
    if (item.type === "video") {
      return (
        <video
          src={item.src}
          poster={item.poster}
          className={cn("w-full h-full object-cover", className)}
          muted
          loop
          autoPlay
        />
      )
    }

    return (
      <img
        src={item.src || "/placeholder.svg"}
        alt={item.alt || ""}
        draggable={false}
        className={cn("w-full h-full object-cover", className)}
      />
    )
  },
)

MediaRenderer.displayName = "MediaRenderer"

export interface BoxCarouselRef {
  /**
   * Advance to the next item in the carousel.
   */
  next: () => void

  /**
   * Go back to the previous item in the carousel.
   */
  prev: () => void

  /**
   * Get the index of the currently visible item.
   */
  getCurrentItemIndex: () => number
}

type RotationDirection = "top" | "bottom" | "left" | "right"

interface SpringConfig {
  stiffness?: number
  damping?: number
  mass?: number
}

/**
 * Props for the BoxCarousel component
 */
interface BoxCarouselProps extends React.HTMLProps<HTMLDivElement> {
  /**
   * Array of items to display in the carousel
   */
  items: CarouselItem[]

  /**
   * Width of the carousel in pixels
   */
  width: number

  /**
   * Height of the carousel in pixels
   */
  height: number

  /**
   * Additional CSS classes for the container
   */
  className?: string

  /**
   * Perspective value for 3D effect (in px)
   * @default 600
   */
  perspective?: number

  /**
   * The axis and direction of rotation
   * @default "vertical"
   * "top" | "bottom" | "left" | "right"
   */
  direction?: RotationDirection

  /**
   * Transition duration in seconds
   * @default 1.25
   */
  transitionDuration?: number

  /**
   * Enable auto-play mode
   * @default false
   */
  autoPlay?: boolean

  /**
   * Interval (ms) between auto-play transitions
   * @default 3000
   */
  autoPlayInterval?: number

  /**
   * Callback when the current item index changes
   */
  onIndexChange?: (index: number) => void

  /**
   * Enable drag interaction
   * @default true
   */
  enableDrag?: boolean

  /**
   * Sensitivity of drag (higher = more rotation per pixel)
   * @default 0.5
   */
  dragSensitivity?: number
}

const BoxCarousel = forwardRef<BoxCarouselRef, BoxCarouselProps>(
  (
    {
      items,
      width,
      height,
      className,
      perspective = 600,
      direction = "left",
      transitionDuration = 1.25,
      autoPlay = false,
      autoPlayInterval = 3000,
      onIndexChange,
      enableDrag = true,
      dragSensitivity = 0.5,
      ...props
    },
    ref,
  ) => {
    const [currentItemIndex, setCurrentItemIndex] = useState(0)
    const [currentFrontFaceIndex, setCurrentFrontFaceIndex] = useState(1)

    const [rotateX, setRotateX] = useState(0)
    const [rotateY, setRotateY] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)

    // 0 ⇢ will be shown if the user presses "prev"
    const [prevIndex, setPrevIndex] = useState(items.length - 1)

    // 1 ⇢ item that is currently visible
    const [currentIndex, setCurrentIndex] = useState(0)

    // 2 ⇢ will be shown on the next "next"
    const [nextIndex, setNextIndex] = useState(1)

    // 3 ⇢ two steps ahead (the face that is at the back right now)
    const [afterNextIndex, setAfterNextIndex] = useState(2)

    const [currentRotation, setCurrentRotation] = useState(0)

    const rotationCount = useRef(1)
    const isRotating = useRef(false)
    const pendingIndexChange = useRef<number | null>(null)
    const isDragging = useRef(false)
    const startPosition = useRef({ x: 0, y: 0 })
    const startRotation = useRef(0)
    const cubeRef = useRef<HTMLDivElement>(null)

    const handleAnimationComplete = useCallback(
      (triggeredBy: string) => {
        if (isRotating.current && pendingIndexChange.current !== null) {
          isRotating.current = false
          setIsTransitioning(false)

          let newFrontFaceIndex: number
          let currentBackFaceIndex: number

          if (triggeredBy === "next") {
            newFrontFaceIndex = (currentFrontFaceIndex + 1) % 4
            currentBackFaceIndex = (newFrontFaceIndex + 2) % 4
          } else {
            newFrontFaceIndex = (currentFrontFaceIndex - 1 + 4) % 4
            currentBackFaceIndex = (newFrontFaceIndex + 3) % 4
          }

          setCurrentItemIndex(pendingIndexChange.current)
          onIndexChange?.(pendingIndexChange.current)

          const indexOffset = triggeredBy === "next" ? 2 : -1

          if (currentBackFaceIndex === 0) {
            setPrevIndex((pendingIndexChange.current + indexOffset + items.length) % items.length)
          } else if (currentBackFaceIndex === 1) {
            setCurrentIndex((pendingIndexChange.current + indexOffset + items.length) % items.length)
          } else if (currentBackFaceIndex === 2) {
            setNextIndex((pendingIndexChange.current + indexOffset + items.length) % items.length)
          } else if (currentBackFaceIndex === 3) {
            setAfterNextIndex((pendingIndexChange.current + indexOffset + items.length) % items.length)
          }

          pendingIndexChange.current = null
          rotationCount.current++

          setCurrentFrontFaceIndex(newFrontFaceIndex)
        }
      },
      [currentFrontFaceIndex, items.length, onIndexChange],
    )

    const handleDragStart = useCallback(
      (e: React.MouseEvent | React.TouchEvent) => {
        if (!enableDrag || isRotating.current) return

        isDragging.current = true
        const point = "touches" in e ? e.touches[0] : e
        startPosition.current = { x: point.clientX, y: point.clientY }
        startRotation.current = currentRotation

        // Disable transitions during drag
        if (cubeRef.current) {
          cubeRef.current.style.transition = "none"
        }

        e.preventDefault()
      },
      [enableDrag, currentRotation],
    )

    const handleDragMove = useCallback(
      (e: MouseEvent | TouchEvent) => {
        if (!isDragging.current || isRotating.current) return

        const point = "touches" in e ? e.touches[0] : e
        const deltaX = point.clientX - startPosition.current.x
        const deltaY = point.clientY - startPosition.current.y

        const isVertical = direction === "top" || direction === "bottom"
        const delta = isVertical ? deltaY : deltaX
        const rotationDelta = (delta * dragSensitivity) / 2

        let newRotation = startRotation.current

        if (direction === "top" || direction === "right") {
          newRotation += rotationDelta
        } else {
          newRotation -= rotationDelta
        }

        // Constrain rotation to ±120 degrees from start position
        const minRotation = startRotation.current - 120
        const maxRotation = startRotation.current + 120
        newRotation = Math.max(minRotation, Math.min(maxRotation, newRotation))

        // Apply the rotation immediately during drag
        if (isVertical) {
          setRotateX(newRotation)
        } else {
          setRotateY(newRotation)
        }
      },
      [enableDrag, direction, dragSensitivity],
    )

    const handleDragEnd = useCallback(() => {
      if (!isDragging.current) return

      isDragging.current = false

      // Re-enable transitions
      if (cubeRef.current) {
        cubeRef.current.style.transition = `transform ${transitionDuration}s cubic-bezier(0.953, 0.001, 0.019, 0.995)`
      }

      const isVertical = direction === "top" || direction === "bottom"
      const currentValue = isVertical ? rotateX : rotateY

      // Calculate the nearest quarter rotation (90-degree increment)
      const quarterRotations = Math.round(currentValue / 90)
      const snappedRotation = quarterRotations * 90

      // Calculate how many steps we've moved from the original position
      const rotationDifference = snappedRotation - currentRotation
      const steps = Math.round(rotationDifference / 90)

      if (steps !== 0) {
        isRotating.current = true
        setIsTransitioning(true)

        // Calculate new item index
        let newItemIndex = currentItemIndex
        for (let i = 0; i < Math.abs(steps); i++) {
          if (steps > 0) {
            newItemIndex = (newItemIndex + 1) % items.length
          } else {
            newItemIndex = newItemIndex === 0 ? items.length - 1 : newItemIndex - 1
          }
        }

        pendingIndexChange.current = newItemIndex

        // Animate to the snapped position
        if (isVertical) {
          setRotateX(snappedRotation)
        } else {
          setRotateY(snappedRotation)
        }

        // Handle animation complete after transition duration
        setTimeout(() => {
          handleAnimationComplete(steps > 0 ? "next" : "prev")
          setCurrentRotation(snappedRotation)
        }, transitionDuration * 1000)
      } else {
        // Snap back to current position
        if (isVertical) {
          setRotateX(currentRotation)
        } else {
          setRotateY(currentRotation)
        }
      }
    }, [
      direction,
      rotateX,
      rotateY,
      currentRotation,
      currentItemIndex,
      items.length,
      transitionDuration,
      handleAnimationComplete,
    ])

    // Set up global event listeners for drag
    useEffect(() => {
      if (enableDrag) {
        window.addEventListener("mousemove", handleDragMove)
        window.addEventListener("mouseup", handleDragEnd)
        window.addEventListener("touchmove", handleDragMove)
        window.addEventListener("touchend", handleDragEnd)

        return () => {
          window.removeEventListener("mousemove", handleDragMove)
          window.removeEventListener("mouseup", handleDragEnd)
          window.removeEventListener("touchmove", handleDragMove)
          window.removeEventListener("touchend", handleDragEnd)
        }
      }
    }, [enableDrag, handleDragMove, handleDragEnd])

    const next = useCallback(() => {
      if (items.length === 0 || isRotating.current) return

      isRotating.current = true
      setIsTransitioning(true)
      const newIndex = (currentItemIndex + 1) % items.length
      pendingIndexChange.current = newIndex

      const newRotation =
        direction === "top"
          ? currentRotation + 90
          : direction === "bottom"
            ? currentRotation - 90
            : direction === "left"
              ? currentRotation - 90
              : currentRotation + 90

      if (direction === "top" || direction === "bottom") {
        setRotateX(newRotation)
      } else {
        setRotateY(newRotation)
      }

      // Handle animation complete after transition duration
      setTimeout(() => {
        handleAnimationComplete("next")
        setCurrentRotation(newRotation)
      }, transitionDuration * 1000)
    }, [items.length, direction, transitionDuration, currentRotation, currentItemIndex, handleAnimationComplete])

    const prev = useCallback(() => {
      if (items.length === 0 || isRotating.current) return

      isRotating.current = true
      setIsTransitioning(true)
      const newIndex = currentItemIndex === 0 ? items.length - 1 : currentItemIndex - 1
      pendingIndexChange.current = newIndex

      const newRotation =
        direction === "top"
          ? currentRotation - 90
          : direction === "bottom"
            ? currentRotation + 90
            : direction === "left"
              ? currentRotation + 90
              : currentRotation - 90

      if (direction === "top" || direction === "bottom") {
        setRotateX(newRotation)
      } else {
        setRotateY(newRotation)
      }

      // Handle animation complete after transition duration
      setTimeout(() => {
        handleAnimationComplete("prev")
        setCurrentRotation(newRotation)
      }, transitionDuration * 1000)
    }, [items.length, direction, transitionDuration, currentRotation, currentItemIndex, handleAnimationComplete])

    useImperativeHandle(
      ref,
      () => ({
        next,
        prev,
        getCurrentItemIndex: () => currentItemIndex,
      }),
      [next, prev, currentItemIndex],
    )

    const depth = useMemo(
      () => (direction === "top" || direction === "bottom" ? height : width),
      [direction, width, height],
    )

    const cubeTransform = `translateZ(-${depth / 2}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

    // Determine face transforms based on the desired rotation axis
    const faceTransforms = (() => {
      switch (direction) {
        case "left":
          return [
            // left, front, right, back (rotation around Y-axis)
            `rotateY(-90deg) translateZ(${width / 2}px)`,
            `rotateY(0deg) translateZ(${depth / 2}px)`,
            `rotateY(90deg) translateZ(${width / 2}px)`,
            `rotateY(180deg) translateZ(${depth / 2}px)`,
          ]
        case "top":
          return [
            // top, front, bottom, back (rotation around X-axis)
            `rotateX(90deg) translateZ(${height / 2}px)`,
            `rotateY(0deg) translateZ(${depth / 2}px)`,
            `rotateX(-90deg) translateZ(${height / 2}px)`,
            `rotateY(180deg) translateZ(${depth / 2}px) rotateZ(180deg)`,
          ]
        case "right":
          return [
            // right, front, left, back (rotation around Y-axis)
            `rotateY(90deg) translateZ(${width / 2}px)`,
            `rotateY(0deg) translateZ(${depth / 2}px)`,
            `rotateY(-90deg) translateZ(${width / 2}px)`,
            `rotateY(180deg) translateZ(${depth / 2}px)`,
          ]
        case "bottom":
          return [
            // bottom, front, top, back (rotation around X-axis)
            `rotateX(-90deg) translateZ(${height / 2}px)`,
            `rotateY(0deg) translateZ(${depth / 2}px)`,
            `rotateX(90deg) translateZ(${height / 2}px)`,
            `rotateY(180deg) translateZ(${depth / 2}px) rotateZ(180deg)`,
          ]
        default:
          return [
            // left, front, right, back (rotation around Y-axis)
            `rotateY(-90deg) translateZ(${width / 2}px)`,
            `rotateY(0deg) translateZ(${depth / 2}px)`,
            `rotateY(90deg) translateZ(${width / 2}px)`,
            `rotateY(180deg) translateZ(${depth / 2}px)`,
          ]
      }
    })()

    // Auto play functionality
    useEffect(() => {
      if (autoPlay && items.length > 0) {
        const interval = setInterval(next, autoPlayInterval)
        return () => clearInterval(interval)
      }
    }, [autoPlay, items.length, next, autoPlayInterval])

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (isRotating.current) return

        switch (e.key) {
          case "ArrowLeft":
            e.preventDefault()
            if (direction === "left" || direction === "right") {
              prev()
            }
            break
          case "ArrowRight":
            e.preventDefault()
            if (direction === "left" || direction === "right") {
              next()
            }
            break
          case "ArrowUp":
            e.preventDefault()
            if (direction === "top" || direction === "bottom") {
              prev()
            }
            break
          case "ArrowDown":
            e.preventDefault()
            if (direction === "top" || direction === "bottom") {
              next()
            }
            break
          default:
            break
        }
      },
      [direction, next, prev, items.length],
    )

    return (
      <div
        className={cn("relative focus:outline-0", enableDrag && "cursor-move", className)}
        style={{
          width,
          height,
          perspective: `${perspective}px`,
        }}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-label={`3D carousel with ${items.length} items`}
        aria-describedby="carousel-instructions"
        aria-live="polite"
        aria-atomic="true"
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        {...props}
      >
        <div
          ref={cubeRef}
          className="relative w-full h-full"
          style={{
            transform: cubeTransform,
            transformStyle: "preserve-3d",
            transition:
              isTransitioning && !isDragging.current
                ? `transform ${transitionDuration}s cubic-bezier(0.953, 0.001, 0.019, 0.995)`
                : "none",
          }}
        >
          {/* First face */}
          <CubeFace transform={faceTransforms[0]} style={{ width, height }}>
            <MediaRenderer item={items[prevIndex]} />
          </CubeFace>

          {/* Second face */}
          <CubeFace transform={faceTransforms[1]} style={{ width, height }}>
            <MediaRenderer item={items[currentIndex]} />
          </CubeFace>

          {/* Third face */}
          <CubeFace transform={faceTransforms[2]} style={{ width, height }}>
            <MediaRenderer item={items[nextIndex]} />
          </CubeFace>

          {/* Fourth face */}
          <CubeFace transform={faceTransforms[3]} style={{ width, height }}>
            <MediaRenderer item={items[afterNextIndex]} />
          </CubeFace>
        </div>
      </div>
    )
  },
)

BoxCarousel.displayName = "BoxCarousel"

export default BoxCarousel
export type { CarouselItem, RotationDirection, SpringConfig }
