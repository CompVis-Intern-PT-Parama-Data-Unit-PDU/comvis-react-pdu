import { createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { RootBoundary } from "@/lib/rootBoundary";
import UnderConstruct from "@/pages/UnderConstruction";
import LoginForm from "@/pages/AuthP";
import DashboardL from "@/layout/DashboardL";
import DashboardP from "@/pages/DashboardMainP";
import CuttingDP from "@/pages/DashboardCuttingP";
import DetailCuttingP from "@/pages/DetailCuttingP";
import UserManagement from "@/pages/UserManagement";
import CameraManagement from "@/pages/CameraManagement";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <ThemeProvider>
          <LoginForm/>
        </ThemeProvider>
      ),
      errorElement:<RootBoundary />,
    },
    {
      path: "login",
      element: (
        <ThemeProvider>
          <LoginForm/>
        </ThemeProvider>
      ),
    },
    {
      path: "dashboard",
      element: (
        <ThemeProvider>
          <DashboardL />
        </ThemeProvider>
      ),
      children: [
        { index: true, element: <DashboardP /> },
        {
          path: "cutting-monitoring",
          children: [
            {
              index: true,
              element: <CuttingDP />,
            },
            {
              path: ":cameraid",
              element: <DetailCuttingP />,
            },
          ],
        },
        {
          path: "drilling-console",
          element: <UnderConstruct />,
        },
        {
          path: "user-management",
          element: <UserManagement/>
        },
        {
          path: "camera-management",
          element: <CameraManagement />,
        }
      ],
    },
  ],
);

export default router;
