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

## TODO list:

- [ ] Pages
  - [x] Login page
  - [x] Main page
  - [ ] New service page
  - [ ] Services list page
  - [ ] Service detail page
- [ ] Deploy