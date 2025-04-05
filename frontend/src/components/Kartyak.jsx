import React from 'react'
import { useFeladatContext } from '../context/FeladatContext'
import './kartyak.css'

const Kartyak = () => {
    const {tesztek} = useFeladatContext([]);
    const {selectedId} = useFeladatContext(null);

    const filteredTesztek = selectedId ?
    tesztek.filter(e => e.kategoriaId.toString() === selectedId) : [];

    const handleClick = (e, valaszKulcs) => {
        if (e.helyes === valaszKulcs) {
            console.log("helyes");
        } else {
            console.log("helytelen");
        }
    };
       
  return (
    filteredTesztek.map((e) => {
        return (
            <div className='kartya' key={e.id}>
                <p className='kerdes'>{e.kerdes}</p>
                <p className='valasz' onClick={()=> handleClick(e,'v1')}>{e.v1}</p>
                <p className='valasz' onClick={()=> handleClick(e,'v2')}>{e.v2}</p>
                <p className='valasz' onClick={()=> handleClick(e,'v3')}>{e.v3}</p>
                <p className='valasz' onClick={()=> handleClick(e,'v4')}>{e.v4}</p>
            </div>
        )
    })
  )
}

export default Kartyak