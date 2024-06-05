
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
      <h1 class="titulo">Itens do churrasco</h1>

      <div class="AXL">
      <h4>Carne: ${Carne}g</h4>
      <h4>Acompanhamentos: ${Acompanhamentos}g</h4>
      <h4>Cerveja: ${cerveja}L</h4>
      <h4>Refrigerante: ${refrigerante}L</h4>
      <h4>Água: ${agua}L</h4>
      </div>

    </div>
  `;
});
