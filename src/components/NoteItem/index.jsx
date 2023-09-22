import { FiPlus, FiX } from 'react-icons/fi';

import { Container } from './styles.js';

export function NoteItem({$isnew, value, onClick, ...rest}){
  return(
    <Container $isnew={$isnew}>
      <input 
        type="text"
        value={value}
        readOnly={!$isnew}
        {...rest}
      />

      <button 
        type="button"
        onClick={onClick}
      >
      { $isnew ? <FiPlus /> : <FiX />}
      </button>

    </Container>
  )
}