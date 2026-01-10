import { Text } from "@medusajs/ui"
import { StoreMeasurement } from "../../../../types/global"

type MeasurementDetailsProps = {
  measurement: StoreMeasurement
  showStatus?: boolean
}

const MeasurementDetails = ({
  measurement,
  showStatus,
}: MeasurementDetailsProps) => {
  return (
    <div>
      <Text className="mt-2 text-ui-fg-interactive">
        Name: <span data-testid="order-id">{measurement.name}</span>
      </Text>
      <Text className="mt-2">
        Created at:{" "}
        <span data-testid="order-date">
          {new Date(measurement.created_at).toDateString()}
        </span>
      </Text>
      <Text className="mt-2">
        Last updated:{" "}
        <span data-testid="order-date">
          {new Date(measurement.updated_at).toDateString()}
        </span>
      </Text>

      <div className="flex items-center text-compact-small gap-x-4 mt-4">
        {showStatus && (
          <>
            <Text>
              Forehead:{" "}
              <span className="text-ui-fg-subtle " data-testid="order-status">
                {measurement.forehead}cm
              </span>
            </Text>
          </>
        )}
      </div>
    </div>
  )
}

export default MeasurementDetails
