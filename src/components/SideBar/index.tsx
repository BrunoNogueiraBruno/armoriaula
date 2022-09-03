import React from 'react'

import { ISideBar } from './types'
import { SideBarContainer } from './styles'

const SideBar = (props: ISideBar) => {
    return (
        <SideBarContainer>
            {props.children}
        </SideBarContainer>
    )
}

export default SideBar
