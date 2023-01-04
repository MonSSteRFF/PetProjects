import React, {useRef, useState} from 'react';
import './select.scss';


const Select = ({optionsList, placeholder}) => {
  const [value, setValue] = useState(placeholder !== undefined ? placeholder : optionsList[0]);
  const [hasOpen, setHasOpen] = useState(false);

  const selectInner = useRef();

  const SelectUi = () => (
    <div className="select">
      <p className="select__target" onClick={() => setHasOpen(true)}>{value}</p>

      <div className="select__wrapper"
           style={{maxHeight: `${hasOpen ? selectInner.current !== undefined ? selectInner.current.offsetHeight : 0 : 0}px`}}>
        <ul className="select__wrapper__inner" ref={selectInner}>

          {optionsList !== undefined ? optionsList.map((text, index) =>
            <li
              key={index}
              className="select__wrapper__item"
              onClick={(e) => {
                setHasOpen(false);
                setValue(e.target.innerText);
              }}>{text}</li>
          ) : null}


        </ul>
      </div>
    </div>
  );

  return {
    SelectUi: <SelectUi/>,
    value: value,
  };

};

export {Select};