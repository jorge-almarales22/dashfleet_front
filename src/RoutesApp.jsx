import { Route, Routes } from "react-router-dom";
import { DetailOrder } from "./components/DetailOrder";
import { Home } from "./components/Home";
import { useOrders } from "./hooks/useOrders";

export const RoutesApp = () => {
  
  const {getOrders, IDRef, IDTypeRef, orderCodeRef, order, errorRef} = useOrders();

  return (
    <div className="container">
      <Routes>

        <Route path="/" element={<Home getOrders={getOrders} IDRef={IDRef} IDTypeRef={IDTypeRef} orderCodeRef={orderCodeRef} errorRef={errorRef}/>}></Route>
        <Route path="/detail" element={<DetailOrder order={order}/>}></Route>
        <Route path="/*" element={<Home />}></Route>

      </Routes>
    </div>
  )
}