import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavbarWithSearch from './Components/navbar';
import SearchResults from './Components/search-results';
import AccountPage from './Components/account-page';
import HomePage from './Components/home';
import ViewBirds from './Components/view-birds';
import ViewReptiles from './Components/view-reptiles';
import ViewProducts from './Components/view-products';
import ViewFood from './Components/view-food';
import ViewCart from './Components/shopping-cart';
import OrderConfirmation from './Components/order-confirmation';
import Login from './Components/login';
import AdminPage from './Components/admin-page';
import Footer from './Components/footer';


function App() {
  return (
    <BrowserRouter>
      <>
        <NavbarWithSearch /> {/* calls on navbar */}

        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/account-page" element={<AccountPage />} />
            <Route path="/view-birds" element={<ViewBirds />} />
            <Route path="/view-reptiles" element={<ViewReptiles />} />
            <Route path="/view-products" element={<ViewProducts />} />
            <Route path="/view-food" element={<ViewFood />} />
            <Route path="/view-cart" element={<ViewCart />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin-page" element={<AdminPage />} /> 
            
            <Route path="/search" element={<SearchResults searchQuery={new URLSearchParams(window.location.search).get('query')} />} /> 
          </Routes>
        </div>
        <Footer /> {/* calls on footer */}

      </>
    </BrowserRouter>
  );
}

export default App;
