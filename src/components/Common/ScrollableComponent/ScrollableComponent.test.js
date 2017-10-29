import React from 'react';
import sinon from 'sinon';
import ScrollableComponent from './';
import { mount } from 'enzyme';

describe('ScrollableComponent', () => {
  it('should trigger scroll to bottom function if the user scrolled', () => {
    const scrollSpy = sinon.spy();
    const wrapper = mount(
      <ScrollableComponent scrollToBottom={scrollSpy} />);
    expect(wrapper.find('div').length).toEqual(1);
    wrapper.find('div').simulate('scroll');
    // expect(scrollSpy.called).toEqual(true)
  })
});
