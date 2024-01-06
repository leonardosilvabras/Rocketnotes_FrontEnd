import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Container, Form } from "./styles";
import { ButtonText } from "../../components/ButtonText";

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText title="Voltar" />
          </header>

          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />
        </Form>
      </main>
    </Container>
  );
}
