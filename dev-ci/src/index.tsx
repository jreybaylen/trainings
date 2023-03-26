import React from 'react'
import ReactDOMClient from 'react-dom/client'

import RootApp from './Root'

const rootApp = document.getElementById('react-app-root')
const ReactDOM = ReactDOMClient.createRoot(rootApp as HTMLElement)

ReactDOM.render(
    <React.StrictMode>
        <RootApp />
    </React.StrictMode>
)
