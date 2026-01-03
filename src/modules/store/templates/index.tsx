import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <div className="w-full h-screen py-20">
      <div
        className="content-container flex flex-col small:flex-row small:items-start gap-12"
        data-testid="category-container"
      >
        {/* Sidebar */}
        <aside className="w-full small:w-64 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 sticky top-24 h-fit">
          <RefinementList sortBy={sort} />
        </aside>

        {/* Main Content */}
        <div className="w-full space-y-10">
          {/* Page title */}
          <div className="mb-8 text-2xl-semi">
            <h1 data-testid="store-page-title">All products</h1>
          </div>

          {/* Product Grid */}
          <Suspense fallback={<SkeletonProductGrid />}>
            <PaginatedProducts
              sortBy={sort}
              page={pageNumber}
              countryCode={countryCode}
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default StoreTemplate
