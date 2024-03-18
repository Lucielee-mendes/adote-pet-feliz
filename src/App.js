import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EsqueceuSenha from './pages/EsqueceuSenha';
import Cadastro from './pages/Cadastro';
import PerfilUsuario from './pages/PerfilUsuario';
import CadastroPet from './pages/CadastroPet';
import PerfilPet from './pages/PerfilPet';
import QuemSomos from './pages/QuemSomos';
import EditarPerfil from './pages/EditarPerfilUsuario'
import QueroAdotar from './pages/QueroAdotar'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/esqueciSenha" element={<EsqueceuSenha />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/perfilUsuario/:userId" element={<PerfilUsuario />} />
        <Route path="/cadastroPet/:userId" element={<CadastroPet />} />
        <Route path="/perfilPet/:petId" element={<PerfilPet />} />
        <Route path="/quemSomos" element={<QuemSomos />} />
        <Route path="/editarPerfil/:userId" element={<EditarPerfil />} />
        <Route path="/queroAdotar" element={<QueroAdotar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
