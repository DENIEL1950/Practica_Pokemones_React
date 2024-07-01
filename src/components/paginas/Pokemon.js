import React from 'react';
import PikachuImage from '../../assets/pikachu.png'; // Ejemplo de importación de imagen
import Pokemon2Image from '../../assets/pokemon2.png';
import Pokemon3Image from '../../assets/pokemon3.png';
import Pokemon4Image from '../../assets/pokemon4.png';
import Pokemon5Image from '../../assets/pokemon5.png';

const Pokemon = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Pokémon</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src={PikachuImage} className="card-img-top" style={{ maxWidth: '100%', height: 'auto' }} alt="Pikachu" />
            <div className="card-body">
              <h5 className="card-title">Pikachu</h5>
              <p className="card-text">Descripción del Pokémon Pikachu.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={Pokemon2Image} className="card-img-top" style={{ maxWidth: '50%', height: 'auto' }} alt="Pokemon 2" />
            <div className="card-body">
              <h5 className="card-title">Pokémon 2</h5>
              <p className="card-text">Descripción del Pokémon 2.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={Pokemon3Image} className="card-img-top" style={{ maxWidth: '57%', height: 'auto' }} alt="Pokemon 3" />
            <div className="card-body">
              <h5 className="card-title">Pokémon 3</h5>
              <p className="card-text">Descripción del Pokémon 3.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={Pokemon4Image} className="card-img-top" style={{ maxWidth: '70%', height: 'auto' }} alt="Pokemon 4" />
            <div className="card-body">
              <h5 className="card-title">Pokémon 4</h5>
              <p className="card-text">Descripción del Pokémon 4.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={Pokemon5Image} className="card-img-top" style={{ maxWidth: '65%', height: 'auto' }} alt="Pokemon 5" />
            <div className="card-body">
              <h5 className="card-title">Pokémon 5</h5>
              <p className="card-text">Descripción del Pokémon 5.</p>
            </div>
          </div>
        </div>
        {/* Aquí podrías agregar más cartas de Pokémon */}
      </div>
    </div>
  );
};

export default Pokemon;
