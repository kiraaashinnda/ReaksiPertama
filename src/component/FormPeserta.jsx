import { useEffect, useState } from "react";
const FormPeserta = ({ onSimpan, onCancel, pesertaEdit }) => {
  const [nama, setNama] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [error, setError] = useState("");

useEffect (() => {
  if (pesertaEdit) {
    setNama(pesertaEdit.nama)
    setJurusan(pesertaEdit.jurusan)
  } else {
    setJurusan("")
    setNama("")
  }
}, [pesertaEdit])

  const handleSimpan = (e) => {
    e.preventDefault()
    if (!nama.trim() || !jurusan.trim()) {
      setError("Gada Isi nya woi")
      return
    }
    onSimpan({
      id: pesertaEdit? pesertaEdit.id : Date.now(),
      nama,
      jurusan,
    })
    setNama("")
    setJurusan("")
  }
return (
  <form onSubmit={handleSimpan} method="post" style={{background: "#0001FF", color:"white", padding:"16px", borderRadius: "8px"}}>
    <h3>Tambah Peserta</h3>
    <div style={{display:"flex", gap: "8px", flexWrap: "wrap"}}>
    <input type="text" placeholder="Nama" value={nama} onChange={(e) => setNama(e.target.value)} style={{padding:"8px"}}/>
    <input type="text" placeholder="Jurusan" value={jurusan} onChange={(e) => setJurusan(e.target.value)} style={{padding:"8px"}}/>
    <button type="submit" style={{background: "#ff0000", borderRadius:"6px", padding:"8px 16px"}}>
      Simpan
    </button>
    </div>

  {error && <p>{error}</p>}

  </form>
)

}

export default FormPeserta