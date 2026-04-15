function Search({ search, setSearch, region, setRegion, setCurrentPage }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Nome do país"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
          setCurrentPage(1)
        }}
      />

      <select
        value={region}
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