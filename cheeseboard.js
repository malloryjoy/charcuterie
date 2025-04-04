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
    this.knife1cheese = knife1cheese;
    this.knife2cheese = knife2cheese;
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
    biscuitName = "Classic or Herby Crackers",
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


const chévre = new Cheeseboard(
    bigCheese = "Chévre",
    cheeseFlavor = "Tangy, bright, with a hint of citrus",
    cheeseTexture = "Chévre is classified as a soft cheese, though aged variations can be firmer and crumbly!",
    cheeseInfo = "Is this the Greatest cheese Of All Time? It's certainly a contender, as chévre is simply the French word for 'GOAT cheese'!",
    biscuitName = "Multi-grain crackers or Crusty baguette",
    biscuitInfo = "The tangy flavors of goat cheese are greatly balanced by the nuttiness of a multigrain or well-seeded biscuit. Meanwhile, a thick, crusty bread like a baguette makes a fine serving bite for a creamy cheese like chévre.",
    spreadName = "Fig Jam or Honey",
    spreadInfo = "Figs provide a rich sweet depth to chévre, while a classic honey drizzle adds a lighter, delicately sweet touch!",
    meatName = "Prosciutto, Salami or Chorizo",
    meatInfo = "Salty, dry meats like a salami or chorizo are a great contrast to a creamy cheese like chévre. Prosciutto, however, is a lighter, sweeter meat, that will be a beautiful complement to a bright goat cheese!",
    fruitName = "Raspberries or Pears",
    fruitInfo = "A bright cheese like chévre calls for fruits with a greater tart factor. Think raspberries, blackberries, or even cherries, if the season calls for it! Meanwhile, pears offer that powerful tart flavor while also giving a crisp contrast to the creamy chévre that you might not find in a softer fruit like a berry.",
    compCheese1 = "Camembert",
    compCheese2 = "Gruyére",
    compCheeseInfo = "Camembert is a signal to others: 'I'm fancy. I know what I'm talking about here. I am a responsible adult who knows what things are.' Because who just picks Camembert? You do, because you know that Camembert offers a creamy texture similar to chévre, but provides a more earthy flavor profile. Meanwhile, Gruyére is a harder cheese in terms of texture, but also offers a nutty, rich flavor that offers a great counterbalance to chévre!",
    saltyOptions = "Pistachios, Walnuts or Olives",
    saltyInfo = "Pistachios are sweet, but earthy, adding a creamy and playful complexity to any of the cheeses on your board. In shocking news, walnuts are especially nutty in terms of flavor. It sounds silly, but it's true! It adds an amazing contrast to the creamier cheeses on your board. Lastly, a classic green olive or Kalamata olive provides a salty and briny flavor that will play well with all!",
    sweetName = "Honeycomb, Berry chocolate truffles, Oreos",
    sweetInfo = "Honeycomb offers a deeper, richer sweetness than a lighter honey drizzle! If you love your chocolate, a strawberry or raspberry chocolate square or truffle offers a brighter bite to contrast the tangy and nutty cheeses. While Oreos may seem like an out-of-the-box choice, you'll have a major nostalgia factor while also finding a surprising luxury in swiping a bit of chévre on top of the already-present creamy Oreo filling!",
    wineName = "Sauvignon Blanc, Pinot Grigio, Pinot Noir, Beaujolais",
    wineInfo = "Dry whites and brighter reds will be your friends with this board! Sauvignon Blanc and Pinot Grigio are crisp but fruity, and their acidity offers a great counterbalance to the tangy cheeses. Meanwhile, Pinot Noir and Beaujolais are bright and fruity, without being overly sweet.",
    knife1 = "Soft Cheese knife",
    knife2 = "Chisel knife",
    knife1cheese = "Chévre and Camembert",
    knife2cheese = "Gruyére",
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


const feta = new Cheeseboard(
    bigCheese = "Feta",
    cheeseFlavor = "Mild, salty, briny",
    cheeseTexture = "Feta is a soft, crumbly cheese.",
    cheeseInfo = "Feta hails from Greece, making it a popular ingredient in Caesar salad (just kidding!). Feta is one of the world's oldest cheeses, getting a mention in Homer's 'The Odyssey'! ",
    biscuitName = "Multigrain Crackers or Pita",
    biscuitInfo = "The salty crunch of a seedy cracker is a lovely complement to the creamy tangy flavors of Feta. If you really want to lean into the Greek vibes, you obviously can't go wrong with pita chips or even just warm fresh pita!",
    spreadName = "Tapenade or Honey",
    spreadInfo = "A cousin to the pesto, tapenade is an olive based dip that adds an equally briny and tangy flavor to the feta. A honey drizzle allows for a sweeter flavor combo!",
    meatName = "Prosciutto, Soppressata or Capicolla",
    meatInfo = "The delicate sweet flavors of prosciutto make a lovely counterbalance to the salty and tangy Feta. Soppressata adds a decent amount of fat and spice to counterbalance the creaminess of feta, and cappicola offers a richer, more savory depth to your board.",
    fruitName = "Watermelon or Apricot",
    fruitInfo = "Watermelon is sweet and light, providing a fantastic contrast to the briny flavors of your cheese. Apricots are sweet and tart, which also contrasts the tangy feta!",
    compCheese1 = "Brie",
    compCheese2 = "Manchego",
    compCheeseInfo = "Brie is a milder, buttery cheese that contrasts the stronger feta. Manchego provides a salty flavor, but also offers a stronger texture!",
    saltyOptions = "Pistachios and Roasted Cashews",
    saltyInfo = "Pistachios provide a crunchy yet creamy vibe to your board! A garlic and herb or even an olive oil roasted cashew offers another round of creamy crunch, while also giving a zesty and salty flavor.",
    sweetName = "Chocolate covered orange peel, Fig Newtons, Honeycomb Toffee, or Berry Gummies",
    sweetInfo = "Chocolate and orange offers a citrusy sweet contrast to the salty cheeses. Fig Newtons are chewy and sweet, providing a new depth to your flavor profile. Honeycomb Toffee provides a counterbalance with sweet flavors and crunchy texture! Berry gummies brighten up the board with a lighter, sweeter tang!",
    wineName = "Viognier, Cava, Pinot Noir, Grenache,",
    wineInfo = "Sweet and acidic is the way to go with the flavors at play with these cheeses! Viognier enhances a creamy brie and the saltier Feta and Manchego. Cava is a sparkling white wine that cuts through the salty Feta and brings out the richer flavors of the Manchego and Brie. Pinot Noir is a classic red that offers a bright and earthy profile, and the boldly fruity and sweet Grenache is a perfect partner to all three cheeses, but especially the Manchego!",
    knife1 = "Narrow plane knife",
    knife2 = "Pronged knife",
    knife1cheese = "Manchego",
    knife2cheese = "Brie and Feta",
    hasNuts = true,
    hasMeat = true,
    hasWine = true
);

const gouda = new Cheeseboard(
    bigCheese = "Gouda",
    cheeseFlavor = "Mild, sweet, nutty",
    cheeseTexture = "Gouda offers a semi hard to hard texture, but is ultimately quite creamy!",
    cheeseInfo = "Dating as far back as the Middle Ages, Gouda can be found in any flavor you can think of in the cheese shops along the canals of Amsterdam! A versatile cheese, Gouda is almost fudgy in its creaminess, while providing a flavor suitable for both apple butter and crackers, or sliced on top of a burger!",
    biscuitName = "Multigrain Crackers or Baguette",
    biscuitInfo = "The salty crunch of a nutty, seedy cracker is a lovely complement to the creamy and nutty flavors of Gouda. If you're working with an Aged Gouda, the caramel flavors make it an even better combination! Meanwhile, baguette slices are chewy and crusty, making for a neutral flavor with great texture that gives the Gouda a chance to shine!",
    spreadName = "Apple Chutney or Whole Grain Mustard",
    spreadInfo = "Tangy apple chutney offers a beautiful contrast to the mild and nutty Gouda. Whole Grain mustard offers a savoury, if a bit spicy kick!",
    meatName = "Prosciutto, Soppressata or Salami",
    meatInfo = "Salty, delicate prosciutto offers a great complement to a young, creamy Gouda! Meanwhile, saltier cured meats like Soppressata or Salami give a great contrast to the sweeter and nuttier Gouda. If you're a spice fan, using slices of Calabrese Salami offers an extra kick to your board!",
    fruitName = "Apple or Apricot",
    fruitInfo = "A crisp, sweet apple like Honeycrisp or Fuji gives a good sweet crunch against creamy and nutty Gouda. Meanwhile, apricots give an even richer sweetness (especially if you're using dried apricots!) while still highlighting the caramelly flavors of Gouda.",
    compCheese1 = "Brie",
    compCheese2 = "Sharp Cheddar",
    compCheeseInfo = "Brie is creamy like Gouda, but both earthier in flavor and softer in texture! Cheddar offers a stronger, saltier depth, but a word of caution: use a sharp cheddar! A milder, younger cheddar will get lost in the flavors of your Gouda!",
    saltyOptions = "Olives and Almonds",
    saltyInfo = "Kalamata (black) olives give a tangy, briny kick that pairs lovely with cheddar and Gouda, while green olives are a saltier, bitter flavor that contrasts great with Brie. For a true crunch, almonds are a buttery option with a mild, creamy profile against the cheeses on your board.",
    sweetName = "Milk Chocolate Squares, Chocolate chip Cookies, Honeycomb, Caramels",
    sweetInfo = "Classic milk chocolate is a smooth complement to these creamy cheeses! For a hint of nostalgia, chocolate chip cookies are a great, complex contrast to a nutty, creamy cheese like Gouda. The nutty flavors of the cheeses on your board will get a luxurious sweet crunch from honeycomb, while caramels offer a complementing creamy, nutty flavor that adds richness to your board.",
    wineName = "Riesling, Sauvignon Blanc, Pinot Noir, Merlot,",
    wineInfo = "A drier, fruit-forward white wine will cut through the richer textures of your cheeses while also providing a sweet counterbalance in flavor. Riesling complements the Brie and Gouda while providing a fruity contrast to Cheddar, and Sauvignon Blanc offers a citrusy palate cleanser! For a red wine pairing, something just as fruity but low in tannins creates an equal counterbalance in flavors and acidity. Pinot Noir's fruitier flavors are a beautiful complement to Gouda and Brie, while meeting a stronger Cheddar without being too overwhelming. Merlot is a bit bolder, but the low acidity makes it an easy fruity complement to all three cheeses.",
    knife1 = "Narrow plane knife",
    knife2 = "Flat knife",
    knife1cheese = "Gouda and Cheddar",
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






