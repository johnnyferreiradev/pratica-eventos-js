// Selecao de elementos
const entrada = document.querySelector('#entrada');
const botaoAdd = document.querySelector('#add-button');
const listaDeAFazer = document.querySelector('#a-fazer');

// Criando elementos


//Funções
function getValorEntrada() {
  return entrada.value;
}

function montarItem() {
  const itemContainer = document.createElement('div');
  const checkItem = document.createElement('input');
  checkItem.type = 'checkbox';

  itemContainer.append(checkItem);
  itemContainer.append(getValorEntrada());

  return itemContainer;
}

function addItem() {
  const item = montarItem();
  listaDeAFazer.append(item);
}

// Atribuindo eventos 
botaoAdd.addEventListener('click', addItem);
