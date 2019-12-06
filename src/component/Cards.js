import React from 'react'
import '../App.css'
import { createBrotliCompress } from 'zlib';


class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Alunos:  [
                {
                    nome: 'Rhuan',
                    polo: 'PZR'
                },
                {
                    nome: 'Carol',
                    polo: 'PZR'
                },
                {
                    nome: 'Jorge',
                    polo: 'CPX'
                },
                {
                    nome: 'Erlanie',
                    polo: 'PZR'
                },
                {
                    nome: 'Cleiton',
                    polo: 'CPX'
                },
                {
                    nome: 'Lucas',
                    polo: 'CPX',
                },
                {
                    nome: 'Maicon',
                    polo: 'CPX'
                },
                {
                    nome: 'Luan',
                    polo: 'CPX'
                },
                {
                    nome: 'Geyza',
                    polo: 'PZR'
                }
            ]
        }
    }
    render() {
        return (
            <div className="conteiner">
                {this.state.Alunos.map((Chamada, index) => {
                    return(
                    <div className="Carta" key={index}>
                        <h1>{Chamada.nome}</h1>
                        <h2>{Chamada.polo}</h2>
                    </div>
                        )
                }
                )}
            </div>

        )
    }
}
export default Card