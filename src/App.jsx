import Header from "./components/Header"
import Product from "./components/Product"
import Dprod from "./components/Dprod"
import { Outlet } from "react-router-dom"

const App=()=>{
  return (
    <>
    <Header/>
    <Outlet/>
    {/* <Dprod/> */}
    {/* <Product/> */}
    </>
    
    )
}
export default App