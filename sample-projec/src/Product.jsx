import React, { Component } from "react";
import { Link } from "react-router-dom"; 

export default class Product extends Component {
  render() {
    console.log("prod component render()" , this.props);

    return (
      <div className="col-lg-6">
        <div className="card m-2">

          <div className="card-body">
            <div className="text-muted">
                # {this.props.product.id}
                <span className="pull-right hand-icon"  onClick={() => {this.props.onDelete(this.props.product);}}>
                    <i className="fa fa-times"></i>
                </span>
            </div>

            <h5 className="pt-2 border-top">{this.props.product.productName}</h5>

            <div>$ {this.props.product.price}</div>
          </div>
          {/* card body ends here */}

          <div className="card-footer">

            {/* increase/decrese the quantity */}
            <div className="float-left">
                <span className="badge quantity-color">{this.props.product.quantity}</span>

                <div className="btn-group">
                    <button className="btn btn-outline-success" onClick={() => {this.props.onIncrement(this.props.product);}}>+</button>
                    <button className="btn btn-outline-success" onClick={() => {this.props.onDecrement(this.props.product);}}>-</button>
                </div>
            </div>
            {/* Buy now button */}
            <div className="float-right moveRht">
              <Link to = {`product/${this.state.product.id}`} className="mr-2">
              Details 
              </Link>
              {this.props.children}
            </div>

          </div>
          

        </div>
      </div>
    );
  }
}
