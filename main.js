import readline from "readline"
import { account } from "./account"
import CoffeeShop from "./CoffeeShop"
import PremiumAccount from './PremimumAccount'

let shop = new CoffeeShop()


const r1 = readline.createInterface({

    input: process.stdin,
    output: process.stdout,
})



let choice
let accounts = []


let user1 = new account(accounts.length, "user-1", "name-1", "address-1", 100000, "00 / 00 / 00", 200, false)
accounts.push(user1)

let user2 = new account(accounts.length, "user-2", "name-2", "address-2", 100000, "00 / 00 / 00", 0, false)
accounts.push(user2)

let user3 = new account(accounts.length, "user-3", "name-3", "address-3", 100000, "00 / 00 / 00", 800, false)
accounts.push(user3)

let user4 = new account(accounts.length, "user-4", "name-4", "address-4", 100000, "00 / 00 / 00", 900, false)
accounts.push(user4)

let user5 = new account(accounts.length, "user-5", "name-5", "address-5", 100000, "00 / 00 / 00", 20000, false)
accounts.push(user5)

let user6 = new account(accounts.length, "user-6", "name-6", "address-6", 100000, "00 / 00 / 00", 20, false)
accounts.push(user6)

let user7 = new account(accounts.length, "user-7", "name-7", "address-7", 100000, "00 / 00 / 00", 10000, false)
accounts.push(user7)

let Puser1 = new PremiumAccount(accounts.length, "user-1", "name-1", "address-1", 100000, "00 / 00 / 00", 900)
accounts.push(Puser1)

let Puser2 = new PremiumAccount(accounts.length, "user-2", "name-2", "address-2", 100000, "00 / 00 / 00", 200)
accounts.push(Puser2)

let Puser3 = new PremiumAccount(accounts.length, "user-3", "name-3", "address-3", 100000, "00 / 00 / 00", 20000)
accounts.push(Puser3)

let Puser4 = new PremiumAccount(accounts.length, "user-4", "name-4", "address-4", 100000, "00 / 00 / 00", 20)
accounts.push(Puser4)

let Puser5 = new PremiumAccount(accounts.length, "user-5", "name-5", "address-5", 100000, "00 / 00 / 00", 800)

accounts.push(Puser5)








console.log(`Welcome to our coffee shop !
    1- Create an account
    2- Create a premimum account
    3- view all the accounts 
    4- Buy Coins
    5- Order a coffee
    6- Gift Coins (only fr premimum accounts!)
    7- Exit
    `)



r1.question("Select a service please:\n", function (string) {
    choice = parseInt(string)
    let username, name, adress, crdn, exp ,id,price, currency,type,user2

    switch (choice) {
        case 1:
            console.log(`Creating an account:`);
            r1.question(`Please enter the user name \n`, function (s) {
                username = s
                r1.question(`Please enter the name \n`, function (s) {
                    name = s
                    r1.question(`Please enter the adress \n`, function (s) {
                        adress = s
                        r1.question(`Please enter the credit card number  \n`, function (s) {
                            crdn = s
                            r1.question(`Please enter the expire date  \n`, function (s) {
                                exp = s
                                const user = new account(accounts.length, username, name, adress, crdn, exp, 0, false)
                                accounts.push(user)
                                console.log(accounts);
                                r1.close()
                            })
                        })
                    })
                })
            })
            break;
        case 2:

            console.log(`Creating a Premimum account:`);
            r1.question(`Please enter the user name \n`, function (s) {
                username = s
                r1.question(`Please enter the name \n`, function (s) {
                    name = s
                    r1.question(`Please enter the adress \n`, function (s) {
                        adress = s
                        r1.question(`Please enter the credit card number  \n`, function (s) {
                            crdn = s
                            r1.question(`Please enter the expire date  \n`, function (s) {
                                exp = s
                                const user = new PremiumAccount(accounts.length, username, name, adress, crdn, exp, 0)
                                accounts.push(user)
                                console.log(accounts);
                                r1.close()
                            })
                        })
                    })
                })
            })
            break;
        case 3:
            console.log(accounts);
            r1.close()
            break;
        case 4:

            console.log(`Buying coins:`);
            r1.question(`Please select an account by typing its id \n`, function (s) {
                console.log(accounts);
                id = s
                r1.question(`Please sellect the currency
                    1- USD
                    2- EUR
                     \n`, function (s) {
                    currency = s
                    r1.question(`Please enter the price \n`, function (s) {
                        price = s
                        shop.buyCoins(accounts[id], currency, price)
                        console.log(accounts[id]);
                        r1.close()
                    })
                })
            })
            break;
        case 5:

            console.log(`Ordering coffee:`);
            console.log(shop.coffeeMenu);

            r1.question(`Please select the type of the coffee \n`, function (s) {
                type = s
                r1.question(`Please sellect the user id\n`, async function (s) {
                    console.log(accounts)
                    id = s
                    await shop.orderCoffee(type-1, accounts[id])
                    console.log(accounts[id]);
                    r1.close()
                })
            })

            break;
        case 6:
            console.log(`Gifting coins:`);
            accounts.map((acc)=>{
                if(acc.isPremium){
                    console.log(acc);
                }
            })
            r1.question(`Please select a Premimum account by typing its id \n`, function (s) {
                console.log(accounts);
                id = s
                r1.question(`Please select an other premimum account \n`, function (s) {
                    user2 = s
                    r1.question(`Please enter the coins \n`, async function (s) {
                        price = parseInt(s)
                        await accounts[id].giftCoins(accounts[user2], price)
                        console.log('first account '+accounts[id].coffeCoins)
                        console.log('second account '+accounts[user2].coffeCoins);
                        r1.close()
                    })
                })
            })
            break;
        case 7:
            r1.close()
            break;
        default:
            r1.close()
            break;
    }

})

















