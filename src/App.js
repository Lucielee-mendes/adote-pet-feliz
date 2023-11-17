import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EsqueceuSenha from './pages/EsqueceuSenha';
import Cadastro from './pages/Cadastro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/esqueciSenha" element={<EsqueceuSenha/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
