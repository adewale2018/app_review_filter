import "./SelectProductBar.css";

import React from "react";

const SelectProductBar = () => {
  return (
    <div style={{border: '2px solid white', width: '40%', borderRadius: '15px'}}>
      <select className='form-control form-control-sm select-product-input'>
        <option>My App +2</option>
      </select>
    </div>
  );
};

export default SelectProductBar;
