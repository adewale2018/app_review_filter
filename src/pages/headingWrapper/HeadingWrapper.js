import "./HeadingWrapper.css";

import React from "react";
import SelectProductBar from "../../components/SelectProductBar/SelectProductBar";
import SortingBar from "../../components/SortingBar/SortingBar";
import TranslationBar from "../../components/TranslationBar/TranslationBar";

const HeadingWrapper = () => {
  return (
    <div className=' card'>
      <div className='card-body'>
        <div className='d-flex justify-content-between align-items-center wrap'>
          <SelectProductBar />
          <div className='d-flex align-items-center'>
            <SortingBar />
            <TranslationBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingWrapper;
