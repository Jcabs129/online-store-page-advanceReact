## How to get started on BE
1. Navigate to to directory `/Advanced-React/sick-fits/backend`
2. run `npm run dev`

1. Signed up to cloudinary

## How to run seed-data
This will create additional data within your DB so that you dont have to add each item/product manually.
located under sick-fits/products 
- Navigate to to directory `/Advanced-React/sick-fits/backend
- `npm run seed-data`

## Route created
http://localhost:3000/init
http://localhost:3000/users

## graphQL Route
http://localhost:3000/api/graphql

## Cloudinary
1. created an account ✅
2. Created a schema file called `ProductImage.ts` ✅

1. http://localhost:3000/product-images/
2. create a new productImage 
3. this should also be sotred on your cloudinary account `sickfits`

## Useful info
https://cloudinary.com/ - "help companies unleash the full potential of their media to create the most engaging visual experiences."

## Mod-10 Vid 55 - custom checkout mutation with stripe
API Explorer
http://localhost:3000/api/graphql

`mutation {
  checkout(token: "ABC 123") {
    id
  }
}`

## Vid-56

Frontend - Checkout Cart (token ID)
1. Sign-In
2. add a few products
3. navigate to cart -> Fill in payment method
4. click checkout -> console find payment token
5. Copy + Paste in api explorer 
6. restart Terminal backend
7. Click play query on api Explorer
8. Check BE response via terminal
9. also check the list of payments via stripe `https://dashboard.stripe.com/test/payments/`


api Explorer
`
mutation {
  checkout(token: "pm_1KGAYFIzRLwndXL9dd3KmKaT") {
    id
  }
}
`
## Vid-57 Creating our order and Order Items
/mutations/checkout.ts

5. Convert the cart items to the OrderItem
6. Create the order and return it
7. Clean up any old cart

what was changed?
1. kill BE terminal
2. Restart `npm run dev`
3. Nvigate to http://localhost:7777/
4. go to cart -> and fill out payment Method and pay
5. Check console -> new object called `checkout`
6. Also Check BE terminal call there should also be ID - exampls `pi_3KIE8wIzRLwndXL92Tf5cuBn`
7. Payment ID can be matched within the stripe account `https://dashboard.stripe.com/test/payments/`
8. Also the charge item should also be shown in your BE keystone `http://localhost:3000/orders`
