import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import GifGridItem from '../../components/GifGridItem';

//*Testing
describe('Components testing >>', () => {
  const title = 'Un titulo';
  const url = 'https://localhost/';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('Testing component <GifGridItem />', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should have a paragraph with a title', () => {
    const p = wrapper.find('h4').text().trim();
    console.log(p);

    expect(p).toBe(title);
  });
  test('Should have a src img and alt', () => {
    const img = wrapper.find('img').html();
    const imgProps = wrapper.find('img').prop('src');
    const imgAlt = wrapper.find('img').prop('alt');

    //* Option 1 wrapper.find('img').props();
    //* Option 2 wrapper.find('img').prop('src');
    //* Option 3 wrapper.find('img').props().src;

    console.log(img);
    console.log(imgProps);

    expect(imgProps).toBe(url);
    expect(imgAlt).toBe(title);
  });
  test('Should have the classes fadeIn', () => {
    const div = wrapper.find('div').prop('className');
    expect(div.includes('animate__fadeIn')).toBe(true);
  });
});
