"use client"

import Head from "next/head"
import { Inter } from "next/font/google"
import { Canvas } from "@react-three/fiber"
import { Model } from "@/public/Ferrari"

const inter = Inter({ subsets: ["latin"] })

import { useState } from "react"
import { Environment, Scroll, ScrollControls } from "@react-three/drei"
import HtmlContent from "@/components/HtmlContent"
import useModelScale from "@/hooks/useModelScale"

export default function Home() {
  const [showBuy, setShowBuy] = useState(false)
  const { modelScale } = useModelScale()

  return (
    <>
      <Head>
        <title>Ferrari Hyperion</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Canvas>
        <ScrollControls pages={showBuy ? 1 : 8} damping={0.1}>
          {/* Canvas contents in here will *not* scroll, but receive useScroll! */}
          <ambientLight />

          <Environment
            background // can be true, false or "only" (which only sets the background) (default: false)
            // preset="warehouse"
            files={import("@pmndrs/assets/hdri/warehouse")}
          />

          {!showBuy && (
            <>
              <Model
                rotation={[0.3, 1.2, 0.05]}
                position={[0, -0.25, 1]}
                animationRotate={false}
                scale={modelScale}
              />

              {/* <Scroll>Canvas contents in here will scroll along</Scroll> */}

              <HtmlContent setShowBuy={setShowBuy} />
            </>
          )}

          {showBuy && (
            <>
              <Model rotation={[0.4, 1.2, 0.05]} position={[0, -0.25, 1]} animationRotate={true} />

              <Scroll html className="not-shippin-scroll-container">
                <div className="not-shipping">Ups. Not shipping to your country at the moment</div>
              </Scroll>
            </>
          )}
        </ScrollControls>
      </Canvas>
    </>
  )
}
