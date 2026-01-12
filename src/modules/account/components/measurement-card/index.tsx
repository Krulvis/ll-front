import { Button, Prompt } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { StoreMeasurement } from "../../../../types/global"
import { deleteCustomerMeasurement } from "@lib/data/measurements"
import { useState } from "react"

type MeasurementCardProps = {
  measurement: StoreMeasurement
}

const MeasurementCard = ({ measurement }: MeasurementCardProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleDelete = async () => {
    setIsSubmitting(true)
    const result = await deleteCustomerMeasurement(measurement.id)
    if (result.success) {
      console.log("Measurement deleted successfully")
    } else {
      console.error("Failed to delete measurement:", result.error)
    }
    setIsSubmitting(false)
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

      <div className="flex justify-between gap-2 mt-4">
        <LocalizedClientLink
          href={`/account/measurements/details/${measurement.id}`}
        >
          <Button data-testid="measurement-details-link" variant="secondary">
            See details
          </Button>
        </LocalizedClientLink>
        <Prompt>
          <Prompt.Trigger asChild>
            <Button
              data-testid="delete-measurement-button"
              isLoading={isSubmitting}
              variant="danger"
            >
              Delete
            </Button>
          </Prompt.Trigger>
          <Prompt.Content>
            <Prompt.Header>
              <Prompt.Title>Delete Measurement</Prompt.Title>
              <Prompt.Description>
                Are you sure you want to delete "{measurement.name}"?
              </Prompt.Description>
            </Prompt.Header>
            <Prompt.Footer>
              <Prompt.Cancel>Cancel</Prompt.Cancel>
              <Prompt.Action
                onClick={handleDelete}
                className="bg-ui-button-danger text-ui-fg-on-color"
              >
                Delete
              </Prompt.Action>
            </Prompt.Footer>
          </Prompt.Content>
        </Prompt>
      </div>
    </div>
  )
}

export default MeasurementCard
