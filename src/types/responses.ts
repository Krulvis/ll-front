import { PaginatedResponse } from "@medusajs/types/dist/http/common"
import { StoreMeasurement } from "./global"

export interface StoreMeasurementResponse {
  /**
   * The measurement's details.
   */
  measurement: StoreMeasurement
}
export type StoreMeasurementListResponse = PaginatedResponse<{
  /**
   * The list of measurements.
   */
  measurements: StoreMeasurement[]
}>
