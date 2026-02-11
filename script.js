const secoes = [
  {
    titulo: "Taxas e anestesias",
    itens: [
      ["Taxa de Sala", 550],
      ["Consulta", 880],
      ["Carbox (sessão/região)", 715],
      ["Analgesia Inalatória", 600],
      ["Equipe de Analgesia (1h)", 2480],
      ["Equipe de Analgesia (2h)", 2760],
      ["Analgesia Inalatória – Óxido Nitroso", 600],
    ]
  },

  {
    titulo: "Cirúrgicos / Dermatológicos",
    itens: [
      ["Hialuronidase", 1800],
      ["Exérese de Lesão de Pele", 1900],
      ["Curetagem", 1500],
      ["Subcisão", 3300],
    ]
  },

  {
    titulo: "Fios de tração e PDO",
    itens: [
      ["Fios PDO Eye Bag (2 pacotes)", 2900],
      ["Fios PDO Eye Bag (1 pacote)", 1450],
      ["Fios PDO Pescoço", 3575],
      ["Fios Filler", 2200],
      ["Fios de Tração (4 fios)", 4500],
      ["Fios de Tração (6 fios)", 5335],
      ["Fios de Tração (8 fios)", 6600],
      ["Fios Aptos (caixa)", 11000],
    ]
  },

  {
    titulo: "MD Codes e Injetáveis",
    itens: [
      ["MD Codes 1", 2100],
      ["MD Codes 2", 4000],
      ["MD Codes 3", 5900],
      ["MD Codes 4", 8360],
      ["MD Codes 5", 9900],
      ["MD Codes 6", 11770],
      ["MD Codes 7 ou + (cada)", 1936],
      ["Preenchimento labial", 2100],
      ["Produto / RETOQUE", 1400],
    ]
  },

  {
    titulo: "Procedimentos Injetáveis Avançados",
    itens: [
      ["Profhilo", 3200],
      ["Preenchimento labial", 2100],
      ["Produto / RETOQUE", 1400],
      ["Rinomodelação", 2650],
      ["Skinvive / Skinbooster", 2100],
      ["MESO CORPORAL", 820],
    ]
  },

  {
    titulo: "Bioestimuladores",
    itens: [
      ["HarmonyCa", 3000],
      ["Radiesse Duo", 3000],
      ["Radiesse Duo (2 seringas)", 5830],
      ["Radiesse Duo (3 seringas)", 8690],
      ["Radiesse Plus", 3000],
      ["Radiesse Plus (2 seringas)", 6000],
      ["Radiesse Ultra", 5300],
      ["Radiesse Prime Blend Face", 4000],
      ["Sculptra (1 frasco)", 3150],
      ["Sculptra (2 frascos)", 5900],
    ]
  },

  {
    titulo: "Toxina Botulínica",
    itens: [
      ["Full Face Feminino", 2080],
      ["Full Face Masculino", 2310],
      ["Face + Masseter (F)", 2520],
      ["Face + Masseter (M)", 2630],
      ["Olhos (F)", 940],
      ["Olhos (M)", 990],
      ["Glabela", 1360],
      ["Glabela + Testa", 1680],
      ["Glabela + Olhos", 1580],
      ["Axila", 2730],
      ["Pescoço / Nefertiti", 1940],
      ["Masseter / Bruxismo", 1370],
      ["Buço", 950],
      ["Mãos", 2620],
      ["Rosácea", 1160],
    ]
  },

  {
    titulo: "ATRIA 2",
    itens: [
      ["ATRIA Face", 5720],
      ["ATRIA Papada / Pescoço / Colo", 3630],
      ["ATRIA Face + Pescoço", 6600],
      ["ATRIA Face + Pescoço + Papada", 7260],
      ["ATRIA Pálpebra", 2860],
      ["ATRIA Peitoral Masc / Braços", 4235],
      ["ATRIA Bananinha / Coxas / Culotes / Costas / Flancos", 4235],
      ["ATRIA Meia Coxa", 3000],
      ["ATRIA Joelho – Flacidez", 2420],
      ["ATRIA Joelho – Gordura", 3190],
      ["ATRIA Infraxilar – frente", 2420],
      ["ATRIA Infraxilar – frente e atrás", 3520],
      ["ATRIA Abdômen 1 – Flacidez", 4300],
      ["ATRIA Abdômen 2 – Gordura", 4500],
    ]
  },

  {
    titulo: "MORPHEUS",
    itens: [
      ["Face + Pescoço", 7590],
      ["Face / Lateral de Coxa / Flancos / Abdômen / Costas", 7150],
      ["Braço / Infraxilar / Bananinha / Joelho / Pescoço ou Papada", 4950],
      ["Adicional + 1 região", 2750],
      ["2ª sessão (até 3 meses-ESTERELIZAR PONTEIRA)", 4400],
    ]
  },

  {
    titulo: "MORPHEUS + ATRIA",
    itens: [
      ["MORPHEUS + ATRIA Região", 8800],
      ["MORPHEUS + ATRIA Adicional + 1 região", 2200],
    ]
  },

  {
    titulo: "ULTRAFORMER MPT",
    itens: [
      ["ULTRAFORMER MPT Face / Lateral Coxa / Flancos / Costas", 6710],
      ["ULTRAFORMER MPT Abdômen / Bananinha / Braços", 5110],
      ["ULTRAFORMER MPT Papada e/ou Pescoço / Colo", 3630],
      ["ULTRAFORMER MPT Joelho / Infraxilar", 3790],
      ["ULTRAFORMER MPT Pálpebra", 2750],
      ["ULTRAFORMER MPT Face + Papada + Pescoço", 7700],
    ]
  },

  {
    titulo: "VOLNEWMER",
    itens: [
      ["VOLNEWMER Face", 11100],
      ["VOLNEWMER Pescoço", 5170],
      ["VOLNEWMER Olhos 1", 3300],
      ["VOLNEWMER Olhos 2", 3740],
      ["VOLNEWMER Terço Médio 1 - apenas bochechas (200 disparos)", 3960],
      ["VOLNEWMER Terço Médio – Pálpebras + Lateral Olhos", 4290],
      ["VOLNEWMER Testa", 1980],
      ["VOLNEWMER Código de Barras – (40) Jovem", 2090],
      ["VOLNEWMER Código de Barras – (150) Maduro", 3300],
      ["VOLNEWMER Terço Inferior – Contorno", 6600],
      ["VOLNEWMER Terço Inferior – Lateral Boca", 4950],
      ["VOLNEWMER Gordura Pescoço", 2200],
      ["VOLNEWMER Joelho – Flacidez", 7150],
      ["VOLNEWMER Abdômen / Braços – Flacidez", 5900],
    ]
  },

  {
    titulo: "VOLFORMER",
    itens: [
      ["VOLFORMER Face + Pescoço", 19800],
      ["VOLFORMER Face", 15400],
      ["VOLFORMER Olhos", 4950],
      ["VOLFORMER Pescoço", 7700],
    ]
  },

  {
    titulo: "FOTONA STARWALKER",
    itens: [
      ["FOTONA Vasos / Acne / Código de Barras / Tatuagem / Cicatriz / Rosácea / Melanoses / Olheiras", 3200],
      ["FOTONA Estrias", 3500],
      ["FOTONA Clareamento Corporal (Axilas e Virilhas)", 3300],
      ["FOTONA Melasma / Rejuvenescimento Facial + Exossomos", 4290],
      ["FOTONA Manchas das Mãos", 2300],
      ["FOTONA Rejuvenescimento Face + Pescoço", 4950],
      ["FOTONA Rejuvenescimento Pescoço + Colo", 4400],
      ["FOTONA Rejuvenescimento Face + Pescoço + Colo", 5500],
    ]
  },

  {
    titulo: "ELETRODERME",
    itens: [
      ["ELETRODERME", 2750],
      ["ELETRODERME + PDRN", 3300],
      ["ELETRODERME + Exossomos", 3850],
    ]
  },

  {
    titulo: "LASER CO2 FRACIONADO",
    itens: [
      ["LASER Face / Colo / Pescoço", 3000],
      ["LASER Face + Pescoço", 3150],
      ["LASER Face + Pescoço + Colo", 4070],
      ["LASER Face + Pescoço + Colo + Mãos", 3900],
      ["LASER Mãos", 2090],
      ["LASER Estrias / Cicatriz – Grande Quantidade", 2200],
      ["LASER Estrias / Cicatriz – Pequena Quantidade", 1850],
    ]
  },

  {
    titulo: "LASER INTIMO",
    itens: [
      ["Laser Íntimo (1 sessão)", 2090],
      ["Laser Íntimo (2 sessões)", 3630],
    ]
  },

  {
    titulo: "POWER SHAPE",
    itens: [
      ["Power Shape – Corporal (5 sessões)", 2850],
      ["Power Shape – Unidade / Região", 650],
    ]
  },

  {
    titulo: "LIP / NDYAG / PIXEL",
    itens: [
      ["LIP – Face / Colo / Pescoço", 2300],
      ["LIP – Face + Colo", 2640],
      ["Laser NDYAG – Face Vasos", 1650],
      ["NDYAG (1 vasinho)", 820],
      ["Laser Pixel – Face", 3080],
      ["Laser Pixel – Colo", 2530],
      ["Laser Pixel – Face + Colo", 3630],
      ["Laser Pixel – Costas", 2640],
      ["Laser Pixel – Mãos", 2090],
    ]
  },

  {
    titulo: "PROTOCOLOS",
    itens: [
      ["Beautiful Mommy", 7480],
      ["Glow Up", 4850],
      ["Praia Brava Plus", 17600],
      ["Praia Brava 1 Harmonização com Hialuronico e Bioestimulador Radiesse", 11550],
      ["Praia Brava 2 Harmonização + Power Shape", 14300],
      ["Praia Brava 3 Harmonização + Atria", 16000],
      ["PREENCHIMENTO DE GLÚTEO Ácido Hialuronico", 14850],
      ["Bye Bye", 7150],
      ["Body Sculpt", 7150],
      ["V Lift", 11680],
      ["Olhar Intenso- Atria + Fios PDO + Eletroderme/Laser", 6820],
      ["Ultra Olhos- Volnewmer + Atria + Eletroderme + Exossomos", 11580],
      ["Ultra Neck- Volnewmer + Profhilo", 7150],
      ["Melasma Recovery", 8800],
      ["PROTOCOLO LIPODEMA 2 Power shape + Morpheus", 9350],
      ["PROTOCOLO LIPODEMA 1 Power shape + Atria", 5040],
      ["SOFT LIFT Botox + Preenchedor", 5470],
      ["LIFT UP Radiesse Plus + Duo", 5820],
      ["HD ABDOMEN Atria + Radiesse 1", 6820],
      ["Atria + Radiesse 2", 9400],
      ["BoosterBotox", 2980],
      ["PROTOCOLO 40+ - 4 Radiesse", 11400],
    ]
  },

  {
    titulo: "PROTOCOLOS CAPILARES",
    itens: [
      ["Toxina capilar", 1890],
      ["MMP- sessão", 770],
      ["MMP CAPILAR + EXOSSOMOS", 1200],
      ["Eletroderme Capilar", 1750],
    ]
  }
];

/***********************
  VARIÁVEIS
************************/

const container = document.getElementById("procedimentos");
const selecionadosDiv = document.getElementById("selecionados");

let selecionados = [];

/***********************
  MONTAR LISTA
************************/

secoes.forEach(secao => {

  const details = document.createElement("details");
details.open = false;

  const summary = document.createElement("summary");
  summary.textContent = secao.titulo;
  details.appendChild(summary);

  secao.itens.forEach(item => {

    const label = document.createElement("label");
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.dataset.categoria = secao.titulo;
    checkbox.dataset.nome = item[0];
    checkbox.dataset.valor = item[1];

    checkbox.addEventListener("change", atualizar);

    label.appendChild(checkbox);
    label.append(` ${item[0]} — R$ ${item[1].toLocaleString("pt-BR")}`);

    details.appendChild(label);

  });

  container.appendChild(details);

});

/***********************
  ATUALIZAR
************************/

function atualizar(){

  selecionados = [];
  selecionadosDiv.innerHTML = "";

  document.querySelectorAll("#procedimentos input:checked")
    .forEach(i=>{
      selecionados.push({
        categoria: i.dataset.categoria,
        nome: i.dataset.nome,
        valor: Number(i.dataset.valor)
      });
    });

  render();
/***********************
 PARCELAMENTO
************************/

function calcularParcelamento(total){

  if(total > 10000){
    return `10x de ${(total/10).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}`;
  }
  else if(total >= 2080){
    return `6x de ${(total/6).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}`;
  }
  else{
    return "À vista";
  }

}

/***********************
 ATUALIZA TOTAIS
************************/

function atualizarTotais(total){

  const avista = total * 0.97;
  const economia = total - avista;

  document.getElementById("total").textContent =
    total.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});

  document.getElementById("avista").textContent =
    avista.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});

  document.getElementById("economia").textContent =
    economia.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});

  document.getElementById("parcelado").textContent =
    calcularParcelamento(total);
}

/***********************
 RENDER (SUBSTITUI O SEU)
************************/

function render(){

  let total = 0;
  selecionadosDiv.innerHTML = "";

  selecionados.forEach(item=>{

    total += item.valor;

    const div = document.createElement("div");
    div.textContent =
      `${item.categoria} – ${item.nome} — R$ ${item.valor.toLocaleString("pt-BR")}`;

    selecionadosDiv.appendChild(div);

  });

  atualizarTotais(total);
}

/***********************
 BOTÕES
************************/

document.getElementById("btnApresentacao").onclick = () => {
  document.body.classList.toggle("apresentacao");
};

document.getElementById("btnPDF").onclick = () => {

  // força modo apresentação
  document.body.classList.add("apresentacao");

  setTimeout(()=>{

    html2pdf()
      .from(document.getElementById("conteudo"))
      .save("orcamento.pdf")
      .then(()=>{
        document.body.classList.remove("apresentacao");
      });

  },300);

};

/***********************
 FECHAR SEÇÕES AO CARREGAR
************************/

window.onload = () => {
  document.querySelectorAll("details").forEach(d => d.open = false);
};
