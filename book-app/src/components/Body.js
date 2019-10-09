import React from 'react';
import './../css/wishlist.css';

class BookInfoRow extends React.Component {
   constructor(props){
      super(props);
   } 
   render() {
         return (
            <tr>
               <td>{this.props.book.name}</td>
               <td><img src = {this.props.book.img} onClick= {()=>this.props.addToCart(this.props.book)}/></td>
               <td>{this.props.book.price}</td>
            </tr>
         );
      }  
 }

class ShoppingCart extends React.Component{
   constructor(props){
      super(props)
   }
   render(){
      
      if(!this.props.displayShoppingCart){
         console.log("Inside Shopping cart");
         return null;
      }else{
         const booksInCart = this.props.getShoppingCart;
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

//main Component
class Body extends React.Component{
    constructor() {
        super();
        //bind Methods
        this.addBookToCart = this.addBookToCart.bind(this);
        this.toggleDisplayShoppingCartOnClick = this.toggleDisplayShoppingCartOnClick.bind(this);
        this.removeBookFromShoppingCartOnClick = this.removeBookFromShoppingCartOnClick.bind(this);
        //this is hardcoded, ideally I wanted to use the Google Books API
        this.state = {
           books: 
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
           shoppingCartIsVisible: false
        }
     }
     removeBookFromShoppingCartOnClick(bookId){
      this.state.shoppingCart =this.state.shoppingCart.filter(function(book){
            return book.id != bookId
      });
   }

    toggleDisplayShoppingCartOnClick(){
       this.setState(state=> ({
         shoppingCartIsVisible: !state.shoppingCartIsVisible
       }));
    }

    addBookToCart(bookToBuy){
      if (!this.state.shoppingCart.includes(bookToBuy)){
         this.setState({shoppingCart : [...this.state.shoppingCart, bookToBuy]});
         console.log(this.state);
      }   
   }

    render(){
       
      return (
            <div className="App">
              <header className="App-header">
        
                <h1>
                  Tolkien Book Store
                </h1>
                <p>Click The pictures to add to Shopping Cart</p>
                <table>
                   <tbody>
                      {this.state.books.map((book, i) => <BookInfoRow key = {i} 
                         book = {book} addToCart={this.addBookToCart} />)}
                   </tbody>
                </table>
                <div>
                   <ShoppingCart displayShoppingCart={this.state.shoppingCartIsVisible} 
                   getShoppingCart={this.state.shoppingCart}
                   removeItem = {this.removeBookFromShoppingCartOnClick}
                   />
                   <button onClick={this.toggleDisplayShoppingCartOnClick}>
                      {this.state.shoppingCartIsVisible ? 'Go Back' : 'Proceed to Checkout'}
                   </button>
                </div>
                </header>
              
            </div>
          );
       }
  }
  export default Body;