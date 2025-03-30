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
    this.bigCheese = bigCheese;
    this.cheeseFlavor = cheeseFlavor;
    this.cheeseTexture = cheeseTexture;
    this.cheeseInfo = cheeseInfo;
    this.biscuitName = biscuitName;
    this.biscuitInfo = biscuitInfo;
    this.spreadName = spreadName;
    this.spreadInfo = spreadInfo;
    this.meatName = meatName;
    this.meatInfo = meatInfo;
    this.fruitName = fruitName;
    this.fruitInfo = fruitInfo;
    this.compCheese1 = compCheese1;
    this.compCheese2 = compCheese2;
    this.compCheeseInfo = compCheeseInfo;
    this.saltyOptions = saltyOptions;
    this.saltyInfo = saltyInfo,
    this.sweetName = sweetName,
    this.sweetInfo = sweetInfo,
    this.wineName = wineName,
    this.wineInfo = wineInfo,
    this.knife1 = knife1;
    this.knife2 = knife2;
    this.knife1cheese = bigCheese;
    this.knife2cheese = compCheese1;
    this.hasNuts = hasNuts;
    this.hasMeat = hasMeat;
    this.hasWine = hasWine;
}

}

const plainBoard = new Cheeseboard(
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
    cheeseFlavor = "Mild and Salty",
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


const brie = new Cheeseboard(
    bigCheese = "Brie",
    cheeseFlavor = "Earthy and buttery",
    cheeseTexture = "Creamy with a soft consistency",
    cheeseInfo = "Originating in France, Brie is often formed in a round mould using whole or semi-skimmed milk. Though delicious as is, Brie is often baked for an extra gooey, easily spreadable cheese for any cheese board!",
    biscuitName = "Saltines or Bagguette",
    biscuitInfo = "As Brie is a softer cheese, Saltines (or really any basic water cracker) offer a nice crunch that lets the flavor of the Brie take center stage. For the traditional serving experience, a toasty, crusty baguette makes a great complement to a creamy wedge of Brie.",
    spreadName = "Honey drizzle or Onion jam",
    spreadInfo = "Honey is a simple, sweet complement to a the top of a brie. For a savoury flavor profile, a caramelized onion jam adds a salty-but-sour taste that pairs beautifully with a baked Brie!",
    meatName = "Prosciutto or Salami",
    meatInfo = "Prosciutto is a lighter, sweeter meat that makes it a perfect match to the buttery Brie. Meanwhile, Salami offers a robust and potent flavor that provides a perfect balance to the creamy nature of Brie!",
    fruitName = "Stone fruits or berries",
    fruitInfo = "A sweet and juicy stone fruit, like a peach or a plum, provides a vibrant punch to the earthy Brie. If such fruits are out of season, any berry offers just as vibrant a punch!",
    compCheese1 = "Manchego",
    compCheese2 = "Goat Cheese",
    compCheeseInfo = "Manchego is a harder cheese with a stronger, nuttier flavor profile than Brie. A good goat cheese offers a similar soft texture to Brie, but also provides a new complexity to the flavor profile of your board!",
    saltyOptions = "Pistachios or Almonds",
    saltyInfo = "The sweet and nutty flavor of both pistachios and almonds are a beautiful complement to Brie and your complement cheeses.",
    sweetName = "Chocolate or Candy Corn",
    sweetInfo = "Brie is so versatile that any chocolate makes a good pairing! Dark chocolate will make for a luxurious combination, but milk chocolate offers a greater flavor balance. White chocolate also offers a nice creamy complement to a Brie! For a bit of a fun and nostalgia, use a Kit Kat to give crunch to a creamy, chocolatey bite! If you're really in the nostalgia zone, Candy Corn's marshmallow-and-vanilla flavor is another great balance to the nutty, somewhat sweet flavor of Brie.",
    wineName = "Champagne, Riesling, Merlot, Pint Noir",
    wineInfo = "The bubbles of Champagne or a Riesling add a crispness to the softness of a Brie or a Goat Cheese, while also adding a nice sweetness to a salty Manchego. If bubbles aren't your vibe, a lighter red wine like a Merlot or a Pinot Noir offer a fruiter flavor that will also balance out the creamy nature of Brie and Goat Cheese, as well as the stronger flavors of your Manchego!",
    knife1 = "Pronged Cheese Knife",
    knife2 = "Skeleton Knife",
    knife1cheese = "Brie and Goat Cheese",
    knife2cheese = "Manchego",
    hasNuts = true,
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

const comté = new Cheeseboard(
    bigCheese = "Comté",
    cheeseFlavor = "Mild, sweet, nutty",
    cheeseTexture = "Comté is a Semi hard cheese, but can also be flexible!",
    cheeseInfo = "You know how sparkling wine can only be called 'champagne' if it hails from the 'champagne' region of France? Well, Comté is only produced in the eastern region of France, close to Switzerland! There is a rigorous production process that involves exclusive milk and grading, making it a rare and unique addition to a charcuterie board!",
    biscuitName = "Honey Crackers or Bagguette",
    biscuitInfo = "A sweet cracker (maybe even a Graham cracker!) is a great complement to the sweet and nutty flavors of a Comté. The crispy crust of a toasted baguette offers the perfect French combo!",
    spreadName = "Fig Jam or Chutney",
    spreadInfo = "Really, fig anything or honey is a light but sweet complement to Comté! A mango or apple chutney gives a nice sweet and savory flavor. ",
    meatName = "Prosciutto, Salami or Chorizo",
    meatInfo = "Sweet, mild prosciutto balances the nutty flavor of Comté. Meanwhile, the ultra-salty, occasionally spicy kick of salami or chorizo is an incredible balance to the sweet flavors of Comté!",
    fruitName = "Apples or Pears",
    fruitInfo = "A crisp, sweet apple like a Granny Smith or Honeycrisp cuts through the rich flavor of Comté. Pears offer a similar sweet balance to the nuttier flavors of Comté!",
    compCheese1 = "Brie",
    compCheese2 = "Manchego",
    compCheeseInfo = "A soft, creamy Brie is a nice contrast to the semi-hard nature of Comté! Manchego is a similar texture, but offers a saltier flavor than the lighter Brie or sweeter Comté.",
    saltyOptions = "Cashews or pistachios",
    saltyInfo = "Both cashews and pistachios offer a creamier crunch, as well as providing a nice earthy flavor to counterbalance the sweeter notes of your cheeses.",
    sweetName = "Dark Chocolate, Candied Ginger, or Caramels",
    sweetInfo = "A bold dark chocolate adds a complexity to your flavor profile! The sweet and somewhat spicy nature of candied ginger is an amazing contrast to the nutty nature of Manchego and Comté, while caramels match that nuttiness while enhancing the buttery nature of your Brie.",
    wineName = "Unoaked Chardonnay, Sauvignon Blanc, Pinot Noir, Beaujolais,",
    wineInfo = "A hearty Chardonnay (either unoaked or lightly oaked) is sweet with an acidity that will complement the nutty and savory flavors as well as the creamier texturers of your cheeses. A Sauvignon Blanc offers a higher acidity level that brings a good contrast to the richer Manchego and Brie while offering a fresh flavor contrast to your Comté. If you're thinking of a red wine, Pinot Noir offers an earthy balance to the sweeter and creamier flavors on your board, while a Beaujolais provides a juicy sweet contrast to the more savory elements at play.",
    knife1 = "Narrow plane knife",
    knife2 = "Pronged knife",
    knife1cheese = "Comté and Manchego",
    knife2cheese = "Brie",
    hasNuts = true,
    hasMeat = true,
    hasWine = true
);




//<script src ="/vanilla1.html"></script>


//console.log(hasWine);

//let yourCheese;

//if (cheeseData.bigCheese = "american"){
    //yourCheese = myBoard;
    //return yourCheese;
//} else{
    //yourCheese = american;
    //return yourCheese;
//}

















//<script src ="/vanilla1.html"></script>


//console.log(hasWine);

//let yourCheese;

//if (cheeseData.bigCheese = "american"){
    //yourCheese = myBoard;
    //return yourCheese;
//} else{
    //yourCheese = american;
    //return yourCheese;
//}






