"use client"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import { useEffect } from "react"

export default function HeroReveal({
  content,
}: {
  content: React.ReactNode
}) {
  const logoControls = useAnimation()
  const textControls = useAnimation()

  useEffect(() => {
    async function runSequence() {
      // Pause with logo fully visible
      await new Promise((resolve) => setTimeout(resolve, 800))

      // Fade logo out + scale down
      logoControls.start({
        opacity: 0,
        scale: 0.7,
        transition: { duration: 2, ease: "easeInOut" },
      })

      // Fade in text after logo is gone
      textControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 2, ease: "easeOut", delay: 0.2 },
      })
    }

    runSequence()
  }, [])
  return (
    <>
      {/* Text (starts hidden) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={textControls}
        className="relative z-11"
      >
        {content}
      </motion.div>

      {/* Logo (starts visible) */}
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={logoControls}
        className="absolute flex items-center justify-center z-10 pointer-events-none"
      >
        <Image
          src="/logo/gold_trans.png"
          alt="Limit Latex Logo"
          width={500}
          height={500}
          className="object-contain"
        />
      </motion.div>
    </>
  )
}
