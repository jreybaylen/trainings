import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

import AuthenticationPage from '../'

describe('Authentication Page', () => {
    const handleSubmit = jest.fn()

    beforeEach(() => {
        render(<AuthenticationPage onSubmit={ handleSubmit } />)
    })

    it('should render without crashing', () => {
        expect(screen.getByText('Hello Authentication!')).toMatchSnapshot()
    })

    it('should call "onClick" prop once the user tapped the button', async () => {
        await userEvent.click(screen.getByText('Click Me!'))
        expect(handleSubmit).toHaveBeenCalled()
    })
})