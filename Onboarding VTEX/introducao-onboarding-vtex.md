# 3.2 - Onboarding VTEX

## Principais funcionalidades de cada módulo e seus pontos de atenção</br></br>

1. **_Onboarding VTEX - Catálogo_**

   - Categorias: Criação e alteração de departamentos, categorias e subcategorias.

     - Criar até 3 niveis de categoria para uma melhor pratica e deixar mais intuitivo para o cliente final.
     - Não usar caracteres especiais em nomes de categorias.</br></br>

   - Grupos e campos: Criação de grupos e campos (produtos/sku) em uma categoria/produto

     - Grupos funcionam como containers para os campos.
     - Categorias filhos erdam campos e grupos dos pais, esses por vez não podem ser alterados nos filhos.
       - Campo (produto) - categoria do produto, não muda de acordo com a variação.
       - Campo (sku) - Será a variação do produto em si.</br></br>

   - Produtos: Criação, alteração e exclusão de produtos.

     - Diferenciação de produto e SKU - Produto é o que queremos vender e SKU são as variações desse produto.
     - Sku sempre será atrelado a um produto e um produto sempre precisa ter pelo menos um SKU para estar ativo.</br></br>

   - SKUs: Criar, excluirm copiar e alterar.

     - Variações do produto. Pode se ter mais do que uma variação por SKU.
       Ean e Ref não podem se repetir.
       Cada Sku tem seu próprio estoque.</br></br>

   - Marca: Criar, editar e excluir.

     - Obrigatória para cadastrar qualquer produto.</br></br>

   - Importação e Exportação:

     - importação e exportação em massa de planilhas contendo uma lista de produtos/skus/imagens.</br></br>

   - Anexos: Adicionar

     - Customizações do produto.</br></br>

   - Coleções: Criar grupo de produtos.
     - Usado para fins de promoções.</br></br></br>

2. **_Onboarding VTEX - Preços_**

   - Lista de preço

     - O SKU que é precificado e não o produto.
     - Tabelas de preço
     - Politicas comerciais
     - Preço base: quanto ele custa, quanto o cliente vai pagar.
     - Preço de lista: preço "De".
     - Preço fixo:</br></br>

   - Regras

     - Descontos ou acrescimos no valor
     - Arredondamento de preços
     - Configurações</br></br></br>

3. **_Onboarding VTEX - Promoções e Taxas_**

   - Audiencias de campanhas

     - Containers de promoções
     - Publico alvo = condições
     - Condições para seu publico alvo ser aplicado (Carrinho)</br></br>

   - Promoções

     - Arquivadas e não arquivadas - possibilidade de desarquivar
     - Promoção regular - Mais comum
     - Compre junto - vincula o produto visualizado com algum outro pelo sku
     - Leve mais por menos - exemplo (pague 5 leve 6)
     - Desconto progressivo - Aumenta o desconto conforme a quantidade marcada
     - Compre e ganhe - Compre alguma coisa e ganhe outra de brinde
     - Toda promoção tem uma data de início e de final</br></br>

   - Cupom e taxas

     - Cupom - Código que é inserido no carrinho e ativa uma promoção
     - Taxa - Inverso de cupom - Usada para colocar algum imposto ou algo que tenha que cobrar a mais. (ex ICMS)</br></br></br>

4. **_Onboarding VTEX - Configurações da Conta_**

   - Gerenciamento da conta

     - Perfis de acesso - permissões para diferentes times
     - Usuários - Obrigatoriamente irá usar uns dos perfis criados
     - Conta - Conta do ambiente - Lojas - Sistema multi-lojas</br></br>

   - Autenticação e aplicativos

     - Aplicativos auxiliares</br></br></br>

5. **_Onboarding VTEX - Pedidos_**

   - Todos os pedidos e configurações

   - Estratégia e políticas de envio

     - Transportadoras encarregadas de armazenar as planilhas de fretes</br></br>

   - Doca e estoque

     - Doca -> ponto de origem
     - Para uma doca ser utilizada ela obrigatoriamente precisa de uma politica de envio e de venda associadas
     - Estoque InStore - Ponto de retirada</br></br>

   - Tarifas de envio

     - Simulação de checkout</br></br>

   - Configurações e ponto de retirada

     - Adicional nos fretes - margem de segurança
     - Agrupar produtos na mesma remessa</br></br></br>

6. **_Onboarding VTEX - Pagamentos_**

   - Transações

     - Um pedido sempre vai ter uma transação atrelada</br></br>

   - Vale-compra

     - Forma de pagamento (GiftCard)
     - Codigos com valores para serem usados na hora do pagamento</br></br></br>

7. **_Onboarding VTEX - Marketplace_**

   - Marktplace

     - Local responsável pela cobrança
     - Pode vender produtos de outras lojas

   - Sellers

     - Loja dona do produto
     - Sempore será responsável pela entraga do produto
     - Loja e parceiros vtex - Configuração nativa</br></br></br>

8. **_Onboarding VTEX - Configurações da Loja_**

	- Políticas comerciais

		- Tem custos a mais caso utilize mais do que uma politica
		- Uma das utilidades - trabalhar com multi países</br></br>

	- Checkout

		- Cada loja tem seu checkout específico
		- Se o campo 'Loja' ficar em branco ele vai ser utilizado como principal para todos.</br></br>


	- CMS

		- Toda a parte de gerenciamento de conteudo (Front)</br></br>
		
	- Site editor

		- Não possui cache</br></br></br>
		
		
9. **_Onboarding VTEX - Cliente_**

	- Central de mensagem

		- Armazenação de templates de emails institucionais</br></br>

	- Master Data

	 - Banco de dados, newsletter, formularios...

		