const Header = () => {
  const name = 'Naz'
  const x = true
  
  return (
<header>
  <h1>Task Tracker</h1>
  <h2>Hi {name } </h2>
  <h2>Teneary  Operator {x ? 'yes' : 'no'} </h2>
</header>
  )
}

export default Header 