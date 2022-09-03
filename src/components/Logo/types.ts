import { Theme } from '../../styles/types'

type SizeProps = {
    width: string,
    fontSize: string,
}

export type Sizes = 'tiny' | 'small' | 'medium' | 'large'

export interface ILogo {
    border?: boolean,
    title?: boolean,
    size?: Sizes,
}

export interface ISizes {
    [index: string]: SizeProps
}

export interface ILogoContainer {
    size: Sizes,
    border?: boolean,
    theme: Theme,
}
