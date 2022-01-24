<h1> Netflix</h1>
<h3> Projeto realizado para o bootcamp do banco Inter - Concluído - 24/01/2022 </h3>

<!-- TABLE OF CONTENTS -->
<details>
  <summary name="indice">Índice</summary>
  <ol>   
    <li><a href="#projeto">Sobre o projeto</a></li>
    <li><a href="#navbar">Navbar</a></li>
    <li><a href="#main">Main(Backdrop)</a></li>
    <li><a href="#carrousel">Carrousel</a></li>
    <li><a href="#conclusão">Conclusão</a></li>
  </ol>
</details>
<h2 name="projeto"> Sobre o projeto  </h2>
Fiz este projeto em 3 dias, sem saber nada de javascript. Foram momentos de muita pesquisa, aprendizado e manutenção de código. Estou orgulhoso de mim mesmo por aprender javascript e entender o que é uma api, e no segundo dia já fazer fetch e consumir a api e integrá-la no meu frontend. E eu até então só fazia sites com html e css e achava bom pois tinha medo de aprender javascript por achar difícil. Agora só tenho uma coisa a dizer. "I miss you javascript" :smiling_face_with_three_hearts:  
<p align="right">(<a href="#indice">voltar ao indice</a>)</p>

Comentários sobre o meu próprio projeto. Fiz melhorias e piorias em relação ao Netflix. As melhorias foram coisas que eu não concordei e quis fazer do meu jeito e as piorias foram coisas simples que eu poderia fazer igual e quis mudar pra ser diferente e pode não ter ficado tão bom quanto o original :laughing:  
<p align="right">(<a href="#indice">voltar ao indice</a>)</p>

<h2 name="navbar"> Navbar  </h2>
A Navbar do Netflix é muita estranha, parece que fizeram no Bootstrap e meteram um danê-se, fica assim mesmo. Na minha família tenho pessoas com problema de visão e a Navbar não fica bem visível em pequenos dispositivos para elas. Então como o CSS não tem `min-width` como outros elementos, fiz um clamp nas fontes. Deixei o logo com um min-width pra não escalonar tanto pois é a marca principal do site, ela não pode sumir como some no original. E tomei vergonha na cara e escalonei o ícone de perfil que no original escalona mal, chega a ser absurdo de proporção em relação aos elementos ao redor dele. Fiz as animações das setas nos menus, botão de search e na transparência da Navbar quando o scrollbar move e como pioria fiz glassmorphism nos menus. Deixou o site um pouco travado mas estou ciente disso, sou balaqueiro mesmo. :laughing:  
Fiz com que a Navbar ficasse um pouco maior que o padrão normal para pequenos mobiles pensando na minha família :smiling_face_with_three_hearts: 
<p align="right">(<a href="#indice">voltar ao indice</a>)</p>

<h2 name="main"> Main (Backdrop) </h2>
Fiz integração com o site The Movie Database https://www.themoviedb.org/ pois eles tem api pública e uma boa documentação. Tive que estudar muito para entender o que são promises no javascript pra usar o fetch mas quando foi, era só alegria. Puxei uma lista de 20 filmes da top rated deles e integrei o filme dois deles no meu Main. O primeiro era um filme de baixo orçamento com uma arte pobre e optei por fazer a do segundo que tinha uma arte descente. O que senti falta é que o The Movie Database não tinha no seu acervo o logo dos filmes para botarmos nos posters, eles só retornavam o nome do título e a imagem (outras coisas também, mas não o logo). Então resolvi criar um efeito em CSS para receber o nome do título. Ficou showwww.  
Outra coisa que faltou era um breve resumo do filme, como a Netflix tem, para ser usada no botão "Mais Informações". O The Movie Database só tinha a descrição do filme que era gigante e como fiz uma integração para receber essas informações, dependendo do filme a descrição variava muito de tamanho e o campo destinado a esta parte ficava muito irregular. Criei então uma função para detectar o primeiro parágrafo e jogar só ele no meu frontend. Foi sucesso total, pois o tamanho era próximo a de outros filmes testados. Essa foi a parte que mais brilhou no meu frontend 👏  
<p align="right">(<a href="#indice">voltar ao indice</a>)</p>

<h2 name="carrousel"> Carrousel </h2>
Eu estava criando o meu próprio Carrousel, ia ser um desafio pessoal pois eu amo desafios, mas um colega me disse uma vez, pra que reinventar a roda? Tanta gente usa Bootstrap e templates, faz o mesmo :thinking:  
Com tristeza no coração peguei um template na internet. Só não fiquei totalmente triste porque tive que adaptar quase todo ele pros meus fins e quase senti que eu estava criando, eu mesmo, o Carrousel. Ele tinha sido feito em SCSS e eu não manjo nada de SCSS, mas vi que a semântica não é drasticamente tão diferente do CSS, então resolvi transformar tudo pra CSS só pelo desafio mesmo de manter o padrão do meu trabalho que era tudo CSS e estudar o SCSS. E por fim como esperado, fiz a integração no Carrousel.
<p align="right">(<a href="#indice">voltar ao indice</a>)</p>

<hr name="conclusão">
Foi bem divertido fazer o projeto, queria ter feito mais coisas mas a essência já está montada. Fazer mais, seria fazer mais do mesmo. Agora, rumo à outros projetos 💪  

<h3>Tecnologias usadas:</h3>  
#css
<br>
#js
<p align="right">(<a href="#indice">voltar ao indice</a>)</p>

