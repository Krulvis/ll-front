import { Metadata } from "next"
import { notFound } from "next/navigation"
import MeasurementOverview from "@modules/account/components/measurement-overview"
import { listCustomerMeasurements } from "@lib/data/measurements"

export const metadata: Metadata = {
  title: "Measurements",
  description: "Overview of your measurements.",
}

export default async function Measurements() {
  const measurements = await listCustomerMeasurements()

  if (!measurements) {
    console.log(`no measurements, ${measurements}`)
    notFound()
  }

  return (
    <div className="w-full" data-testid="orders-page-wrapper">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Measurements</h1>
        <p className="text-base-regular">View and manage your measurements.</p>
      </div>
      <div>
        <MeasurementOverview measurements={measurements} />
      </div>
    </div>
  )
}
