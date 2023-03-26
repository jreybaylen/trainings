import React from 'react'
import { render } from '@testing-library/react'

import Registration from '../'

describe('Registration Page', () => {
    it('should render without crashing', () => {
        const { getByText } = render(<Registration />)

        expect(getByText(/Hello Registration\!/)).toMatchSnapshot()
    })
})