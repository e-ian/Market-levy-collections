import React,{useEffect, useRef, useState} from 'react'
import firebaseApp from '../config/firebaseConfig' 
import echarts from 'echarts'
import { Grid,Header, Statistic } from 'semantic-ui-react'
<<<<<<< HEAD
import moment from 'moment'
import CardComponent from './CardComponent'

export default function TrendCompoent() {
    const trendCharts = useRef(null)
    const bubleChart = useRef(null)
    const piechart = useRef(null)
    const collections = []
    const [marketCollections, setMarketCollections] = useState([])
    // making the call to the use effect functionality
    useEffect(()=>{
        getMarketCollections()
    },[])
    // making call to the firebase collection
=======
import CardComponent from './CardComponent'

export default function TrendCompoent() {
    const trendCharts = useRef()
    const bubleChart = useRef()
    const piechart = useRef()
    const collections = []
    const [marketCollections, setMarketCollections] = useState([])
>>>>>>> 8cbef0c8499b5e60ead15b47821f5effc42e5753
    const getMarketCollections = async()=>{
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
            setMarketCollections(data)
            generatingTrendCharts(data)
            generateBubbleChart(data)
            generateBarchart(data)

        })
    }
    
    //creating the line charts
    const generatingTrendCharts = (data)=>{
        const collections = []
        const months= []
        data.forEach((levy)=>{
            months.push(levy.createdAt)
            collections.push(levy.amount_paid)
        })
        const lineChart = trendCharts.current
        const myChart = echarts.init(lineChart)
        let options = {
            tooltip: {},
            legend: {
                data:['Collections']
            },
            xAxis: {
                boundaryGap: false,
                data:months
            },
            yAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                }
            },
            series: [
            {   color:['red'],
                lineStyle:{
                    color:'red',
                    width:3
                },
                name: 'Collections',
                type: 'line',
                data: collections
            }]
        }
        myChart.setOption(options)
    }
    // generate buble chart 
    const generateBubbleChart = (chartData)=>{
        const Bchart = bubleChart.current
        const myBubbleChart = echarts.init(Bchart)
        const bubbleData = chartData.map((data)=>{
            return [data.amount_paid, data.amount_paid, data.amount_paid, data.location]
        })
<<<<<<< HEAD
        console.log(bubbleData)
=======
>>>>>>> 8cbef0c8499b5e60ead15b47821f5effc42e5753
        const  data = [bubbleData];
        
        const options = {
            title: {
                //text: 'Market Numbers'
            },
            legend: {
                right: 10,
                data: ['Locations', '2015']
            },
            xAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                }
            },
            yAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                scale: true
            },
            series: [{
                name: 'Locations',
                data: data[0],
                type: 'scatter',
                symbolSize: function (data) {
                    return Math.sqrt(data[2]) /20;
                },
                emphasis: {
                    label: {
                        show: true,
                        formatter: function (param) {
                            return param.data[3];
                        },
                        position: 'top'
                    }
                },
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(120, 36, 50, 0.5)',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: 'rgba(22, 155, 208, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(22, 155, 208, 1)'
                    }])
                }
            },]
        };
        myBubbleChart.setOption(options)
    }
    
    marketCollections.forEach((collected)=>{
        collections.push(collected.amount_paid)
    })
    //generating the bar chart 
    const generateBarchart = (data)  =>{
        const months = data.map((data)=>{
            return data.createdAt
        })
        const collections = data.map((data)=>{
            return data.amount_paid
        })
        const piechartData = echarts.init(piechart.current)
        const options = {
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
<<<<<<< HEAD
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
=======
                axisPointer: {   
                    type: 'shadow'   
>>>>>>> 8cbef0c8499b5e60ead15b47821f5effc42e5753
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: months,
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'Collections',
                    type: 'bar',
                    barWidth: '40%',
                    data: collections
                }
            ]
        };
        
        piechartData.setOption(options)
    }
<<<<<<< HEAD
=======
    // making the call to the use effect functionality
    useEffect(()=>{
        getMarketCollections()
    },[])
    // making call to the firebase collection
>>>>>>> 8cbef0c8499b5e60ead15b47821f5effc42e5753
    return (
        <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={15}>
              <Header size="medium" style={{marginTop:30, marginLeft:20}}>Recent Market Collection Trends</Header>
               <CardComponent fluid  style={{marginLeft:20}}>
                <div ref={trendCharts} className="trend-charts">
                </div>
               </CardComponent>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
            <Header size="medium" style={{marginTop:10, marginLeft:20}}>Markets Collected</Header>
             <CardComponent fluid style={{marginLeft:20}}>
              <div ref={bubleChart} className="bubble-chart">
              </div>
             </CardComponent>
            </Grid.Column>
            <Grid.Column width={7}>
            <Header size="medium" style={{marginTop:10, marginLeft:20}}>Statistics</Header>
            <CardComponent fluid style={{marginLeft:20, padding:20}}>
            <Grid>
            <Grid.Row>
            <Grid.Column width="5">
                <Statistic size='small'>
                    <Statistic.Label>Market Locations</Statistic.Label>
                    <Statistic.Value>2,04</Statistic.Value>
                </Statistic>
            </Grid.Column>
            <Grid.Column width="5">
            <Statistic size="small">
                <Statistic.Label>Collections</Statistic.Label>
                <Statistic.Value>2,204</Statistic.Value>
            </Statistic>
            </Grid.Column>
            <Grid.Column width="5">
            <Statistic size='small'>
                <Statistic.Label>Stalls</Statistic.Label>
                <Statistic.Value>24</Statistic.Value>
            </Statistic>
            </Grid.Column>
            </Grid.Row>
            </Grid>
            </CardComponent>
            <Grid.Row>
            <CardComponent fluid style={{marginLeft:20, padding:5}}>
<<<<<<< HEAD
            <div ref={piechart} style={{width:500, height:280}}></div>
=======
            <div ref={piechart} style={{width:500, height:240}}></div>
>>>>>>> 8cbef0c8499b5e60ead15b47821f5effc42e5753
            </CardComponent>
            </Grid.Row>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </div>
    )
}
