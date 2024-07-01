import React from 'react';

const Items = () => {
  // Array de objetos con nombres aleatorios
  const items = [
    { id: 1, name: 'Poción' },
    { id: 2, name: 'Antídoto' },
    { id: 3, name: 'Superball' },
    { id: 4, name: 'Revivir' },
    { id: 5, name: 'Max Revivir' },
    { id: 6, name: 'Carameloraro' },
  ];

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Lista de Items de Pokémon</h1>
      <ul className="list-group">
        {items.map(item => (
          <li key={item.id} className="list-group-item">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
