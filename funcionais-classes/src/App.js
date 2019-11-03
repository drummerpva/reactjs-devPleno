import React from 'react';



class Contador2 extends React.Component{
  constructor(props){
    super(props);

    //para poder chamar o this da classe
    this.increment = this.increment.bind(this);
  }

  state = {
    contador: 1
  }
  increment(){
    this.setState({contador:this.state.contador+1});
  }
  render(){
    return (
      <h1>
        Contador(2): {this.state.contador}
        <button onClick={this.increment}>Increment</button>
      </h1>
    );
  }
}

const Contador1 = () => {
  const [contador, setContador] = React.useState(1);
  const increment = () =>{
    setContador(contador+1);
  };
  return(
    <h1>
      Contador(1): {contador}
      <button onClick={increment}>Increment</button>
    </h1>
  );
};


export default function App() {
  return (
    <div className="App">
      <Contador1 />
      <Contador2 />
    </div>
  );
}

