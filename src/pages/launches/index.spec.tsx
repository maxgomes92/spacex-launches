import { cleanup, render, screen } from "@testing-library/react"
import LaunchesPage from "."
import { Launch } from "../../generated/graphql";

let mockUseLaunchesResponse = {}

jest.mock('../../hooks', () => ({
  ...jest.requireActual('../../hooks') as any,
 useLaunches: () => mockUseLaunchesResponse,
}));

describe('Launches Page', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  describe('Test API error', () => {
    it('should render error message', async () => {
      mockUseLaunchesResponse = { error: { message: 'there is error'} }
  
      render(<LaunchesPage />)
  
      expect(await screen.findByTestId('launches-error-message')).toBeTruthy()
    })
  
    it('should not render error', async () => {
      mockUseLaunchesResponse = ({ loading: true })
  
      render(<LaunchesPage />)
  
      expect(screen.queryByTestId('launches-error-message')).toBeNull()
    })
  })

  describe('Test card list', () => {
    it('should not render Launch Item', () => {
      mockUseLaunchesResponse = {}

      render(<LaunchesPage />)

      expect(screen.queryAllByTestId('launch-item')).toHaveLength(6) // Skeletons
    })

    it('should render Launch Items', async () => {
      const launches: Launch[] = [{ id: 'my-id-1' }, { id: 'my-id-2' }] 

      mockUseLaunchesResponse = { data: { launches }, loading: false, error: null }

      render(<LaunchesPage />)

      expect(await screen.findAllByTestId('launch-item')).toHaveLength(2)
      expect(await screen.findByTestId('load-more-button')).toBeTruthy()
    })
  })
})