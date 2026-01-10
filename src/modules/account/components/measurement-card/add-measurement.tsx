"use client"

import { Plus } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import { useActionState, useEffect, useState } from "react"

import useToggleState from "@lib/hooks/use-toggle-state"
import Input from "@modules/common/components/input"
import Modal from "@modules/common/components/modal"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import { StoreMeasurement } from "../../../../types/global"
import { addCustomerMeasurement } from "@lib/data/measurements"

const AddMeasurement = ({
  measurements,
}: {
  measurements: StoreMeasurement[]
}) => {
  const [successState, setSuccessState] = useState(false)
  const { state, open, close: closeModal } = useToggleState(false)

  const [formState, formAction] = useActionState(addCustomerMeasurement, {
    isDefaultMeasurement: measurements.length === 0,
    success: false,
    error: null,
  })

  const close = () => {
    setSuccessState(false)
    closeModal()
  }

  useEffect(() => {
    if (successState) {
      close()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [successState])

  useEffect(() => {
    if (formState.success) {
      setSuccessState(true)
    }
  }, [formState])

  return (
    <>
      <Button
        onClick={open}
        data-testid="add-measurement-button"
      >
        <span className="text-base-semi">New Measurements</span>
        <Plus />
      </Button>

      <Modal isOpen={state} close={close} data-testid="add-measurement-modal">
        <Modal.Title>
          <Heading className="mb-2">Add measurements</Heading>
        </Modal.Title>
        <form action={formAction}>
          <Modal.Body>
            <div className="flex flex-col gap-y-2">
              <div className="grid grid-cols-2 gap-x-2">
                <Input
                  label="Name"
                  name="name"
                  required
                  autoComplete="given-name"
                  data-testid="name-input"
                />
              </div>
              <Input
                label="Forehead"
                name="forehead"
                required
                autoComplete="forehead"
                data-testid="forehead-input"
              />
              <Input
                label="Mouth"
                name="mouth"
                required
                autoComplete="mouth"
                data-testid="mouth-input"
              />
              <Input
                label="Neck"
                name="neck"
                required
                autoComplete="neck"
                data-testid="neck-input"
              />
            </div>
            {formState.error && (
              <div
                className="text-rose-500 text-small-regular py-2"
                data-testid="measurement-error"
              >
                {formState.error}
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <div className="flex gap-3 mt-6">
              <Button
                type="reset"
                variant="secondary"
                onClick={close}
                className="h-10"
                data-testid="cancel-button"
              >
                Cancel
              </Button>
              <SubmitButton data-testid="save-button">Save</SubmitButton>
            </div>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}

export default AddMeasurement
