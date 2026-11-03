const containerCatalogo = document.getElementById("container-catalogo");
console.log(containerCatalogo);

async function products() {
  const json = await fetch("/catalogo.json");
  const data = await json.json();

  data.forEach((element) => {
    if (!element.promocao) {
      containerCatalogo.innerHTML += `<div class="produto">
            <img src=${element.img} alt="" />
            <div class="produto-meta">
              <h3>${element.produto}</h3>
              <span class="price">R$${element.preco}</span>
              <span class="desconto"></span>
              <button>WhatsApp</button>
            </div>
        </div>`;
    } else {
      containerCatalogo.innerHTML += `<div class="produto">
            <img src=${element.img} alt="" />
            <div class="produto-meta">
              <h3>${element.produto}</h3>
              
              <span class="price targe">R$${element.preco}</span>
              <span class="desconto">R$${element.precoPromocao} ${(element.preco - element.precoPromocao) / element.preco}% off</span>
              <button>WhatsApp</button>
            </div>
        </div>`;
    }
  });
}

products();
