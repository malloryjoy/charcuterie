
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

const american = new Cheeseboard(
    bigCheese = "American",
    cheeseFlavor = "Mild and Salty, ",
    cheeseTexture = "Creamy with a semi-soft consistency",
    cheeseInfo = "American cheese is a processed hybrid cheese, typically made with cheddar and colby cheese, and is known and popularized for its versatility. You can find American cheese in sandwiches all around the world, and its low melting point makes it the ideal choice for your next cheeseburger!",
    biscuitName = "Butter Crackers or Pretzels",
    biscuitInfo = "For a classic combination, the buttery flavor of a classic Ritz cracker enhances the creaminess of American cheese. Pretzels bring an extra punch of salty to go with the mild nature of American cheese flavor.",
    spreadName = "Strawberry jam or Honey drizzle",
    spreadInfo = "A vibrant fruit flavor like strawberry is a beautiful combination for a simple cheese like American! As well, the sweet drizzle of honey elevates the flavor profile to something more sophisticated.",
    meatName = "Beef jerky, pepperoni, or turkey slices",
    meatInfo = "A salty, dry meat like a jerky adds a good balance to the soft and creamy American cheese. Meanwhile, turkey slices are a lighter option from a texture perspective, but the flavor is just as bombastic!",
    fruitName = "Apples, Grapes, or Strawberries",
    fruitInfo = "American cheese tends to be a blend of Colby and Cheddar. As such, you'll want to use some of their shared friends! The crisp, somewhat tart flavor of apple gets its moment in the sun with a mild cheese like American. Strawberries and grapes (specifically, seedless grapes) offer a lighter but still vibrant flavor profile, ideal for those summer picnics!",
    compCheese1 = "Gorgonzola",
    compCheese2 = "Provolone",
    compCheeseInfo = "A good cheese board offers a variety of consistencies and flavors. Gorgonzola is similar to American cheese in terms of texture, but it is a much bolder, loudly flavored bleu cheese. Meanwhile, Provolone has a relatively mild flavor, but offers a much harder texture than the other cheeses here!",
    saltyOptions = "Pickles or Carrots",
    saltyInfo = "Sticking to the 'burger' of it all, the briny, salty flavor of pickles makes a basic dill or even bread and butter sandwich pickles a fine addition to your board. Meanwhile, carrots provide a light flavor and a bold crunch to the softer cheese textures and stronger flavors on the board.",
    sweetName = "Kinder chocolate, Fig Cookies, Caramels",
    sweetInfo = "Hazlenut chocolates add a classic sweetness with an extra nutty kick. Meanwhile, something like a Fig Newton offers a jammy, soft texture that matches the mild nature of your American cheese while also complementing the earthy nature of your Gorgonzola. If you want a true blend of salty sweet, caramel soft candies (or even butterscotch!) are a fun flavor to add to this board.",
    wineName = "Sauvignon Blanc, Chardonnay, Pinot Noir, Beaujolais ",
    wineInfo = "A light dry white wine, like Sauvignon Blanc or Chardonnay, is a great choice for the richness of the cheeses featured. Lighter reds like a Pinot Noir or Beaujolais are a fun option, too!",
    knife1 = "Flat knife",
    knife2 = "Narrow plane knife",
    knife1cheese = "American and Gorgonzola",
    knife2cheese = "Provolone",
    hasNuts = false,
    hasMeat = true,
    hasWine = true
);


const cheddar = new Cheeseboard(
    bigCheese = "Cheddar",
    cheeseFlavor = "Salty, buttery, can be sharp",
    cheeseTexture = "Cheddar is often semi-hard, but easy to crumble!",
    cheeseInfo = "Originating from the eponymous village of Cheddar in Somerset, cheddar as we know it was modernized in the 1800s by dairyman Joseph Harding. Cheddar is one of the world's most popular cheeses, and is a charcuterie board staple! Wisconsin-ites are proud to share their place at number one for cheddar production in the US, but don't sleep on Vermont's Cabot cheddar!",
    biscuitName = "Multi-grain or Herby Crackers",
    biscuitInfo = "To best match that somewhat nutty, sharp flavor of cheddar, go with a classic Ritz or even a Wheat Thin! If you'd like to elevate your palate, a fruity toast or crisp pairs well, too.",
    spreadName = "Apricot Jam or Dijon (spicy) Mustard",
    spreadInfo = "A light, fruity jam like apricot is a great complement to a sharp cheddar cheese. Meanwhile, the tangy and occasionally spicy flavors of a mustard add great balance to a salty cheese like cheddar.",
    meatName = "Prosciutto, Salami or Chorizo",
    meatInfo = "Cured and bold meats are best for cheddar. Sweet, mild prosciutto is great for a basic cheddar, while a Genoa salami pairs well for a sharper blend.",
    fruitName = "Apples or Pears",
    fruitInfo = "A crisp, sweet apple like a Gala or Honeycrisp is the classic cheddar-fruit pairing. Pears offer a similar sweet balance to cheddar. /n BONUS: For a brighter pairing, try pineapple or tart cherries!",
    compCheese1 = "Brie",
    compCheese2 = "Gouda",
    compCheeseInfo = "A soft brie is a nice contrast to the semi-hard nature of cheddar! Meanwhile, gouda's more creamy texture and sweeter lean adds a nice new flavor profile to your board.",
    saltyOptions = "Almonds, Walnuts or green olives",
    saltyInfo = "Bold nuts like almonds and walnuts are great pairs for a cheddar. As well, the salty acidity of green olives are a beautiful balance to the rich buttery flavor of cheddar cheese.",
    sweetName = "White chocolate squares, Raspberry dark chocolate, Graham crackers",
    sweetInfo = "Bold flavors like dark chocolate and raspberry make for a bombastic combination with a sharp cheddar! For a more demure and mindful flavor, white chocolate and lighter graham crackers add just enough sweetness to add a little something to your cheese.",
    wineName = "Riesling, Chardonnay, Pinot Noir, Merlot",
    wineInfo = "Mild cheddar pairs great with sweeter wines, like light reds (a Pinot Noir) or sweet whites (like a Riesling). That said, most white wines are a safe bet! For a sharper, bolder cheddar, balance things out with a fuller white wine like Chardonnay or Merlot, which will also pair lovely with your Gouda.",
    knife1 = "Narrow plane knife",
    knife2 = "Pronged knife",
    knife1cheese = "Cheddar and Gouda",
    knife2cheese = "Brie",
    hasNuts = true,
    hasMeat = true,
    hasWine = true
);

console.log(hasWine);



