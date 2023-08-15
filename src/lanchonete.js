import { CaixaDaLanchonete } from './src/caixa-da-lanchonete.js';

const caixa = new CaixaDaLanchonete();

const metodoDePagamento = 'dinheiro';
const itens = [
  { codigo: 'cafe' },
  { codigo: 'chantily', extra: true },
  { codigo: 'combo1' }
];

const valorTotal = caixa.calcularValorDaCompra(metodoDePagamento, itens);
console.log('Valor total da compra: R$ ' + valorTotal);
