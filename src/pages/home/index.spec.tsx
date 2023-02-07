import { cleanup, render, screen } from "@testing-library/react"
import HomePage from "."

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockUseNavigate,
}));

describe('Home Page', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  it('should test launches link', async () => {
    render(<HomePage />)
    const link = await screen.findByTestId('launches-link')

    expect(link).toBeTruthy()
    link.click()

    expect(mockUseNavigate).toHaveBeenCalledWith('launches')
  })

  it('should test rockets link', async () => {
    render(<HomePage />)
    const link = await screen.findByTestId('rockets-link')

    expect(link).toBeTruthy()
    link.click()

    expect(mockUseNavigate).toHaveBeenCalledWith('rockets')
  })
})