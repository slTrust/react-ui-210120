import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../Icon.tsx'
import {mount} from 'enzyme'

describe('Icon', () => {
  it('是个 icon', () => {
    const json = renderer.create(<Icon name="alipay" />)
      .toJSON()
    expect(json).toMatchSnapshot()
  })
  it('onClick', () => {
    const fn = jest.fn()
    const component = mount(<Icon name="alipay" onClick={fn}/>)
    component.find('svg').simulate('click')
    expect(fn).toBeCalled()
  })
})