import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders learn react link', () => {
  render(<App />)
  const inputElement = screen.queryByTestId('participant-input')
  expect(inputElement).toBeInTheDocument()
})

test('must display list of participants', () => {
  render(<App />)
  const listElement = screen.queryByTestId('participant-list')
  expect(listElement).toBeTruthy()
})
