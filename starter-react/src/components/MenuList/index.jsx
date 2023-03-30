import { Fragment } from 'react';
import { MenuListItem } from '../MenuListItem';
import s from './style.module.css';
//utils
import { levels } from '../../utils/contants';

export function MenuList(props) {
  const { diffLevel, handleChange } = props;
  return (
    <div className={s.box}>
      {levels.map((level, index) => (
        <Fragment key={index}>
          <MenuListItem isSelected={diffLevel === level} handleChange={handleChange} diffLevel={level} />
        </Fragment>
      ))}
    </div>
  );
}
