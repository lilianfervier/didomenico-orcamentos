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
    titulo: "Fios",
    itens: [
      ["Fios PDO Eye Bag (2 pacotes)", 2900],
      ["Fios PDO Eye Bag (1 pacote)", 1450],
      ["Fios PDO Pescoço", 3575],
      ["Fios Filler", 2200],
      ["Fios de Tração (4 fios)", 4500],
      ["Fios de Tração (6 fios)", 5335],
      ["Fios de Tração (8 fios)", 6600],
      ["Fios Aptos (caixa fechada)", 11000],
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
      ["Rosáceas", 1160],
    ]
  },

  {
    titulo: "APARELHOS – ATRIA 2",
    itens: [
      ["Face", 5720],
      ["Papada / Pescoço / Colo", 3630],
      ["Face + Pescoço", 6600],
      ["Face + Pescoço + Papada", 7260],
      ["Pálpebra", 2860],
      ["Peitoral Masc / Braços", 4235],
      ["Bananinha / Coxas / Culotes / Costas / Flancos", 4235],
      ["Meia Coxa", 3000],
      ["Joelho – Flacidez", 2420],
      ["Joelho – Gordura", 3190],
      ["Infraxilar – frente", 2420],
      ["Infraxilar – frente e atrás", 3520],
      ["Abdômen 1 – Flacidez", 4300],
      ["Abdômen 2 – Gordura", 4500],
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
      ["Região", 8800],
      ["Adicional + 1 região", 2200],
    ]
  },

  {
    titulo: "ULTRAFORMER MPT",
    itens: [
      ["Face / Lateral Coxa / Flancos / Costas", 6710],
      ["Abdômen / Bananinha / Braços", 5110],
      ["Papada e/ou Pescoço / Colo", 3630],
      ["Joelho / Infraxilar", 3790],
      ["Pálpebra", 2750],
      ["Face + Papada + Pescoço", 7700],
    ]
  },

  {
    titulo: "VOLNEWMER",
    itens: [
      ["Face", 11100],
      ["Pescoço", 5170],
      ["Olhos 1", 3300],
      ["Olhos 2", 3740],
      ["Terço Médio 1 - apenas bochechas (200 disparos)", 3960],
      ["Terço Médio – Pálpebras + Lateral Olhos", 4290],
      ["Testa", 1980],
      ["Código de Barras – (40) Jovem", 2090],
      ["Código de Barras – (150) Maduro", 3300],
      ["Terço Inferior – Contorno", 6600],
      ["Terço Inferior – Lateral Boca", 4950],
      ["Gordura Pescoço", 2200],
      ["Joelho – Flacidez", 7150],
      ["Abdômen / Braços – Flacidez", 5900],
    ]
  },

  {
    titulo: "VOLFORMER",
    itens: [
      ["Face + Pescoço", 19800],
      ["Face", 15400],
      ["Olhos", 4950],
      ["Pescoço", 7700],
    ]
  },

  {
    titulo: "FOTONA STARWALKER",
    itens: [
      ["Vasos / Acne / Código de Barras / Tatuagem / Cicatriz / Rosácea / Melanoses / Olheiras", 3200],
      ["Estrias", 3500],
      ["Clareamento Corporal (Axilas e Virilhas)", 3300],
      ["Melasma / Rejuvenescimento Facial + Exossomos", 4290],
      ["Manchas das Mãos", 2300],
      ["Rejuvenescimento Face + Pescoço", 4950],
      ["Rejuvenescimento Pescoço + Colo", 4400],
      ["Rejuvenescimento Face + Pescoço + Colo", 5500],
    ]
  },

  {
    titulo: "ELETRODERME",
    itens: [
      ["Região", 2750],
      ["Região + PDRN", 3300],
      ["Região + Exossomos", 3850],
    ]
  },

  {
    titulo: "LASER CO2 FRACIONADO",
    itens: [
      ["Face / Colo / Pescoço", 3000],
      ["Face + Pescoço", 3150],
      ["Face + Pescoço + Colo", 4070],
      ["Face + Pescoço + Colo + Mãos", 3900],
      ["Mãos", 2090],
      ["Estria / Cicatriz – Grande Quantidade", 2200],
      ["Estria / Cicatriz – Pequena Quantidade", 1850],
    ]
  },

  {
    titulo: "LASER Intimo",
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
      ["Adicional NDYAG ou 1 vasinho", 820],
      ["Laser Pixel – Face", 3080],
      ["Laser Pixel – Colo", 2530],
      ["Laser Pixel – Face + Colo", 3630],
      ["Laser Pixel – Costas", 2640],
      ["Laser Pixel – Mãos", 2090],
    ]
  },

  {
    titulo: "Protocolos",
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
      ["MMP- sessão", 770],
      ["MMP- sessão", 770],
      ["Eletroderme Capilar", 1750],
    ]
  }
];

const container = document.getElementById("procedimentos");
const selecionadosDiv = document.getElementById("selecionados");

secoes.forEach(secao => {
  const details = document.createElement("details");
  details.open = true;

  const summary = document.createElement("summary");
  summary.textContent = secao.titulo;
  details.appendChild(summary);

  secao.itens.forEach(item => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.value = item[1];
    checkbox.dataset.nome = item[0];

    label.appendChild(checkbox);
    label.append(
      ` ${item[0]} — ${item[1].toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      })}`
    );

    details.appendChild(label);
  });

  container.appendChild(details);
});

function calcular() {
  let total = 0;
  selecionadosDiv.innerHTML = "";

  document.querySelectorAll("input:checked").forEach(i => {
    const valor = Number(i.value);
    total += valor;

    const linha = document.createElement("div");
    linha.textContent = `${i.dataset.nome} — ${valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })}`;

    selecionadosDiv.appendChild(linha);
  });

  const avista = total * 0.97;
  const economia = total - avista;
  const parcela = total / 6;

  document.getElementById("total").textContent =
    total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  document.getElementById("avista").textContent =
    avista.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  document.getElementById("economia").textContent =
    economia.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  document.getElementById("parcelado").textContent =
    parcela.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

document.addEventListener("change", calcular);
