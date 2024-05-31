// local reviews data
const reviews = [
    {
      id: 1,
      name: 'Ash Ketchum',
      nomejapones: 'Satoshi',
      img: 'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2022/12/pokemon-encerra-a-historia-de-ash-e-pikachu-apos-25-anos-e-introduz-novos-protagonistas.jpg',
      text: `Ash é o personagem principal do anime.
      Ao completar 10 anos, ele parte de Pallet levando o Pikachu ganho pelo profº Carvalho e vai em jornada para ser tornar o melhor Mestre Pokémon de todos os tempos!
      Para alcançar o seu objetivo, Ash está viajando por diversas regiões, batalhando em ginásios, conquistando insígnias e participando de Ligas Pokémon. Ele é um bom treinador que ama muito todos os seus Pokémon, tornado-o uma pessoa de bom coração. Muitas vezes Ash precisa bancar o herói e enfrentar diversões vilões, especialmente a Equipe Rocket que vive perseguindo o seu poderoso Pikachu.
      Ele já detém o título de campeão da Liga Laranja, da Liga Alola e da Batalha da Fronteira. Na liga de Kanto Ash ficou no top 16; nas ligas de Johto, Hoenn e Unova ficou entre os 8 melhores; na liga de Sinnoh foi semi-finalista e na liga Kalos foi vice-campeão. Atualmente ele se tornou o campeão mundial.`
    },
    {
      id: 2,
      name: 'Misty',
      nomejapones: 'Kasumi',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqvvQuw55mPqWA4qsxyNH_Gs7Qa_bk1nT59w&s',
      text: `Misty é a atual líder do Ginásio da Cidade de Cerulean. Ela é considerada a irmã sensacional mais jovem.
      Entrou na história logo no primeiro episódio, quando Ash “sem-querer” rouba a bicicleta dela. A partir disso, ela segue nosso treinador em sua jornada esperando que ele pague a bicicleta dela.
      O que acontece é que durante esse tempo, ela demonstra ter criado sentimentos maiores que uma simples amizade com Ash.
      Misty é uma ruiva de personalidade muito forte, mas mesmo assim é muito meiga e ama acima de tudo os Pokémon aquáticos. Em contra partida, odeia os Pokémon insetos.
      Depois de sua jornada em Kanto e Johto em busca de pokémons aquáticos, Misty recebe sua bicicleta da enfermeira Joy e volta a ser líder de ginásio a maior parte do tempo, enquanto suas irmãs não estão no ginásio.`,
    },
    {
      id: 3,
      name: 'Tracey Sketchit',
      nomejapones: 'Kenji',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDgxnqUMJO7dUZRQi78r1aauL0xaOwwxtefg&s',
      text: `Tracey é um observador pokémon, seu sonho era conhecer o profº Carvalho. Ele sempre está fascinado ao ver diferentes pokémons. Ele gosta de desenhar os pokémons interessantes que observa.
      Tracey encontra Ash e Misty, quando descobre que eles conhecem profº Carvalho, explica que ele é seu fã e começa a seguir jornada com eles. Quando chega em Pallet, ele decide ficar com profº Carvalho para aprender mais sobre pokémon e servir como assistente para ele. Às vezes costuma a sair e encontrar Misty por um tempo.`,
    },
    {
      id: 4,
      name: 'Brock',
      nomejapones: 'Takeshi',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZuZf1JRNtFT-nqAYDKRKkVg5IKt_BLEQlVA&s',
      text: `Brock é o melhor amigo de Ash e já foi por um bom tempo Líder do Ginásio da Cidade de Pewter.
      Ele possui um passado muito triste, onde seu pai o abandona junto com sua mãe e seus vários irmãos, só que depois sua mãe acaba morrendo e Brock como irmão mais velho toma conta de tudo: seus irmãos e o ginásio.
      Apesar disso, o grande sonho de Brock é se tornar o melhor criador Pokémon do mundo e depois que seu pai volta ao ginásio, ele segue viagem junto com Ash e Misty atrás desse sonho. Ele até ficou uns tempos na ilha Valencia junto com a Profª Ivy para aprender mais sobre pokémons.
      A especialidade de Brock são os Pokémon pedra, mas isso não o impediu de capturar Pokémon de outros tipos.
      Brock apesar de ser um bom amigo e ótima pessoa tem um ponto fraco: ele é mulherengo. Não pode ver uma mulher bonita e logo já vai se jogando, principalmente nas Enfermeiras Joy e Oficiais Jenny. No começo, sempre que acontecia isso Misty chegava e dava um puxão de orelha nele, depois foi Max que puxava a orelha e mais recentemente, depois de ter conseguido um Croagunk, sempre que Brock tem uma queda por uma garota Croagunk pula fora de sua pokébola e dá um golpe em Brock, que cai e é arrastado pelo pokémon.
      Depois que sua Happiny evoluiu em uma Chansey Brock desenvolveu um novo objetivo: o de se tornar um Médico Pokémon. Atualmente Brock está morando em seu ginásio em Pewter. Forrest, seu irmão mais velho, foi oficializado líder de ginásio de Pewter, enquanto Brock continua com seu sonho e estudando muito para ser médico.`,
    },
  ];

  // selecionando os itens
  const img = document.getElementById('person-img');
  const nome = document.getElementById('nome');
  const nomejapones = document.getElementById('nomejapones');
  const info = document.getElementById('info');

  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");

  // Definindo o item inicial

  let currentItem = 0;

  // carregando o item inicial
  window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
  })

  // mostrar pessoa baseado no item

  
  function showPerson(atual) {
    const item = reviews[atual];
    img.src = item.img;
    nome.textContent = item.name;
    nomejapones.textContent = item.nomejapones;
    info.textContent = item.text;
  }

  // mostrar proxima pessoa por indice

  nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1 ){
      currentItem = 0;
    }
    showPerson(currentItem);
  })

  // mostrar pessoa anterior por indice

  prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
      currentItem = reviews.length;
    }
    showPerson(currentItem);
  })

  // mostrar pessoa randomica

randomBtn.addEventListener("click", function(){
  currentItem = Math.floor(Math.random()*reviews.length); // Vamos ter um indice de numero aleatorio
  showPerson(currentItem);
})