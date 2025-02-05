import { Container, Profile, Logout } from './style'
import {RiShutDownLine} from 'react-icons/ri'

export function Header(){
  return (
    <Container>
      <Profile>
        <img src="https://github.com/Ytalo-Alves.png" alt="Foto do usuário" />

        <div>
          <span>Bem-Vindo</span>
          <strong>Ytalo Alves</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}