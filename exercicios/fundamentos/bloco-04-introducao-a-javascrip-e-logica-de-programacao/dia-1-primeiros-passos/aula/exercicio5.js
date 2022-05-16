var estadoCandidata = "reprovada";
switch (estadoCandidata) {
    case "aprovada":
        console.log("Parabéns!");
        break;

    case "lista":
        console.log("Seu nome está na lista de espera.")
        break;
    
    case "reprovada":
        console.log("Reprovada. Tente novamente.")
        break;
    
    default:
        console.log("Não encontrado.")
}   