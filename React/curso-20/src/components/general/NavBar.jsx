import Button from "./Button";

function NavBar(){
  return(
    <nav className="flex justify-between items-center px-8 py-2 text-white bg-blue-600">
      <div>
        <p>Logo</p>
      </div>
      <div className="flex items-center gap-4">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <Button texto="Acceder" estilos="text-white bg-blue-300 "></Button>
      </div>
    </nav>
  )
}

export default NavBar;