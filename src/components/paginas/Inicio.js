import React from 'react';

const Inicio = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Bienvenido a la página de inicio</h1>
        <p className="lead">Esta es una simple aplicación para mostrar una lista de Pokémon y sus ítems.</p>
        <hr className="my-4" />
        <p>Utiliza la navegación para explorar las diferentes secciones.</p>
        <a className="btn btn-primary btn-lg" href="/pokemon" role="button">Ver Pokémon</a>
      </div>
    </div>
  );
}

export default Inicio;
