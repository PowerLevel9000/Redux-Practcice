import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { total } from "./features/cart/cartSlice";


function App() {
  const { cartItems } = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(total());
  }, [cartItems])
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>);
}
export default App;
