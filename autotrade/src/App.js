import logo from './logo.svg';
import './App.css';
import { Route,Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Index from './components/Index';
import Login from './components/Login';
import Footer from './components/Footer';
import Register from './components/Register';
import Change_password from './components/Change_password';
import Listing from './components/Listing';
import Pending_ads from './components/Pending_ads';
import Details from './components/Details';
import Blog_grid from './components/Blog_grid';
import Blog from './components/Blog';
import Ad_post from './components/Ad_post';
import Active_ads from './components/Active_ads';
import About_us from './components/About_us';
import Error from './components/Error';
import Contact_us from './components/Contact_us';
import Blog_detail from './components/Blog_detail';
import Index2 from './components/Index2';
import Auto_parts from './components/Auto_parts';
import Product_details from './components/Product_details';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import AuthProvider from './components/authContext';
import ProtectedRoute from './components/protectedRoutes';
import CarDetails from './components/carDetails';
import Assurance_listing from './components/Assurance_listing';
import Assurance from './components/Assurance';
import Finance from './components/Finance';


function App() {
 
  return (
    <AuthProvider>
      <Switch>
       {/* <ProtectedRoute path='/wishlist' component={Wishlist}/> */}
        {/* <ProtectedRoute path='/listing' component={Listing} /> */}
        <ProtectedRoute path='/adpost' component={Ad_post}/>
         <ProtectedRoute path='/cart' component={Cart} /> 
         <ProtectedRoute path='/Assurance_listing' component={Assurance_listing} /> 
         <ProtectedRoute path='/Assurance' component={Assurance} /> 
         <ProtectedRoute path='/Finance' component={Finance} /> 
      


        <Route exact path='/' component={Index}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route exact path='/adpost' component={Ad_post}/>
        <Route exact path='/changepassword' component={Change_password}/>
        <Route exact path='/listing' component={Listing}/>
        <Route exact path='/pendingads' component={Pending_ads}/>
        <Route exact path='/details/:id' component={Details}/>
        <Route exact path='/bloggrid' component={Blog_grid}/>
        <Route exact path='/blog' component={Blog}/>
        <Route exact path='/activeads' component={Active_ads}/>
        <Route exact path='/about' component={About_us}/>
        <Route exact path='/error' component={Error}/>
        <Route exact path='/contactus' component={Contact_us}/>
        <Route exact path='/blogs_detail/:id' component={Blog_detail}/>
        {/* <Route exact path='/autoparts' component={Auto_parts}/> */}
        <Route exact path='/productdetails' component={Product_details}/>
        <Route exact path='/cart' component={Cart}/>
        <Route exact path='/wishlist' component={Wishlist}/>
        <Route exact path='/carDetails/:id' component={CarDetails}/>
      </Switch>
    </AuthProvider>
  );
}

export default App;

