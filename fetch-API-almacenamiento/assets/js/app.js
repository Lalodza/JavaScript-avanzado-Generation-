let $btnGato = document.querySelector('#btnGato');



for(let i = 0;i < 50;i++){
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then(resp => resp.json()).then(data => {
            console.log(data);

            let imagenGatito = document.createElement('div');
            imagenGatito.className('card');
            imagenGatito.src = data[i].url;
            document.body.appendChild(imagenGatito);
        })
}