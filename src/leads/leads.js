import './leads.css';
import React from 'react';
import { useState, useEffect, useContext} from 'react';
import leadsList from '../leadsItem';

const Leads = (props) => {
    let [checked, setChecked] = useState(false);

    return(
        <>
            <div className='leads-container'>
                <text className='dashboard'> Leads</text>
                <div className='item-1'>
                        {
                            leadsList.map((item,key) => {                             

                                return(
                                    <>
                                    <div className='lead-item'>
                                        <img src='menu.png' alt='menu' className='menu-icon'/>
                                        <div style={{width:'10%',marginTop:'10px',marginLeft:'2.5%',marginRight:'2.5%' ,display:'flex', flexDirection:'column',justifyContent:'flex-start'}}>
                                            <text style={{fontSize:12,marginBottom:'-5px',marginLeft:'10px',alignSelf:'flex-start'}}>Name:</text>
                                            <text className='item-name'>{item.name}</text>
                                        </div>
                                        <div style={{width:'10%',marginTop:'10px',marginLeft:'2.5%',marginRight:'2.5%' ,display:'flex', flexDirection:'column',justifyContent:'flex-start'}}>
                                            <text style={{fontSize:12,marginBottom:'-5px',marginLeft:'10px',alignSelf:'flex-start'}}>Phone:</text>
                                            <text className='item-name'>{item.phoneNumber}</text>
                                        </div> 
                                        <div style={{width:'10%',marginTop:'10px',marginLeft:'2.5%',marginRight:'2.5%' ,display:'flex', flexDirection:'column',justifyContent:'flex-start'}}>
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
                                        <div style={{width:'10%',marginTop:'10px',marginLeft:'2.5%',marginRight:'2.5%' ,display:'flex', flexDirection:'column',justifyContent:'flex-start'}}>
                                            <text style={{fontSize:12,marginBottom:'-5px',marginLeft:'10px',alignSelf:'flex-start'}}>Conversion:</text>
                                            {
                                                item.converted ? 
                                                <text className='item-name-1'>Successful</text>
                                                :( item.status == 'open' ?
                                                <text className='item-name-1'>Pending</text>
                                                :<text className='item-name-1'>Failed</text>)
                                            }
                                        </div> 
                                    </div> 
                                    </>
                                )
                            })
                        }
                </div>
            </div>
        </>
    )
}

export default Leads;