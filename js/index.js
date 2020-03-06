// Selecao de elementos
const entrada = document.querySelector('#entrada');
const botaoAdd = document.querySelector('#add-button');
const aFazerContainer = document.querySelector('#a-fazer');
const itemAFazer = document.querySelectorAll('#a-fazer div input');
let listaDeAFazer;
const feitoContainer = document.querySelector('#feito');

// Funções
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

function montarItemFeito(content) {
  const itemContainer = document.createElement('div');

  itemContainer.append(content);

  return itemContainer;
}

function addFeitoActions(item) {

}

function addItem() {
  const item = montarItem();
  aFazerContainer.append(item);

  listaDeAFazer = document.querySelectorAll('#a-fazer div');

  if (listaDeAFazer.length > 0) {
    listaDeAFazer.forEach((item) => {
      item.addEventListener('click', () => {
        feitoContainer.append(item);

        listaDeFeito = document.querySelectorAll('#feito div');
        listaDeFeito.forEach((itemFeito) => {
          itemFeito.addEventListener('click', () => {
            itemFeito.parentNode.removeChild(itemFeito);
          });
        });
      });
    });
  }
}

// Atribuindo eventos 
botaoAdd.addEventListener('click', addItem);
