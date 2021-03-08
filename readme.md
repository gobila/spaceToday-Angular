# Teste Frontend com Ionic da Globaltec
Esse teste visa a integração de uma api da Nasa que retorna todo dia uma nova foto do espaço e outros dados

## Ideia
A ideia inicial do app seria foca apenas fazer a ligação com a api e focar em criar um layout, entretanto sugiram algumas ideia para melhora a experiencia e dar mais funções ao app, como baixar a imagem para a galeria, com um layout mais limpo possível.

## Problemas durante o desenvolvimento
Comecei desenvolvendo com React mas conforme o app tomou forma surgiu a necessidade de mudar para Angular pois a documentação voltada para React não parece finalizada, o que fazia perder muito tempo nos fóruns para corrigir problemas, ou achar componentes compatíveis.

## Problemas conhecidos:
1. Ao clicar em download da imagem é salvo um arquivo corrompido na galaria de fotos, precisa rever a função salveImagem() e convertBlobToBase64;
2. SplashScreen esticada;
3. Em alguns dispositivos com tela menor o layout não se adapta bem, necessita revisar o css e mais fazer mais teste em dispositivos reais;
4. Necessário refatora o código, para que o home.ts não fique com mais responsabilidades que o necessário.
