import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header Component', () => {
  it('renders the header title', () => {
    render(<Header />)
    const title = screen.getByText(/Nihi Book Store/i)
    expect(title).toBeInTheDocument()
  })

  it('renders AppBar with fixed position', () => {
    const { container } = render(<Header />)
    const appBar = container.querySelector('header')
    expect(appBar).toBeInTheDocument()
  })

  it('renders Typography with h6 variant', () => {
    const { container } = render(<Header />)
    const typography = container.querySelector('h6')
    expect(typography).toBeInTheDocument()
    expect(typography).toHaveTextContent('Nihi Book Store')
  })
})
