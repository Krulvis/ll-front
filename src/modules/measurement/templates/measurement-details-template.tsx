"use client"

import { XMark } from "@medusajs/icons"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Help from "@modules/order/components/help"
import React from "react"
import { StoreMeasurement } from "../../../types/global"
import MeasurementDetails from "@modules/measurement/components/measurement-details"

type MeasurementDetailsTemplateProps = {
  measurement: StoreMeasurement
}

const MeasurementDetailsTemplate: React.FC<MeasurementDetailsTemplateProps> = ({
  measurement,
}) => {
  return (
    <div className="flex flex-col justify-center gap-y-4">
      <div className="flex gap-2 justify-between items-center">
        <h1 className="text-2xl-semi">Measurement details</h1>
        <LocalizedClientLink
          href="/account/measurements"
          className="flex gap-2 items-center text-ui-fg-subtle hover:text-ui-fg-base"
          data-testid="back-to-overview-button"
        >
          <XMark /> Back to measurements overview
        </LocalizedClientLink>
      </div>
      <div
        className="flex flex-col gap-4 h-full bg-white w-full"
        data-testid="order-details-container"
      >
        <MeasurementDetails measurement={measurement} showStatus />
        <Help />
      </div>
    </div>
  )
}

export default MeasurementDetailsTemplate
