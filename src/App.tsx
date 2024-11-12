import { ThemeProvider } from "@/components/theme-provider";
// import LoginForm from "./pages/AuthP"
// import MainDP from "@/pages/DashboardMainP"
// import CuttingDP from "@/pages/DashboardCuttingP";
import DetailCutP from "@/pages/DetailCuttingP";
import { Component } from "@/components/__test__";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {/* <LoginForm/> */}
        {/* <MainDP/> */}
        {/* <CuttingP/> */}
        {/* <Component/> */}
        <DetailCutP/>
      </ThemeProvider>
    </>
  );
}

export default App;
