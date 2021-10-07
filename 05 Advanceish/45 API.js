fetch('https://api.chucknorris.io/jokes/random')
    .then( (responce) => {
        return responce.json();
    })
    .then( (data) => {
        console.log(`Your Fresh Joke:\n\t${data.value}`);
    })

