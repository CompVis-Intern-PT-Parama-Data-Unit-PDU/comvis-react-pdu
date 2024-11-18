import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import ErrorPage from "@/pages/ErrorPage";

export function RootBoundary() {
    const error = useRouteError();
  
    if (isRouteErrorResponse(error)) {
      if (error.status === 404) {
        return <ErrorPage />;
      }
  
      if (error.status === 401) {
        return <div>You aren't authorized to see this</div>;
      }
  
      if (error.status === 503) {
        return <div>Looks like our API is down</div>;
      }
  
      if (error.status === 418) {
        return <div>Dang!!</div>;
      }
    }
    return <div>Something went wrong</div>;
  }
  