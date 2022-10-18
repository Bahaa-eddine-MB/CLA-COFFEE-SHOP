export class account {
  constructor(id, userName, name, address, creditCardNumber, expiryDate, coffeCoins, isPremium) {
    this.id = id,
    this.userName = userName
    this.name = name
    this.address = address
    this.creditCardNumber = creditCardNumber
    this.expiryDate = expiryDate
    this.coffeCoins = coffeCoins
    this.isPremium = isPremium
  }

  addCoins(number) {
    this.coffeCoins += number
  }
  retractCoins(coins) {
    if (this.coffeCoins > coins) {
      this.coffeCoins -= coins
    }
  }

}