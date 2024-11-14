import { ThemeProvider } from "@/components/theme-provider";
// import LoginForm from "./pages/AuthP"
// import MainDP from "@/pages/DashboardMainP"
// import CuttingDP from "@/pages/DashboardCuttingP";
// import DetailCutP from "@/pages/DetailCuttingP";
import UserManagement from "@/pages/UserManagement"


function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {/* <LoginForm/> */}
        {/* <MainDP/> */}
        {/* <CuttingP/> */}
        {/* <DetailCutP/> */}
        <UserManagement/>
      </ThemeProvider>
    </>
  );
}

export default App;
