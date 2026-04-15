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
               setCountry(response.data[0])
          } catch (error) {
               console.error('Error fetching country:', error)
          }
          console.log(country)
     }

     if (!country) return <p>Loading...</p>

     return (
          <>
               <div className='mainDetails'>
                    <img src={country.flags.svg} alt={country.name.common} width={200} />
                    <h1>{country.name.common}</h1>
                    <h2>{country.name.official}</h2>
               </div>
          </>
     )
}

export default Detail