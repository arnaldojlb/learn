const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('You did it!');
        } else {
            reject ('You died');
        }
    });
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err))
