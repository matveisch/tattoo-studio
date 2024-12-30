import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-background">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative z-10 flex flex-col justify-center px-6 py-12 lg:px-8 lg:py-24">
          <div className="max-w-xl">
            <p className="mb-6 font-mono text-sm uppercase tracking-wider text-muted-foreground">
              Premium Tattoo Studio
            </p>
            <h1 className="font-serif text-3xl font-light tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Crafting Timeless
              <span className="block">Artistry in Ink</span>
            </h1>
            <p className="mt-6 max-w-xl text-base lg:text-lg leading-relaxed text-muted-foreground">
              Experience the perfect blend of artistic vision and technical precision. Our studio brings your ideas to life with unparalleled attention to detail.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-x-6">
              <Button
                asChild
                className="w-full sm:w-auto rounded-none bg-primary px-8 py-6 text-base font-normal text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/booking">Book Consultation</Link>
              </Button>
              <Button
                asChild
                variant="link"
                className="text-base font-normal text-foreground"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative lg:order-last order-first">
          <Image src="/tattoo-studio-hero.jpg" alt="Tattoo studio interior" width={1000} height={1000} className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}
