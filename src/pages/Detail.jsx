import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import api from '../services/api'

function Detail() {
     const { code } = useParams()
     const [country, setCountry] = useState(null)

     useEffect(() => {
          getCountry()
     }, [code])

     const getCountry = async () => {
          try {
               const response = await api.get(`/alpha/${code}`)
               console.log(response.data[0])
               setCountry(response.data[0])
          } catch (error) {
               console.error('Error fetching country:', error)
          }
     }

     if (!country) return <p>Loading...</p>

     return (
          <>
               <div className='mainDetail'>
                    <img src={country.flags.svg} width={200} />
                    <h1>{country.name.common}</h1>
                    <h2>{country.name.official}</h2>
               </div>

               <div className='otherDetails'>
                    <div className='section'>
                         <p className='name-info'>CAPITAL</p>
                         <p className='info'>{country.capital[0]}</p>
                         <p className='name-info'>CONTINENTE</p>
                         <p className='info'>{country.continents[0]}</p>
                         <p className='name-info'>SUB-REGIÃO</p>
                         <p className='info'>{country.subregion}</p>
                         <p className='name-info'>ÁREA</p>
                         <p className='info'>{country.area} km²</p>
                    </div >

                    <div className='section'>
                         <p className='name-info'>POPULAÇÃO</p>
                         <p className='info'>{country.population}</p>

                         <p className='name-info'>LÍNGUAS OFICIAIS</p>
                         {Object.values(country.languages).map((language, index) => (
                              <p key={index} className='info'>{language}</p>
                         ))}

                         <p className='name-info'>MOEDA</p>
                         {Object.values(country.currencies).map((currency, index) => (
                              <p key={index} className='info'>{currency.name}</p>
                         ))}

                         <p className='name-info'>CCA3</p>
                         <p className='info'>{country.cca3}</p>
                    </div >
               </div>
          </>
     )
}

export default Detail