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

//All testing code taken from https://testing-library.com/docs/react-testing-library/example-intro

test('loads and displays greeting', async () => {
 

  // Arrange
  render(<App />);
  // Act
  fireEvent.click(screen.getByText('Press to load exchange rates'))
  // Assert
})