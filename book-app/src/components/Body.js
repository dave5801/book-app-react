import React from 'react';
//on click event handler
//click handler reveal state
//toggling classes
class TableRow extends React.Component {
    render() {
       return (
          <tr>
             <td>{this.props.data.name}</td>
             <td>{this.props.data.img}</td>
             <td>{this.props.data.price}</td>
          </tr>
       );
    }
 }

class Body extends React.Component{
    constructor() {
        super();
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
           ]
        }
     }
    render(){
      return (
        <div className="App">
          <header className="App-header">
    
            <p>
              This is my book application
            </p>
            <table>
               <tbody>
                  {this.state.data.map((book, i) => <TableRow key = {i} 
                     data = {book} />)}
               </tbody>
            </table>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              This will be the wishlist
            </a>
          </header>
        </div>
      );
    }
  }
  export default Body;