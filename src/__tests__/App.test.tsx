import { render, screen } from '@testing-library/react'

import App from '@/App'

describe('app', () => {
  it('renders headline', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /vite \+ react/i })
    ).toBeVisible()
  })
})
