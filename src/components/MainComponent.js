import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import { Switch, Route, Redirect } from 'react-router-dom';
import JavaHome from '../java/JavaHome';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={JavaHome}></Route>
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />}></Route>
                    <Redirect to="/home"></Redirect>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;