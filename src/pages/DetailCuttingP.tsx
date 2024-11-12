import DashboardL from "@/layout/DashboardL";
import { VerticalChart } from "@/components/vertical-chart";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function DetailCuttingP() {
  return (
    <DashboardL>
      <main className="flex p-1 h-screen">
        <div className="flex flex-col w-2/3 p-3">
          <AspectRatio ratio={2/1} className="w-full bg-white">
            <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="sasa" className="w-full h-full" />
          </AspectRatio>
        </div>
          <VerticalChart />
      </main>
    </DashboardL>
  );
}
