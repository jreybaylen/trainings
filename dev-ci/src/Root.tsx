import React from 'react'

import AuthPage from '@pages/Authentication'

function RootApp (): JSX.Element {
    const rootAppElement = (
        <React.Fragment>
            <AuthPage />
        </React.Fragment>
    )

    return rootAppElement
}

export default RootApp