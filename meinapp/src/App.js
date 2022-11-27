import './App.css';
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
// import component
import StartSeite from './components/StartSeite';
import Navbar from "./components/Navbar";
import Herren from "./components/Herren";
import Frauen from "./components/Frauen";
import Header from "./components/Header";
import Kinder from "./components/Kinder";
import Kontakt from "./components/Kontakt";
import Footer from "./components/Footer";
function App() {
  return (
<div>
            <Header />
            <Navbar />

            <Container className="mb-4">
                <Routes>
                    <Route path="/" element={<StartSeite />} />
                    <Route path="/herren" element={<Herren />} />
                    <Route path="/frauen" element={<Frauen />} />
                    <Route path="/kinder" element={<Kinder />} />
                    <Route path="/kontakt" element={<Kontakt />} />
                    <Route path="/footer" element={<Footer />} />
                </Routes>
            </Container>
        </div>
  );
}

export default App;
