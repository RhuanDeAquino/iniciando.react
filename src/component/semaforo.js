import React from 'react';
import '../App.css';

class semaforo extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          semaforo: 'semaforo apagado'
        };
    }
    
      ficaramarelo = () => {
        this.setState({
            semaforo: 'Amarelo', 
        })
      }

        ficarverde = () => {
            this.setState({
                semaforo: 'Verde'
            })
        }

        ficarvermelho = () => {
            this.setState({
                semaforo: 'Vermelho'
            })
        }
      render() {
      return (
        <div className="App">
            <p>{this.state.semaforo}</p>
            <button onClick={this.ficarvermelho}>Vermelho</button>
            <button onClick={this.ficaramarelo}>Amarelo</button>
            <button onClick={this.ficarverde}>Verde</button>   
        </div>
      );
    }
}
export default semaforo;
