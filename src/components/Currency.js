import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);
    
    const changeCurrency = (e) =>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: e.target.value
        })
    }

    return (
        <div className='alert alert-success'> Currency {
            <select name="Location" id="Location" onChange={changeCurrency}>
              <option value="£">£ Pound</option>
              <option value="₹">₹ Ruppee</option>
              <option value="€">€ Euro</option>
              <option value="$">$ Dollar</option>
            </select>	
            }	
          </div>
    );
};
export default Currency;
