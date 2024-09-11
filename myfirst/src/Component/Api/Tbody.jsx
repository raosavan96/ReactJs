import React from 'react'

function Tbody(props) {
    let {firstName, lastName, email, phone, birthDate, id , image} = props.mainValue
  return (
    <tbody>
            <tr>

              <th scope="row">{id}</th>
              <td>
                <img src={image} alt=''/>
              </td>
              <td>{firstName} {lastName}</td>
              <td>{phone}</td>
              <td>{email}</td>
              <td>{birthDate}</td>
              
            </tr>
          </tbody>
  )
}

export default Tbody