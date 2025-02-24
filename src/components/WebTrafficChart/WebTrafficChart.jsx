import React, { useEffect } from 'react'
import * as echarts from 'echarts'

function WebTrafficChart() {
    useEffect(() =>{
        echarts.init(document.querySelector('#trafficChart')).setOption({
            tooltip:{
                trigger :'item',
            },
            legend:{
                top:'5%',
                left:'center',
            },
            series:[
                {
                    name:'Access From',
                    type:'pie',
                    raduis:['40%','70%'],
                    aviodLabelOverlap:false,
                    label:{
                        show:false,
                        position:'center',
                    },
                    emphasis:{
                        label:{
                            show:true,
                            fontSize:'18',
                            fontWeight:'bold',
                        },
                    },
                    labelLine:{
                        show:false,
                    },
                    data:[
                        {
                            value:1048,
                            name:'Search Engine',
                        },
                        {
                            value:735,
                            name:'Direct',
                        },
                        {
                            value:580,
                            name:'Email',
                        },
                        {
                            value:484,
                            name:'Union Ads',
                        },
                        {
                            value:300,
                            name:'Video Ads',
                        },
                    ],
                },
            ],
        });
    },[]);
  return (
    <div className="echart" id='trafficChart' style={{minHeight:'400px'}}></div>
  )
}

export default WebTrafficChart