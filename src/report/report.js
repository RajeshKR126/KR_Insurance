import './report.css';
import React from 'react';
import { useState, useEffect, useContext} from 'react';
import leadsList from '../leadsItem';
import Chart from 'react-google-charts';

const Report = (props) => {

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
    const [secA, setSecA] = useState(0); //below18
    const [secB, setSecB] = useState(0); //18-45
    const [secC, setSecC] = useState(0); // 45-60
    const [secD, setSecD] = useState(0); //60+

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
        var secA=0;
        var secB=0;
        var secC=0;
        var secD=0;

        leadsList.map((items, key ) => {
            if(items.age<18) secA++;
            if(items.age>=18 && items.age<45) secB++;
            if(items.age>=45&& items.age<60) secC++;
            if(items.age>=65) secD++;
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
            if(items.status==='open' && items.converted==='false'){
                pending++;
            }
            if(items.status==='closed' && items.converted==='false'){
                failed++;
            }
            if(items.status==='closed' && items.converted==='true'){
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
        setFb(fb);
        setLd(ld);
        setGoogle(google);
        setAgent(agent);
        setSuccess(success);
        setFailed(failed);
        setPending(pending);
        setPropertyIns(PropertyIns);
        setTermIns(TermIns);
        setHealthIns(HealthIns);
        setCarIns(CarIns);
        setSecA(secA*100/tot);
        setSecB(secB*100/tot);
        setSecC(secC*100/tot);
        setSecD(secD*100/tot);
    }

    useEffect( ( ) => {
        setValues()        
    })

    return(
        <div className='report-container'>
            <text className='report-title'>Report</text>
            <div className='rep-row-1'>
                <div className='tot-leads-card'>
                    <div style={{alignSelf:'flex-start',marginLeft:'5%'}}>
                        <text style={{fontSize:20,opacity:0.5}}>Total Leads :</text>
                        <text style={{fontSize:28}}>{leadsList.length}</text>
                    </div>
                    <text style={{alignSelf:'flex-start',marginLeft:'5%',fontSize:'14px'}}>The total number of leads gathered from all the sources.</text>
                </div>
            </div>
            <div className='rep-row-1'>
                <div className='source-type-card'>
                    <text style={{fontSize:20,alignSelf:'flex-start',marginLeft:'2.5%',marginTop:'2%',opacity:0.5}}>Source Type</text>
                    <text style={{fontSize:12,alignSelf:'flex-start',marginLeft:'2.5%'}}>Different sources from where the leads are being gathered</text>
                    <div className='source-items'>
                        <div className="ll-card">
                            <img src='facebook.png' alt='src' style={{height:'25px',width:'25px',marginRight:'5px'}}/>
                            <text style={{fontSize:'16px'}}>Faceboook : {fb}</text>
                        </div>
                         <div className="ll-card">
                            <img src='linkedin.png' alt='src' style={{height:'25px',width:'25px',marginRight:'5px'}}/>
                            <text style={{fontSize:'16px'}}>Linkedin : {ld}</text>
                        </div>
                        <div className="ll-card">
                            <img src='google.png' alt='src' style={{height:'25px',width:'25px',marginRight:'5px'}}/>
                            <text style={{fontSize:'16px'}}>Google : {google}</text>
                        </div>
                        <div className="ll-card">
                            <img src='user.png' alt='src' style={{height:'25px',width:'25px',marginRight:'5px'}}/>
                            <text style={{fontSize:'16px'}}>Agent : {agent}</text>
                        </div>
                    </div>
                </div>
            </div>
            <div className='rep-row-1'>
                <div className='demand-type'>
                    <text style={{fontSize:20,alignSelf:'flex-start',marginLeft:'2.5%',marginTop:'1%',opacity:0.5}}>Insurance Types</text>
                    <text style={{fontSize:12,alignSelf:'flex-start',marginLeft:'2.5%'}}>Report for the types of insurance that are gathered from leads</text>
                    <div className='source-items-1'>
                        <div className="ll-card-1">
                            <text style={{fontSize:'16px'}}>Term Insurance : {TermIns}</text>
                        </div>
                        <div className="ll-card-1">
                            <text style={{fontSize:'16px'}}>Health Insurance : {HealthIns}</text>
                        </div>
                        <div className="ll-card-1">
                            <text style={{fontSize:'16px'}}>Car Insurance : {CarIns}</text>
                        </div>
                        <div className="ll-card-1">
                            <text style={{fontSize:'16px'}}>Property Insurance : {PropertyIns}</text>
                        </div>
                    </div>
                </div>
                <div className='demand-type'>
                    <text style={{fontSize:20,alignSelf:'flex-start',marginLeft:'2.5%',marginTop:'1%',opacity:0.5}}>Age Demographic</text>
                    <Chart
                    style={{marginLeft:'2.5%'}}
                        width={'90%'}
                        height={'150px'}
                        chartType="PieChart"
                        loader={<div>Lead Source Chart</div>}
                        data={[
                            ['Source', 'Percent'],
                            ['<18', secA],
                            ['18 - 45', secB],
                            ['45-60', secC],
                            ['>60', secD], // Below limit.
                        ]}
                        options={{
                            sliceVisibilityThreshold: 0.0, // 20%
                        }}
                        rootProps={{ 'data-testid': '7' }}
                        />
                </div>
            </div>
        </div>
    )
}

export default Report;