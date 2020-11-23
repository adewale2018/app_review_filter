import "./TranslationBar.css";

import React from "react";

const TranslationBar = () => {
  return (
    <div className='ml-2'>
      <label>translation</label>
      <br />
      <select size="1" className='form-control form-control-sm select-product-input'>
        <option>English</option>
      </select>
    </div>
  );
};

export default TranslationBar;
