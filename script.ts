import * as readline from "readline";
function calcularTotalVendas(vendas: { valor: number, codigo: string }[]): { totalAVista: number, totalParcelado: number } {
  let totalAVista = 0;
  let totalParcelado = 0;

  for (let i = 0; i < vendas.length; i++) {
    const venda = vendas[i];

    if (venda.codigo === "V") {
      totalAVista += venda.valor;
    } else if (venda.codigo === "P") {
      totalParcelado += venda.valor;
}}

  return { totalAVista, totalParcelado };
}

const emp = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const vendas: { valor: number, codigo: string }[] = [];

function receberVenda(numeroVenda: number) {
    emp.question("Digite o valor da venda: ", (valorVenda) => {
    emp.question("A venda foi à vista (V) ou parcelada (P)?: ", (codigoVenda) => {
      const venda = {
        valor: parseFloat(valorVenda),
        codigo: codigoVenda.toUpperCase()
      };

      vendas.push(venda);

      if (numeroVenda < 5) {
        receberVenda(numeroVenda + 1);
      } 

      else {
        emp.close();
        const totalVendas = calcularTotalVendas(vendas);
        console.log("Valor total das vendas à vista: ", totalVendas.totalAVista);
        console.log("Valor total das vendas parceladas: ", totalVendas.totalParcelado);
      }
    })
  })
}
receberVenda(1)