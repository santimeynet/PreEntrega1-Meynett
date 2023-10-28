import ItemListContainer from "./components/containers/ItemListContainer";
import NavBar from "./components/layout/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import { getFirestore } from 'firebase/firestore'
import Checkout from "./components/Checkout/Checkout";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG33m4ZKPYTXN-OLItGyuGxrK9DAhVZKc",
  authDomain: "grizzlyman-gear.firebaseapp.com",
  projectId: "grizzlyman-gear",
  storageBucket: "grizzlyman-gear.appspot.com",
  messagingSenderId: "937784199675",
  appId: "1:937784199675:web:80f55e9b79d9225a0ae35e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Todos nuestros productos'} />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Categorias de nuestro productos'} />}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;


