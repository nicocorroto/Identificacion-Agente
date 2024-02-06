import './CardAgente.css'
import logo from '../../assets/logo_municipalidad.webp'
import img1 from '../../assets/img1.webp'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAgenteById } from '../../services/servicesAgentes'

function CardAgente () {
  const [dataAgente, setDataAgente] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    getAgenteById(id).then(res => setDataAgente(res))
  }, [])

  return (
    <>
      <div className='cont-card'>

        <div className='cont-img'>
          <div className="cont-card2">
            <div>
              <img src={logo} alt="imagen perfil " className='logo' />
            </div>
            <img src={img1} className={(dataAgente != null && dataAgente.activo ? '' : 'false')} alt="imagen perfil " />
          </div>
        </div>
        <div className='cont-data'>
          <h3>{(dataAgente != null && dataAgente.name)}</h3>
          <h4>{(dataAgente != null && dataAgente.legajo)}</h4>
          <h4>{(dataAgente != null && dataAgente.puesto)}</h4>
        </div>
        <div className='cont-action'>
          <p>texto - accion</p>
        </div>
      </div>
    </>
  )
}

export default CardAgente
