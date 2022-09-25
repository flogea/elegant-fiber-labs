import React from 'react'
import axios from 'axios'

import { Context } from '../../Context'

function TabComponent({array}) {

  const {table3, setTable3} = React.useContext(Context)

  const handleChangeTable3 = (event) => {
    setTable3({...table3, [event.target.name]:event.target.value})
  }

  return(
    <div className="row">
      {array &&
        array.map((name, index) => (
          <div 
          key={`${name}_${index}`}
          className="col s12 m6 l6">
            <label>{name}</label>
              <input 
                key={`${name}_${index}`} 
                type="number" 
                step="any"
                name={name}
                className="input-table" 
                onChange={handleChangeTable3} />
          </div>
        ))
      }
    </div>
  )
}

export default TabComponent