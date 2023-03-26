import React from 'react'

function Authentication (props: { onSubmit(): void }): JSX.Element {
    const handleSubmit = () => {
        props.onSubmit()
    }
    const authenticationElement = (
        <React.Fragment>
            <div>Hello Authentication!</div>
            <button type="button" onClick={ handleSubmit }>Click Me!</button>
        </React.Fragment>
    )

    return authenticationElement
}

export default Authentication