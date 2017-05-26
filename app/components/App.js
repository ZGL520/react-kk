var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

// antd组件


var Header = require('./Header');
var Footer = require('./Footer');
var Homepage = require('./page/HomePage');


// 四种不同产品的简介
var InfantFormula = require('./page/InfantFormula');
var NutritionalFormula = require('./page/NutritionalFormula');
var FullCreamMilk = require('./page/FullCreamMilk');
var UhtMilk = require('./page/UhtMilk');
var ProductsList = require('./page/ProductsList');
var AboutUs = require('./page/AboutUs');
var ContactUs = require('./page/ContactUs');
var Login = require('./page/Login');
var Product= require('./page/Products');
var ShoppingCart= require('./page/ShoppingCart');
var MyAccount= require('./page/MyAccount');
var OrderInformation= require('./page/OrderInformation');
var CheckOut= require('./page/CheckOut');
var EditPersonalInfo= require('./page/EditPersonalInfo');
var EditAddress= require('./page/EditAddress');
var UnpaidOrder= require('./page/UnpaidOrder');

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

module.exports = App;