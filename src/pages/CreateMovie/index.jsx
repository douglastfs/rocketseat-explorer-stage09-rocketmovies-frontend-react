import { Container} from './styles';
import { Header } from '../../components/Header';
import { FiArrowLeft } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export function CreateMovie(){
  return (
    <Container>
      <Header />

      <main>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>

        <h2>Novo filme</h2>

        <div className='titulo'>
          <Input 
            placeholder="Título"
            type="text"
          />
          <Input
            max="5"
            min="0"
            placeholder="Sua nota (de 0 a 5)"
            type="number"
          />
        </div>

        <Textarea 
          placeholder="Observações"
        />

        <Section title="Marcadores">
          <div className="tags">
            <NoteItem value="React" />
            <NoteItem $isnew placeholder="Novo Marcador"  />
          </div>
        </Section>

        <div className="buttons">
          <Link className="excluir" to="/">
            Excluir filme
          </Link>

          <Button title="Salvar alterações"/>
        </div>

        

            
          

        






      </main>



    </Container>
  )
}