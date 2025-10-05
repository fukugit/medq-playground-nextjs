"use client"

import { Suspense } from "react"
import ConfirmPageContent from "./ConfirmPageContent"

export default function ConfirmPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConfirmPageContent />
    </Suspense>
  )
}
