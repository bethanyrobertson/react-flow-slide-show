import * as React from "react"
import { cn } from "@/lib/utils"

// CarouselApi type definition
export type CarouselApi = {
  scrollNext: () => void
  scrollPrev: () => void
  scrollTo: (index: number) => void
  canScrollNext: boolean
  canScrollPrev: boolean
  selectedIndex: number
  selectedScrollSnap: () => number
  scrollSnaps: number[]
  on: (event: string, callback: () => void) => void
  off: (event: string, callback: () => void) => void
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    setApi?: (api: CarouselApi) => void
  }
>(({ className, setApi, ...props }, ref) => {
  const [api, setCarouselApi] = React.useState<CarouselApi | null>(null)

  React.useEffect(() => {
    if (setApi && api) {
      setApi(api)
    }
  }, [setApi, api])

  // Use setCarouselApi to avoid unused variable warning
  React.useEffect(() => {
    setCarouselApi(api)
  }, [api])

  return (
    <div
      ref={ref}
      className={cn("relative", className)}
      {...props}
    />
  )
})
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex space-x-4", className)}
    {...props}
  />
))
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("min-w-0 shrink-0 grow-0 basis-full", className)}
    {...props}
  />
))
CarouselItem.displayName = "CarouselItem"

export { Carousel, CarouselContent, CarouselItem }
