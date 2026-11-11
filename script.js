const secoes = [
  {
    titulo: "Taxas e anestesias",
    itens: [
      ["Taxa de Sala", 550],
      ["Consulta", 900],
      ["Equipe de Analgesia (1h)", 2800],
      ["Equipe de Analgesia (2h)", 3080],
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
      ["Fios PDO Eye Bag (3 pacotes)", 4350],
      ["Fios PDO Eye Bag (2 pacotes)", 3100],
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
    titulo: "MD Codes",
    itens: [
      ["MD Codes 1", 2100],
      ["MD Codes 2", 4000],
      ["MD Codes 3", 5990],
      ["MD Codes 4", 7940],
      ["MD Codes 5", 9890],
      ["MD Codes 6", 11790],
      ["MD Codes 7 ou + (cada)", 1950],
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
      ["BoosterBotox", 2980],
      ["MESOTERAPIA CORPORAL", 820],
    ]
  },

  {
    titulo: "Bioestimuladores",
    itens: [
      ["HarmonyCa", 3000],
      ["Radiesse Duo", 3000],
      ["Radiesse Duo (2 seringas)", 5830],
      ["Radiesse Duo (3 seringas)", 8690],
      ["Radiesse Duo (4 seringas)", 11800],
      ["PROTOCOLO 40+ - 4 Radiesse", 11400],
      ["V Lift", 11680],
      ["Radiesse Plus", 3000],
      ["Radiesse Plus (2 seringas)", 6000],
      ["Radiesse Prime Blend Face", 4000],
      ["Sculptra (1 frasco)", 3150],
      ["Sculptra (2 frascos)", 5900],
      ["Sculptra (3 frascos)", 8850],
      ["Sculptra (4 frascos)", 11800],
    ]
  },

  {
    titulo: "Toxina Botulínica",
    itens: [
      ["Toxina Botulínica Full Face Feminino", 2080],
      ["Toxina Botulínica Full Face Masculino", 2310],
      ["Toxina Botulínica Face + Masseter (F)", 2520],
      ["Toxina Botulínica Face + Masseter (M)", 2630],
      ["Toxina Botulínica Olhos (F)", 940],
      ["Toxina Botulínica Olhos (M)", 990],
      ["Toxina Botulínica Glabela", 1360],
      ["Toxina Botulínica Glabela + Testa F", 1680],
      ["Toxina Botulínica Glabela + Testa M", 1890],
      ["Toxina Botulínica Glabela + Olhos F", 1580],
      ["Toxina Botulínica Glabela + Olhos M", 1790],
      ["Botox Frontal", 1150],
      ["Toxina Botulínica Axila", 2730],
      ["Toxina Botulínica Pescoço / Nefertiti", 1940],
      ["Toxina Botulínica Masseter / Bruxismo", 1370],
      ["Toxina Botulínica Buço", 950],
      ["Toxina Botulínica Mãos", 2620],
      ["Toxina Botulínica Rosácea", 1160],
      ["Botox Lift F", 2200],
      ["Botox Lift M", 2420],
    ]
  },

  {
    titulo: "ATRIA",
    itens: [
      ["ATRIA 2 Face", 5720],
      ["ATRIA 2 Papada / Pescoço / Colo", 3630],
      ["ATRIA 2 Face + Pescoço", 6600],
      ["ATRIA 2 Face + Pescoço + Papada", 7260],
      ["ATRIA 2 Pálpebra", 2860],
      ["ATRIA 2 Peitoral Masc / Braços", 4235],
      ["ATRIA 2 Bananinha / Coxas / Culotes / Costas / Flancos", 4235],
      ["ATRIA 2 Meia Coxa", 3000],
      ["ATRIA 2 Joelho – Flacidez", 2420],
      ["ATRIA 2 Joelho – Gordura", 3190],
      ["ATRIA 2 Infraxilar – frente", 2420],
      ["ATRIA 2 Infraxilar – frente e atrás", 3520],
      ["ATRIA 2 Abdômen 1 – Flacidez", 4300],
      ["ATRIA 2 Abdômen 2 – Gordura", 4500],
      ["ATRIA 2 Abdômen JAQUE", 5800],
    ]
  },

  {
    titulo: "MORPHEUS",
    itens: [
      ["MORPHEUS Face + Pescoço", 7590],
      ["MORPHEUS Face / Lateral de Coxa / Flancos / Abdômen / Costas", 7150],
      ["MORPHEUS Braço / Infraxilar / Bananinha / Joelho / Pescoço ou Papada", 4950],
      ["MORPHEUS Coxa completa (Interno, joelho e posterior)", 8250],
      ["MORPHEUS Adicional + 1 região", 2750],
      ["MORPHEUS 2ª sessão (até 3 meses)", 4400],
    ]
  },

  {
    titulo: "MORPHEUS + ATRIA",
    itens: [
      ["MORPHEUS + ATRIA- Região", 8800],
      ["MORPHEUS + ATRIA - Adicional + 1 região", 2200],
    ]
  },

  {
    titulo: "VOLNEWMER",
    itens: [
      ["VOLNEWMER Face", 9500],
      ["VOLNEWMER Pescoço", 5170],
      ["VOLNEWMER GORDURA/SUBMENTO", 2200],
      ["VOLNEWMER Palpebras superiores", 2500],
      ["VOLNEWMER Olhos BASIC", 3300],
      ["VOLNEWMER Olhos PRIME", 3740],
      ["VOLNEWMER Testa", 1980],
      ["VOLNEWMER Terço Médio- Bochechas (200)", 3600],
      ["VOLNEWMER Terço Médio BASIC (300)", 4950],
      ["VOLNEWMER Terço Médio + Inferior PRIME (400)", 6600],
      ["VOLNEWMER Testa", 1980],
      ["VOLNEWMER Código de Barras – (40) BASIC", 2090],
      ["VOLNEWMER Código de Barras – (150) PRIME", 2900],
      ["VOLNEWMER Joelhos (300)", 5300],
      ["VOLNEWMER Braços (3000", 5300],
      ["VOLNEWMER Abdomen BASIC (150)", 4200],
      ["VOLNEWMER Abdomen PRIME (300)", 5500],
      
    ]
  },

  {
    titulo: "VOLFORMER",
    itens: [
      ["VOLFORMER Face + Pescoço", 13950],
      ["VOLFORMER Face", 12100],
      ["VOLFORMER Olhos", 4950],
      ["VOLFORMER Pescoço", 7700],
  ]
  },

 {
    titulo: "FOTONA STARWALKER-",
    itens: [
      ["FOTONA Facial (FRACTAT e TONING)", 3200],
      ["FOTONA- Clareamento (Axilas/Virilhas/Olheiras- Duas sessões)", 3600],
      ["FOTONA- Manchas das Mãos", 2500],
      ["FOTONA- Rejuvenescimento Face + Pescoço", 4950],
      ["FOTONA- Rejuvenescimento Face + Pescoço + Colo", 5700],
      ["FOTONA- Melasma + Exossomos", 4100],
      ["FOTONA- Melasma + Exossomos (02 sessões)", 6900],
      ["FOTONA- MELASMA RECOVERY (03 sessões)", 8100],
      ["FOTONA Melasma + MCT", 6100],
    ]
    },

   {
    titulo: "FOTONA STARWALKER- Remoção de Pigmento",
    itens: [
      ["Remoção de Pigmento (2 sessões)", 2100],
      ["Remoção de Pigmento (4 sessões)", 4000],
      
    ]
    },

   {
    titulo: "FOTONA DYNAMIS e STARWALKER- Estrias e Cicatriz",
    itens: [
      ["FOTONA- LineLise / Estrias (GRANDE QUANTIDADE)", 1900],
      ["FOTONA- LineLise / Estrias(PEQUENA QUANTIDADE)", 1300],
      ["FOTONA- Cicatriz (PEQUENA)", 1300],
      ["FOTONA- Cicatriz (GRANDE)", 1900],
      
      
    ]
    },

  {
    titulo: "FOTONA DYNAMIS Face, pescoço e colo",
    itens: [
      ["FOTONA- XRestart + DRUG DELIVERY", 1000],
      ["FOTONA- Cicatriz Acne full face", 3100],
      ["FOTONA- Cicatriz Acne Pontual", 1800],
      ["FOTONA- 8D", 5900],
      ["FOTONA- 6D", 5400],
      ["FOTONA- 4D GLOW", 4800],
      ["FOTONA- Face Lift", 4800],
      ["FOTONA- Face Lift + NeckLift", 5000],
      ["FOTONA- 2D", 2200],
      ["FOTONA- 1D", 1500],
      ["FOTONA- VectorLift", 2300],
      ["FOTONA- VectorLift- 02 Sessões", 4300],
      ["FOTONA- DUAL LIFT (+ volnewmer TM)", 5100],
      ["FOTONA- NECK LIFT", 2300],
      ["FOTONA- NECK LIFT (02 Sessões)", 4100],
      ["FOTONA- Poiquilodermia (pescoço e colo-02 Sessões)", 4900],
      ["FOTONA- Poiquilodermia (pescoço e colo)", 2900],
      ["FOTONA- LipLase (VOLUMA LIPS)", 1000],
      ["FOTONA- LipLase (VOLUMA LIPS- 02 sessões)", 1800],
      ["FOTONA- LUMI EYES (MICROCORING)", 1900],
      ["FOTONA- MICROCORING FACE ", 3100],
      ["FOTONA- LiftPeel (peeling técnologico)", 2100],
      ["FOTONA- Véu de noiva", 1000],
      ["FOTONA- Rosácea / Acne- 02 Sessões", 4.000],
      ["FOTONA- Vasinhos Pontuais", 700],
      ["FOTONA- Vasinhos Faciais", 1200],
      ["FOTONA- Night Lase (RONCO)", 900],
    ]
  },

   {
    titulo: "FOTONA DYNAMIS- Corporal",
    itens: [
      ["FOTONA- Mãos (Laser + peeling quimico)", 2000],
      ["FOTONA- OrangeLase (01 sessão)", 2100],
      ["FOTONA- OrangeLase (02 sessões)", 4000],
      ["FOTONA- LIPEDEMA EVOLUTION 4D", 2500],
      ["FOTONA- LIPEDEMA EVOLUTION 4D (02 sessões)", 3500],
      ["FOTONA- TENSOR BODY 1D", 2100],
      ["FOTONA- TENSOR BODY 1D (02 sessões)", 4000],
      ["FOTONA- TENSOR BODY 2D", 2500],
      ["FOTONA- TENSOR BODY 2D (02 sessões)", 4900],      
      ["FOTONA- BODY LIFT PRIME (02 sessões + 1 ATRIA)", 5900],
    ]
  }, 

  {
  titulo: "FOTONA DYNAMIS- HAIR REMOVAL",
    itens: [
      ["FOTONA- FACIAL", 300],
      ["FOTONA- AXILA", 300],
      ["FOTONA- VIRILHA COMPLETA", 700],
      ["FOTONA- PERNA COMPLETA", 900],
      ["FOTONA- BRAÇOS", 300],
      ["FOTONA- ABDOMEN", 300],
    ]
  },


  {
    titulo: "FOTONA Protocolos Intimos",
    itens: [
      ["LASER INTIMO- INTIMA LASE + 04 Starformer", 3100],
      ["LASER INTIMO- INTIMA LASE (02 sessões + 08 Starformer)", 5490],
      ["LASER INTIMO- 01 sessão", 2500],
      ["FOTONA- Rejuvenescimento INTIMO (Duas sessões)", 3540],
      ["FOTONA- Clareamento Corporal (Axilas/Virilhas- Duas sessões)", 3300],
      
      
    ]
  },

    {
    titulo: "STARFORMER",
    itens: [
      ["Poltrona STARFORMER", 750],
      ["Poltrona STARFORMER (02 Sessões)", 1400],
      
    ]
  },

   {
    titulo: "POWER SHAPE",
    itens: [
      ["POWER SHAPE- Corporal (5 sessões)", 2850],
      ["POWER SHAPE- Unidade/Região", 650],
    ]
  },

  {
    titulo: "PROTOCOLOS GLUTEOS",
    itens: [
      ["Praia Brava Plus", 17600],
      ["Praia Brava 1", 11550],
      ["Praia Brava 2", 14300],
      ["Praia Brava 3", 16000],
      ["PREENCHIMENTO DE GLÚTEO", 14850], 
   ]
  },

  {
    titulo: "PROTOCOLOS CAPILARES",
    itens: [
      ["Toxina capilar", 2500],
      ["MMP- sessão", 700],
      ["MMP CAPILAR + EXOSSOMOS", 1000],
      ["REGENERA EXOHAIR", 3900],
      ["REGENERA HAIR", 1700],
      ["REGENERA HAIR- Duas sessões", 3000],
      ["FOTONA- XRestart + EXOSSOMOS", 1000],
      
    ]
  },

  {
    titulo: "REGENERA SKIN/HAIR",
    itens: [
      ["REGENERA SKIN - 1 Sessão", 3500],
      ["REGENERA SKIN - 2 Sessões", 5100],
      ["REGENERA SKIN & HAIR - 1 Sessão", 3700],
      ["REGENERA SKIN & HAIR - 2 Sessões", 5300],
      ["REGENERA HAIR - 1 Sessão", 1700],
      ["REGENERA HAIR - 2 Sessões", 3000],
    ]
  },

    {
    titulo: "REGENERA EXOSKIN & HAIR",
    itens: [
      ["FOTONA + MCT: 01 sessão", 5900],
      ["FOTONA + MCT: TRATAMENTO MELASMA", 6100],
    ]
  }
];


const container = document.getElementById("procedimentos");
const selecionadosDiv = document.getElementById("selecionados");

let selecionados = [];

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
    checkbox.dataset.nome = item[0];
    checkbox.dataset.valor = item[1];

    checkbox.addEventListener("change", () => {
      const marcados = details.querySelectorAll("input:checked").length;
      details.open = marcados > 0;
      atualizarSelecionados();
    });

    label.appendChild(checkbox);
    label.append(` ${item[0]} — R$ ${item[1].toLocaleString("pt-BR")}`);
    details.appendChild(label);
  });

  container.appendChild(details);
});

function atualizarSelecionados() {
  selecionados = [];
  selecionadosDiv.innerHTML = "";

  document.querySelectorAll("#procedimentos input:checked").forEach(i => {
    selecionados.push({
      nome: i.dataset.nome,
      valor: Number(i.dataset.valor)
    });
  });

  renderResumo();
}

function renderResumo() {
  let total = 0;
  selecionadosDiv.innerHTML = "";

  selecionados.forEach(item => {
    total += item.valor;

    const linha = document.createElement("div");
    linha.textContent = `${item.nome} — ${item.valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })}`;

    selecionadosDiv.appendChild(linha);
  });

  let avista = total * 0.97;
  let parcelamentoTexto = "Somente à vista";

  if (total >= 11000) {
    parcelamentoTexto =
      "10x de " +
      (total / 10).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      });
  } else if (total >= 2000) {
    parcelamentoTexto =
      "6x de " +
      (total / 6).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      });
  }

  document.getElementById("total").textContent =
    total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  document.getElementById("avista").textContent =
    avista.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  document.getElementById("parcelado").textContent = parcelamentoTexto;
}

document.getElementById("btnApresentacao").onclick = () => {
  document.body.classList.toggle("apresentacao");
};

document.getElementById("btnPDF").onclick = () => {
  document.body.classList.add("apresentacao");
  document.body.classList.add("pdf");

  const element = document.getElementById("conteudo");

  const opt = {
    margin: 10,
    filename: "orcamento.pdf",
    image: {
      type: "jpeg",
      quality: 1
    },
    html2canvas: {
      scale: 3,
      useCORS: true,
      scrollY: 0,
      windowWidth: document.body.scrollWidth,
      windowHeight: document.body.scrollHeight
    },
    pagebreak: {
      mode: ["avoid-all", "css", "legacy"]
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
      compress: true
    }
  };

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      html2pdf()
        .set(opt)
        .from(element)
        .save()
        .catch(err => {
          console.error("Erro ao gerar PDF:", err);
          alert("Não foi possível gerar o PDF.");
        })
        .finally(() => {
          document.body.classList.remove("pdf");
          document.body.classList.remove("apresentacao");
        });
    });
  });
};

renderResumo();

