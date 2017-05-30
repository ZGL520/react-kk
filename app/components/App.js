/**
 * Created by YUN on 25/05/2017.
 */


import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Homepage from './page/homePage/HomePage';
import AboutUs from './page/aboutUs/AboutUs';
import ContactUs from './page/contactUs/ContactUs';
import Login from './page/login/Login';
import ProductsList from './page/productsList/ProductsList';
import ShoppingCart from './page/shoppingCart/ShoppingCart';
import MyAccount from'./page/myAccount/MyAccount';
import EditPersonalInfo from'./page/editPersonalInfo/EditPersonalInfo';
import EditAddress from './page/editAddress/EditAddress';
import CheckOut from'./page/checkOut/CheckOut';
import OrderInformation from './page/orderInfo/OrderInformation';
import UnpaidOrder from'./page/unpaidOrder/UnpaidOrder';


// 四种不同产品的简介
import InfantFormula from './page/infantFormula/InfantFormula';
import FullCreamMilk from'./page/fullCreamMilk/FullCreamMilk';
import NutritionalFormula from './page/nutritionalFormula/NutritionalFormula';
import UhtMilk from './page/uhtMilk/UhtMilk';
import Product from './page/productsDetailPage/ProductDetail';



class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path ='/' component={Homepage} />
                        <Route path ='/infant_formula' component={InfantFormula} />
                        <Route path ='/nutritional_formula' component={NutritionalFormula} />
                        <Route path ='/full_cream_milk' component={FullCreamMilk} />
                        <Route path ='/uht_milk' component={UhtMilk} />
                        <Route path ='/productsList' component={ProductsList} />
                        <Route path ='/aboutUs' component={AboutUs} />
                        <Route path ='/contactUs' component={ContactUs} />
                        <Route path ='/login' component={Login} />
                        <Route path ='/products/:id' component={Product} />
                        <Route path ='/shoppingCart' component={ShoppingCart} />
                        <Route path ='/myAccount' component={MyAccount} />


                        <Route path ='/orderInfo' component={OrderInformation} />
                        <Route path ='/checkOut' component={CheckOut} />
                        <Route path ='/editPersonalInfo' component={EditPersonalInfo} />
                        <Route path ='/editAddress' component={EditAddress} />
                        <Route path ='/unpaidOrders/:id' component={UnpaidOrder} />

                        <Route render={()=>{
                            return (
                                <h1>Not Found</h1>
                            )
                        }}/>
                    </Switch>

                    <Footer/>

                </div>
            </Router>

        )
    }
}

export default App;