
import React, { Component } from "react";

export default class Collatz extends Component {


  state = {
    numeros: [],
  };


  mostrarCollatz=()=>{
    let aux = []
    let numero = this.props.numero

    while (numero != 1) {
        if (numero % 2 == 0) {
          //es par
          console.log("el numero es par");
          numero = numero / 2;
          this.state.numeros.push(numero);
        } else {
          //es impar
          console.log("el numero es impar");
          numero = numero * 3 + 1;
          this.state.numeros.push(numero);
        }
      }

      this.setState({
        numeros: this.state.numeros,
      });
    

        
  }

  componentDidMount=()=>{
    this.mostrarCollatz()
  }

  render() {
    return (
      <div>
        <h1>Conjetura de Collatz</h1>
        <h3 style={{color:"blue"}}>Numero: {this.props.numero}</h3>

        <div>
          <ul>
            {this.state.numeros.map((numero, index) => {
              return <li key={index}>{numero}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
