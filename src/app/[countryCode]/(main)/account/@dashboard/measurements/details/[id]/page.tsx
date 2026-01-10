import { Metadata } from "next"
import { notFound } from "next/navigation"
import { retrieveMeasurement } from "@lib/data/measurements"
import MeasurementDetailsTemplate from "@modules/measurement/templates/measurement-details-template"

type Props = {
  params: Promise<{ countryCode: string; id: string }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const measurement = await retrieveMeasurement(params.id).catch(() => null)

  if (!measurement) {
    notFound()
  }

  return {
    title: `Measurement ${measurement.name}`,
    description: `Manage your measurement`,
  }
}

export default async function MeasurementDetailPage(props: Props) {
  const params = await props.params
  const measurement = await retrieveMeasurement(params.id).catch(() => null)

  if (!measurement) {
    notFound()
  }

  return <MeasurementDetailsTemplate measurement={measurement} />
}
