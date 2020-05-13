import React, {FC} from "react"
import {Container, Row} from "./styles"
import Block from "./block"

 const Grid: FC = () => {
    return (
       <Container className="grid-container">
          {[...Array(9)].map((_, rowIndex) => 
                    <Row key={rowIndex}>
                        {[...Array(9)].map((_, colIndex) => 
                           <Block key={colIndex} colIndex={colIndex} rowIndex={rowIndex}/>
                            )}
                    </Row>
          )}
       </Container>
    )
}

export default Grid



