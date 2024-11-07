import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import Loading from "./pages/Loading.tsx";

const App = lazy(() => import("./App.tsx"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </StrictMode>
);
