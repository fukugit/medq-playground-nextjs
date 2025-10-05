"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useSearchParams } from "next/navigation"

export function SuccessPopup() {
  const params = useSearchParams()
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    if (params.get("status") === "success") {
      setShowPopup(true)
      window.history.replaceState({}, "", window.location.pathname)
    }
  }, [params])

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [showPopup])

  return (
    <Dialog open={showPopup} onOpenChange={setShowPopup}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>登録完了</DialogTitle>
        </DialogHeader>
        <p>データが正常に登録されました。</p>
      </DialogContent>
    </Dialog>
  )
}
