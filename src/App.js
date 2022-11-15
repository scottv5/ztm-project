import Home from "./routes/home/home.component.jsx";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component.jsx";
import SignIn from "./routes/sign-in/sign-in.component.jsx";
import ShopRoutes from "./routes/shopRoutes/shopRoutes.component";
import Checkout from "./routes/checkout/checkout.component.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<ShopRoutes />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
