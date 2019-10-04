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
                 "img": "picture goes here"
              },
              {
                 "id":2,
                 "name":"The Silmarillion",
                 "price":"$30",
                 "img": "picture goes here"
              },
              {
                 "id":3,
                 "name":"Unfinished tales",
                 "price":"$40",
                 "img": "picture goes here"
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
                  {this.state.data.map((person, i) => <TableRow key = {i} 
                     data = {person} />)}
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