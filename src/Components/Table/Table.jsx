import React from 'react'
import "./Table.css"

export const Table = (props) => {
  return (
    <div>
      <table id="customers">
        <tr>
          <th>{props.firstTh}</th>
          <th>{props.secTh}</th>
          <th>{props.thirdTh}</th>
        </tr>
        <tr>
          <td>{props.firstTd1}</td>
          <td>{props.firstTd2}</td>
          <td>{props.firstTd3}</td>
        </tr>
        <tr>
          <td>{props.secTd1}</td>
          <td>{props.secTd2}</td>
          <td>{props.secTd3}</td>
        </tr>
      </table>
    </div>
  );
}
