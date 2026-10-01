import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import DataPeserta from './component/DataPeserta'
import { Peserta } from './component/Peseta'
import FormPeserta from './component/FormPeserta'

function App() {
  const [listPeserta, setListPeserta] = useState(Peserta)
  const [editPeserta, setEditPeserta] = useState(null)

  // const listPeserta = Peserta
  
  const handleSubmit = (dataPeserta) => {
    if (editPeserta) {
      setListPeserta(
        listPeserta.map((item)=>(item.id === dataPeserta.id ? dataPeserta : item)),
        setEditPeserta(null)
      )
    } else {
      setListPeserta([...listPeserta, dataPeserta])
      
    }
  }

  const handleHapus = (id) => {
    setListPeserta(listPeserta.filter((item) => item.id !== id))
    if (id === editPeserta.id) {
      setListPeserta(null)
    }
  }

  return(
  <>
  <FormPeserta onSimpan={handleSubmit} pesertaEdit={editPeserta}/>

  {listPeserta.map((item)=>(
    <DataPeserta key={item.id} peserta={item} onEdit = {setEditPeserta} onHapus={handleHapus}/>
  ))}
  </>
  )
}

export default App
