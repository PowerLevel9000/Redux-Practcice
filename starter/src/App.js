import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { total } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
    const { cartItems } = useSelector(state => state.cart);
    const { isOpen } = useSelector((state) => state.modal);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(total());
    }, [cartItems])
    return (
      <main>
        {isOpen && < Modal />}
        <Navbar />
        <CartContainer />
      </main>);
  }
export default App;
