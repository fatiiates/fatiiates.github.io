import React from 'react'
import informations from './Informations'
export default (
  <React.Fragment>
     <tr align="left">
      <th>.facebook</th>
      <th>_blank</th>
      <th><a target="_blank" rel="noreferrer" href={informations.facebook}>@facebook</a></th>
    </tr>
    <tr align="left">
      <th>.instagram</th>
      <th>_blank</th>
      <th><a target="_blank" rel="noreferrer" href={informations.instagram}>@instagram</a></th>
    </tr>
    <tr align="left">
      <th>.telegram</th>
      <th>_blank</th>
      <th><a target="_blank" rel="noreferrer" href={informations.telegram}>@telegram</a></th>

    </tr>
    <tr align="left">
      <th>.twitter</th>
      <th>_blank</th>
      <th><a target="_blank" rel="noreferrer" href={informations.twitter}>@twitter</a></th>
    </tr>
  </React.Fragment>
)