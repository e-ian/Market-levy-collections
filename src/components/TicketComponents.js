import React, {useState, useEffect,useRef} from 'react'
import {Grid, Button, Modal, Form, Select,Table,Icon, Loader,Header} from 'semantic-ui-react'
import ReactToPrint from 'react-to-print';
import moment from 'moment'
import firebaseApp from '../config/firebaseConfig'

const  TicketComponents =()=>{

    const [openModal, setOpenModal] = useState(false)
    const [formdata, setFormData] = useState({amountPaid:"", attendant:"", locations:""})
    const [tableData, setTableData] = useState([])
    const [loader, setLoader] = useState(false)
    const [printModal, setPrintModal] = useState(false)
    const [reciepts, setReciepts] =useState({})
    const printReciepts = useRef()
    const showModal = ()=>{
        setOpenModal(true)
    }
    const closeModal =()=>{
        setOpenModal(false)
    }
    const closePrintModal = ()=>{
        setPrintModal(false)
    }
    //handle data submition to firestore
    const formSubmit =()=>{
        const locData = formdata.locations.split(',')
        const collectionInfo = {
            amount_paid: parseInt(formdata.amountPaid),
            attendant_name: formdata.attendant,
            locations:locData[0],
            latitude: locData[2],
            longitude:locData[1],
            stall_number: `#264${Math.floor(Math.random() * (600 - 50 + 1)) + 50}`,
            createdAt:moment(Date.now()).format('MMM Do YY')
        }
        firebaseApp.firestore().collection('market-stalls').add(collectionInfo).then((d)=>{
        })
        setOpenModal(false)
    }
    const fetchTableData = async()=>{
        setLoader(true)
        await firebaseApp.firestore().collection('market-stalls').get().then((snapshot)=>{
            const data = []
            snapshot.forEach(docs=>{
                data.push({
                    id:docs.id,
                    amount_paid:docs.data().amount_paid,
                    attendant_name:docs.data().attendant_name,
                    location: docs.data().locations,
                    latitude:docs.data().latitude,
                    longitude:docs.data().longitude,
                    stall_number:docs.data().stall_number,
                    createdAt:docs.data().createdAt
                })
            })
            setLoader(false)
            setTableData(data)
        })
    }
    // calling the use effect method
    useEffect(() => {
        fetchTableData()
    }, [])
    //select options data
    const locations = [
        { key: 'm', text: 'maluba', value: 'maluba,-15.396787, 28.306967' },
        { key: 'f', text: 'dembara', value: 'dembera,-13.452819,25.829228' },
        { key: 'o', text: 'chikondiward', value: 'chikondiward,-13.463121,25.841369'},
        { key: 'k', text: 'bigJoe', value: 'miraclemarket,-13.463121,25.841369'},
        { key: 'z', text: 'miraclemarket', value: 'miraclemarket,-13.452656,25.829024'},
      ]
    // calling the component used for print reciepts
     const handleReciepts = (id)=>{
         setPrintModal(true)
         setLoader(true)
         firebaseApp.firestore().collection('market-stalls').doc(id).get().then((snapshot)=>{
             const singleCollection = snapshot.data()
             setLoader(false)
             setReciepts(singleCollection)
         })
     }
     // generating collection tables
      const collectionTable = tableData.map((data)=>{
          return(
            <Table.Row key={data.id}>
            <Table.Cell>{data.stall_number}</Table.Cell>
            <Table.Cell>{data.attendant_name}</Table.Cell>
            <Table.Cell>{data.amount_paid}</Table.Cell>
            <Table.Cell>{data.location}</Table.Cell>
            <Table.Cell>{data.createdAt}</Table.Cell>
            <Table.Cell><Icon name="print" primary color="blue"  onClick={()=>handleReciepts(data.id)}/>
            <Icon name="edit outline" primary color="green"/>
            <Icon name="trash" primary color="red"/></Table.Cell>
          </Table.Row>
          )
      })
    //printing out the receipt
    return (
        <div>
           <Grid>
           <Grid.Row>
             <Grid.Column className="pad1" width="15" style={{marginLeft:40, marginTop:20}}>
             <Button primary className="add-record"  onClick={showModal}> New Record</Button>
             {loader?<Loader active inline/>:(
                <Table celled style={{marginTop:60}}>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Reciept No</Table.HeaderCell>
                    <Table.HeaderCell>Stall Owner</Table.HeaderCell>
                    <Table.HeaderCell>Levy Collected</Table.HeaderCell>
                    <Table.HeaderCell>Markets</Table.HeaderCell>
                    <Table.HeaderCell>Collection Date</Table.HeaderCell>
                    <Table.HeaderCell>Actions</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                {collectionTable}
                </Table.Body>
              </Table>
             )}
             </Grid.Column>
           </Grid.Row>
           </Grid>
           <Modal open={openModal}  onClose={closeModal} dimmer="inverted" size="small">
                <Modal.Header>Enter Vender Payment Info</Modal.Header>
                <Modal.Content>
                <Form>
                <Form.Field>
                  <label>Attend Name</label>
                  <input placeholder='Attend Name'
                  onChange={e=>setFormData({...formdata,attendant:e.target.value})}
                   />
                </Form.Field>
                <Form.Field>
                  <label>Amount Paid</label>
                  <input placeholder='Amount Paid'
                  onChange={e=>setFormData({...formdata,amountPaid:e.target.value})}
                   />
                </Form.Field>
                <label>Location</label>
                <Form.Field
                    control={Select}
                    options={locations}
                    label={{ locations: 'Locations', htmlFor: 'form-select-control-locations' }}
                    placeholder='Location'
                    search
                    searchInput={{ id: 'form-select-control-locations'}}
                    onChange={(e,{value}) =>{
                        setFormData({...formdata, locations:value})
                    }}
                />
              </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black'
                    onClick={closeModal}
                    >
                    Cancel
                    </Button>
                    <Button
                    positive
                    icon='checkmark'
                    labelPosition='right'
                    content="submit"
                    value={formdata.locations}
                    onClick={formSubmit}
                    />
                </Modal.Actions>
              </Modal>

              <Modal open={printModal}  onClose={closePrintModal} dimmer="inverted" size="small">
              <Modal.Header>Print Reciepts</Modal.Header>
              {loader?<Loader active inline size="small"/>:(
                  <div ref={printReciepts} style={{margin:30}}>
                  <Modal.Content>
                  <Header> Reciept No: {reciepts.stall_number}</Header>
                  <Header size="small"> Amount Paid : {reciepts.amount_paid}</Header>
                  <Header size="small"> Market Name: {reciepts.locations}</Header>
                  <Header size="small"> paid by: {reciepts.attendant_name}  on { reciepts.createdAt}</Header>
                  </Modal.Content>
                  </div>
              )}
              <Modal.Actions>
                  <Button color='black'
                  onClick={closePrintModal}
                  >
                  Cancel
                  </Button>
                  <ReactToPrint
                  trigger={()=>
                    <Button
                    positive
                    icon='print'
                    labelPosition='right'
                    content="Print"
                    value={formdata.locations}
                    />}
                    content={()=>printReciepts.current}
                    >
                  ></ReactToPrint>
              </Modal.Actions>
            </Modal>
        </div>
    )
}
export default TicketComponents
