const checkboxes = document.querySelectorAll("input[type=checkbox]");
const totalEl = document.getElementById("total");
const avistaEl = document.getElementById("avista");
const parceladoEl = document.getElementById("parcelado");

function calcular() {
  let total = 0;
  checkboxes.forEach(cb => {
    if (cb.checked) total += Number(cb.value);
  });

  const avista = total * 0.97;
  const parcela = total / 6;

  totalEl.innerText = total.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
  avistaEl.innerText = avista.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
  parceladoEl.innerText = parcela.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
}

checkboxes.forEach(cb => cb.addEventListener("change", calcular));
