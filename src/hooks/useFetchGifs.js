import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
	//* useState
	const [state, setState] = useState({
		data: [],
		loading: true,
	});

	//* useEffect
	useEffect(() => {
		getGifs(category).then((imgs) => {
			setState({
				data: imgs,
				loading: false,
			});
		});
	}, [category]);

	return state;
};
