const secoes = [
  {
    titulo: "Taxas e Básicos",
    itens: [
      ["Taxa de Sala", 550],
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
    titulo: "Atria 2",
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
      ["Abdomen – Flacidez", 4300],
      ["Abdomen – Gordura", 4500],
    ]
  },
  {
    titulo: "Morpheus",
    itens: [
      ["Face + Pescoço", 7590],
      ["Corporal", 7150],
      ["Região pequena", 4950],
      ["Adicional +1 região", 2750],
      ["2ª sessão até 3 meses", 4400],
    ]
  }
  // você pode continuar adicionando MAIS seções aqui sem medo
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
    label.append(` ${item[0]} — ${item[1].toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })}`);

    details.appendChild(label);
    details.appendChild(document.createElement("br"));
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

