import React, { useEffect, useState } from 'react'

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
//import { CheckListConfirmation } from '../../controllers/guest_management_controller';
function ListConfirmationTable({id, class_Id, event}) {
    const [isLoading, setIsLoading] = useState(true);
    const [list, setList] = useState([])
    useEffect(() => {
          fetch(`https://kyp-webapp.fly.dev/api/list-confirmation?event_name=${id}`, {
          method: "GET",
        })
          .then((response) => response.json())
          .then((data) => {
            setList(data)      
            setIsLoading(false);
          })
          .catch((error) => console.error("Error en la peticion: " + error));
      }, []);

  return (
    <>
    
        <h1 className='list-table-title'>Lista de Invitados {event}</h1>


        <Button className='btn-print-list' variant="info" onClick={() => print()}>Imprimir</Button>
        <div className={`list-guest-container list-guest-container-${class_Id}`}>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th className='th-title'>#</th>
          <th className='th-title'>Nombre</th>
          <th className='th-title'>Apellidos</th>
          <th className='th-title'>Teléfono</th>
          <th className='th-title'>Confirmación de Asistencia</th>
          
        </tr>
      </thead>
      <tbody>
        {isLoading ? (<h2>Cargando...</h2>)
         : list.map((guest, key ) => (
            <tr key={key}>
            <td>{key + 1}</td>
            <td>{guest.name}</td>
            <td>{guest.surnames}</td>
            <td>{guest.phone}</td>
            <td>{guest.rsvp}</td>
            
          </tr>
         ))}
        

      </tbody>
    </Table>
    </div>
    </>
    
  )
}

export default ListConfirmationTable