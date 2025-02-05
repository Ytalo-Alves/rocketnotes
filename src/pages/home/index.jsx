import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../components/header";
import { ButtonText } from "../../components/buttontext";
import { Section } from "../../components/section";
import { Input } from "../../components/input";
import { FiPlus, FiSearch } from "react-icons/fi";
import { Note } from "../../components/note";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>rocketnotes</h1>
      </Brand>

      <Header></Header>

      <Menu>
        <li>
          <ButtonText title="todos" isActive />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Node" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquise pelo titulo" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <Note data={{ title: "React", tags: [{id: '1', name:'react'}, {id: '2', name:'node'}] }} />
        </Section>
      </Content>

      <NewNote>
        <FiPlus />
        Criar Notas
      </NewNote>
    </Container>
  );
}
