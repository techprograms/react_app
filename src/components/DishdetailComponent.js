import React, { Component } from "react";
import "../App.css";

import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const cmt = this.props.details.comments.map((comment) => {
      const date = new Date(comment.date);
      const sdate = date.toDateString();
      return (
        <div>
          <p>{comment.comment}</p>
          <p>
            -- {comment.author} , {sdate}
          </p>
        </div>
      );
    });
    return (
      <div className="row" id="about">
        <div className="col-md-5">
          <Card>
            <CardImg
              top
              src={this.props.details.image}
              alt={this.props.details.name}
            />

            <CardBody>
              <CardTitle>{this.props.details.name}</CardTitle>
              <CardSubtitle>Price : {this.props.details.price}$</CardSubtitle>
              <CardText>{this.props.details.description}$</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-5">
          <h3>Comments</h3>
          {cmt}
        </div>
      </div>
    );
  }
}

export default DishDetail;