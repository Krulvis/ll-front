import { Metadata } from "next"
import { notFound } from "next/navigation"
import Divider from "@modules/common/components/divider"
import TransferRequestForm from "@modules/account/components/transfer-request-form"
import MeasurementOverview from "@modules/account/components/measurement-overview"
import { retrieveCustomer } from "@lib/data/customer"

export const metadata: Metadata = {
  title: "Measurements",
  description: "Overview of your measurements.",
}

export default async function Measurements() {
  const customer = await retrieveCustomer()

  if (!customer) {
    notFound()
  }

  return (
    <div className="w-full" data-testid="orders-page-wrapper">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Measurements</h1>
        <p className="text-base-regular">View and manage your measurements.</p>
      </div>
      <div>
        <MeasurementOverview customer={customer} />
        <Divider className="my-16" />
        <TransferRequestForm />
      </div>
    </div>
  )
}
