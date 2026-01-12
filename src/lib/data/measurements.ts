"use server"

import { sdk } from "@lib/config"
import medusaError from "@lib/util/medusa-error"
import { getAuthHeaders, getCacheOptions, getCacheTag } from "./cookies"
import {
  StoreMeasurementListResponse,
  StoreMeasurementResponse,
} from "../../types/responses"
import { revalidateTag } from "next/cache"

export const retrieveMeasurement = async (id: string) => {
  const headers = {
    ...(await getAuthHeaders()),
  }

  const next = {
    ...(await getCacheOptions("measurements")),
  }

  return sdk.client
    .fetch<StoreMeasurementResponse>(`/store/measurements/${id}`, {
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

  return sdk.client
    .fetch<StoreMeasurementResponse>(`/store/measurements`, {
      method: "POST",
      body: measurement,
      headers,
    })
    .then(async ({ measurement }) => {
      const customerCacheTag = await getCacheTag("measurements")
      revalidateTag(customerCacheTag)
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

  return sdk.client
    .fetch<StoreMeasurementResponse>(`/store/measurements/${id}`, {
      method: "DELETE",
      headers,
    })
    .then(async () => {
      const customerCacheTag = await getCacheTag("measurements")
      revalidateTag(customerCacheTag)
      return { success: true, error: null }
    })
    .catch((err) => {
      return { success: false, error: err.toString() }
    })
}

export const listCustomerMeasurements = async () => {
  const headers = {
    ...(await getAuthHeaders()),
  }

  const next = {
    ...(await getCacheOptions("measurements")),
  }

  return sdk.client
    .fetch<StoreMeasurementListResponse>(`/store/measurements`, {
      method: "GET",
      headers,
      next,
      cache: "force-cache",
    })
    .then(({ measurements }) => {
      return measurements
    })
    .catch((err) => {
      medusaError(err)
    })
}
