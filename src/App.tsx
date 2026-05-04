import { lazy, Suspense } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";
import CaseStudy from "./components/CaseStudy";

const CaseStudyRoute = () => {
  const navigate = useNavigate();
  return <CaseStudy isOpen={true} onClose={() => navigate("/")} />;
};

const App = () => {
  return (
    <>
      <LoadingProvider>
        <Suspense>
          <MainContainer>
            <Suspense>
              <CharacterModel />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>

      <Routes>
        <Route path="/projects/magicpin-digital-campaigns" element={<CaseStudyRoute />} />
      </Routes>
    </>
  );
};

export default App;
