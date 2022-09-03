import React from 'react'
import { ContentContainer } from './styles'

const Content = (props: { children: JSX.Element }) => {
    return (
        <ContentContainer>
            {props.children}
        </ContentContainer>
    )
}

export default Content
