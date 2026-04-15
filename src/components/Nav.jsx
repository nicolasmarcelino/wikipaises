function Nav({ currentPage, totalPages, onNext, onPrev }) {
  return (
    <div className='nav'>
      <button onClick={onPrev}>Retornar</button>
      <p>Página {currentPage} de {totalPages}</p>
      <button onClick={onNext}>Avançar</button>
    </div>
  )
}

export default Nav