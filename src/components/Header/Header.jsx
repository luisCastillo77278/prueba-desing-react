import CardHeader from "../CardHeader/CardHeader"
import styled from "styled-components"


const ButtonAdd = styled.div`
  font-size: 32px;
  align-self: center;
  padding: 5px;
`

const HeaderTitle = styled.div`
  h3 {
    color:#e4e4e7;
    font-weight: bold;
    font-size: 19px;  
  }

  b {
    color: #65a30d;
  }

  small {
    font-weight: bold;
    font-size: 18px;
  }

`

const Header = ({ className }) => {
  return (
    <header className={className}>
      <HeaderTitle>
        <h3>unit 2013</h3>
        <p>Status <b>Connected</b></p>
        <p>Last Updated <small>Sep 7, 2021 06:01:26 AM</small></p>
      </HeaderTitle>

      <CardHeader valueProgress={60} title='CIRCULATION PRESSURE (PSI)' first={'7,905.26'} second={'15,000'} />
      <CardHeader valueProgress={60} title='CIRCULATION PRESSURE (PSI)' first={'15,007.66'} second={'25,000'} />
      <CardHeader valueProgress={60} title='CIRCULATION PRESSURE (PSI)' first={'43,630'} second={'80,000'} />
      <CardHeader valueProgress={60} title='CIRCULATION PRESSURE (PSI)' color="#facc15" first={'875.87'} second={'1,000'} />
      <CardHeader valueProgress={60} title='CIRCULATION PRESSURE (PSI)' first={'11,222'} second={'85,000'} />

      <ButtonAdd>
        +
      </ButtonAdd>
    </header>
  )
}

export default styled(Header)`
  display: flex;
  flex-direction: column;
  background-color: #27272a;
  padding: 10px;
  border-radius: 10px;
  justify-content: space-between;
  gap: 10px;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`