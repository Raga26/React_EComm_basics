import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  state = {
    products: [],
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

  //executes after constructor and render method
  //(includes life cyccle of child compoenents, if any)of current compoenent

  componentDidMount =  async() => {
    //fetch data from data source
    console.log("componentDidMount - ShopppingCart");

    var response = await fetch("http://localhost:5000/products" , {method:"GET"});

    var prods = await response.json();

    this.setState({products : prods});
  }

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
