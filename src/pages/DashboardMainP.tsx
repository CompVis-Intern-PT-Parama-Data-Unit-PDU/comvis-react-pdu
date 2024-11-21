import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Webcam, GaugeCircle, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function DashboardP() {
  return (
    <div className="max-h-[93%] bg-gray-100 p-8 h-full align-middle">
      <header className="mb-8 space-y-4 md:mb-16">
        <h1 className="text-5xl font-bold text-gray-800">EyeLog Monitoring Dashboard</h1>
        <p className="text-gray-600">Welcome back, Engineer. Here's your overview.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="shadow-lg border-none">
          <CardHeader className="bg-primary rounded-t-xl">
            <CardTitle className="text-xl text-white flex items-center">
              <Webcam className="mr-2" />
              Cutting Monitoring
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Camera Active</span>
                <span className="font-semibold">4/5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="">Active Hours</span>
                <span className="font-semibold">32:18:03</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Rata-rata Mingguan</span>
                <span className="font-semibold">98.5%</span>
              </div>
            </div>
            <Button className="w-full mt-6" variant="outline">
              <Link to="/dashboard/cutting-monitoring" className="flex">
                View Detailed Each Camera
                <ChevronRight className="ml-2 h-4 w-4 my-auto" />
              </Link>            
            </Button>
          </CardContent>
        </Card>
        <Card className="shadow-lg border-none">
          <CardHeader className="bg-primary rounded-t-xl">
            <CardTitle className="text-xl text-white flex items-center">
              <GaugeCircle className="mr-2" />
              Drilling Console
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Camera Active</span>
                <span className="font-semibold">4/5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="">Active Hours</span>
                <span className="font-semibold">32:18:03</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Rata-rata Mingguan</span>
                <span className="font-semibold">98.5%</span>
              </div>
            </div>
            <Button className="w-full mt-6" variant="outline" disabled >
              <Link to="/dashboard/detail-console" className="flex" >
                View Detailed Each Camera
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}