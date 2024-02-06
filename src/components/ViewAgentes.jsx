import { useState } from 'react'
import './ViewAgentes.css'
import QrReader from 'react-qr-reader'
// import { useNavigate } from 'react-router-dom'

function ViewAgentes () {
  // const [dataAgente, setDataAgente] = useState(null)
  const [dataQr, setDataQr] = useState(null)
  // const navi = useNavigate()
  function eventData (data) {
    if (data) {
      console.log(data)
      setDataQr(data)
      window.location.href = data
    }
  }

  return (
    <div className="view-agentes-conteiner">
      <h1 style={{ marginTop: '2rem', color: 'white' }}>Lector Qr Dim</h1>
      <div className='qr-conteiner' style={{ display: `${dataQr != null ? 'none' : 'block'}` }}>
        <QrReader
          delay={1000}
          onScan={eventData}
          legacyMode={false}
          style={{ with: '250px', heigth: 100, border: 10 }}
          onError={(err) => console.log(err)}
        />
      </div>

      <p className='resulta-qr'>{dataQr && `El resultado es : ${dataQr}`}</p>

    </div>
  )
}

export default ViewAgentes
