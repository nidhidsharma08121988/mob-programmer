import { fireEvent, render, screen } from '@testing-library/react'
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
test('when Alex, Alexa and Elsa are entered in input they should appear in participant list', () => {
  renderApp()
  const sampleParticipantList = ['Alex', 'Alexa', 'Elsa']
  sampleParticipantList.forEach(participant => {
    const input = screen.getByTestId('participant-input')
    input.value = `${participant}{Enter}`
  })
  const participantList = screen.queryAllByTestId('participant')
  expect(participantList.length).toBe(sampleParticipantList.length)
})

function renderApp() {
  render(<App />)
}
