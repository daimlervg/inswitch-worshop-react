import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navigation-bar";
import CreateEntity from "./views/entities/createEntity";
import Entites from "./views/entities";
// import WalletMasterBalance from "./views/wallet-master-balance";
// import WalletMasterEntity from "./views/wallet-master-entity";


function App() {
  return (
    <>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Entites />} />
          <Route path="/create-entity" element={<CreateEntity />} />
      </Routes>
      {/* <WalletMasterEntity></WalletMasterEntity>
      <WalletMasterBalance /> */}
    </>
  );
}

export default App;
