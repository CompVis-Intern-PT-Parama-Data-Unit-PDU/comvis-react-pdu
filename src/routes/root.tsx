import { createBrowserRouter } from "react-router-dom";
import DashboardL from "@/layout/DashboardL";
import { ThemeProvider } from "@/components/theme-provider";
import { ProtectedRoute } from "@/components/protected-provider";
import { RootBoundary } from "@/lib/rootBoundary";
import UnderConstruct from "@/pages/UnderConstruction";
import LoginForm from "@/pages/AuthP";
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
      // loader: async () => {
      //   try {
      //     const response = await fetch('http://localhost:3001/api/auth/verify', {
      //       credentials: 'include'
      //     });
          
      //     return response.ok 
      //       ? redirect("/dashboard") 
      //       : null;
      //   } catch {
      //     return null;
      //   }}
    },
    {
      path: "dashboard",
      element: (
        <ThemeProvider>
          <ProtectedRoute>
          <DashboardL />
          </ProtectedRoute>
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
