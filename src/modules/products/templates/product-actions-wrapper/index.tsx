import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import ProductActions from "@modules/products/components/product-actions"
import { listCustomerMeasurements } from "@lib/data/measurements"

/**
 * Fetches real time pricing for a product and renders the product actions component.
 */
export default async function ProductActionsWrapper({
  id,
  region,
}: {
  id: string
  region: HttpTypes.StoreRegion
}) {
  const product = await listProducts({
    queryParams: { id: [id] },
    regionId: region.id,
  }).then(({ response }) => response.products[0])

  const measurements = await listCustomerMeasurements()

  if (!product) {
    return null
  }

  return (
    <ProductActions
      product={product}
      region={region}
      measurements={measurements}
    />
  )
}
