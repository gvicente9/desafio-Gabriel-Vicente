class CaixaDaLanchonete {
  
 
    constructor() {
        
       
    this.cardapio = [
          { codigo: 'cafe', descricao: 'Café', valor: 3.00 },
          { codigo: 'chantily', descricao: 'Chantily (extra do Café)', valor: 1.50 },
          { codigo: 'suco', descricao: 'Suco Natural', valor: 6.20 },
          { codigo: 'sanduiche', descricao: 'Sanduíche', valor: 6.50 },
          { codigo: 'queijo', descricao: 'Queijo (extra do Sanduíche)', valor: 2.00 },
          { codigo: 'salgado', descricao: 'Salgado', valor: 7.25 },
          { codigo: 'combo1', descricao: '1 Suco e 1 Sanduíche', valor: 9.50 },
          { codigo: 'combo2', descricao: '1 Café e 1 Sanduíche', valor: 7.50 }
        ];
    
        

    this.formasPagamento = ['dinheiro', 'debito', 'credito'];
      }
    
      calcularValorDaCompra(metodoDePagamento, itens) {
        if (!this.formasPagamento.includes(metodoDePagamento)) {
          return 'Forma de pagamento inválida!';
        }
    
        
        }
    
    if (itens.length === 0) {
          
         
    return 'Não há itens no carrinho de compra!';
        }
    
        let valorTotal = 0;
        
       
    let possuiPrincipal = false;
    
        
    
    for (const item of itens) {
          const cardapioItem = this.cardapio.find(i => i.codigo === item.codigo);
    
          
    
    
    if (!cardapioItem) {
            return 'Item inválido!';
          }
    
          
  }
    
         
    if (item.extra) {
            const principal = this.cardapio.find(i => i.descricao.includes('extra do') && cardapioItem.codigo.includes(i.codigo));
            
           
    if (!principal) {
              
             
    return 'Item extra não pode ser pedido sem o principal';
            }
          }
    
          
            }
         
    if (!cardapioItem.descricao.includes('combo')) {
            possuiPrincipal = 
            possui
    true;
          }
    
          valorTotal += cardapioItem       
    
          valorTotal += cardapioItem
    
          valorTotal += cardapio
    
          valorTotal += cardap
    
          valorTotal += card
    
          valorTotal
    
          valor;
        
    

       
    if (!possuiPrincipal) {
          
         
    return 'Não há itens no carrinho de compra!';
        }
    
        
        
    
    
       
    if (metodoDePagamento === 'dinheiro') {
          valorTotal *= 
          valorTotal *=
    0.95; // Aplica 5% de desconto
        } 
       
    else if (metodoDePagamento === 'credito') {
          valorTotal *= 
          valorTotal *= 
    
          valorTotal *=
    
          valor
    1.03; // Aplica 3% de acréscimo
        }
    
        
        
    
       
    
        
    
    
       
    return valorTotal.toFixed(2);
      
    
    
    
     
    export { CaixaDaLanchonete };