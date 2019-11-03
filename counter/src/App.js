import React,{Component} from 'react';

export default class App extends Component {
  constructor(p){
    super(p);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  state = {
    contador : 1
  }

  increment(){
    this.setState({
      contador: this.state.contador + 1
    });
  }
  decrement(){
    if(this.state.contador > 0){
      this.setState({
        contador: this.state.contador - 1
      });
    }
  }

  clear = () =>{
    this.setState({
      contador: 1
    });
  }

  render(){
    return (
      <div className="App">
        <h1>
          
          Contador: 
          <button onClick={this.decrement} >-</button>
            {this.state.contador}
          <button onClick={this.increment} >+</button>
          <button onClick={this.clear}>Clear</button>
        </h1>
      </div>
    );
  }
}
