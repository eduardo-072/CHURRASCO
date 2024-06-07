document.getElementById('churrasquinho').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Variáveis para o input
  const AdultosqBEBEM = parseInt(document.getElementById('AdultosqBEBEM').value);
  const AdultosNbebem = parseInt(document.getElementById('AdultosNbebem').value);
  const criancas = parseInt(document.getElementById('criancas').value);

  // 1. Cálculo para o churrasco
  // 2. Valores dos números em gramas ou litros
  const Carne = (AdultosNbebem + AdultosqBEBEM) * 400 + criancas * 200; // gramas
  const Acompanhamentos = (AdultosNbebem + AdultosqBEBEM + criancas) * 200; // gramas
  const cerveja = AdultosqBEBEM * 2; // Litros
  const refrigerante = (AdultosNbebem + criancas) * 0.5; // Litros
  const agua = (criancas + AdultosNbebem + AdultosqBEBEM) * 0.4; // Litros
  
  // Exibir no HTML
  document.getElementById('resultado').innerHTML = `
    <div class="cx">
      <div class="AXL">
        <h4 id="iten-1" class="itens"> Carne Kg<br>&nbsp&nbsp&nbsp${(Carne / 1000).toFixed(2)}</h4>
        <h4 id="iten-2" class="itens"> Cerveja<br>&nbsp&${cerveja.toFixed(2)} L</h4>
        <h4 id="iten-3" class="itens">Acompanhamentos <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${(Acompanhamentos / 1000).toFixed(2)}Kg</h4>
        <h4 id="iten-4" class="itens"> Refrigerante <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${refrigerante.toFixed(2)}L</h4>
        <h4 id="iten-5" class="itens"> Água <br>${agua.toFixed(2)}L<br></h4>
    </div>
  `;
});

