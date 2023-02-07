import { cleanup, render, screen } from "@testing-library/react";
import { Launch } from "../generated/graphql";
import LaunchItem from "./LaunchItem";

const windowOpenSpy = jest.spyOn(window, 'open')

describe('Launch Item', () => {
  const today = new Date()

  const item: Launch = {
    mission_name: 'My mission',
    launch_date_utc: today.toISOString(),
    details: 'My details'
  }

  beforeEach(() => {
    cleanup()
  })

  describe('Text renders', () => {
    it('should render a Launch', async () => {
      render(<LaunchItem item={item} />)
  
      expect(await screen.findByText('My mission')).toBeTruthy()
      expect(await screen.findByText(today.toDateString())).toBeTruthy()
      expect(await screen.findByText('My details')).toBeTruthy()
    })
  })
  
  describe('Learn more button', () => {
    
    it('should render learn more disabled', async() => {
      render(<LaunchItem item={item} />)
      
      expect(await screen.findByTestId('learn-more-button')).toBeDisabled()
    })

    it('should render learn more enabled', async() => {
      item.links = { article_link: 'my link' }
      
      render(<LaunchItem item={item} />)

      const learnMoreButton = await screen.findByTestId('learn-more-button')
      
      expect(learnMoreButton).not.toBeDisabled()
      learnMoreButton.click()

      expect(windowOpenSpy).toHaveBeenCalledWith('my link')
    })
  })
})