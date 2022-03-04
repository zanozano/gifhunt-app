import { getGifs } from '../../helpers/getGifs';

describe('Test with getGifs Fetch', () => {
	test('Should get 10 elements', async () => {
		const gifs = await getGifs('One Punch');
		expect(gifs.length).toBe(10);
	});
	test('Comparison of category', async () => {
		const gifs = await getGifs('');
		console.log(gifs);

		expect(gifs.length).toBe(0);
	});
});
