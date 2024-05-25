function calculateBarbecueItems(adultosAcool, AdultosNOalcool, criancas) {
    const carneAdulto = 400;
    const acompanhamentosAdulto = 200;
    const cerveja = 2;
    const refrigeranteAdulto = 0.5;
    const aguaAdulto = 0.4;
  
    const carneCrianca = 200;
    const acompanhamentosCrianca = 200;
    const refrigeranteCrianca = 0.5;
    const aguaCrianca = 0.4;
  
    let carneTotal = (adultosAcool * carneAdulto) + (AdultosNOalcool * carneAdulto) + (criancas * carneCrianca);
    let acompanhamentosTotal = (adultosAcool * acompanhamentosAdulto) + (AdultosNOalcool * acompanhamentosAdulto) + (criancas * acompanhamentosCrianca);
    let cervejaTotal = (adultosAcool + AdultosNOalcool) * cerveja;
    let refrigeranteTotal = (adultosAcool + AdultosNOalcool + criancas) * refrigeranteAdulto * refrigeranteCrianca;
    let aguaTotal = (adultosAcool + AdultosNOalcool + criancas) * aguaAdulto * aguaCrianca;
  
    carneTotal /= 1000; // convert grams to kilograms
    acompanhamentosTotal /= 1000; // convert grams to kilograms
  
    console.log("--- Churrasco ---");
    console.log("Carne.............: " + carneTotal.toFixed(1) + "kg");
    console.log("Acompanhamentos...: " + acompanhamentosTotal.toFixed(1) + "kg");
    console.log("Cerveja...........: " + cervejaTotal.toFixed(1) + "l");
    console.log("Refrigerante......: " + refrigeranteTotal.toFixed(1) + "l");
    console.log("Água..............: " + aguaTotal.toFixed(1) + "l");
    console.log("Fonte: Sociedade da Carne");
  }
  
  // Example usage
  calculateBarbecueItems(5, 3, 6);