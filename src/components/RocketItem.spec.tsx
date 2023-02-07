import { cleanup, render, screen } from "@testing-library/react";
import { Rocket } from "../generated/graphql";
import RocketItem from "./RocketItem";

const windowOpenSpy = jest.spyOn(window, 'open')

describe('Rocket Item', () => {
  const item: Rocket = {
    name: 'My rocket',
    diameter: { meters: 1000 },
    mass: { kg: 2000 },
    cost_per_launch: 3000,
    description: 'My description',
    wikipedia: null, // Will be changed later
  }

  beforeEach(() => {
    cleanup()
  })

  describe('Text renders', () => {
    it('should render a Rocket', async () => {
      render(<RocketItem item={item} />)
  
      expect(await screen.findByText('My rocket')).toBeTruthy()
      expect(await screen.findByText('Diameter: 1000m')).toBeTruthy()
      expect(await screen.findByText('Weight: 2,000 kg')).toBeTruthy()
      expect(await screen.findByText('Cost per launch: 3,000 USD')).toBeTruthy()
      expect(await screen.findByText('My description')).toBeTruthy()
    })
  })
  
  describe('Learn more button', () => {
    
    it('should render learn more disabled', async() => {
      render(<RocketItem item={item} />)
      
      expect(await screen.findByTestId('learn-more-button')).toBeDisabled()
    })

    it('should render learn more enabled', async() => {
      item.wikipedia = 'my link'
      
      render(<RocketItem item={item} />)

      const learnMoreButton = await screen.findByTestId('learn-more-button')
      
      expect(learnMoreButton).not.toBeDisabled()
      learnMoreButton.click()

      expect(windowOpenSpy).toHaveBeenCalledWith('my link')
    })
  })
})