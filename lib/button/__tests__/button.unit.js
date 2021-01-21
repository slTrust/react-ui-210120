import * as renderer from 'react-test-renderer'
import React from 'react'
import Button from '../button'

describe('button', () => {
  it('是个 div', () => {
    const json = renderer.create(<Button>hi</Button>)
      .toJSON()

    expect(json).toMatchSnapshot()
  })
}) 