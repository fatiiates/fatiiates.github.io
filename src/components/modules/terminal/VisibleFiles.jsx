import React from 'react'
import informations from '@config/Informations'

export default (
  <React.Fragment>
    <tr align="left">
      <th>linkedin</th>
      <th>_blank</th>
      <th><a target="_blank" rel="noreferrer" href={informations.linkedin}>@fatiiates</a></th>
    </tr>
    <tr align="left">
      <th>resume</th>
      <th>_blank</th>
      <th><a target="_blank" rel="noreferrer" href={informations.resume}>@resume</a></th>
    </tr>
  </React.Fragment>
)