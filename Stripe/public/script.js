// every time a button with checkout_button class is clicked
const button = document.querySelector(".checkout_button")
button.addEventListener("click", () => {
    console.log("Checkout")

    // 1 --- We make a server request ---

    // we make a fetch request asking our server to give us a url we create to a checkout page
    // we give it the info we want (product id and quantity)
    // and the server will reply with a unique url

    fetch ('/create-checkout-session',  {
        method: `POST`,
        headers: {
            'Content-Type': 'application/json'
        },

        // 2 --- We send id a quantity of our items we want to buy ---

        // this is a cart placeholder where we select two items
        // and we send our order in the JSON format
        body: JSON.stringify({
            items: [
                { id: 1, quantity: 1 },
                { id: 2, quantity: 1 },
            ]
        })

        // 3 --- If this is a successful request we redirect the user, if not we show an error page/code ---

        // we check our response
    }).then(res => {
        // if successful we convert it to json
        if (res.ok) return res.json()
        // if not successful we take the json and we send it to a Promise and send it to .catch
        return res.json().then(json => Promise.reject(json))

        // then if successful return the url
    }).then(({ url }) => {
        // and use that url to set our window location to our url sending the user to the correct url
        //console.log(url)
        window.location = url
        // if not successful we catch the error from the promise and print it in the console
    }).catch(e => {
        console.error(e.error)
    })
});
