import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../Icon.tsx'

describe('Icon', () => {
  it('是个 icon', () => {
    const json = renderer.create(<Icon name="alipay" />)
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})