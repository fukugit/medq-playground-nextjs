"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

// ShadcnのDialogを使用
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import data from "./data.json"

export default function Page() {
  const params = useSearchParams()
  const router = useRouter()
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    if (params.get("status") === "success") {
      setShowPopup(true)

      // URLからクエリを削除（F5で再表示されないように）
      const newUrl = window.location.pathname
      window.history.replaceState({}, "", newUrl)
    }
  }, [params])

  // ✅ 5秒後に自動で閉じる
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false)
      }, 2000)

      return () => clearTimeout(timer) // クリーンアップ
    }
  }, [showPopup])


  return (
    <>
      {/* ポップアップ */}
      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>登録完了</DialogTitle>
          </DialogHeader>
          <p>データが正常に登録されました。</p>
        </DialogContent>
      </Dialog>

      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards />
            <div className="px-4 lg:px-6">
              <ChartAreaInteractive />
            </div>
            <DataTable data={data} />
          </div>
        </div>
      </div>
    </>
  )
}
