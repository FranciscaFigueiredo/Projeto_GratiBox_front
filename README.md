# GratiBox

<p align="center" >
<img src="https://github.com/driven-exercises/Projeto-GratiBox/blob/a09f21f55810dd55c09230dd88ed027151e81043/image05.webp" width="300" height="300"/>
</p>


## Problema

Visando estimular um estilo de vida mais saudável você idealizou uma startup que entrega box com produtos saudáveis e de #gratidão. Os clientes poderão escolher entre dois planos de assinatura recorrente, semanal ou mensal. Cada box contém produtos sortidos como chás, produtos orgânicos, incensos. Os clientes não podem escolher os produtos e não sabem o que será enviado em cada box. 😇


## Requisitos
- O front-end deverá ser uma Single Page Application em React, que se comunique com o back-end através de API;
- O back-end da aplicação deverá ser feito em Node.js;
- O banco de dados deverá ser Postgres;

- **Login**
    
    Após o login, existem dois possíveis caminhos:
    
    Se o cliente tiver assinado um plano ele deverá visualizar informações do seu plano:
    
    - Tipo de plano
    - Data da assinatura
    - Dia de entrega recorrente
    - Visualizar as datas de entrega para mês atual
        - Plano Mensal: Se o dia escolhido cair em um final de semana mostrar o próximo dia útil
        - Plano Semanal: Mostrar os dias (dd/mm/aaaa) que serão feitas na entrega. As entregas são feitas nos feriados.
    
    Se o cliente ainda não tiver assinado um plano ele poderá selecionar um dos planos e finalizar, escolher a data de entrega e finalizar a compra.
    
    - Para a data de entrega o cliente poderá escolher uma entre as opções:
        - Mensal: Dia 01, Dia 10, Dia 20.
        - Semana: Segunda, Quarta, Sexta.

- **Assinar**
    - A assinatura é dividia em duas páginas, send a primeiro dados do plano e a segunda dados de entrega.
        - Dados do Plano
            - Tipo do Plano:
                - Semanal
                - Mensal
            - Entrega:
                - Mensal: Dia 01, Dia 10, Dia 20.
                - Semanal: Segunda, Quarta, Sexta.
            - Quero Receber: O cliente poderá escolher entre uma a três opções
                - Chás
                - Incensos
                - Produtos orgânicos
        - Dados de Entrega
            - Nome completo
            - Endereço de entrega
            - CEP
            - Cidade
            - Estado

## Layout 

https://www.figma.com/file/wHTsMeg2oVdW96ptraU2Gb/GratiBox?node-id=0%3A1

## Observações

- O projeto deverá estar em um repositório público, com um README detalhado sobre o projeto e como executa-lo;
- Use feature branch
- Use eslint/prettier
- Utilize variáveis de ambiente
- A API deve possuir testes de integração em todas as rotas
- Faça ao menos um teste E2E com Cypress
- Forneça um dump do banco de dados
- Os recurcos (imagens e cores estão nesse repositório)

## Bônus


**Bônus 1: Avaliar**
    - O cliente poderá visualizar uma lista de entregas realizadas e avalia-las de duas formas:
</br></br>
    - Positivo 🙏 </br></br>
    - Negativo 👎: </br>  
    - Para avaliações negativas deverá abrir uma nova página onde o cliente poderá marcar múltiplos item e adicionar um comentário.
    - Para esse bônus você pode simular no banco dados de entregas ocorridas, foque apenas na avalição.


**Bônus 2: API Correios**
- Para esse bônus você poderá usar uma lib que retorna os dados do endereço com base no CEP, sendo assim, na sua aplicação quando o cliente digitar o CEP deve preencher os dados de endereço, cidade e estado automagicamente.
    
    [https://github.com/BrasilAPI/cep-promise](https://github.com/BrasilAPI/cep-promise)
