# 1910pizzaria

1910 Pizzaria

## Contexto do projeto

Site institucional editorial de uma página (one page) para a 1910 Pizzaria, pizzaria de fermentação natural e forno a lenha em Blumenau, SC. O objetivo não é ser um sistema de pedidos, é apresentar a marca com a força visual e o tom que ela já tem no Instagram, com os canais de contato (WhatsApp e Instagram) levando o visitante pra fora do site. Implementar em React, com CSS bem organizado, porque o site vai ser ajustado e iterado depois.

## Direção visual (system design)

[COLAR AQUI O SYSTEM DESIGN EXTRAÍDO VIA CHATGPT A PARTIR DA REFERÊNCIA DO PINTEREST]

## Dados reais do negócio

Nome: 1910 Pizzaria
Cidade: Blumenau, SC, bairro Velha
Endereço: R. João Pessoa, 965, Velha, Blumenau, SC, 89036-000
Avaliação Google: 4,7 com 157 avaliações
Faixa de preço: R$ 40 a R$ 60 por pessoa
Horário: quarta e quinta das 18h às 22h30, sexta e sábado das 18h às 23h, domingo das 18h às 22h30, segunda e terça fechado
Instagram: @1910pizzaria_, 5.986 seguidores, 187 posts
Diferenciais citados na própria bio do Instagram: fermentação natural, forno a lenha, eventos e congelados

Identidade de marca observada: o próprio dono aparece pessoalmente em vídeos respondendo perguntas do público, e responde avaliações negativas com personalidade forte e direta (um exemplo real: a uma crítica sobre o tamanho da pizza, ele respondeu "Temos 1910 motivos para responder essa avaliação, mas basta um: a verdade"). É uma marca com voz confiante e dono presente, não só um feed bonito.

Depoimentos reais de clientes para usar na seção de avaliações, reescritos em linguagem editorial sem copiar literalmente:
Uma cliente destacou a qualidade dos ingredientes, o ambiente bonito e aconchegante, as opções de drinks e o preço acessível.
Outra cliente destacou a pizza de fermentação natural estilo napolitano como uma das melhores experiências que já teve.
O resumo geral das avaliações do Google aponta ingredientes de alta qualidade, massa de fermentação natural com crosta leve e saborosa, ambiente acolhedor, entrega rápida com a pizza ainda quente, equipe atenciosa e preços justos.

Cardápio, para mostrar uma seleção representativa e não a lista completa de delivery:
Entradas: calzone de burrata com molho pesto
Massas pré assadas, pra quem quer montar em casa
Pizzas salgadas: variedade grande, com destaque pra opções de fermentação natural como Margherita, Burrata, Di Parma, Cogumelo, Quatro Queijos, Calabresa
Pizzas veganas: linha própria completa, incluindo versões vegan de clássicos como caipira, muçarela e pepperoni
Pizzas doces: opções como Nutella, Oreo Dream, chocolate com morango
Carta de bebidas incluindo cervejas, vinho e drinks como Moscow Mule

## Regras obrigatórias

Copy escrita na linguagem real da marca, direta e confiante como o dono se comunica, sem cara de texto gerado por IA.
Proibido usar travessão ou hífen em qualquer parte do texto.
Proibido usar emoji em qualquer parte do texto, inclusive nos CTAs.
Proibido gradiente.
Proibido selos, etiquetas ou chips decorativos.
Não mostrar o @ do Instagram nem o número de WhatsApp por extenso em nenhum lugar, só o ícone com o link.
O ícone do WhatsApp abre a conversa com uma mensagem pré definida, perguntando sobre o cardápio ou reserva.
O botão de WhatsApp do site deve direcionar para o número 554791557148, nunca para o número da pizzaria.
O ícone do Instagram direciona para o perfil oficial @1910pizzaria_.
CTA clara e fixa no mobile, sempre visível durante a rolagem.
Fotos devem respeitar a proporção original, sem espremer imagem vertical em formato horizontal.
Site totalmente responsivo, com a tela travada no mobile contra arrasto lateral.
Sem SEO ou meta description configurados nessa etapa, isso só entra depois da venda.

## Efeitos de interação (motion)

Usar a biblioteca Motion para React (pacote "motion", antigo Framer Motion) pra dois efeitos específicos, inspirados em referência de case de motion design de restaurante.

Efeito 1, no hero: uma foto de pizza em destaque deve se sobrepor parcialmente ao texto principal, criando a sensação de que a foto está na frente de parte da tipografia e atrás de outra parte, não simplesmente foto atrás do texto inteiro. Esse efeito só funciona bem com uma foto de fundo limpo, então escolher entre as fotos enviadas a que tiver menos fundo de ambiente ao redor da pizza, de preferência um close da pizza inteira sem mão ou mesa aparecendo muito nas bordas. Se nenhuma foto servir bem pra isso, usar o efeito mais simples de leve profundidade entre foto e texto, sem forçar o recorte.

Efeito 2, na seção de depoimentos ou na galeria de fotos: cards levemente rotacionados em ângulos diferentes, estilo Polaroid, com animação de entrada disparada quando o elemento aparece na tela durante a rolagem (scroll reveal), usando o whileInView do Motion.

Ambos os efeitos devem ter fallback leve e sem travamento no mobile, priorizando carregamento rápido sobre fidelidade total ao efeito.

## Estrutura de seções

Abertura com a identidade da marca e uma frase de abertura forte, no tom confiante do próprio dono.
Seção sobre a pizzaria: fermentação natural, forno a lenha, o dono presente no dia a dia.
Seção de cardápio com a seleção representativa das categorias, não a lista completa.
Seção de depoimentos com as avaliações reais reescritas.
Seção de localização e horário de funcionamento.
Rodapé com os ícones de Instagram e WhatsApp.

## Fotos

As fotos reais do negócio estão prontas no arquivo fotos-1910-pizzaria.zip, numeradas de foto-01 a foto-23, mais dois arquivos de logo (logo-1910-pizzaria.jpg, fundo branco, e logo-1910-pizzaria-fundo-laranja.png, fundo laranja). 

Para o efeito de motion no hero descrito acima, usar a foto-13-pizza-fatia-queijo-puxando, que tem o fundo mais limpo do lote.

A última foto que eu anexei aqui no chat pode ser a foto da hero, tá bom?

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://wood-fired-stories.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b2493c47-8082-4642-bfdd-d7ed24aa8737).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
