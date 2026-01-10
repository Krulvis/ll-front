"use client"

import MeasurementCard from "../measurement-card"
import { StoreMeasurement } from "../../../../types/global"
import AddMeasurement from "@modules/account/components/measurement-card/add-measurement"

const MeasurementOverview = ({
  measurements,
}: {
  measurements: StoreMeasurement[]
}) => {
  if (measurements?.length) {
    return (
      <div className="flex flex-col gap-y-8 w-full">
        <span>Measurements Overview: {measurements.length}</span>
        {measurements
          .filter((m) => m != null)
          .map((measurement) => (
            <div
              key={measurement.id}
              className="border-b border-gray-200 pb-6 last:pb-0 last:border-none"
            >
              <MeasurementCard measurement={measurement} />
            </div>
          ))}
        <AddMeasurement measurements={measurements} />
      </div>
    )
  }

  return (
    <div
      className="w-full flex flex-col items-center gap-y-4"
      data-testid="no-orders-container"
    >
      <h2 className="text-large-semi">No measurements created yet</h2>
      <p className="text-base-regular">
        You don&apos;t have any measurements yet, let us change that {":)"}
      </p>
      <div className="mt-4">
        <AddMeasurement measurements={measurements} />
      </div>
    </div>
  )
}

export default MeasurementOverview
