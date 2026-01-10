"use server"

import { sdk } from "@lib/config"
import medusaError from "@lib/util/medusa-error"
import { getAuthHeaders, getCacheOptions } from "./cookies"
import { StoreMeasurementResponse } from "../../types/responses"

export const retrieveMeasurement = async (id: string) => {
  const headers = {
    ...(await getAuthHeaders()),
  }

  const next = {
    ...(await getCacheOptions("measurements")),
  }

  return sdk.client
    .fetch<StoreMeasurementResponse>(`/store/measurement/${id}`, {
      method: "GET",
      query: {
        fields: "*",
      },
      headers,
      next,
      cache: "force-cache",
    })
    .then(({ measurement }) => measurement)
    .catch((err) => medusaError(err))
}

export const addCustomerMeasurement = async (
  currentState: Record<string, unknown>,
  formData: FormData
): Promise<any> => {
  const isDefaultMeasurement =
    (currentState.isDefaultMeasurement as boolean) || false

  const measurement = {
    name: formData.get("name") as string,
    forehead: Number(formData.get("forehead") as string),
    mouth: Number(formData.get("mouth") as string),
    neck: Number(formData.get("neck") as string),
  }

  const headers = {
    ...(await getAuthHeaders()),
  }

  const next = {
    ...(await getCacheOptions("measurements")),
  }

  return sdk.client
    .fetch<StoreMeasurementResponse>(`/store/measurement`, {
      method: "POST",
      body: measurement,
      headers,
      next,
      cache: "force-cache",
    })
    .then(async ({ measurement }) => {
      return { success: true, error: null }
    })
    .catch((err) => {
      return { success: false, error: err.toString() }
    })
}

export const deleteCustomerMeasurement = async (id: string) => {
  const headers = {
    ...(await getAuthHeaders()),
  }

  const next = {
    ...(await getCacheOptions("measurements")),
  }

  return sdk.client
    .fetch<StoreMeasurementResponse>(`/store/measurement/${id}`, {
      method: "DELETE",
      headers,
      next,
      cache: "force-cache",
    })
    .then(async () => {
      return { success: true, error: null }
    })
    .catch((err) => {
      return { success: false, error: err.toString() }
    })
}
