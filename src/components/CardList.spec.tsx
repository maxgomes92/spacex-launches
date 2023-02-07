import { cleanup, render, screen } from "@testing-library/react"
import CardList from "./CardList"


describe('Card List', () => {
  beforeEach(() => {
    cleanup()
  })

  it('should render skeletons', async () => {
    render(<CardList isLoading children={() => (<div>item goes here</div>)}/>)

    expect(await screen.findAllByTestId('skeleton-card')).toHaveLength(6)
  })

  it('should render children', async () => {
    const items = [{ id: 'my-id-1'}, { id: 'my-id-2' }]

    render(<CardList items={items} isLoading={false} children={() => (<div>item goes here</div>)}/>)

    expect(screen.queryAllByTestId('skeleton-card')).toHaveLength(0)
    expect(await screen.findAllByText('item goes here')).toHaveLength(items.length)
  })
})