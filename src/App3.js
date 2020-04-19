import React from 'react'
import axios from 'axios'
class App3 extends React.Component {

    state = {
        movie: {},
        cargado: false
    }

    manejador = (event) => {
        event.preventDefault()
        //extraemos informacion del nombre de la pelicula
        const title = event.target[0].value
        this.setState({ cargado: true })
        const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=d93ac35c'

        axios.get(url, {
            params: {
                t: title
            }
        })
            .then(res => this.setState({ movie: res.data, cargado: false }))
    }


    render() {
        if (this.state.cargado) {
            return <h1>Cargando...</h1>
        }
        const { movie } = this.state
        return (
            <div>
                <form onSubmit={this.manejador}>
                    <input type="text" placeholder="Ingrese"></input>
                    <button>Buscar</button>
                </form>
                <div>
                    <h1>{movie.Title}</h1>
                    <p>{movie.Plot}</p>
                    <p></p>
                    <img src={movie.Poster} width="150px"></img>
                </div>
            </div>
        )
    }
}

export default App3