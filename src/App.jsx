import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import api from './services/api'
import { useSearchParams } from 'react-router-dom'

const ITEMS_PER_PAGE = 10

function App() {
  const [countries, setCountries] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(countries.length / ITEMS_PER_PAGE)
  const paginated = countries.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  useEffect(() => {
    getAllCountries()
  }, [])

  const getAllCountries = async () => {
    try {
      const response = await api.get('all?fields=name,flags,capital,region')
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
      <h1>Hello</h1>
      <button onClick={getAllCountries}>Get countries</button>
      <button onClick={retornar}>Retornar</button>
      <button onClick={avancar}>Avançar</button>
      <p>Page {currentPage} of {totalPages}</p>

      <div className='cards'>
        {paginated.map((country, index) => (
          <Card key={index} country={country} />
        ))}
      </div>
    </>
  )
}

export default App