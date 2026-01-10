import { Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { StoreMeasurement } from "../../../../types/global"
import { deleteCustomerMeasurement } from "@lib/data/measurements"

type MeasurementCardProps = {
  measurement: StoreMeasurement
}

const MeasurementCard = ({ measurement }: MeasurementCardProps) => {
  const handleDelete = async () => {
    const result = await deleteCustomerMeasurement(measurement.id)
    if (result.success) {
      // Handle successful deletion, e.g. show a success message or refresh the list
      console.log("Measurement deleted successfully")
    } else {
      // Handle deletion error
      console.error("Failed to delete measurement:", result.error)
    }
  }

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
        <Button
          data-testid="measurement-details-link"
          variant="secondary"
          onClick={handleDelete}
        >
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
