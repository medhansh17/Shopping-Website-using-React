import { Routes, Route, useNavigate } from "react-router-dom";
// import PrivateRoute from "./components/private-routes/private-route.component.jsx";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { UserContext } from "./contexts/user.context";
import { useState } from "react";

const App = () => {
  const navigate = useNavigate();
  const { currentUser } = useState(UserContext);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
