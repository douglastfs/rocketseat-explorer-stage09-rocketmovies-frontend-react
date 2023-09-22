import { Container, Profile } from './styles';
import { Input } from '../../components/Input';
import { FiSearch } from 'react-icons/fi';

export function Header() {
  return(
    <Container>
      <main>
        <h1>RocketMovies</h1>
        
        <Input 
          placeholder="Pesquisar pelo título"
          type="text"
          icon={FiSearch}
        />

        <Profile to="/profile">
          <div>
            <strong>Douglas Tenório</strong>
            <a href="#"><span>sair</span></a>
          </div>
          <img src="https://github.com/douglastfs.png" alt="Foto do usuário" />
        </Profile>
      </main>

    </Container>
  )
}