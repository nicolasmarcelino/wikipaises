import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import api from './services/api'
import Nav from './components/Nav'
import Search from './components/Search'

const ITEMS_PER_PAGE = 15

function App() {
  const [countries, setCountries] = useState([])
  const [region, setRegion] = useState('all')
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredCountries = countries
    .filter(country =>
      region === 'all' ? true : country.region === region
    )
    .filter(country =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    )

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
      <h1>WikiPaíses</h1>

      <Search
        search={search}
        setSearch={setSearch}
        region={region}
        setRegion={setRegion}
        setCurrentPage={setCurrentPage}
      />

      <div className='cards'>
        {paginated.map((country, index) => (
          <Card key={index} country={country} />
        ))}
      </div>

      <Nav
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={avancar}
        onPrev={retornar}
      />
    </>
  )
}

export default App