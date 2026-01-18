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
      ["Capilar", 1890],
      ["Axila", 2730],
      ["Pescoço / Nefertiti", 1940],
      ["Masseter / Bruxismo", 1370],
      ["Buço", 950],
      ["Mãos", 2620],
      ["Rosáceas", 1160],
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
      ["PREENCHIMENTO DE GLÚTEO	Ácido Hialuronico ", 14850],
      ["Bye Bye", 7150],
      ["Body Sculpt", 7150],
      ["V Lift", 11680],
      ["Olhar Intenso- Atria + Fios PDO + Eletroderme/Laser", 6820],
      ["Ultra Olhos- Volnewmer + Atria + Eletroderme + Exossomos", 11580],
      ["Ultra Neck- Volnewmer + Profhilo", 7150],
      ["Melasma Recovery", 8800],
      ["PROTOCOLO LIPODEMA 2	Power shape + Morpheus", 9350],
      ["PROTOCOLO LIPODEMA 1	Power shape + Atria", 5040],
      ["SOFT LIFT 	Botox + Preenchedor", 5470],
      ["LIFT UP 	Radiesse Plus + Duo", 5820],
      ["Procedimento", 1234],
      ["BoosterBotox", 2980],
    ]
  }
];

const container = document.getElementById("procedimentos");

secoes.forEach(secao => {
  const details = document.createElement("details");
  const summary = document.createElement("summary");
  summary.textContent = secao.titulo;
  details.appendChild(summary);

  secao.itens.forEach(item => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.value = item[1];

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
  document.querySelectorAll("input:checked").forEach(i => {
    total += Number(i.value);
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

