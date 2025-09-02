"use client"

// import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { clients } from "@/lib/data"

export function LogoMarquee() {
  const [pausedRow, setPausedRow] = useState<string | null>(null)

  // Split clients into two rows for the marquee
  const firstRowClients = clients.slice(0, Math.ceil(clients.length / 2))
  const secondRowClients = clients.slice(Math.ceil(clients.length / 2))

  const LogoCard = ({ client, rowId }: { client: typeof clients[0]; rowId: string }) => (
    <div
      className="flex-shrink-0 mx-3 group cursor-pointer"
      onMouseEnter={() => setPausedRow(rowId)}
      onMouseLeave={() => setPausedRow(null)}
      onClick={() => window.open(client.url, '_blank')}
    >
      <div className={cn(
        "w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl",
        "glass-card",
        "flex items-center justify-center",
        "transition-all duration-300",
        "group-hover:scale-105 group-hover:shadow-neon-purple/20"
      )}>
        <div className="relative w-16 h-8 sm:w-20 sm:h-10 lg:w-24 lg:h-12">
          <Image
            src={client.logo || "/placeholder.svg"}
            alt={client.name}
            fill
            className="object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
            sizes="(min-width: 1024px) 128px, (min-width: 640px) 112px, 96px"
          />
        </div>
      </div>
    </div>
  )

  return (
    <section className="section-padding overflow-hidden relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background opacity-50 -z-10" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-row items-center justify-between mb-12 sm:flex-row sm:items-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl text-center sm:text-left">
            Trusted By <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">Industry Leaders</span>
            {/* <br />
            customers */}
          </h2>
          {/* <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We've had the privilege of partnering with some of the most innovative projects in the Web3 ecosystem, helping them build thriving communities and achieve sustainable growth.
          </p> */}
        </div>

        {/* Logo Marquee */}
        <div className="relative">
          {/* First Row - Scrolling Right */}
          <div className="flex overflow-hidden mb-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className={cn(
                "flex animate-scroll-right whitespace-nowrap",
                pausedRow === "first" && "animation-play-state-paused"
              )}
              style={{
                width: "max-content",
              }}
            >
              {/* Triple the clients for seamless loop */}
              {[...firstRowClients, ...firstRowClients, ...firstRowClients].map((client, index) => (
                <LogoCard key={`first-${index}`} client={client} rowId="first" />
              ))}
            </div>
          </div>

          {/* Second Row - Scrolling Left */}
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className={cn(
                "flex animate-scroll-left whitespace-nowrap",
                pausedRow === "second" && "animation-play-state-paused"
              )}
              style={{
                width: "max-content",
              }}
            >
              {/* Triple the clients for seamless loop */}
              {[...secondRowClients, ...secondRowClients, ...secondRowClients].map((client, index) => (
                <LogoCard key={`second-${index}`} client={client} rowId="second" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
