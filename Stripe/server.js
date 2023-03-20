// setup dotenv library and load all environment variables
require(`dotenv`).config()

// setup express library
const express = require(`express`)
// get app from express
const app = express()

// we call app as like an api
// and read all the json data sent to the server
app.use(express.json())

// client and server share the same url and port "http://localhost:3000/"
// all our client code will be stored in the "public" folder
app.use(express.static("public"))

// setup stripe library
// and pass our Stripe private key
const stripe = require(`stripe`)(process.env.STRIPE_PRIVATE_KEY)

// we create a placeholder for our packages using Map object
// Map objects are collections of key-value pairs like objects but more versatile
// This could be substituted with a database or a json Api our the products
const storeItems = new Map([
    // id, pricekey: value, namekey: value
    [1, {priceInCents: 1000, name: 'Beerflix Pack 1 - 4 Beers'}],
    [2, {priceInCents: 2000, name: 'Beerflix Pack 2 - 8 Beers'}]
])

// We set up a post request which, if successful will redirect to the checkout Url
// if not successful will show an error
// our post function will be an async one
app.post('/create-checkout-session', async (req, res) => {
    try {
        // using await we are going to return the function "create" from stripe
        // which returns various proprieties
        const session = await stripe.checkout.sessions.create({

            // stripe payment information
            payment_method_types: ['card'],
            mode: 'payment', // or 'subscription'

            // the array of items we purchase
            // we get this information from the req linked to the script button (point 2)
            line_items: req.body.items.map(item => {

                // we get storeItems and pass it our item id
                const storeItem = storeItems.get(item.id)

                // and we return a new object that is going to be in the correct format for stripe
                return {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: storeItem.name
                        },
                        unit_amount: storeItem.priceInCents // in stripe the price is in cents
                    },
                    quantity: item.quantity

                }

            }),

            success_url: `${process.env.SERVER_URL}/success.html`,
            cancel_url: `${process.env.SERVER_URL}/cancel.html`

        })
        // we return the url from our session variable
        res.json({ url: session.url })
    } catch (e) {
        // we catch any error we have
        res.status(500).json({ error: e.message})
    }
})

// launch our server, it's listening using port 3000
app.listen(3000)
