function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default class CoffeeShop {

    coffeeMenu = [
        ["coffee-1", 40,],
        ["coffee-2", 60],
        ["coffee-3", 50],
        ["coffee-4", 60],
        ["coffee-5", 70],
        ["coffee-6", 80],
        ["coffee-7", 90],
        ["coffee-8", 100]
    ]

    buyCoins(user, currency, price) {
        if (currency == "USD") {
            const coins = price * 50
            user.addCoins(coins)
        }
        if (currency == "EUR") {
            const coins = price * 60
            user.addCoins(coins)
        }
    }

    async orderCoffee(type, user) {
        let bonus
        console.log("wait please ...");
        const temp = this.coffeeMenu
        user.retractCoins(temp[type][1])
        await sleep(2000)
        if (user.isPremium) {
            bonus = parseInt(Math.random() * 20)
            user.addCoins(bonus)
        } else {
                        bonus = parseInt(Math.random() * 10)

            user.addCoins(bonus)
        }
        console.log("Your order is ready thank you for chosing us !");
        console.log("we have gave you "+bonus+" coins!!");
        return temp[type][0]

    }
}