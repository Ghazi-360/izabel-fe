import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import Link from './pages/Link';
import Input from './pages/Input'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Link />} />
                <Route path="/one" element={<Input />} />
            </Routes>
        </BrowserRouter>
        // <div className="wrapper center">
        //     <Link />
        // </div>
    );
}

export default App;
