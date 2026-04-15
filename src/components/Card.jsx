import { useNavigate } from 'react-router-dom'

function Card({ country }) {
     const navigate = useNavigate()

  return (
    <div className='card' onClick={() => navigate(`/country/${country.cca3}`)}>
      <img src={country.flags.png} alt={country.flags.alt} width="100" />
      <h3>{country.name.common}</h3>
      <h4>{country.capital}</h4>
    </div>
  )
}

export default Card