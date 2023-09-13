function getApi(urls) {
    const promesas = [];
    for (const url of urls) {
        const promesa = fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(err);
                }
                return response.json();
            })
        promesas.push(promesa);
    }
    return Promise.all(promesas);
}

const urls = ['https://pokeapi.co/api/v2/pokemon/pikachu',
    'https://pokeapi.co/api/v2/pokemon/snorlax',
    'https://pokeapi.co/api/v2/pokemon/ditto'];


setTimeout(() => {
    getApi(urls).then((resultados) => {
        console.log(resultados,);
    })
}, 6000)
