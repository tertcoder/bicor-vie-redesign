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
import SocialProtectionSection from "./pages/SocialProtection";
import EducationInsurancePage from "./pages/EducationInsurancePage";
import TontinePage from "./pages/Tontine";
import SouscriptionForm from "./forms/SouscriptionForm";
import ContactForm from "./forms/Contact";
import Actualite from "./sections/accueil/Actualite";
import Actu from "./pages/Actu";
import NosAgences from "./pages/agences";
import Devit from "./forms/devit";

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
              element={<TontinePage/>}
            />
            <Route
              path="/souscrire"
              element={<SouscriptionForm/>}
            />
            <Route
              path="/contact"
              element={<ContactForm/>}
            />
             <Route
              path="/actu"
              element={<Actu/>}
            />
             <Route
              path="/agences"
              element={<NosAgences/>}
            />
            <Route
              path="/devit"
              element={<Devit/>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
