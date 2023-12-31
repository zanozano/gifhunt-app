import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
		console.log('HandleInputChange llamado');
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (inputValue.trim() !== '') {
			setCategories((categories) => [inputValue, ...categories]);
			setInputValue('');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Ingresa un valor"
				value={inputValue}
				onChange={handleInputChange}
			/>
		</form>
	);
};

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
