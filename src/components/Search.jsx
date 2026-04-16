function Search({ setSearch, setRegion, setCurrentPage }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Nome do país"
        onChange={(e) => {
          setSearch(e.target.value)
          setCurrentPage(1)
        }}
      />

      <select
        onChange={(e) => {
          setRegion(e.target.value)
          setCurrentPage(1)
        }}
      >
        <option value="all">Todos os continentes</option>
        <option value="Africa">África</option>
        <option value="Americas">América</option>
        <option value="Asia">Ásia</option>
        <option value="Europe">Europa</option>
      </select>
    </div>
  )
}

export default Search