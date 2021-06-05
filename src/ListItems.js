import Item from './Item'

const ListItems = ({allItems, changeStatus, count})=> {
  const items = allItems.map( item => <Item key={item.id} id={item.id} name={item.txt} active={item.active} itemHandler={changeStatus} />)
  return (
    <>
    <h1>Twoje zamowienie</h1>
    <ul>
      {items}
    </ul>
    </>
  )
}

export default ListItems