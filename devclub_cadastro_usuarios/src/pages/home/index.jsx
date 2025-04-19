import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {
  

  return (

      <div className='container'>
        <form>
          <h1>Cadstro de Usuarios</h1>
          <input type="text" name='nome' />
          <input type="number" name='idade' />
          <input type="email" name='email' />
          <button type='button'>Cadastrar</button>
        </form>

        <div>
          <div>
            <p>Nome:</p>
            <p>Idade:</p>
            <p>Email</p>
          </div>
          <button>
            <img src="{Trash}" alt="" />
          </button>
        </div>
      </div>

     
      
    
  )
}

export default Home
