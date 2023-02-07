import { cleanup, render, screen } from "@testing-library/react"
import RocketsPage from ".";
import { Rocket } from "../../generated/graphql";

let mockUseRocketsResponse = {}

jest.mock('../../hooks', () => ({
  ...jest.requireActual('../../hooks') as any,
 useRockets: () => mockUseRocketsResponse,
}));

describe('Rockets Page', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  describe('Test API error', () => {
    it('should render error message', async () => {
      mockUseRocketsResponse = { error: { message: 'there is error'} }
  
      render(<RocketsPage />)
  
      expect(await screen.findByTestId('rockets-error-message')).toBeTruthy()
    })
  
    it('should not render error', async () => {
      mockUseRocketsResponse = ({ loading: true })
  
      render(<RocketsPage />)
  
      expect(screen.queryByTestId('rockets-error-message')).toBeNull()
    })
  })

  describe('Test card list', () => {
    it('should not render Launch Item', () => {
      mockUseRocketsResponse = {}

      render(<RocketsPage />)

      expect(screen.queryAllByTestId('rocket-item')).toHaveLength(6) // Skeletons
    })

    it('should render Launch Items', async () => {
      const rockets: Rocket[] = [{ id: 'my-id-1' }, { id: 'my-id-2' }] 

      mockUseRocketsResponse = { data: { rockets }, loading: false, error: null }

      render(<RocketsPage />)

      expect(await screen.findAllByTestId('rocket-item')).toHaveLength(2)
    })
  })
})