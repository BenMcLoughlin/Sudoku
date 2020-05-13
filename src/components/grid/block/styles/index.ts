import styled, {css} from "styled-components"


export const Container = styled.div`
   ${({theme}) => css`
        align-items: center;
        background-color: ${theme.colors.white};
        
   ` }
`
