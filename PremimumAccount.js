import { account } from './account'

export default class PremiumAccount extends account {

    constructor(id, userName, name, address, creditCardNumber, expiryDate, coffeCoins) {
        super(id, userName, name, address, creditCardNumber, expiryDate, coffeCoins)
        this.isPremium = true
    }


    async giftCoins(user, coins) {
        const mycoins = this.coffeCoins
        let gift = new Promise(function (myResolve, myReject) {
            if (mycoins> coins && user.isPremium) {
                myResolve(
                    coins
                )
            } else {
                myReject("you dont own enough coins or the user you are trying to gift is not premimum ")
            }
        })

        gift.then((message) => {
            this.retractCoins(coins)
            user.addCoins(coins)
            console.log("You have gifted successfuly " + message + " coins")


        })
            .catch((message) => console.log("Cant gift coins " + message))
    }
}