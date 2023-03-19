import {render, screen} from '@testing-library/react'
import {Tabs, TabsProps} from '../Tabs'

describe('Tabs', () => {
  let props: TabsProps<string>

  beforeEach(() => {
    props = {
      setValue: jest.fn(),
      tabs: [{value: 'foo', label: 'foo'}, {value: 'bar', label: 'bar'}],
      value: 'foo'
    }
  })

  it('has correct welcome text', () => {
    render(<Tabs {...props} />)
    expect(screen.getAllByTitle('foo')).toHaveTextContent('foo')
  })
})