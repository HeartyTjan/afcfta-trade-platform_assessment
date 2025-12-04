import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "@/pages/LandingPage/LandingPage";

import NotFound from "@/pages/NotFound";
import ReadinessSurvey from "@/pages/SurveyPage/component/ReadinessSurvey";
import SurveyQuestions from "@/pages/SurveyPage/component/SurveyQuestions";
import AuthRoutes from "@/auth/authRoutes";
import ComingSoon from "@/pages/ComingSoon";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/get-started" element={<ReadinessSurvey />} />
      <Route path="/survey-questions" element={<SurveyQuestions />} />
      <Route path="/coming-soon" element={<ComingSoon />} />

      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
