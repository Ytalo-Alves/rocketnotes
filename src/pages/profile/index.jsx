import { FiArrowLeft, FiCamera, FiLock } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";
import { Input } from '../../components/input'
import { FiUser, FiMail } from "react-icons/fi";
import { Button } from "../../components/button";

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/Ytalo-Alves.png" alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera/>

            <input
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>

      <Input placeholder="Nome" type="text" icon={FiUser} />
      <Input placeholder="E-mail" type="text" icon={FiMail} />

      <Input placeholder="Senha atual" type="password" icon={FiLock} />
      <Input placeholder="Nova senha" type="password" icon={FiLock} />

      <Button title="Salvar Alterações"/>
      </Form>
    </Container>
  );
}
