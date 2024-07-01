import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {

  const [cartCount, setCartCount] = useState(5)


  return (
 <>
   <NavBar cartCount={cartCount} title= "Matlovin"/>
   <ItemListContainer greetings= "Bienvenido a matlovin"/>
 </>
  )
}

export default App
