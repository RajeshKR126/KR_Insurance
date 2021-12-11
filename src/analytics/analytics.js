import './analytics.css';
import React from 'react';
import { useState, useEffect, useContext} from 'react';
import leadsList from '../leadsItem';
import Chart from 'react-google-charts';

const Analytics = (props) => {

    const [fb, setFb] = useState(0);
    const [ld, setLd] = useState(0);
    const [google, setGoogle] = useState(0);
    const [agent, setAgent] = useState(0);
    const [success, setSuccess] = useState(0);
    const [failed, setFailed] = useState(0);
    const [pending, setPending] = useState(0);
    const [TermIns, setTermIns] = useState(0);
    const [HealthIns, setHealthIns] = useState(0);
    const [CarIns, setCarIns] = useState(0);
    const [PropertyIns, setPropertyIns] = useState(0);

    const setValues = () => {
        var tot = leadsList.length;
        var fb=0;
        var ld=0;
        var google=0;
        var agent=0;
        var success=0;
        var failed=0;
        var pending=0;
        var TermIns=0;
        var HealthIns=0;
        var CarIns=0;
        var PropertyIns=0;

        leadsList.map((items, key ) => {
            if(items.source==='facebook'){
                fb++;
            }
            if(items.source==='linkedin'){
                ld++;
            }
            if(items.source==='google'){
                google++;
            }
            if(items.source==='agent'){
                agent++;
            }
            if(items.status==='open' && items.converted===false){
                pending++;
            }
            if(items.status==='closed' && items.converted===false){
                failed++;
            }
            if(items.status==='closed' && items.converted===true){
                success++;
            }
            if(items.type==='Term Insurance'){
                TermIns++;
            }
            if(items.type==='Health Insurance'){
                HealthIns++;
            }
            if(items.type==='Car Insurance'){
                CarIns++;
            }
            if(items.type==='Property Insurance'){
                PropertyIns++;
            }
        })
        setFb(fb*100/tot);
        setLd(ld*100/tot);
        setGoogle(google*100/tot);
        setAgent(agent*100/tot);
        setSuccess(success);
        setFailed(failed);
        setPending(pending);
        setPropertyIns(PropertyIns*100/tot);
        setTermIns(TermIns*100/tot);
        setHealthIns(HealthIns*100/tot);
        setCarIns(CarIns*100/tot);
    }

    useEffect( ( ) => {
        setValues()        
    })

    return(
        <div className='analytics-container'>
            <text className='analytics-title'>Analytics</text>
            <div className='row1'>
                <div className='card-row-1'>
                    <div className='card-analytics'>
                    <Chart
                    style={{marginLeft:'2.5%'}}
                        width={'90%'}
                        height={'250px'}
                        chartType="PieChart"
                        loader={<div>Lead Source Chart</div>}
                        data={[
                            ['Source', 'Percent'],
                            ['Facebook', fb],
                            ['Linkedin', ld],
                            ['Google', google],
                            ['Agent', agent], // Below limit.
                        ]}
                        options={{
                            title: 'Lead Source Chart',
                            sliceVisibilityThreshold: 0.0, // 20%
                        }}
                        rootProps={{ 'data-testid': '7' }}
                        />
                    </div>
                    <text className='heading-analytics' >Lead Source Analysis</text>
                    <text className='text-analytics'>Here you can find the analytics for the type for sources generating leads for the insurance,  this data can be useful for concentrating on the a type of source and trying to to get more outcome from them.</text>
                </div>
                <div className='card-row-1'>
                    <div className='card-analytics'>
                    <Chart
                            width={'100%'}
                            height={'100px'}
                            chartType="BarChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                [
                                'Element',
                                'Density',
                                { role: 'style' },
                                {
                                    sourceColumn: 0,
                                    role: 'annotation',
                                    type: 'string',
                                    calc: 'stringify',
                                },
                                ],
                                ['Success', success, '#34eb3d', null],
                                ['Failed', failed, '#eb5436', null],
                                ['Pending', pending, '#e8c538', null],
                            ]}
                            options={{
                                title: 'Lead Conversion Analysis',
                                width: 400,
                                height: 300,
                                bar: { groupWidth: '95%' },
                                legend: { position: 'none' },
                            }}
                            // For tests
                            rootProps={{ 'data-testid': '6' }}
                            />
                    </div>
                    <text className='heading-analytics' >Lead Conversion Analysis</text>
                    <text className='text-analytics'>Here you can find the analytics for the conversion rate for the leads generated, this can help to develop better strategies for the conversion leads to customers.</text>
                </div>
                <div className='card-row-1'>
                    <div className='card-analytics'>
                    <Chart
                    style={{marginLeft:'2.5%'}}
                        width={'90%'}
                        height={'250px'}
                        chartType="PieChart"
                        loader={<div>Lead </div>}
                        data={[
                            ['Type', 'Percent'],
                            ['Term Insurance', TermIns],
                            ['Health Insurance', HealthIns],
                            ['Car Insurance', CarIns],
                            ['Property Insurance', PropertyIns], // Below limit.
                        ]}
                        options={{
                            title: 'Lead Source Chart',
                            sliceVisibilityThreshold: 0.0, // 20%
                        }}
                        rootProps={{ 'data-testid': '7' }}
                        />
                    </div>
                    <text className='heading-analytics' >Lead Type Analysis</text>
                    <text className='text-analytics'>Here you can find the analytics for the type of insurance that is getting more leads and make decisions like improving the insurance package for the other type of insurances.</text>
                </div>
            </div>

        </div>
    )
}

export default Analytics;