import CardList from '../Components/CardList.js';
import {robots} from '../Robots.js';
import SearchBox from '../Components/SearchBox.js';
import React,{Component } from 'react';
import Scroll from '../Components/Scroll.js';
import ErrorBoundary  from '../Components/ErrorBoundary.js';

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield:' '
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
       // .then(users=>{})
          .then(users => this.setState({robots : users}));
    }
    onSearchChange= (event) =>{
        this.setState ({searchfield: event.target.value})
        
    }
    render(){
        const filterRobos = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        if(!robots.length){
            return <h1>Loading..</h1>
        }
        else{
        return ( 
            <div className='tc'>
        <h1 >Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
       <Scroll>
        <ErrorBoundary>
            <CardList robots ={filterRobos}/>
        </ErrorBoundary>
        </Scroll>
       
        </div>
        );
        }
    }
}
export default App;