# Front-end test
## Desafio proposto:

Determinada oficina necessita de um processo para
execução de serviço em veículos.
Como pessoa responsável pelo desenvolvimento, você
montará um fluxo e apresentará a sua solução
desenvolvida usando a construção de telas.
A ideia é um cliente chegar em uma oficina, onde um
técnico fará:
- Identificação do cliente
- Via QRCode lido visualizará os dados do
cliente/veículo;
- Será inserido o nome da pessoa que será responsável
pelo serviço a ser executado no veículo
- Se envolver peças será selecionada a peça, onde
automaticamente será lido o valor da peça
- Ao iniciar o serviço (confirmação) deverá ser
administrado internamente a data/hora do inicio e a
data/inicio do termino da execução do serviço.

## Tecnologias utilizadas

- Next.js
- Tailwindcss

## Informações importantes

- Dado o contexto do desafio, o melhor seria desenvolver uma aplicação mobile que
fizesse a leitura de um QRCode real utilizando a camera.
Porém, devido ao tempo, decidi fazer uma aplicação web normalmente e simular essa situação.
- Já que a aplicação não será mobile, ao meu ver seria mais interessante, no mínimo, utilizar o conceito de mobile-first,
porém, como não é algo que eu estou tão acostumado iria me custar algum tempo, então preferi deixar de lado.

## Conclusão

Alguns pontos que não consegui entregar:
- Leitura do QRCode, a leitura do QRCode está mockada e gerando dados aleatórios para criar um novo serviço
- Responsividade
- Tela de detalhe do serviço completa, ficaram faltando algumas formatações e exibir melhor os dados,
assim como a implementação do botão de finalizar serviço
- Algumas validações e formatações gerais, não tive tempo de revisar as formatações de todos os dados, assim como validações de entrada na tela de login

De forma geral, em alguns pontos com certeza fiquei devendo em relação a uma aplicação front-end, já que não é meu forte, mas dei meu melhor dentro do tempo que tive. Mas de qualquer forma, pretendo melhorar esse projeto e implementar outras funcionalidade pois gostei de trabalhar nele.

## TODO list:

- [x] Pages
  - [x] Login page
  - [x] Main page
  - [x] New service page
  - [x] Services list page
  - [x] Service detail page
- [ ] Deploy