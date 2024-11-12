import DashboardL from "@/layout/DashboardL";
import { CompanyS, SiteS, WellS } from "@/components/dropdown-nested";
import { Separator } from "@/components/ui/separator";
import { MapPinned } from "lucide-react";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { PagiCam } from "@/components/camera-pagination";

export default function DashboardP() {
  return (
    <>
      <DashboardL>
        <div className="h-full flex flex-col justify-between">
        <div>
        <nav className="flex p-4 bg-sidebar justify-between align-middle">
          <h1 className="font-semibold text-lg my-auto">
            Computer Vision Video Realtime
          </h1>
          <div className="flex space-x-4 my-auto">
            <CompanyS />
            <SiteS />
            <WellS />
          </div>
        </nav>
        <Separator className="bg-sidebar-primary" />
        <main className="p-5">
          <div className="grid grid-cols-4 gap-5 grid-flow-row-dense">
            <Card className="w-full outline-sidebar-primary outline outline-1 shadow-sidebar-primary h-fit">
              <CardHeader>
                <CardTitle className="text-xl flex justify-left align-middle space-x-4">
                  <HoverCard>
                    <HoverCardTrigger>
                      <MapPinned className="hover:text-primary size-5 mt-1" />
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="flex flex-col space-y-1">
                        <AspectRatio ratio={1 / 1}>
                          <img
                            src="/src/assets/images/site.jpg"
                            alt="Camera Picture"
                            className="rounded-lg h-full w-full"
                          />
                        </AspectRatio>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <h1 className="my-auto">Camera PTM-AA-02-97A</h1>
                </CardTitle>
              </CardHeader>
              <CardFooter className="flex justify-center text-base  outline outline-primary outline-1 rounded-b-xl align-middle p-2 hover:bg-primary hover:text-white">
                <a href="#" className="self-end font-semibold">
                  Open Camera
                </a>
              </CardFooter>
            </Card>
            <Card className="w-full outline-sidebar-primary outline outline-1 shadow-sidebar-primary h-fit">
              <CardHeader>
                <CardTitle className="text-xl flex justify-left align-middle space-x-4">
                  <HoverCard>
                    <HoverCardTrigger>
                      <MapPinned className="hover:text-primary size-5 mt-1" />
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="flex flex-col space-y-1">
                        <AspectRatio ratio={1 / 1}>
                          <img
                            src="/src/assets/images/site.jpg"
                            alt="Camera Picture"
                            className="rounded-lg h-full w-full"
                          />
                        </AspectRatio>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <h1 className="my-auto">Camera PTM-AA-02-97A</h1>
                </CardTitle>
              </CardHeader>
              <CardFooter className="flex justify-center text-base  outline outline-primary outline-1 rounded-b-xl align-middle p-2 hover:bg-primary hover:text-white">
                <a href="#" className="self-end font-semibold">
                  Open Camera
                </a>
              </CardFooter>
            </Card>
            <Card className="w-full outline-sidebar-primary outline outline-1 shadow-sidebar-primary h-fit">
              <CardHeader>
                <CardTitle className="text-xl flex justify-left align-middle space-x-4">
                  <HoverCard>
                    <HoverCardTrigger>
                      <MapPinned className="hover:text-primary size-5 mt-1" />
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="flex flex-col space-y-1">
                        <AspectRatio ratio={1 / 1}>
                          <img
                            src="/src/assets/images/site.jpg"
                            alt="Camera Picture"
                            className="rounded-lg h-full w-full"
                          />
                        </AspectRatio>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <h1 className="my-auto">Camera PTM-AA-02-97A</h1>
                </CardTitle>
              </CardHeader>
              <CardFooter className="flex justify-center text-base  outline outline-primary outline-1 rounded-b-xl align-middle p-2 hover:bg-primary hover:text-white">
                <a href="#" className="self-end font-semibold">
                  Open Camera
                </a>
              </CardFooter>
            </Card>
            <Card className="w-full outline-sidebar-primary outline outline-1 shadow-sidebar-primary h-fit">
              <CardHeader>
                <CardTitle className="text-xl flex justify-left align-middle space-x-4">
                  <HoverCard>
                    <HoverCardTrigger>
                      <MapPinned className="hover:text-primary size-5 mt-1" />
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="flex flex-col space-y-1">
                        <AspectRatio ratio={1 / 1}>
                          <img
                            src="/src/assets/images/site.jpg"
                            alt="Camera Picture"
                            className="rounded-lg h-full w-full"
                          />
                        </AspectRatio>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <h1 className="my-auto">Camera PTM-AA-02-97A</h1>
                </CardTitle>
              </CardHeader>
              <CardFooter className="flex justify-center text-base  outline outline-primary outline-1 rounded-b-xl align-middle p-2 hover:bg-primary hover:text-white">
                <a href="#" className="self-end font-semibold">
                  Open Camera
                </a>
              </CardFooter>
            </Card>
            <Card className="w-full outline-sidebar-primary outline outline-1 shadow-sidebar-primary h-fit">
              <CardHeader>
                <CardTitle className="text-xl flex justify-left align-middle space-x-4">
                  <HoverCard>
                    <HoverCardTrigger>
                      <MapPinned className="hover:text-primary size-5 mt-1" />
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="flex flex-col space-y-1">
                        <AspectRatio ratio={1 / 1}>
                          <img
                            src="/src/assets/images/site.jpg"
                            alt="Camera Picture"
                            className="rounded-lg h-full w-full"
                          />
                        </AspectRatio>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <h1 className="my-auto">Camera PTM-AA-02-97A</h1>
                </CardTitle>
              </CardHeader>
              <CardFooter className="flex justify-center text-base  outline outline-primary outline-1 rounded-b-xl align-middle p-2 hover:bg-primary hover:text-white">
                <a href="#" className="self-end font-semibold">
                  Open Camera
                </a>
              </CardFooter>
            </Card>
            <Card className="w-full outline-sidebar-primary outline outline-1 shadow-sidebar-primary h-fit">
              <CardHeader>
                <CardTitle className="text-xl flex justify-left align-middle space-x-4">
                  <HoverCard>
                    <HoverCardTrigger>
                      <MapPinned className="hover:text-primary size-5 mt-1" />
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="flex flex-col space-y-1">
                        <AspectRatio ratio={1 / 1}>
                          <img
                            src="/src/assets/images/site.jpg"
                            alt="Camera Picture"
                            className="rounded-lg h-full w-full"
                          />
                        </AspectRatio>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <h1 className="my-auto">Camera PTM-AA-02-97A</h1>
                </CardTitle>
              </CardHeader>
              <CardFooter className="flex justify-center text-base  outline outline-primary outline-1 rounded-b-xl align-middle p-2 hover:bg-primary hover:text-white">
                <a href="#" className="self-end font-semibold">
                  Open Camera
                </a>
              </CardFooter>
            </Card>
            <Card className="w-full outline-sidebar-primary outline outline-1 shadow-sidebar-primary h-fit">
              <CardHeader>
                <CardTitle className="text-xl flex justify-left align-middle space-x-4">
                  <HoverCard>
                    <HoverCardTrigger>
                      <MapPinned className="hover:text-primary size-5 mt-1" />
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="flex flex-col space-y-1">
                        <AspectRatio ratio={1 / 1}>
                          <img
                            src="/src/assets/images/site.jpg"
                            alt="Camera Picture"
                            className="rounded-lg h-full w-full"
                          />
                        </AspectRatio>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <h1 className="my-auto">Camera PTM-AA-02-97A</h1>
                </CardTitle>
              </CardHeader>
              <CardFooter className="flex justify-center text-base  outline outline-primary outline-1 rounded-b-xl align-middle p-2 hover:bg-primary hover:text-white">
                <a href="#" className="self-end font-semibold">
                  Open Camera
                </a>
              </CardFooter>
            </Card>
            <Card className="w-full outline-sidebar-primary outline outline-1 shadow-sidebar-primary h-fit">
              <CardHeader>
                <CardTitle className="text-xl flex justify-left align-middle space-x-4">
                  <HoverCard>
                    <HoverCardTrigger>
                      <MapPinned className="hover:text-primary size-5 mt-1" />
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="flex flex-col space-y-1">
                        <AspectRatio ratio={1 / 1}>
                          <img
                            src="/src/assets/images/site.jpg"
                            alt="Camera Picture"
                            className="rounded-lg h-full w-full"
                          />
                        </AspectRatio>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <h1 className="my-auto">Camera PTM-AA-02-97A</h1>
                </CardTitle>
              </CardHeader>
              <CardFooter className="flex justify-center text-base  outline outline-primary outline-1 rounded-b-xl align-middle p-2 hover:bg-primary hover:text-white">
                <a href="#" className="self-end font-semibold">
                  Open Camera
                </a>
              </CardFooter>
            </Card>
          </div>
        </main>
        </div>
        <footer className="mb-20">
          <PagiCam />
        </footer>
        </div>
      </DashboardL>
    </>
  );
}
