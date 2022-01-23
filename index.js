function handlePageClick(elt) {
  const pageElts = document.getElementsByClassName('page-link')
  for (const pageElt of pageElts) {
    pageElt.style.color = '#e5e5e5'
  }
  elt.style.color = 'black'
}
