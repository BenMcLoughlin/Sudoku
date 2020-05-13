import React, {FC} from "react"
import styled, {css} from "styled-components"

interface IProps {
   colIndex: number
   rowIndex: number
}

const Block: FC<IProps> = ({colIndex, rowIndex}) => {
    return (
        <Container className={`block-${colIndex}-${rowIndex}`}>
            0
        </Container>
    )
}

export default Block



//---------------------STYLES---------------------------------

export const Container = styled.div`
   ${({theme}) => css`
        align-items: center;
        background-color: ${theme.colors.white};
        border: 1px solid ${theme.colors.black};
        cursor: pointer;
        display: flex;
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: 0;
        font-weight: bold;
        font-size: 20px;
        height: auto;
        justify-content: center;
        transition: ${theme.transition};
        user-select: none;

        &:before {
            padding-top: 100%;
            content: "";
            float: left;
        }

        &:hover {
            background-color: ${theme.colors.lightBlue}
        }
   ` }
`
