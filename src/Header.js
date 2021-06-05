const Header = ({items})=> {
  const activeItems = items.filter(item => item.active === true)
  const number = activeItems.length
  
  return(
    <header>
      <h2>WIelkosc zamowienia: {activeItems.length}</h2>
      {/* <h2>Do zaplaty: {number ? 1 : "zero"} złotych</h2> */}
    </header>
  )
}

export default Header