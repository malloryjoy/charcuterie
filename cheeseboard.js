
class Cheeseboard {
    constructor(
    bigCheese,
    cheeseFlavor,
    cheeseTexture,
    cheeseInfo, 
    biscuitName,
    biscuitInfo, 
    spreadName,
    spreadInfo,
    meatName,
    meatInfo,
    fruitName,
    fruitInfo,
    compCheese1,
    compCheese2,
    compCheeseInfo,
    saltyOptions,
    saltyInfo,
    sweetName,
    sweetInfo,
    wineName,
    wineInfo,
    knife1,
    knife2,
    knife1cheese,
    knife2cheese,
    hasNuts,
    hasMeat,
    hasWine
){
    this.bigCheese = bigCheese,
    this.cheeseFlavor = cheeseFlavor,
    this.cheeseTexture = cheeseTexture,
    this.cheeseInfo = cheeseInfo,
    this.biscuitName = biscuitName,
    this.biscuitInfo = biscuitInfo,
    this.spreadName = spreadName,
    this.spreadInfo = spreadInfo,
    this.meatName = meatName,
    this.meatInfo = meatInfo,
    this.fruitName = fruitName,
    this.fruitInfo = fruitInfo,
    this.compCheese1 = compCheese1,
    this.compCheese2 = compCheese2,
    this.compCheeseInfo = compCheeseInfo,
    this.saltyOptions = saltyOptions,
    this.saltyInfo = saltyInfo,
    this.sweetName = sweetName,
    this.sweetInfo = sweetInfo,
    this.wineName = wineName,
    this.wineInfo = wineInfo,
    this.knife1 = knife1;
    this.knife2 = knife2;
    this.knife1cheese = bigCheese,
    this.knife2cheese = compCheese1,
    this.hasNuts = hasNuts;
    this.hasMeat = hasMeat;
    this.hasWine = hasWine;
}

}

const myBoard = new Cheeseboard(
    bigCheese = "Main Cheese",
    cheeseFlavor = "Cheese has flavor",
    cheeseTexture = "Cheese is often hard, soft, or something in between",
    cheeseInfo = "Cheese originates from a place, and is often used in certain recipes.",
    biscuitName = "Bread or cracker type",
    biscuitInfo = "Certain cheeses are best served with a hard, flavorless cracker. Sometimes cheeses are served with a bread that has a bit more bite!",
    spreadName = "Jam, jelly, or condiment like mustard!",
    spreadInfo = "Depending on the cheese or biscuit used, certain spreads compliment the charcuterie board really well!",
    meatName = "Charcuterie boards are cheese and crackers with a bit of meat!",
    meatInfo = "Certain meats are better than others, depending on the cheese used!",
    fruitName = "Fruit can add a crispy sweetness!",
    fruitInfo = "Sweet, crisp, soft, tart? This flavor is everything!",
    compCheese1 = "Another cheese!",
    compCheese2 = "this third cheese",
    compCheeseInfo = "These cheeses pair really well with your major cheese and other complements!",
    saltyOptions = "A nice nut or bite sized veggie is a great choice for a cheese board!",
    saltyInfo = "This is why these options work with this board! Have fun!",
    sweetName = "Dessert choices would be great, right?",
    sweetInfo = "Certain sweet flavor combos are everything, and putting them into cheeseboards is even better!",
    wineName = "Pinot Noir!",
    wineInfo = "Wine bottles make a charcuterie board even better!",
    knife1 = "Sharp knife",
    knife2 = "Pronged knife",
    knife1cheese = "This will be the same as cheese 1",
    knife2cheese = "This will be the same as complementary cheese",
    hasNuts = true,
    hasMeat = true,
    hasWine = true



);

console.log(hasWine);



