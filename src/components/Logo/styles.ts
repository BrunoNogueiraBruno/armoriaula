import styled from 'styled-components'
import { ILogoContainer, ISizes, Sizes } from './types'

const sizes = {
    tiny: { width: '40px', fontSize: '.8em' },
    small: { width: '100px', fontSize: '1.3em' },
    medium: { width: '180px', fontSize: '2.3em' },
    large: { width: '300px', fontSize: '4em' },
} as ISizes

export const LogoContainer = styled.div`
    svg {
        width: ${({ size }: ILogoContainer) => sizes[size].width};
    }

    ${({ border, theme }: ILogoContainer) => {
        return `
            ${border && `border: 2px solid ${theme.title};`}
        `
    }}

    padding: .3%;
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-gap: .5rem;
`

export const Title = styled.h1`
    font-family: 'Comfortaa', source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    font-weight: 700;
    font-size: ${({ size }: { size: Sizes }) => sizes[size].fontSize};
    margin: 0;

    .emphasis {
        color: ${({ theme }) => theme.title};
    }
`
