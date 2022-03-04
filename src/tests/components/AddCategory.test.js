import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';
import '@testing-library/jest-dom';

describe('Test in <AddCategory /> ==>', () => {
	// con el metodo jst puede saber como es llama la funcion
	const setCategories = jest.fn();
	let wrapper = shallow(<AddCategory setCategories={setCategories} />);

	beforeEach(() => {
		jest.clearAllMocks();
		// Reninciar el shallow cada vez que entra en el beforeEach
		wrapper = shallow(<AddCategory setCategories={setCategories} />);
	});

	test('It should show up correctly', () => {
		// console.log(wrapper);
		expect(wrapper).toMatchSnapshot();
	});
	test('Tests handleChange', () => {
		const input = wrapper.find('input');

		const value = 'Hola mundo';
		//  En enzyme el change es igual a onChange
		//Como segundo argumento hay que pasar el EVENTO
		// Que es un obj.
		// Luego hay que hacer target al parametro que quiero que seria otro obj
		// con el valor al cual busco 'VALUE'
		input.simulate('change', { target: { value } });
		// Se esta evaluando si el parrafor en el component se actualizo
		expect(wrapper.find('p').text().trim()).toBe(value);
	});
	test('Testing input. No debe postear la informacion con submit', () => {
		// El objecto revise la funcion prevent defualt con un obj vacio
		// Estamos mandando un metodo dentro del objeto
		wrapper.find('form').simulate('submit', { preventDefault() {} });
		// Se espera que no se ejecute nunca el input
		expect(setCategories).not.toHaveBeenCalled();
	});
	test('Se debe llamar el setCategories y limpiar la caja de texto', () => {
		const value = 'Valor en el input';

		// 1. Simular el inputChange
		wrapper.find('input').simulate('change', { target: { value } });

		// 2. Simular el onSubmit
		wrapper.find('form').simulate('submit', { preventDefault() {} });

		// 3. setCategories se debe haber llamado
		expect(setCategories).toHaveBeenCalled();
		expect(setCategories).toHaveBeenCalledTimes(1);
		// Se comprueba si se ha llamado con algun tipo de funcion
		expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

		// 4. El valor del inpur debe de estar en ''
		expect(wrapper.find('input').prop('value')).toBe('');
	});
});
