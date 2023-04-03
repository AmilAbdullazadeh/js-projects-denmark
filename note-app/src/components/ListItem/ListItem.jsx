import s from "./style.module.css";

export function ListItem(props) {
  return (
    <tr>
      <th>name</th>
      <td className={s.price}>price $</td>
    </tr>
  );
}
