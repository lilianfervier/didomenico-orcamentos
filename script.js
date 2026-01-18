const procedimentos = {
  "Injetáveis": [
    ["Hialuronidase – Remoção de preenchedores",1800],
    ["Subcisão",3300],
    ["Peeling",1650],
    ["Preenchimento Labial",2100],
    ["Preenchimento Labial – Retoque (produto)",1400],
    ["Profhilo",3200],
    ["Harmonyca",3000],
    ["Radiesse Duo",3000],
    ["Radiesse Duo – 2 seringas (3ml)",5830],
    ["Radiesse Duo – 3 seringas",8690],
    ["Radiesse Plus",3000],
    ["Radiesse Plus – 2 seringas",6000],
    ["Radiesse Ultra",5300],
    ["Radiesse Prime – Blend Face",4000],
    ["Rinomodelação",2650],
    ["Sculptra – 1 unidade",3150],
    ["Sculptra – 2 unidades",5900],
    ["Skinvive (Skinbooster)",2100],
    ["Preenchimento de Glúteo – Ácido Hialurônico",14850]
  ],

  "Fios": [
    ["Fios PDO Eye Bag – 2 pacotes / 8 fios",2900],
    ["Fios PDO Eye Bag – pacote avulso",1450],
    ["Fios PDO Pescoço – 1 pacote / 10 fios",3575],
    ["Fios Filler",2200],
    ["Fios de Tração – Face (4 fios)",4500],
    ["Fios de Tração – Face (6 fios)",5335],
    ["Fios de Tração – Face (8 fios)",6600],
    ["Fios Aptos – Tração (10 fios)",11000]
  ],

  "Toxina Botulínica": [
    ["Full Face / Terço Superior – Feminino",2080],
    ["Full Face / Terço Superior – Masculino",2310],
    ["Face + Masseter – Feminino",2520],
    ["Face + Masseter – Masculino",2630],
    ["Olhos – Feminino",940],
    ["Olhos – Masculino",990],
    ["Lifting",2200],
    ["Glabela",1360],
    ["Glabela + Testa",1680],
    ["Glabela + Olhos",1580],
    ["Capilar",1890],
    ["Axila",2730],
    ["Testa",1150],
    ["Pescoço / Nefertiti",1940],
    ["Masseter / Bruxismo",1370],
    ["Buço",950],
    ["Mãos",2620],
    ["Rosáceas",1160]
  ],

  "Aparelhos": [
    ["Atria 2 – Face",5720],
    ["Atria 2 – Papada/Pescoço/Colo",3630],
    ["Atria 2 – Face + Pescoço",6600],
    ["Atria 2 – Face + Pescoço + Papada",7260],
    ["Atria 2 – Pálpebra",2860],
    ["Morpheus – Face + Pescoço",7590],
    ["Morpheus – Região corporal",7150],
    ["Ultraformer MPT – Face",6710],
    ["Ultraformer MPT – Abdômen/Braços",5110],
    ["Volnewmer – Face",11100],
    ["Volnewmer – Pescoço",5170],
    ["Volformer – Face + Pescoço",19800]
  ],

  "Laser": [
    ["Fotona Starwalker",3200],
    ["Laser CO2 Fracionado – Face",3000],
    ["Laser CO2 – Face + Pescoço",3150],
    ["Laser Íntimo (1 sessão)",2090],
    ["Laser Íntimo (2 sessões)",3630],
    ["Laser NDYAG – Vasinhos",1650],
    ["Laser Pixel – Face",3080],
    ["Laser Pixel – Colo",2530]
  ],

  "Protocolos": [
    ["Protocolo Glow Up",4850],
    ["Beautiful Mommy",7480],
    ["Praia Brava Plus",17600],
    ["Praia Brava 1",11550],
    ["Praia Brava 2",14300],
    ["Praia Brava 3",16000],
    ["HD Abdômen – Atria + Radiesse 1",6820],
    ["HD Abdômen – Atria + Radiesse 2",9400],
    ["Soft Lift",5470],
    ["Lift Up",5820],
    ["Bye Bye",7150],
    ["V Lift",11680],
    ["Ultra Olhos",11580],
    ["Ultra Neck",7150],
    ["Melasma Recovery",8800],
    ["BoosterBotox",2980]
  ]
};

/* ===== NÃO MEXER DAQUI PRA BAIXO ===== */

const container = document.getElementById("procedimentos");
const busca = document.getElementById("busca");
const totalEl = document.getElementById("total");
const avistaEl = document.getElementById("avista");
const parceladoEl = document.getElementById("parcelado");

function render() {
  container.innerHTML = "";
  Object.entries(procedimentos).forEach(([categoria, itens]) => {
    const details = document.createElement("details");
    details.innerHTML = `<summary>${categoria}</summary>`;
    itens.forEach(([nome, valor]) => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="checkbox" value="${valor}"> ${nome} – R$ ${valor.toLocaleString("pt-BR")}`;
      details.appendChild(label);
    });
    container.appendChild(details);
  });
}

function calcular() {
  let total = 0;
  document.querySelectorAll("input[type=checkbox]:checked")
    .forEach(cb => total += Number(cb.value));

  totalEl.innerText = total.toLocaleString("pt-BR",{minimumFractionDigits:2});
  avistaEl.innerText = (total*0.97).toLocaleString("pt-BR",{minimumFractionDigits:2});
  parceladoEl.innerText = (total/6).toLocaleString("pt-BR",{minimumFractionDigits:2});
}

function limpar() {
  document.querySelectorAll("input[type=checkbox]").forEach(cb => cb.checked = false);
  calcular();
}

document.addEventListener("change", calcular);
busca.addEventListener("input", e => {
  const termo = e.target.value.toLowerCase();
  document.querySelectorAll("label").forEach(l =>
    l.style.display = l.innerText.toLowerCase().includes(termo) ? "block" : "none"
  );
});

render();
