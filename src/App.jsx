import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import api from './services/api'
import { useSearchParams } from 'react-router-dom'

const ITEMS_PER_PAGE = 10

function App() {
  const [countries, setCountries] = useState([])
  const [region, setRegion] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)


  const filteredCountries =
    region === 'all'
      ? countries
      : countries.filter(country => country.region === region)

  const totalPages = Math.ceil(filteredCountries.length / ITEMS_PER_PAGE)

  const paginated = filteredCountries.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  useEffect(() => {
    getAllCountries()
  }, [])

  const getAllCountries = async () => {
    try {
      const response = await api.get('all?fields=name,flags,capital,region,cca3')
      setCountries(response.data)
    } catch (error) {
      console.error('Error fetching countries:', error)
    }
  }

  const avancar = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const retornar = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  return (
    <>
      <h1>Wiki</h1>
      <button onClick={retornar}>Retornar</button>
      <button onClick={avancar}>Avançar</button>
      <p>Page {currentPage} of {totalPages}</p>

      <select onChange={(e) => {
        setRegion(e.target.value)
        setCurrentPage(1) // reset page when filter changes
      }}>
        <option value="all">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
      </select>

      <div className='cards'>
        {paginated.map((country, index) => (
          <Card key={index} country={country} />
        ))}
      </div>
    </>
  )
}

export default App