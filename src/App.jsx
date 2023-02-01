import Header from "./components/Header/Header"
import Graphic from "./components/Graphic/Graphic"
import { Graphics } from "./styled-component"

import styled from "styled-components"

const Layout = styled.div`
  box-sizing: border-box;
  background-color: #171717;
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
  color: #a1a1aa;
  width: 100%;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const ContentGraphic = styled.div`
  width: 100%;
  @media (min-width: 800px){
    width: 49%;
  }
`

const CardGraphis = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`

const CargGraphip = styled.div`
  padding: 10px;
  width: 100%;
  background-color: #3f3f46;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 12px;
  div {
    display: flex;
    justify-content: space-between;
  }

  div p{
    display: flex;
    color:#e4e4e7;
  }

  div h5 {
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
  }

  @media (min-width: 800px) {
    width: 49%;
  }

  @media (min-width: 1200px){
    width: 24%;
  }

`

const CargGraphicContent = styled.div`
  padding: 10px;
  width: 100%;
  background-color: #3f3f46;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  
  h5 {
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
  }

  @media (min-width: 1000px) {
    width: 49%;
  }

  @media (min-width: 1200px){
    width: 32%;
  }
`

const CargGraphicHeader = styled.div`
  padding: 10px;
  width: 100%;
  background-color: #3f3f46;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  
  div {
    display: flex;
    gap: 1px;
    justify-content: space-between;
    align-items: center;
  }
  div div {
    margin-left: 2px;
  }

  h5 {
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
  }

  @media (min-width: 1000px) {
    width: 49%;
  }

  @media (min-width: 1200px){
    width: 32%;
  }
`

function App() {

  return (
    <Layout>

      <Header />

      <Content>
        <ContentGraphic>
          <Graphic title='Citizens estes 3h-2-11 - Unit 2013'>            
            <Graphics height={'300px'}></Graphics>
            <CardGraphis>
              <CargGraphip>
                <h5>circulating pressure</h5>
                <div>
                  <p>5,511.46</p>
                  <div>i</div>
                </div>
              </CargGraphip>
              <CargGraphip>
                <h5>depth (ft)</h5>
                <div>
                  <p>1,482.32</p>
                  <div>i</div>
                </div>
              </CargGraphip>
              <CargGraphip>
                <h5>weight (lbs)</h5>
                <div>
                  <p>2,296.61</p>
                  <div>i</div>
                </div>
              </CargGraphip>
              <CargGraphip>
                <h5>wellhead press (psi)</h5>
                <div>
                  <p>7,586.19</p>
                  <div>i</div>
                </div>
              </CargGraphip>
            </CardGraphis>
          </Graphic>
          <Graphic title='Citizens estes 3h-2-11 - Unit 2013'>
            <Graphics height={'300px'}></Graphics>
            <CardGraphis>
              <CargGraphip>
                <h5>label name</h5>
                <div>
                  <p>5.2</p>
                  <div>i</div>
                </div>
              </CargGraphip>
              <CargGraphip>
                <h5>initial fatique</h5>
                <div>
                  <p>5.3</p>
                  <div>i</div>
                </div>
              </CargGraphip>
              <CargGraphip>
                <h5>current fatique</h5>
                <div>
                  <p>8.3</p>
                  <div>i</div>
                </div>
              </CargGraphip>
              <CargGraphip>
                <h5>label name</h5>
                <div>
                  <p>15.0</p>
                  <div>i</div>
                </div>
              </CargGraphip>
              <CargGraphip>
                <h5>label name</h5>
                <div>
                  <p>15.0</p>
                  <div>i</div>
                </div>
              </CargGraphip>
              <CargGraphip>
                <h5>label name</h5>
                <div>
                  <p>15.0</p>
                  <div>i</div>
                </div>
              </CargGraphip>
              <CargGraphip>
                <h5>label name</h5>
                <div>
                  <p>15.0</p>
                  <div>i</div>
                </div>
              </CargGraphip>
              <CargGraphip>
                <h5>label name</h5>
                <div>
                  <p>15.0</p>
                  <div>i</div>
                </div>
              </CargGraphip>
            </CardGraphis>
          </Graphic>
        </ContentGraphic>
        
        <ContentGraphic>
          <Graphic title='Citizens estes 3h-2-11 - Unit 2013'>
            <CardGraphis>
              <CargGraphicHeader>
                <h5>weight</h5>
                <div>
                  <p>12.597.8</p>
                  <div>lbs</div>
                </div>
              </CargGraphicHeader>
              <CargGraphicHeader>
                <h5>pump pressure</h5>
                <div>
                  <p>547</p>
                  <div>psi</div>
                </div>
              </CargGraphicHeader>
              <CargGraphicHeader>
                <h5>lockup limit</h5>
                <div>
                  <p>547</p>
                  <div>lt</div>
                </div>
              </CargGraphicHeader>
              <CargGraphicHeader>
                <h5>yield</h5>
                <div>
                  <p>20,000</p>
                  <div>lt</div>
                </div>
              </CargGraphicHeader>
              <CargGraphicHeader>
                <h5>pooh</h5>
                <div>
                  <p>15,008</p>
                  <div>lt</div>
                </div>
              </CargGraphicHeader>
              <CargGraphicHeader>
                <h5>label name</h5>
                <div>
                  <div>No data</div>
                </div>
              </CargGraphicHeader>
            </CardGraphis>
            <Graphics height={'600px'}></Graphics>
            <CardGraphis>
                <CargGraphicContent>
                  <h5>Lockup limit</h5>
                  <div>icono</div>
                </CargGraphicContent>
                <CargGraphicContent>
                  <h5>yield limit</h5>
                  <div>icono</div>
                </CargGraphicContent>
                <CargGraphicContent>
                  <h5>pooh (cf 0.3)</h5>
                  <div>icono</div>
                </CargGraphicContent>
              </CardGraphis>
          </Graphic>
        </ContentGraphic>
 
      </Content>
      
    </Layout>
  )
}

export default App
