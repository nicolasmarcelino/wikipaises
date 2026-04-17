import { useNavigate } from 'react-router-dom'

function Card({ country }) {
  const navigate = useNavigate()

  const getStyle = (region) => {
    if (region === 'Americas') return { backgroundColor: 'red' };
    if (region === 'Europe') return { backgroundColor: 'blue' };
    if (region === 'Asia') return { backgroundColor: 'yellow', color:'black' };
    if (region === 'Oceania') return { backgroundColor: 'brown' };
    if (region === 'Africa') return { backgroundColor: 'green' };
    return { backgroundColor: 'black' };
  };

  return (
    <div className='card' onClick={() => navigate(`/country/${country.cca3}`)}>
      <span className='region' style={getStyle(country.region)}>{country.region}</span>
      <img src={country.flags.png} alt={country.flags.alt} width="100" />
      <h3>{country.name.common}</h3>
      <h4>{country.capital}</h4>
    </div>
  )
}

export default Card