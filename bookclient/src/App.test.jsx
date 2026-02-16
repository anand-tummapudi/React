import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import App from './App'
import axios from 'axios'

vi.mock('axios')

describe('App Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the app title', async () => {
    axios.get.mockResolvedValue({ data: [] })
    render(<App />)
    await waitFor(() => {
      const heading = screen.getByText(/Welcome to Nihi Book Store/i)
      expect(heading).toBeInTheDocument()
    })
  })

  it('renders the Layout component', async () => {
    axios.get.mockResolvedValue({ data: [] })
    render(<App />)
    await waitFor(() => {
      const header = screen.getByRole('heading', { level: 6, name: /Nihi Book Store/i })
      expect(header).toBeInTheDocument()
    })
  })
})
