import React from 'react'
import AsyncSelect from 'react-select/async'
import {Grid, Button,Form,Modal,Card, Icon,Divider,Loader} from 'semantic-ui-react'

const  MarketsComponent = ({
  marketModal,
  setMarketModal,
  marketData,
  setMarketData,
  loadOptions,
  submitMarket,
  marketPlaces,
  loadMarkets
}) =>{

  const marketTables = marketPlaces.map((data)=>(
    <Card.Group style={{display:'inline-block'}} key={data.id}> 
      <Card style={{marginLeft:'20px'}} color="green">
        <Card.Content>
        <Card.Header>{data.name}</Card.Header>
        <Card.Description>{data.place_name.slice(0,30)} </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon color="green" name="edit outline"/>
          <Icon color="red" name="trash"/>
        </Card.Content>
      </Card>
    </Card.Group>
  )
  )
    return (
        <div>
            <Grid>
            <Grid.Row>
            <Grid.Column width="16" style={{marginLeft:20,marginRight:10, marginTop:'20px'}}>
              <Button.Group style={{float:'right', marginBottom:'0px'}}>
                <Button content="location" color="green" icon="point" />
                <Button.Or />
                <Button content="Markets" icon="plus" color="blue" onClick={()=>setMarketModal(true)}/>
              </Button.Group>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column width="16" style={{marginLeft:20, marginRight:20, marginTop:'-20px'}}>
            <Divider clearing />
            {loadMarkets?<Loader active inline/>:marketTables}
            </Grid.Column>
            </Grid.Row>
            </Grid>
            <Modal open={marketModal} size="tiny" dimmer="inverted" onClose={()=>setMarketModal(false)}>
            <Modal.Header>Create Markets</Modal.Header>
            <Modal.Content>
            <Form>
              <Form.Field>
              <label>Market</label>
              <input 
              type="text"
              name="name"
              value={marketData.name}
              onChange={e=>{
                setMarketData({...marketData, name:e.target.value})
              }}
              ></input>
              </Form.Field>
              <Form.Field>
              </Form.Field>
              <label>Location</label>
              <AsyncSelect
                cacheOptions
                loadOptions={loadOptions}
                defaultOptions
                onChange={value=>{
                  setMarketData({...marketData, location:value})
                }}
              />
             </Form>
            </Modal.Content>
            <Modal.Actions>
                  <Button color='black'
                  onClick={()=>setMarketModal(false)}
                  content="Close"
                  />
                  <Button
                    positive
                    icon='edit outline'
                    labelPosition='right'
                    content="Submit"
                    onClick={submitMarket}
                    />
              </Modal.Actions>
            </Modal>
        </div>
    )
}
export default MarketsComponent