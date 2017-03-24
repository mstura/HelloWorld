import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import jasime from 'jasmine';
import { shallow } from 'enzyme';
 
describe('a suite', () => {
  it('should display hello world', () => {
      const di = service => {
      if (service === 'strings')
        return{
          helloworld: 'waffles'
        }
    }
    const wrapper = shallow(<App di={di}/>);
    expect(wrapper.find('p').text()).toBe('waffles');
  });
});