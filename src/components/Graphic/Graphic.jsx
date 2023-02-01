
import styled from "styled-components"

const GraphicTitle = styled.div`
  margin-bottom: 5px;
`




const Graphic = ({ className, children, title }) => {
  return (
    <section className={className}>
      <GraphicTitle>
        <h3>{title}</h3>
        <p>Last Updated <b>Sep 7, 2021 06:01:26 AM</b></p>
      </GraphicTitle>

      { children }
 
    </section>
  )
}

export default styled(Graphic)`
  padding: 10px;
  background-color: #27272a;
  border-radius: 10px;
  margin: 10px 0px;

  h3 {
    color:#e4e4e7;
    font-weight: bold;
    font-size: 19px;  
  }

`