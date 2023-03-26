import { Fragment } from 'react'

import { Users } from './Users'
import { Editor } from './Editor'

function Home (): JSX.Element {
    return (
        <Fragment>
            <Editor />
            <Users />
        </Fragment>
    )
}

export default Home