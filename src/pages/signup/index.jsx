import { Container, Form, Background } from "./styles";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { FiLock, FiMail, FiUser } from "react-icons/fi";

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Criar conta" />

        <a href="#">Já tenho conta</a>
      </Form>
    </Container>
  );
}
