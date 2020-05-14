import React,{useEffect,useState}from 'react'
import {Redirect} from 'react-router-dom'
import {connect,useSelector} from 'react-redux'
import {Grid} from 'semantic-ui-react'
import {getPlaces,submitMarkets,getMarkets} from '../actions/getPLacesActions'
import NavBarComponent from '../components/NavBarComponent'
import FooterComponent from '../components/FooterComponent'
import SideBarComponent from '../components/SideBarComponent'
import MarketsComponent  from '../components/MarketsComponent'


const MarketContainer =({
    getPlaces,
    submitMarkets,
    getMarkets})=>{
        const [marketModal, setMarketModal] = useState(false)
        const [marketData , setMarketData] = useState({name:"", location:""})
        const { authToken } = useSelector(state =>state.auth)
        const { markets,loadMarkets, marketPlaces} =useSelector(state=>state.getMarkets)
         //making a call to filter places functions
        const filterPlaces =(value)=>{
            getPlaces(value)
            return markets.map((data)=>({label:data.place_name, coordinates:data.geometry.coordinates}))
        }
        //handling loading of the places inputs
        const loadOptions = (inputValue, callback) => {
            setTimeout(() => {
              callback(filterPlaces(inputValue));
            }, 1000);
          };
          //handle form submission
          const submitMarket = () => {
              const data = {
                  name: marketData.name,
                  latitude:marketData.location.coordinates[0],
                  longitude: marketData.location.coordinates[1],
                  place_name:marketData.location.label,
              }
              submitMarkets(data)
              setMarketModal(false)
          }
        //making call to the database to get the available markets
        useEffect(()=>{
            getMarkets()
          },[getMarkets])
    if(!authToken) return <Redirect to="/login"/>
    return (
        <div>
            <NavBarComponent/>
            <Grid>
                <Grid.Row>
                    <Grid.Column width="2">
                    <SideBarComponent/>
                    </Grid.Column>
                    <Grid.Column width="14" >
                    <MarketsComponent
                        marketModal={ marketModal}  
                        setMarketModal={setMarketModal}
                        marketData={marketData}
                        setMarketData={setMarketData}
                        filterPlaces={filterPlaces}
                        loadOptions={loadOptions}
                        submitMarket={submitMarket}
                        marketPlaces={marketPlaces}
                        loadMarkets={loadMarkets}
                    />
                    <FooterComponent/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
    )
}

export default connect(null,{getPlaces,submitMarkets,getMarkets})(MarketContainer)
