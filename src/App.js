import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import LoginPage from './pages/LoginPage';

function App() {
  return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>

  );
}

export default App;
