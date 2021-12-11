import './home.css';
import React from 'react';
import { useState, useEffect, useContext} from 'react';
import leadsList from '../leadsItem';

const Home = (props) => {

    return(
        <>
            <div className='home-container'>
                <text className='dashboard'> Dashboard</text>
                <div className='home-p1'>
                    <div className='card'>
                        <div className='card-row'>
                            <img src='leads.png' alt='leads' className='leads-img' />
                            <text className='leads-txt'>Leads</text>
                        </div>
                        <text className='total-leads'>32 leads <text className="new-leads">🟣 8 new leads </text></text>
                        <a href='/leads' className='view-button'> View Leads</a>
                    </div>
                    <div className='card'>
                        <div className='card-row'>
                                <img src='analytics.png' alt='leads' className='leads-img' />
                                <text className='leads-txt'>Analytics</text>
                        </div>
                        <text  className='total-leads'>View Analysis for all the leads</text>
                        <a href='/analytics' className='view-button'> View Analytics</a>
                    </div>
                    <div className='card'>
                        <div className='card-row'>
                            <img src='report.png' alt='leads' className='leads-img' />
                            <text className='leads-txt'>Report</text>
                        </div>
                        <text className='total-leads'>Generate Report for status of the leads</text>
                        <a href='/report' className='view-button'> View Report</a>
                    </div>
                </div>
                <div className='home-p2'>
                    <text className='leads-heading'>Leads</text>
                    <div className='item-2'>
                        {
                            leadsList.map((item,key) => {                             

                                return(
                                    <>
                                    { key < 5 ?
                                    <div className='lead-item'>
                                        <img src='menu.png' alt='menu' className='menu-icon'/>
                                        <div style={{width:'10%',marginTop:'10px',marginLeft:'2.5%',marginRight:'2.5%' ,display:'flex', flexDirection:'column',justifyContent:'flex-start'}}>
                                            <text style={{fontSize:12,marginBottom:'-5px',marginLeft:'10px',alignSelf:'flex-start'}}>Name:</text>
                                            <text className='item-name'>{item.name}</text>
                                        </div>
                                        <div style={{width:'10%',marginTop:'10px',marginLeft:'5%',marginRight:'5%' ,display:'flex', flexDirection:'column',justifyContent:'flex-start'}}>
                                            <text style={{fontSize:12,marginBottom:'-5px',marginLeft:'10px',alignSelf:'flex-start'}}>Phone:</text>
                                            <text className='item-name'>{item.phoneNumber}</text>
                                        </div> 
                                        <div style={{width:'10%',marginTop:'10px',marginLeft:'5%',marginRight:'5%' ,display:'flex', flexDirection:'column',justifyContent:'flex-start'}}>
                                            <text style={{fontSize:12,marginBottom:'-5px',marginLeft:'10px',alignSelf:'flex-start'}}>email:</text>
                                            <text className='item-name'>{item.email}</text>
                                        </div> 
                                        <div style={{width:'5%',marginTop:'10px',marginLeft:'2.5%',marginRight:'2.5%' ,display:'flex', flexDirection:'column',justifyContent:'flex-start'}}>
                                            <text style={{fontSize:12,marginBottom:'-5px',marginLeft:'10px',alignSelf:'flex-start'}}>Source:</text>
                                            {
                                              item.source == 'facebook' ? 
                                                <img src='facebook.png' alt='src' style={{height:'30px', width:'30px',marginTop:'10px',marginLeft:'10px'}}/> : null
                                            }
                                             {
                                              item.source == 'linkedin' ? 
                                                <img src='linkedin.png' alt='src' style={{height:'30px', width:'30px',marginTop:'10px',marginLeft:'10px'}}/> : null
                                            }
                                             {
                                              item.source == 'google' ? 
                                                <img src='google.png' alt='src' style={{height:'30px', width:'30px',marginTop:'10px',marginLeft:'10px'}}/> : null
                                            }
                                             {
                                              item.source == 'agent' ? 
                                                <img src='user.png' alt='src' style={{height:'30px', width:'30px',marginTop:'10px',marginLeft:'10px'}}/> : null
                                            }
                                        </div> 
                                        <div style={{width:'10%',marginTop:'10px',marginLeft:'5%',marginRight:'2.5%' ,display:'flex', flexDirection:'column',justifyContent:'flex-start'}}>
                                            <text style={{fontSize:12,marginBottom:'-5px',marginLeft:'10px',alignSelf:'flex-start'}}>Status:</text>
                                            {
                                                !(item.status =='open') ? 
                                                <text className='item-name-1'>🔴 closed</text>:
                                                <text className='item-name-1'>🟢 Open</text>
                                            }
                                        </div>
                                        <a href="/leads" className='view-button-1'> View</a>
                                    </div> 
                                    :null}
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )

}

export default Home;