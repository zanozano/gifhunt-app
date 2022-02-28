import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState(''); // Siempre iniciarlizar con un valor o dara error al actualizar

  //*
  const handleInputChange = (e) => {
    // 'e' es el evento del inputValue. Entonces imprimira 'Hola mundo mas lo que yo le mande'
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };

  //*
  const handleSubmit = (e) => {
    e.preventDefault();
    // Evito mandar un string vacio
    if (inputValue.trim() !== '') {
      //Como no tengo el valor de category de los props uso un callback para traer el evento
      setCategories((category) => [inputValue, ...category]);
      // Resetea el input a un string vacio
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='Ingresa un valor'
        onChange={handleInputChange}
        type='text'
        value={inputValue}
      />
    </form>
  );
};

// Agregando validacion del prop del componente como function
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
