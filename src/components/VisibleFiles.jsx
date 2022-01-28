import React from 'react'
import informations from './Informations'

export default (
  <React.Fragment>
    <tr align="left">
      <th>linkedin</th>
      <th>_blank</th>
      <th><a target="_blank" rel="noreferrer" href={informations.linkedin}>@fatiiates</a></th>
    </tr>
    <tr align="left">
      <th>resume_en</th>
      <th>_blank</th>
      <th><a target="_blank" rel="noreferrer" href={informations.resume_en}>@resume_en</a></th>
    </tr>
    <tr align="left">
      <th>resume_tr</th>
      <th>_blank</th>
      <th><a target="_blank" rel="noreferrer" href={informations.resume_tr}>@resume_tr</a></th>
    </tr>
  </React.Fragment>
)