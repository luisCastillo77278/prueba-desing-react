import Card from '../Card/Card'
import styled from 'styled-components'

const CardHeader = ({ className, title, valueProgress, color = '#e4e4e7', first, second }) => {
  return (
    <Card>
      <div className={className}>
        <h5>{ title }</h5>
        <section>
          <h2 color={color}>{first}</h2>
          <div>
            <p>0</p>
            <p>{second}</p>
          </div>
        </section>
        <progress max='100' value={ valueProgress }></progress>
      </div>
    </Card>
  )
}

export default styled(CardHeader)`

  align-self: center;

  h5 {
    font-weight: bold;
    font-size: 12px;
  }

  h2 {
    font-size: 30px;
    color: ${ props => props.color};
  }

  section {
    display: flex;
    align-items: center; 
    gap: 5px;
  }

  section div {
    font-size: 10px;
  }
   
`