function Nav({ currentPage, totalPages, onNext, onPrev }) {
  return (
    <div>
      <button onClick={onPrev}>Retornar</button>
      <button onClick={onNext}>Avançar</button>
      <p>Page {currentPage} of {totalPages}</p>
    </div>
  )
}

export default Nav