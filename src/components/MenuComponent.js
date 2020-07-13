import React, { Component } from "react";

import DishDetail from "./DishdetailComponent";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <>
          <DishDetail details={dish} />
        </>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div
          className="col-md-5"
          id="content"
          onClick={() => this.onDishSelect(dish)}
        >
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />

            <CardImgOverlay>
              <CardTitle id="name">{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row" id="card">
          {menu}
        </div>
        <div id="desc">{this.renderDish(this.state.selectedDish)}</div>
      </div>
    );
  }
}

export default Menu;