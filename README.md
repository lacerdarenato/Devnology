O intuito deste exercício é validar o máximo de conhecimento que você possui.

Antes de mais nada, crie um repositório no git e cole o conteúdo desse texto no readme.
Você precisará construir um sistema para uma agência de veículos, ele será composto por uma api e um frontend (Desktop ou Mobile). 
Sinta-se à vontade para usar a linguagem que achar melhor e pode usar templates prontos, frameworks e/ou outras coisas que possam facilitar a sua vida.

###Crie um arquivo readme falando um pouco sobre quais as decisões que você tomou para a resolução do exercício, e, caso não tenha feito algo, explique o motivo. Também informe os passos para fazer sua aplicação rodar, e caso tenha, o processo de deploy.

---
Tarefas

Precisamos que nosso sistema seja capaz de:

-[X] Cadastrar a compra de um veículo, modelo, marca, ano de fabricação, placa, cor, chassi, data da compra e valor da compra.
-[X] Registrar a venda de um veículo, com data da venda, valor da venda e comissão do vendedor (10% sobre o lucro da venda).
-[X] Deverá ser possível listar todos os veículos
-[ ] veículos disponíveis
-[ ] histórico de veículos vendidos.
-[ ] Listar o valor total em compras e vendas. 
-[ ] Lucro/prejuízo do mês
-[ ] valor pago em comissões.

Caso queira criar mais funcionalidades fique à vontade, apenas se lembre de mencionar 
sobre elas no readme.

Qualquer dúvida entre em contato comigo pelo linkedin, estarei à disposição para esclarecer quaisquer dúvidas que surgirem.

Ao finalizar a prova basta enviar o link do repositório no linkedin.

---

- Escolhi trabalhar com Python (framework Django) para a API e Angular como client por ja conhecer as ferramentas e por ambas facilitarem na organização e legibilidade do código. Alem de facilitarem os inputs dos dados na API.


###Definido o modelo de entrada dos veículos com as seguintes validações:

| Campo | Validação |
--- | --- 
modelo | models.CharField(max_length=30) #tamanho maximo de 30 caracteres
marca | models.CharField(max_length=30) #tamanho maximo de 30 caracteres
ano | models.DecimalField(max_digits=4, decimal_places=0) #tamanho maximo de 4 digitos sem decimais
cor | models.CharField(max_length=30) #tamanho maximo de 30 caracteres
placa | models.CharField(max_length=7) #tamanho maximo de 7 caracteres
chassi | models.CharField(max_length=17, unique=True) #tamanho maximo de 17 caracteres e único
dataCompra | models.DateField(auto_now_add=True) #Inclusão automatica ao criar novo carro
valorCompra | models.DecimalField(max_digits=10, decimal_places=2) #tamanho maximo de 4 digitos sem decimais
situacao | models.CharField(max_length=1, choices=escolhaStatus) #tamanho máximo de 1 caracter que é flag das opções 'disponível' ou 'vendido'

###Definido o modelo de entrada dos veículos com as seguintes validações:

| Campo | Validação |
--- | --- 
veiculo | models.OneToOneField("Veiculos.Veiculo", on_delete=models.CASCADE) #Relacionamento 1:1 com tabela veículos, apaga a venda ao deletar o veículo relacionado
dataDeVenda | models.DateField() #modelo de Data
valor | models.DecimalField(max_digits=10, decimal_places=2) #tamanho maximo de 10 digitos com duas casas decimais
comissao | models.DecimalField(max_digits=9, decimal_places=2) #tamanho maximo de 9 digitos com duas casas decimais


- Definida a relação entre venda e veículo de 1:1, achei mais coerente e mais facil de validar para a regra de negócio cada venda possuir apenas veículo
- Incluído o campo situação para determinar status do carro e facilitar na filtragem de histórico de vendas, no banco armazena-se 1 caracter (economia de espaço) e quando a API receber a requisição, o serializer dela "traduz" o caracter para a informação mais legível ao usuário.


