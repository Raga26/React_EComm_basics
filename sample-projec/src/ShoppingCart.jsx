import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "iPhone", price: 8900, quantity: 0 },
      { id: 2, productName: "Sony Camera", price: 4500, quantity: 0 },
      { id: 3, productName: "Samsung QLED TV", price: 7745, quantity: 0 },
      { id: 4, productName: "iPad Pro", price: 12400, quantity: 0 },
      { id: 5, productName: "Xbox", price: 7780, quantity: 0 },
      { id: 6, productName: "Dell Monitor", price: 880, quantity: 0 },
    ],
  };

  render() {
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>

        <div className="row">
          {this.state.products.map((prod) => {
            return (
                //giving product the obj , and the methods
              <Product 
              key={prod.id} 
              product={prod}
              onIncrement = {this.handleIncrement}
              onDecrement = {this.handleDecrement}
              onDelete = {this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  //render ends here

  handleIncrement = (productParam) => {
   console.log("handling increment", productParam);

   //getting pdt based on its index
   let allPrdts = [...this.state.products];
   let index = allPrdts.indexOf(productParam);

   if(allPrdts[index].quantity < 25){
    allPrdts[index].quantity++;
    this.setState({products : allPrdts});
   }

  };

  handleDecrement = (productParam) => {
    console.log("handling decrement",productParam)

    let allPrdts = [...this.state.products];
    let index = allPrdts.indexOf(productParam);
    
    if(allPrdts[index].quantity > 0){
     allPrdts[index].quantity--;
     this.setState({products : allPrdts});
    }

  };

  handleDelete = (productParam) =>{
    console.log("handling delete",productParam)

    let allPrdts = [...this.state.products];
    let index = allPrdts.indexOf(productParam);
    
    if(window.confirm("Are you sure to delete?")){
        allPrdts.splice(index,1);
        this.setState({products : allPrdts});
    }

  };
}
