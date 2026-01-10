import { Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { StoreMeasurement } from "../../../../types/global"

type MeasurementCardProps = {
  measurement: StoreMeasurement
}

const MeasurementCard = ({ measurement }: MeasurementCardProps) => {
  return (
    <div className="bg-white flex flex-col" data-testid="measurement-card">
      <div className="uppercase text-large-semi mb-1">
        <span data-testid="measurement-name">{measurement.name}</span>
      </div>
      <div className="flex items-center divide-x divide-gray-200 text-small-regular text-ui-fg-base">
        <span className="pr-2" data-testid="measurement-created-at">
          Created at: {new Date(measurement.created_at).toDateString()}
        </span>
      </div>

      <div className="flex justify-end">
        <Button data-testid="measurement-details-link" variant="secondary">
          Delete
        </Button>
        <LocalizedClientLink
          href={`/account/measurements/details/${measurement.id}`}
        >
          <Button data-testid="measurement-details-link" variant="secondary">
            See details
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default MeasurementCard
