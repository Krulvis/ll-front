"use client"
import React from "react"
import { Badge, Container, Heading, Text } from "@medusajs/ui"
import { motion } from "framer-motion"

const MeasuringGuide = () => {
  const measurementSteps = [
    {
      id: "chest",
      title: "Chest",
      description:
        "Measure around the fullest part of your chest, keeping the tape horizontal.",
      tip: "Relax your arms at your sides for the most accurate measurement.",
    },
    {
      id: "waist",
      title: "Waist",
      description:
        "Measure around your natural waistline, which is the narrowest part of your waist.",
      tip: "Don't pull the tape too tight; keep it slightly loose.",
    },
    {
      id: "hips",
      title: "Hips",
      description:
        "Measure around the fullest part of your hips, approximately 20cm below your waistline.",
      tip: "Keep your feet together while measuring.",
    },
  ]

  return (
    <Container className="max-w-3xl mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Heading level="h1" className="mb-4">
          Size & Measuring Guide
        </Heading>
        <Text className="text-ui-fg-subtle mb-8">
          To ensure the perfect fit, please follow our measurement guide below.
          Use a flexible tape measure and keep it level while measuring.
        </Text>

        <div className="grid gap-6">
          {measurementSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-ui-border-base pb-6"
            >
              <div className="flex items-center gap-4 mb-2">
                <Badge color="blue" size="small">
                  {index + 1}
                </Badge>
                <Heading level="h3">{step.title}</Heading>
              </div>
              <Text className="mb-2">{step.description}</Text>
              <div className="bg-ui-bg-subtle p-3 rounded-md border-l-4 border-ui-border-interactive">
                <Text size="small" className="italic text-ui-fg-muted">
                  <strong>Pro Tip:</strong> {step.tip}
                </Text>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-ui-bg-component rounded-lg border border-ui-border-base">
          <Heading level="h2" className="mb-4">
            International Size Conversion
          </Heading>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-ui-border-base">
                  <th className="py-2">Size</th>
                  <th className="py-2">US</th>
                  <th className="py-2">UK</th>
                  <th className="py-2">EU</th>
                </tr>
              </thead>
              <tbody className="text-ui-fg-subtle">
                <tr className="border-b border-ui-border-base">
                  <td className="py-2 font-medium text-ui-fg-base">S</td>
                  <td className="py-2">4-6</td>
                  <td className="py-2">8-10</td>
                  <td className="py-2">36-38</td>
                </tr>
                <tr className="border-b border-ui-border-base">
                  <td className="py-2 font-medium text-ui-fg-base">M</td>
                  <td className="py-2">8-10</td>
                  <td className="py-2">12-14</td>
                  <td className="py-2">40-42</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium text-ui-fg-base">L</td>
                  <td className="py-2">12-14</td>
                  <td className="py-2">16-18</td>
                  <td className="py-2">44-46</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </Container>
  )
}

export default MeasuringGuide
