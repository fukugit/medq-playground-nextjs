"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

export default function Page() {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [hasFever, setHasFever] = useState("")
  const [temperature, setTemperature] = useState("")
  const [notes, setNotes] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(
      `--- インフルエンザ問診票 ---
氏名: ${name}
年齢: ${age}
性別: ${gender}
発熱: ${hasFever}
体温: ${temperature} ℃
その他メモ: ${notes}`
    )
  }

  return (
    <div className="flex justify-center min-h-screen bg-gray-50">
      <Card className="w-3/4 border-none ">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-center">
            インフルエンザ問診票
          </CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-10">
            {/* 氏名 */}
            <div className="space-y-2">
              <Label htmlFor="name">氏名</Label>
              <Input
                id="name"
                placeholder="氏名を入力してください"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* 年齢 */}
            <div className="space-y-2">
              <Label htmlFor="age">年齢</Label>
              <Input
                id="age"
                type="number"
                placeholder="例: 30"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            {/* 性別 */}
            <div className="space-y-2">
              <Label>性別</Label>
              <RadioGroup
                value={gender}
                onValueChange={setGender}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="男性" id="male" 
                    className="border-2 border-gray-400 text-blue-200 data-[state=checked]:border-blue-200 data-[state=checked]:bg-blue-200 cursor-pointer"/>
                  <Label htmlFor="male">男性</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="女性" id="female" 
                    className="border-2 border-gray-400 text-blue-200 data-[state=checked]:border-blue-200 data-[state=checked]:bg-blue-200 cursor-pointer"/>
                  <Label htmlFor="female">女性</Label>
                </div>
              </RadioGroup>
            </div>

            {/* 発熱 */}
            <div className="space-y-2">
              <Label>発熱はありますか？</Label>
              <RadioGroup
                value={hasFever}
                onValueChange={setHasFever}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="はい" id="fever-yes"
                    className="border-2 border-gray-400 text-blue-200 data-[state=checked]:border-blue-200 data-[state=checked]:bg-blue-200 cursor-pointer"/>
                  <Label htmlFor="fever-yes">はい</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="いいえ" id="fever-no"
                    className="border-2 border-gray-400 text-blue-200 data-[state=checked]:border-blue-200 data-[state=checked]:bg-blue-200 cursor-pointer"/>
                  <Label htmlFor="fever-no">いいえ</Label>
                </div>
              </RadioGroup>
            </div>

            {/* 体温 */}
            <div className="space-y-2">
              <Label htmlFor="temperature">現在の体温（℃）</Label>
              <Input
                id="temperature"
                type="number"
                step="0.1"
                placeholder="例: 37.5"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
              />
            </div>

            {/* その他メモ */}
            <div className="space-y-2">
              <Label htmlFor="notes">体調について（任意）</Label>
              <Textarea
                id="notes"
                placeholder="例: 喉の痛みや頭痛があります"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </CardContent>

          <CardFooter>
            <Button type="submit" className="w-full mt-4">
              登録
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
