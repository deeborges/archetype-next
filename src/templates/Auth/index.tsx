import { Text } from 'components/Text';
import {
  Container,
  Banner,
  Footer,
  ContentForm,
  ContentFormWrapper,
  Wrapper
} from './styled';

type AuthProps = {
  children: React.ReactNode;
};

const Auth = ({ children }: AuthProps) => (
  <Wrapper>
    <Container>
      <Banner>
        <div></div>
        <div>
          <Text type="body-1">fase 01</Text>
          <Text fontSize="xl_5">
            vamos <br />
            <strong>
              criar <br /> sua conta
            </strong>
          </Text>
        </div>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDEiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAyMDEgMzgiPgogICAgPGcgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMzMuMjggOC43NEwyMS42OTggMzAuNDZhNC4yMzcgNC4yMzcgMCAwIDEtMy43MzggMi4yNDZjLS42OSAwLTEuMzgtLjE3OS0xLjk5My0uNTA4LTIuMDYtMS4xMDQtMi44NC0zLjY4Ni0xLjczNi01Ljc1NGwxMS41NzgtMjEuNzJhNC4yMyA0LjIzIDAgMCAxIDMuNzQtMi4yNSA0LjI0MyA0LjI0MyAwIDAgMSA0LjA1IDMuMDI4IDQuMjU0IDQuMjU0IDAgMCAxLS4zMTkgMy4yMzdNMTIuMDIxIDI2LjA4OEwyLjY5NSA4LjU5YTQuMjM4IDQuMjM4IDAgMCAxLS4zMi0zLjI0IDQuMjA1IDQuMjA1IDAgMCAxIDIuMDYtMi41MTRjLjYwOS0uMzM2IDEuMjk5LS41MDcgMS45ODktLjUwNyAxLjU3IDAgMyAuODU5IDMuNzQgMi4yNDZsNi42MiAxMi40MTctNC40ODYgOC40MTZjLS4xMTkuMjItLjE5LjQ1MS0uMjc3LjY3OU0zNS42OTYgNC44NTVhNi4zOTUgNi4zOTUgMCAwIDAtMy4xMTctMy44MTEgNi4zNTQgNi4zNTQgMCAwIDAtMy4wMy0uNzcgNi40MjQgNi40MjQgMCAwIDAtNS42NyAzLjQxTDE4LjAyNiAxNC42NmwtNS45My0xMS4xMjdBNi40MTggNi40MTggMCAwIDAgLjI4IDQuNzEyYTYuNDA4IDYuNDA4IDAgMCAwIC40ODYgNC45MTRsMTEuMDk4IDIwLjgxOGMwLS4wMDcgMC0uMDA3LS4wMDMtLjAxMmE2LjQxIDYuNDEgMCAwIDAgMy4wNzEgMy43MSA2LjQxMiA2LjQxMiAwIDAgMCA4LjcwMS0yLjY0MkwzNS4yMTEgOS43NzRhNi40MjYgNi40MjYgMCAwIDAgLjQ4NS00LjkyTTUyLjgzIDkuNjE4djIuNzEyaC4wOTZDNTQuNTU0IDEwLjExIDU2LjY5MiA5IDU5LjMzOCA5YzIuODc2IDAgNC44NjguODcgNS45ODcgMi42MTggMS4xMTYgMS43NDMgMS42NzUgNC4xMSAxLjY3NSA3LjFWMzJoLTMuODI4VjE5LjM3OWMwLTEuMDc1LS4wNDItMS45Ni0uMTItMi42NGE4LjE3NyA4LjE3NyAwIDAgMC0uNTUzLTIuMDk2IDIuOTcgMi45NyAwIDAgMC0xLjQ1OS0xLjU5N2MtLjY4Ni0uMzQ4LTEuNTU2LS41MjctMi42MS0uNTI3LTEuMDIgMC0xLjg5LjE5NS0yLjYwOS41NzYtLjcxOC4zOC0xLjI2Ny44NDItMS42NTIgMS4zOC0uMzgxLjU0My0uNjc1IDEuMjM4LS44ODMgMi4wOTdhMTQuMjc0IDE0LjI3NCAwIDAgMC0uMzg1IDIuMzA3IDM3Ljg1OCAzNy44NTggMCAwIDAtLjA3MiAyLjUwNFYzMkg0OVY5LjYxOGgzLjgzek04Ny44MyAxNC4wMjJjLTEuNTIxLTEuNjI5LTMuNDY3LTIuNDQ2LTUuODI5LTIuNDQ2LTIuMzY1IDAtNC4zMS44MTctNS44MyAyLjQ0Ni0xLjUyNCAxLjYzMy0yLjI4NSAzLjYyNS0yLjI4NSA1Ljk3NSAwIDIuMzU3Ljc2IDQuMzUgMi4yODYgNS45NzggMS41MiAxLjYzNCAzLjQ2NCAyLjQ0NCA1LjgzIDIuNDQ0IDIuMzYxIDAgNC4zMDctLjgxIDUuODI3LTIuNDQ0IDEuNTIzLTEuNjI3IDIuMjg0LTMuNjIxIDIuMjg0LTUuOTc4IDAtMi4zNS0uNzYtNC4zNDItMi4yODQtNS45NzVtMi42NzIgMTQuNDk2Qzg4LjE2OSAzMC44NDMgODUuMzM3IDMyIDgyIDMyYy0zLjMzNyAwLTYuMTcxLTEuMTU3LTguNTAyLTMuNDgyQzcxLjE2NiAyNi4xOTYgNzAgMjMuMzcgNzAgMjAuMDQ4YzAtMy4zNTUgMS4xNjYtNi4yMDMgMy40OTktOC41NDNDNzUuODI5IDkuMTY1IDc4LjY2NCA4IDgyIDhjMy4zMzYgMCA2LjE2OCAxLjE2NCA4LjUgMy41MDVDOTIuODMzIDEzLjg0NSA5NCAxNi42OTMgOTQgMjAuMDQ5YzAgMy4zMi0xLjE2NyA2LjE0Ny0zLjUgOC40N005OC4zNDMgOWw2LjY4MSAxNS4xMzhMMTExLjcwNyA5SDExNmwtMTAuOTc2IDI0TDk0IDl6TTEyMC4wMDEgMTcuNTMxaDEzLjA2NGMtLjI0NS0xLjY3Ni0uOTc0LTMuMDktMi4xODMtNC4yMzEtMS4yMS0xLjE1LTIuNjItMS43MjMtNC4yMzItMS43MjNzLTMuMDcuNTg1LTQuMzcyIDEuNzQ0Yy0xLjMgMS4xNjQtMi4wNjEgMi41NjUtMi4yNzcgNC4yMW0xNi45NzQgMy4yOWgtMTcuMTZjLjAzIDIuMTMuNzEyIDMuOTI4IDIuMDQ0IDUuMzk3IDEuMzM0IDEuNDY4IDMuMDQgMi4yMDEgNS4xMTggMi4yMDEgMi43NTYgMCA0Ljk3NC0xLjU2IDYuNjQ5LTQuNjlsMy4xNiAxLjg4OGMtMi4yIDQuMjU1LTUuNTY1IDYuMzgzLTEwLjA5IDYuMzgzLTMuMTkzIDAtNS43NzYtMS4xMTgtNy43NDMtMy4zNTktMS45Ny0yLjI0Ny0yLjk1My01LjAyOS0yLjk1My04LjM0OSAwLTMuNTE2Ljk0OC02LjQ0NyAyLjgzNy04Ljc4NyAxLjg5LTIuMzQgNC40ODEtMy41MDUgNy43NjUtMy41MDUgMy4zODIgMCA2IDEuMjUgNy44NiAzLjc0NyAxLjg2MSAyLjUwMiAyLjY5OCA1LjUyNSAyLjUxMyA5LjA3M00xNDQuNzIgOS42MTh2Mi40MjhoLjA5M2MuNzc0LTEuMDQ3IDEuNDk3LTEuODE4IDIuMTY1LTIuMzEyLjY2NS0uNDg5IDEuNTU2LS43MzQgMi42NzMtLjczNCAxLjAyNCAwIDIuMTQuMzQ4IDMuMzQ5IDEuMDQzbC0xLjc3IDMuNDhjLS45NTktLjY2OC0xLjcwMy0xLjAwNC0yLjIyOS0xLjAwNC0yLjg1MyAwLTQuMjggMi43NjQtNC4yOCA4LjI4N1YzMkgxNDFWOS42MThoMy43MnpNMTY0LjUyNiAxMS42MmMtMi4xOSAwLTMuOTkuODEtNS4zOTUgMi40MTgtMS40MDUgMS42MDgtMi4xMDcgMy41MjQtMi4xMDcgNS43NDkgMCAyLjM0Ni42NzUgNC4zNzkgMi4wMzQgNi4wODYgMS4zNTggMS43IDMuMTk1IDIuNTU0IDUuNTE4IDIuNTU0IDIuNDE4IDAgNC4zMDUtLjgyNiA1LjY2Mi0yLjQ4MyAxLjM1OS0xLjY1NyAyLjAzNi0zLjY5NyAyLjAzNi02LjExMyAwLTIuMzQ1LS43MDMtNC4zMDUtMi4xMS01Ljg2NC0xLjQwNi0xLjU2NC0zLjI4NS0yLjM0Ny01LjYzOC0yLjM0N3ptNy41NSAxOS43NTN2LTMuMTM4aC0uMDk3Yy0xLjk2IDIuNTExLTQuNjEgMy43NjUtNy45NDMgMy43NjUtMy4yNzIgMC01LjkyOC0xLjE3LTcuOTY5LTMuNTIzLTIuMDQzLTIuMzUxLTMuMDY3LTUuMTUtMy4wNjctOC40MDIgMC0zLjM0OSAxLjAxNi02LjE5IDMuMDQyLTguNTI2IDIuMDI3LTIuMzM2IDQuNzA4LTMuNDk3IDguMDQxLTMuNDk3IDMuMjcgMCA1LjkwMyAxLjI4MyA3Ljg5NiAzLjg2aC4wOTdWMEgxNzZ2MzEuMzczaC0zLjkyNHpNMTg0IDE3LjUzMWgxMy4wNjZjLS4yNDYtMS42NzYtLjk3Ni0zLjA5LTIuMTg0LTQuMjMxLTEuMjA5LTEuMTUtMi42Mi0xLjcyMy00LjIzMi0xLjcyMy0xLjYxMyAwLTMuMDcuNTg1LTQuMzcyIDEuNzQ0LTEuMzAxIDEuMTY0LTIuMDYyIDIuNTY1LTIuMjc4IDQuMjFtMTYuOTc1IDMuMjloLTE3LjE2Yy4wMyAyLjEzLjcxIDMuOTI4IDIuMDQ1IDUuMzk3IDEuMzMyIDEuNDY4IDMuMDM3IDIuMjAxIDUuMTE3IDIuMjAxIDIuNzU2IDAgNC45NzQtMS41NiA2LjY0OS00LjY5bDMuMTYgMS44ODhjLTIuMiA0LjI1NS01LjU2NSA2LjM4My0xMC4wOTEgNi4zODMtMy4xOTIgMC01Ljc3NC0xLjExOC03Ljc0Mi0zLjM1OS0xLjk3LTIuMjQ3LTIuOTUzLTUuMDI5LTIuOTUzLTguMzQ5IDAtMy41MTYuOTQ3LTYuNDQ3IDIuODM2LTguNzg3IDEuODktMi4zNCA0LjQ4Mi0zLjUwNSA3Ljc2Ny0zLjUwNSAzLjM4IDAgNiAxLjI1IDcuODU4IDMuNzQ3IDEuODYyIDIuNTAyIDIuNyA1LjUyNSAyLjUxNCA5LjA3MyIvPgogICAgPC9nPgo8L3N2Zz4K"
          alt=""
        />
      </Banner>

      <ContentFormWrapper>
        <ContentForm>
          <Text fontSize="xl_2" color="galaxy">
            muito&nbsp;
            <Text fontSize="xl_2" tag="strong" weight="600" color="galaxy">
              prazer :)
            </Text>
          </Text>
          <Text type="body-1" color="gray500">
            para fazer sua simulação precisamos criar a sua conta.
          </Text>
          <Text type="body-1" color="gray500" marginBotton="2rem">
            É rapidinho!
          </Text>
          {children}
        </ContentForm>
      </ContentFormWrapper>
    </Container>
    <Footer>
      <Text fontSize="xsmall">
        Noverde.com.br pertence à Noverde Tecnologia e Pagamentos S/A - CNPJ nº
        23.698.063/0001-69("Noverde"). A Noverde não é uma instituição
        financeira e não realiza operações de crédito diretamente, mas como
        correspondente bancário da (i) Lecca - Crédito, Financiamento e
        Investimento S.A. inscrita no CNPJ sob o nº 07.652.226/0001-16 ("Lecca")
        ou da (ii) Money Plus Sociedade de Crédito ao Microempreendedor e à
        Empresa de Pequeno Porte, inscrita no CNPJ sob o n° 11.581.339/0001-45
        ("BMP" nos termos do artigo 2º, da Resolução CMN nº 3.954, de 24 de
        fevereiro de 2011.Os correspondentes bancários são empresas contratadas
        por instituições financeiras e demais instituições autorizadas pelo
        Banco Central do Brasil para a prestação de serviços de atendimento aos
        clientes e usuários dessas instituições. Entre os correspondentes mais
        conhecidos encontram-se as lotéricas e o banco postal.A Noverde não
        cobra nenhum valor antecipado para aprovar ou depositar seu crédito.
        Caso você seja contatado por alguém, se passando pela Noverde, e
        cobrando qualquer valor antecipado, encerre o contato imediatamente e
        entre em contato com a gente. Você pode estar sendo vítima de uma
        tentativa de fraude.A análise de crédito e cálculo das taxas de juros
        dependem de diversas informações disponibilizadas por você, tais como
        dados pessoais, valor solicitado e número de parcelas. Toda avaliação
        será realizada conforme a política de crédito da Lecca. Antes da
        contratação de qualquer serviço através da Noverde, você receberá todas
        as condições e informações relativas ao empréstimo de forma completa e
        transparente, incluindo impostos incidentes (IOF) e o custo efetivo
        total (CET) da operação. O atraso ou não pagamento de prestações do
        contrato de empréstimo pessoal pode ter consequências legais, tais como
        a inclusão de nome nos cadastros dos órgãos de proteção ao crédito, o
        protesto de títulos e o ajuizamento de ações de cobrança.Prazo de
        Pagamento: O período mínimo é de 3 meses e o máximo 12 meses. Taxa de
        juros: A taxa varia entre 7,9% e 18,9% ao mês (149% a 698% ao ano).
        Exemplo de um empréstimo: R$ 1.500,00, para pagar em 12 meses e taxa de
        juros de 10,15% ao mês (219% ao ano). Total de 12 parcelas de R$ 221,77.
        Valor total a pagar igual a R$ 2.661,18.Copyright 2021. Noverde App.
        Todos os direitos reservados.
      </Text>
    </Footer>
  </Wrapper>
);

export default Auth;
