import React from 'react';

class App extends React.Component {
  state = {
    users: [],
    cargando: true
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => this.setState({ users, cargando: false }))
  }

  render() {
    if (this.state.cargando) {
      return <h1>Cargando...</h1>
    }
    return (
      <div>
        <h1>peticion HTTP</h1>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>
              {user.name}
              <a href={`http://${user.website}`}>Web site</a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App;
