import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders learn react link', () => {
  renderApp()
  const inputElement = screen.queryByTestId('participant-input')
  expect(inputElement).toBeInTheDocument()
})

test('must display list of participants', () => {
  renderApp()
  const listElement = screen.queryByTestId('participant-list')
  expect(listElement).toBeTruthy()
})


function renderApp() {
  render(<App />)
}
// test('when Alex joins mob they should appear as a participant', () => {})
