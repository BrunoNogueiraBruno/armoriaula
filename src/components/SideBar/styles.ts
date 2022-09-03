import styled from 'styled-components'

export const SideBarContainer = styled.aside`
    height: 100vh;
    background: ${({ theme }) => {
        const { bgPrimary, bgSecondary } = theme

        return `linear-gradient(0deg, ${bgPrimary} 0%, ${bgSecondary} 30%);`
    }};
    width: 4vw;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: .8rem;
`
