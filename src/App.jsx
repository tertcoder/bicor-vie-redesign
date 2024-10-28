import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import InsuranceContracts from "./pages/InsuranceContracts";
import NavBar from "./ui/NavBar";
import PourquoiSouscrire from "./pages/PourquoiSouscrire";
import AdvantagesList from "./pages/educationInsuranceAdvantages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Accueil />} />
          <Route path="/insurance-contracts" element={<InsuranceContracts />} />
          <Route path="/pourquoi-sous-crire" element={<PourquoiSouscrire />} />
          <Route path="/education-Insurance-Advantages" element={<AdvantagesList/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
