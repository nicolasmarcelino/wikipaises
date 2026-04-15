function Card({ country }) {
  return (
    <div className='card'>
      <img src={country.flags.png} alt={country.flags.alt} width="100" />
      <h3>{country.name.common}</h3>
      <h4>{country.capital}</h4>
    </div>
  )
}

export default Card