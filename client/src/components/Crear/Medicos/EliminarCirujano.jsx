import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCirujano } from '../../../redux/action/index';

export default function EliminarCirujano({ cirujano }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCirujano(cirujano._id));
  };

  return (
    <div>
      <p>
        Nombre: {cirujano.name} {cirujano.lastName}
      </p>
      <p>Email: {cirujano.email}</p>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
}
