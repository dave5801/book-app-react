import React from 'react';

class TableRow extends React.Component {
    render() {
       return (
          <tr>
             <td>{this.props.data.id}</td>
             <td>{this.props.data.name}</td>
             <td>{this.props.data.age}</td>
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
                 "name":"Foo",
                 "age":"20"
              },
              {
                 "id":2,
                 "name":"Bar",
                 "age":"30"
              },
              {
                 "id":3,
                 "name":"Baz",
                 "age":"40"
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