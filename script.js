const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const totalEl = document.getElementById('total');
const avistaEl = document.getElementById('avista');
const parceladoEl = document.getElementById('parcelado');

function atualizar() {
  let total = 0;

  checkboxes.forEach(item => {
    if (item.checked) {
      total += Number(item.dataset.price);
    }
  });

  const avista = total * 0.97;
  const parcela = total / 6;

  totalEl.textContent = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  avistaEl.textContent = avista.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  parceladoEl.textContent = parcela.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

checkboxes.forEach(item => item.addEventListener('change', atualizar));
