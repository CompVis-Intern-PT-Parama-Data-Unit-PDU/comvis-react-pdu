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
import { loginAction } from "@/services/authServices";

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
      action: loginAction,
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
        }
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
    },
  }
);

export default router;
