import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import InsuranceContracts from "./pages/InsuranceContracts";
import NavBar from "./ui/NavBar";
import PourquoiSouscrire from "./pages/PourquoiSouscrire";
import AdvantagesList from "./pages/educationInsuranceAdvantages";
import AboutUs from "./pages/Apropos";
import Footer from "./sections/accueil/Footer";
import CreditProtectionPage from "./pages/CreditProtectionPage";
import PensionSection from "./pages/PensionSection";
import InsurancePage from "./pages/InsurancePage";
import SocialProtectionSection from "./pages/SocialProtectionSection";
import EducationInsurancePage from "./pages/EducationInsurancePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<NavBar />}>
            <Route path="/" element={<Accueil />} />
            <Route
              path="/insurance-contracts"
              element={<InsuranceContracts />}
            />
            <Route
              path="/pourquoi-sous-crire"
              element={<PourquoiSouscrire />}
            />
            <Route
              path="/education-Insurance-Advantages"
              element={<AdvantagesList />}
            />
            <Route path="/a-propos" element={<AboutUs />} />
            <Route
              path="/protection-credit"
              element={<CreditProtectionPage />}
            />
            <Route path="/pension" element={<PensionSection />} />
            <Route
              path="/protection-social"
              element={<SocialProtectionSection />}
            />
            <Route
              path="/assurance-education"
              element={<EducationInsurancePage/>}
            />
            <Route
              path="/tontine"
              element={<EducationInsurancePage/>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
