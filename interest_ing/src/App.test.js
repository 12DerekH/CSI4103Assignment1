import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App.js'
/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

//All testing code taken from import App from https://create-react-app.dev/docs/running-tests/

test('renders without crashing', () => {
  render(<App />);
})

test('presses the button', () => {
  // Arrange
  render(<App />);
  const button = screen.getByText('Press to load exchange rates')
  // Act
  fireEvent.click(button)
  // Assert
  expect(button).toHaveTextContent('Loading exchange rates')
})