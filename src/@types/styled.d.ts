import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      "invitation-red-theme": string,
      "invitation-golden-theme": string,
      "white": string,
      "black": string
    }
  }
}