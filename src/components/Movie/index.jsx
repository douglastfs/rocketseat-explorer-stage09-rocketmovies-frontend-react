import { Container } from './styles';
import { Tag } from '../../components/Tag';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export function Movie({data, ...rest}){
  return(
    <Container {...rest}>
      <h2>{data.title}</h2>
      <div className="rate">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
      </div>
      <p>{data.description}</p>
      { 
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} /> )
          }
        </footer>
      }
    </Container>
  )
}