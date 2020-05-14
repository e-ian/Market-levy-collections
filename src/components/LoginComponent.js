import React from 'react'
import { Grid,Form, Card,Header} from 'semantic-ui-react'

export default function LoginComponent({formData,setFormData,LoginData}) {
    return (
        <Grid>
         <Grid.Row>
          <Grid.Column  width={5}>
          </Grid.Column>
          <Grid.Column width={6}>
          <Card fluid style={{marginTop:'150px'}} >
          <Form className="form-element">
          <Header size="medium">Please Enter your login Details</Header>
          <Form.Input 
              type="text"
              label="Username"
              icon="user"
              value={formData.username}
              onChange={(e)=>setFormData({...formData,username:e.target.value})}
          />
          <Form.Input 
              value={formData.password}
              label="Password"
              icon="key"
              type="password" 
              onChange={(e)=>setFormData({...formData,password:e.target.value})}
              />
          <Form.Button content="Login" fluid color="green" onClick={LoginData}></Form.Button>
          </Form>
          </Card>
          </Grid.Column>
          <Grid.Column width={5}>
          </Grid.Column>
         </Grid.Row>
        </Grid>
    )
}

