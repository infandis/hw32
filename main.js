class Hamburger {
    static SIZE_SMALL = { price: 50, calories: 20 }
    static SIZE_BIG = { price: 100, calories: 40 }

    static STUFFING_CHEESE = { price: 10, calories: 20 }
    static STUFFING_SALAD = { price: 20, calories: 5 }
    static STUFFING_POTATO = { price: 15, calories: 10 }

    static TOPPING_SAUCE = { price: 15, calories: 0 }
    static TOPPING_MAYO = { price: 20, calories: 5 }

    constructor(size, stuffing) {
        this._price = size.price + stuffing.price;
        this._calories = stuffing.calories + stuffing.calories;
    }

    addTopping(topping) {
        this._price += topping.price;
        this._calories += topping.calories;
    }

    calculate() {
        return this._calories;
    }

    calculatePrice() {
        return this._price;
    }
}
