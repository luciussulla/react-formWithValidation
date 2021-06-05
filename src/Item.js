
const Item = ({id, name, active, itemHandler})=> {
  // console.log(itemHandler)
  const style = active ? {opacity:.3} : {} 

  console.log(name)
  return (
    <li style={style} onClick={()=>itemHandler(id)}>{name}</li>
  )
}

export default Item