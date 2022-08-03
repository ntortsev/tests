import React, { useState } from 'react';
import classNames from 'classnames';

function CarBlock({ name, imageUrl, types, colors }) {
  const [selectType, setSelectType] = useState(types[0]);
  const availableTypes = ['С обвесом', 'Без обвеса'];

  const onSelectType = (index) => {
    setSelectType(index);
  };

  const [selectColor, setSelectColor] = useState(colors[0]);
  const availableColors = ['Черная', 'Белая', 'Красная'];

  const onSelectColor = (item) => {
    setSelectColor(item);
  };

  return (
    <div className="item">
      <img width={200} src={imageUrl} alt="car" />
      <div className="item__info">
        <div className="sort">
          <ul>
            {availableTypes.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => onSelectType(index)}
                  className={classNames({
                    active: selectType === index,
                    disabled: !types.includes(index),
                  })}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <ul>
            {availableColors.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => onSelectColor(item)}
                  className={classNames({
                    active: selectColor === item,
                    disabled: !colors.includes(item),
                  })}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <p className="name">{name}</p>
      </div>
    </div>
  );
}

export default CarBlock;
