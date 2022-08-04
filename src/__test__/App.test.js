import { render, screen } from '@testing-library/react'
import App from '../App'
import userEvent from '@testing-library/user-event'

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

test('when Alex is entered in input it should appear in participant list', () => {
  renderApp()

  let input = screen.getByTestId('participant-input')
  userEvent.type(input, 'Alex{enter}')

  expect(screen.getByText('Alex')).toBeVisible()
})

function renderApp() {
  render(<App />)
}
