import LayoutDefault from "./layout/LayoutDefault";
import Home from './views/pages/Home';
import Product from "./views/pages/Product";
import Login from "./views/pages/Login";
import NotFound404 from "views/pages/NotFound404";
import { LoginForm, RegisterForm } from "components/user";

import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<LayoutDefault/>}>
        <Route path="" element={<Home/>} />
        <Route path="products" element={<Product/>} />

        <Route path="user" element={<Login/>}>
          <Route path="login" element={<LoginForm/>} />
          <Route path="register" element={<RegisterForm/>} />
        </Route>
        <Route path="*" element={<NotFound404/>} />
        {/* <Route path="*" element={<Navigate to="" replace />} /> */}
      </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
