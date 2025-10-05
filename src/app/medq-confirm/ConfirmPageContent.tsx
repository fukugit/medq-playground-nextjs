"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ConfirmPageContent() {
  const params = useSearchParams()
  const router = useRouter()

  const handleRegister = () => {
    // 登録処理(API送信など)を実行
    router.push("/dashboard?status=success")
  }

  return (
    <div className="flex justify-center min-h-screen bg-gray-50 py-10">
      <Card className="w-3/4 border-none">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-center">
            入力内容の確認
          </CardTitle>
        </CardHeader>

        <CardContent>
          <table className="w-full border-collapse border border-gray-300">
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="w-1/4 px-4 py-2 font-medium bg-gray-100 border-r border-gray-300">氏名</td>
                <td className="px-4 py-2">{params.get("name")}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2 font-medium bg-gray-100 border-r border-gray-300">年齢</td>
                <td className="px-4 py-2">{params.get("age")}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2 font-medium bg-gray-100 border-r border-gray-300">性別</td>
                <td className="px-4 py-2">{params.get("gender")}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2 font-medium bg-gray-100 border-r border-gray-300">発熱</td>
                <td className="px-4 py-2">{params.get("hasFever")}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2 font-medium bg-gray-100 border-r border-gray-300">体温</td>
                <td className="px-4 py-2">{params.get("temperature")} ℃</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium bg-gray-100 border-r border-gray-300">その他メモ</td>
                <td className="px-4 py-2 whitespace-pre-wrap">{params.get("notes")}</td>
              </tr>
            </tbody>
          </table>
        </CardContent>

        <CardFooter>
          <Button
            type="button"
            className="w-full mt-4 cursor-pointer"
            onClick={handleRegister}
          >
            登録
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
