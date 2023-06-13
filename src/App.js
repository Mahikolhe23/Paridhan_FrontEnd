import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Category from './Components/Category/Category';
import SingleProduct from './Components/SingleProduct/SingleProduct';
import Newsletter from "./Components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/AppContext";

function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <div>
                    <Header />
                    <Routes>
                        <Route path="/Paridhan_FrontEnd" element={<Home />} />
                        <Route path="/Paridhan_FrontEnd/category/:id" element={<Category />} />
                        <Route path="/Paridhan_FrontEnd/product/:id" element={<SingleProduct />} />
                    </Routes>
                    <Newsletter />
                    <Footer />
                </div>
            </AppContext>
        </BrowserRouter>
    );
};
export default App;