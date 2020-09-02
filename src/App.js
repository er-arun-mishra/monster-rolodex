import React,{Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component{

  constructor(){
    super();

    this.state = {
      monsters:[],
      searchField: ""
    };
  }
  
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }

  render(){
    
    const { monsters, searchField} = this.state;
    const newSearchedFields = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return(
      <div className = "App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeHolder="search monster"
          handleChange = {e => {this.setState({searchField:e.target.value})}}
        />
        <CardList monsters = {newSearchedFields}/>
      </div>
    )
  }
  
  // constructor(){// This is to show how the click can change the name using setState method that is provided by the component class from the react.
  //   super();
  //   this.state={
  //    monster:[
  //      {
  //        name: "Arun",
  //        id: "a1"
  //      },{
  //       name: "Kailash",
  //       id: "a2"
  //     },{
  //       name: "Omkar",
  //       id: "a3"
  //     },{
  //       name: "Manish",
  //       id: "a4"
  //     }
  //    ]      
  //   };
  // }

  // render(){
  //   return(
  //     <div className = "App">
  //       {//this braces inside our div allows us to modify the things as we want in our javascript function and sttle
  //         this.state.monster.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
  //       }
  //     </div>
  //   );
  // }

  // render(){// This is to show how the click can change the name using setState method that is provided by the component class from the react.
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           {this.state.string}
  //         </p>
  //         <button onClick= {()=> {this.setState({string: "Hello Jhingur"})}}>Change Name</button>
  //       </header>
  //     </div>
  //   );
  // }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
