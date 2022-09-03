import React from 'react'

import Logo from '../../components/Logo'
import Content from '../../components/Content'
import SideBar from '../../components/SideBar'

import { HomeContainer } from './styles'
import Notebook from '../../components/Notebook'

const list = [{ label: 'teste 1' }, { label: 'teste 2', color: '#ff0000' }, { label: 'teste 3', color: 'blue' }, { label: 'teste 4', color: 'green' }, { label: 'teste 5', color: 'yellow' }]

const Home = () => {
    return (
        <HomeContainer>
            <SideBar>
                <Logo border size='auto' />
            </SideBar>

            <Content>
                <div style={{ display: 'flex', gridGap: '100px' }}>
                    {
                        list.map(({ label, color }: any) => (
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                <Notebook color={color} />
                                {label}
                            </div>
                        ))
                    }
                </div>
            </Content>
        </HomeContainer>
    )
}

export default Home
