import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import GifGrid from '../../components/GifGrid';

import { useFetchGifs } from '../../hooks/useFetchGifs';
// Se esta simulando la respuesta de la API
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid/> ==>', () => {
	//
	const category = 'One Punch';

	test('Prueba de snapshot', () => {
		// Se esta falseando el fetch
		useFetchGifs.mockReturnValue({
			data: [],
			loading: true,
		});

		//
		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
	});
	test('Debe de mostrar items cuando se cargar el useFetchGift', () => {
		const gifs = [
			{
				id: 'ABC',
				title: 'Cualquier cosa',
				url: 'https//localhost/cualquiercosa/cosa.jpg',
			},
			{
				id: 'CRD',
				title: 'Cualquier cosa 2',
				url: 'https//localhost/cualquiercosa/cosa.jpg',
			},
		];

		// Se esta falseando el fetch
		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false,
		});

		const wrapper = shallow(<GifGrid category={category} />);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('p').exists()).toBe(false);
		expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
	});
});
