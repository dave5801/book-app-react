import React from 'react';
import './../css/wishlist.css';

class TableRow extends React.Component {
   constructor(props){
      super(props);
   } 
   render() {
         return (
            <tr>
               <td>{this.props.data.name}</td>
               <td><img src = {this.props.data.img} onClick= {()=>this.props.addToCart(this.props.data)}/></td>
               <td>{this.props.data.price}</td>
            </tr>
         );
      }  
 }

class ShoppingCart extends React.Component{
   constructor(props){
      super(props)
   }
   render(){
      
      if(!this.props.show){
         console.log("Inside Shopping cart");
         return null;
      }else{
         const booksInCart = this.props.getShoppingCart;
         //onClick= {()=>this.props.addToCart(this.props.data)
         return (
           
            <div className="shoppingCartBooks">
               This is the Shopping Cart
               <ol>
               {booksInCart.map(book => (
                  <li onClick={()=>this.props.removeItem(book.id)} key={book.name}>{book.name}</li>
               ))}
               </ol>
            </div>
             
         );
      }
   }
}

class Body extends React.Component{
    constructor() {
        super();
        this.updateCart = this.updateCart.bind(this);
        this.toggleShoppingCartOnClick = this.toggleShoppingCartOnClick.bind(this);
        this.removeItemFromShoppingCartOnClick = this.removeItemFromShoppingCartOnClick.bind(this);
        this.state = {
           data: 
           [
              {
                 "id":1,
                 "name":"The Hobbit",
                 "price":"$20",
                 "img": require('./../static/hobbit.png')
              },
              {
                 "id":2,
                 "name":"The Silmarillion",
                 "price":"$30",
                 "img": require('./../static/silmarillion.png')
              },
              {
                 "id":3,
                 "name":"Fall of Gondolin",
                 "price":"$40",
                 "img": require('./../static/fallOfGondolin.png')
              }
           ],
           shoppingCart : [],
           showCart: false
        }
     }
   removeItemFromShoppingCartOnClick(bookId){
      
   for(var book in this.state.shoppingCart){
      if(bookId == book.id){
         console.log("remove this book " +book.name);
      }
   }

     // console.log("Remove from Cart ", bookId)
   }
    toggleShoppingCartOnClick(){
       //console.log("Show Cart " +this.state.showCart)
       this.setState(state=> ({
         showCart: !state.showCart
       }));
    }

    updateCart(bookToBuy){
      if (!this.state.shoppingCart.includes(bookToBuy)){
         this.setState({shoppingCart : [...this.state.shoppingCart, bookToBuy]});
         console.log(this.state);
      }   
   }

    render(){
       
      return (
            <div className="App">
              <header className="App-header">
        
                <p>
                  Tolkien Book Store
                </p>
                <table>
                   <tbody>
                      {this.state.data.map((book, i) => <TableRow key = {i} 
                         data = {book} addToCart={this.updateCart} />)}
                   </tbody>
                </table>
                <div>
                   <ShoppingCart show={this.state.showCart} 
                   getShoppingCart={this.state.shoppingCart}
                   removeItem = {this.removeItemFromShoppingCartOnClick}
                   />
                   <button onClick={this.toggleShoppingCartOnClick}>
                      {this.state.showCart ? 'Go Back' : 'Proceed to Checkout'}
                   </button>
                </div>
                </header>
              
            </div>
          );
       }
  }
  export default Body;
//Notes
  //on click event handler
//click handler reveal state
//toggling classes
//React - conditional rendering