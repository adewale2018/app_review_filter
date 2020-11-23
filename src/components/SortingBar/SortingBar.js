import './SortingBar.css'

import React from 'react'

const SortingBar = () => {
  return (
    <div>
    <label>sorting</label><br/>
    <select className='form-control form-control-sm select-product-input'>
        <option>Newest first</option>
    </select>
    </div>
  )
}

export default SortingBar;
