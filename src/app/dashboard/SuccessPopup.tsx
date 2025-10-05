// components/SuccessPopup.tsx
"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function SuccessPopup({ queryStatus }: { queryStatus?: string }) {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    if (queryStatus === "success") {
      setShowPopup(true)
      // URLクエリを消す
      const newUrl = window.location.pathname
      window.history.replaceState({}, "", newUrl)
    }
  }, [queryStatus])

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
