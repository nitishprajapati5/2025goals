import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

export default function InfoCard() {
  return (
    <div className="flex sm:w-2/3 lg:w-2/3 justify-center mt-8 px-8 py-8 bg-white">
        <Card className="w-full bg-red-200 shadow-2xl shadow-orange-900">
      <CardHeader>
        <h1 className="text-2xl font-extrabold">What does this app do?</h1>
      </CardHeader>
      <CardContent >
        <p>
        A Goal App designed to track and create goals is a powerful tool that helps users stay organized and motivated while achieving their personal or professional objectives. These apps enable users to set clear, measurable, and time-bound goals, breaking them down into manageable steps or milestones. 
        </p>
        <p>
        With features like progress tracking, users can visualize their advancement and stay on track. These apps typically send reminders and notifications to keep goals top of mind, ensuring consistent effort toward achieving them. The app allows for both long-term and short-term goal setting, whether it's fitness, career, learning, or personal development. 
        </p>
        <p>
        Additionally, many Goal Apps offer templates or customizable goal categories, helping users craft specific and achievable targets. They may also include journaling or habit-building tools for further motivation. Integrating with calendars, to-do lists, and productivity tools enhances organization, making it easier to align daily tasks with broader goals.
        </p>
      </CardContent>
      
    </Card>
    </div>
  )
}
