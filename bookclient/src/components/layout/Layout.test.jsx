import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Layout from './layout'

describe('Layout Component', () => {
  it('renders the Header component', () => {
    render(<Layout><div>Test Content</div></Layout>)
    const headerTitle = screen.getByText(/Nihi Book Store/i)
    expect(headerTitle).toBeInTheDocument()
  })

  it('renders children content', () => {
    render(
      <Layout>
        <div>Test Child Content</div>
      </Layout>
    )
    const childContent = screen.getByText(/Test Child Content/i)
    expect(childContent).toBeInTheDocument()
  })

  it('renders Box elements for layout structure', () => {
    const { container } = render(
      <Layout>
        <div>Content</div>
      </Layout>
    )
    const boxes = container.querySelectorAll('div')
    expect(boxes.length).toBeGreaterThan(0)
  })
})
