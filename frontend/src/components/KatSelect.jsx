import React, { useState } from 'react'
import { useFeladatContext } from '../context/FeladatContext'
import Form from 'react-bootstrap/Form';

const KatSelect = () => {
    const {kat} = useFeladatContext();
    const {setSelectedId} = useFeladatContext();
    

    const handleChange = (event) => {
        setSelectedId(event.target.value);
        console.log(event.target.value);
    }

  return (
    <Form.Select aria-label="Default select example" onClick={handleChange}>
      <option>Válasszon kategóriát</option>
      {
        kat.length > 0 ?
        kat.map((e) => {
            return <option value={e.id} key={e.id}>{e.kategorianev}</option>
        }): "Loading"
      }
    </Form.Select>  
  )
}

export default KatSelect