import { useState } from 'react';
import s from './style.module.css';

export function MenuListItem(props) {
    const {handleChange, diffLevel, isSelected} = props

  const [isHovered, setIsHovered] = useState(false);

  function active() {
    setIsHovered(true);
  }

  function deactive() {
    setIsHovered(false);
  }

  function getBGColor () {
    return (isHovered || isSelected) ? '#FFFFFF' : '#BEDCFE'
  }

  return (
    <div
      onClick={() => handleChange(diffLevel)}
      onMouseEnter={() => active()}
      onMouseLeave={() => deactive()}
      className={s.item}
      style={{ backgroundColor: getBGColor()}}
    >
      {diffLevel}
    </div>
  );
}
