import { Container, Form, Avatar } from './styles';
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export function Profile(){
  return(
    <Container>

      <header>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
      </header>

      <Form>
        <Avatar>
          <img 
            src="https://github.com/douglastfs.png" 
            alt="Foto do usuário" 
          />

          <label htmlFor="avatar">
            <FiCamera />
            <input 
              type="file" 
              id="avatar" 
            />
          </label>
        </Avatar>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />
        <Input 
          placeholder="E-mail"
          type="email"
          icon={FiMail}
        />
        <Input 
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />
        <Input 
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Salvar" disabled/>

      </Form>


    </Container>
  )
}