import { Download, SquareArrowLeft } from "lucide-react";
import { VerticalChart } from "@/components/vertical-chart";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { DatePicker } from "@/components/ui/date-picker";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';

export default function DetailCuttingP() {
  const navigate = useNavigate();
  const handleBackToMenu = () => {
    navigate('/dashboard/cutting-monitoring'); // Sesuaikan dengan path DashboardCutting.tsx
  };


  return (
      <main className="flex h-[93%] py-2 px-3 flex-wrap max-h-[93%]">
        <div className="flex flex-col w-fit max-w-min min-w-fit xl:grow max-h-full ml-auto mr-2">
          <div className="my-2">
            <AspectRatio ratio={2 / 1} className="w-full bg-white">
              <img
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                alt="sasa"
                className="w-full h-full"
              />
            </AspectRatio>
          </div>
          <Card className="rounded-b-xl rounded-t-none h-full">
            <CardContent className="flex flex-col sm:flex-row space-y-0 rounded-b-xl rounded-t-none p-0 h-full grow">
              <div className="flex flex-1 space-x-6 py-3 px-3 sm:py-3 h-full">
                <div className="gap-1 flex flex-col justify-center">
                  <CardTitle>Streaming Camera - PTM-87-23A</CardTitle>
                  <CardDescription>
                    Showing amount percent of cutting at shale shaker
                  </CardDescription>
                  <Button onClick={handleBackToMenu}>
                    <SquareArrowLeft />
                    Back to Menu
                  </Button>
                </div>
              </div>
              <div className="flex">
                <div className="flex align-middle justify-center">
                  <div className="my-auto space-y-3 px-3">
                    <DatePicker />
                    <Button className="w-[225px]" asChild>
                      <a href="/files/sample.pdf" download>
                        <Download/>
                        Download
                      </a>
                      
                    </Button>
                  </div>
                </div>
                <button className="flex flex-col my-auto justify-center gap-1 px-6 py-4 text-left sm:px-8 sm:py-6 bg-primary rounded-br-xl text-white h-full">
                  <span className="sm:text-lg text-xs w-full">Last Value</span>
                  <span className="text-lg font-bold leading-none sm:text-4xl 2xl:text-5xl">
                    87%
                  </span>
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
        <VerticalChart />
      </main>
  );
}
