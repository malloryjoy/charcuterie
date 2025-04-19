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

const asiago = new Cheeseboard(
    bigCheese = "Asiago",
    cheeseFlavor = "Sharp, Nutty, and Salty",
    cheeseTexture = "Semi soft to hard, and can be crumbly!",
    cheeseInfo = "Asiago is a diverse cheese, providing a different texture depending on its age! Originating in Italy, it is considered a Swiss Alpine cheese, like Gruyére or Comté!",
    biscuitName = "Rosemary Crackers or Sourdough slices",
    biscuitInfo = "An herb like Rosemary offers a fragrant balance to the hearty flavor of Asiago. The nuttiness of Asiago also pairs beautifully with the somewhat tangy flavor and chewy texture of Sourdough bread!",
    spreadName = "Apple butter or olive tapenade",
    spreadInfo = "Apple butter offers a warm, sweet spice that will give your cheese a nice autumnal vibe! Meanwhile, the salty even briny flavors of tapenade (think hummus, but with olives at its base, not chickpea!) are a perfect complementary flavor to the sharp intensity of Asiago.",
    meatName = "Soppressata, Prosciutto, Hot Calabrese ",
    meatInfo = "Soppressata is a nice dry salami that matches the strong salty flavors of Asiago. Prosciutto is a sweeter, lighter meat that offers a great contrast to the texture and flavor of Asiago, while a Calabrese salami provides a fun spicy kick!",
    fruitName = "Blackberries, Apples or Pears,",
    fruitInfo = "Blackberries offer a tartness that provides a sweet counterbalance to the sharp saltiness of Asiago! Apples and Pears are just as sweet, but their crisp texture provides a fun new factor to the overall 'mouthfeel' of your board.",
    compCheese1 = "Brie",
    compCheese2 = "Smoked Gouda",
    compCheeseInfo = "Brie is softer and richer in texture. It is a beautiful contrast to the sharper Asiago! Smoked Gouda offers a softer texture as well, but provides a strong flavor that will delight without overwhelming the sharpness of the Asiago.",
    saltyOptions = "Gherkins, Red Peppers, Castelvetrano Olives",
    saltyInfo = "Gherkins are like miniature pickles with a strong tart flavor! It's a great match for a sharp cheese like Asiago or the Smoked Gouda. Red Peppers, either roasted or marinated, provide a softer and sweeter flavor that gives room for the cheese to shine. A mild, buttery olive like Castelvetrano provides that same briny taste of a pickle without overwhelming the sharper cheeses.",
    sweetName = "Spiced Dark Chocolate, Honeycomb, Candied Orange Peel",
    sweetInfo = "Dark chocolate provides a rich sweet flavor, but adding an orange zest or using a chili infusion provides a new and depthful flavor to your profile! Honeycomb is sweet with an airy crunch, pairing beautifully with your sharp cheeses and even your rich, buttery Brie! A candied orange peel offers a brighter citrus flavor against the sharp cheeses.",
    wineName = "Riesling, Pinot Grigio, Pinot Noir, Syrah",
    wineInfo = "Sweeter whites will be your friend with Asiago! A Riesling balances the saltiness of Asiago and the creaminess of Brie, and a Pinot Grigio offers a crisp fruitiness that pairs fantastically with milder cheeses as well as stronger ones. For red wines, a Pinot Noir is light with a fruity touch, while a Syrah is much bolder and offers a deeper, richer sweetness that pairs well with that Smoked Gouda and an Aged Asiago!",
    knife1 = "Flat knife",
    knife2 = "Pronged knife",
    knife1cheese = "Asiago and Smoked Gouda",
    knife2cheese = "Brie",
    hasNuts = false,
    hasMeat = true,
    hasWine = true
);


const boursin = new Cheeseboard(
    bigCheese = "Boursin",
    cheeseFlavor = "Herby and buttery",
    cheeseTexture = "Creamy with a soft and crumbly consistency",
    cheeseInfo = "A cheese for more modern times, Boursin was first developed in Normandy post WWII. The cheese gets its name from its creator, cheesemaker François Boursin, who derived his recipe from a dinner party dish in which guests would add herbs to a fresh cheese.",
    biscuitName = "Plain or Rosemary Crackers",
    biscuitInfo = "Boursin has a strong flavor, so choose a cracker that lets the cheese speak for itself! A basic buttery or water cracker is an ideal base for Boursin, but a Rosemary cracker adds a complementary herbal flavor!",
    spreadName = "Honey drizzle or Fig jam",
    spreadInfo = "Honey is a simple, sweet complement to the herby and creamy Boursin. For a more complex flavor, a fig jam is another contrasting sweet spread but far more rich!",
    meatName = "Prosciutto or Salami",
    meatInfo = "Prosciutto is a salty, fatty meat that pairs well with creamy and herby Boursin! Meanwhile, a dry, cured meat like Salami offers that same salty flavor but an incredible contrast with the creamy cheese.",
    fruitName = "Apples or berries",
    fruitInfo = "Granny Smith apples provide a tartness that provides a counterbalance to the salty flavors of Boursin, while Honeycrisp apples offer a sweeter flavor profile. Blackberries and raspberries are an even brighter burst of flavor that can also cut through the thick and creamy Boursin!",
    compCheese1 = "Manchego",
    compCheese2 = "Gouda",
    compCheeseInfo = "Manchego is a harder cheese with a stronger, nuttier flavor profile. Gouda is a happy medium in firmness, while also providing a creamy and mellow flavor that is slightly sweet. These three cheeses are diverse in flavor and texture: a charcuterie dream!",
    saltyOptions = "Olives",
    saltyInfo = "The salty, briny nature of olives make them a winner on this board! Castelvetrano olives are buttery and mild; Kalamata olives are a bit bolder and make for a complex pairing with Manchego and Gouda; Marinated olives with herbs and garlic are a natural pairing with herby Boursin!",
    sweetName = "Fruit Gummies, Fruit Chocolates, Fig Newtons",
    sweetInfo = "Fruity flavored gummies are bright and chewy, making for a complex yet sweet flavor profile! Dark chocolate with raspberry or even dipped chocolate orange zest provides that fruity tang with a pleasing chocolate touch! Fig Newtons are a nostalgic fruit cookie that provides a contrasting sweetness and a softer texture.",
    wineName = "Champagne, Sauvignon Blanc, Pinot Noir, Beaujolais",
    wineInfo = "The bubbles of Champagne add a celebratory vibe and make a great palate cleanser between the contrasting flavors. Sauvignon Blanc is a fantastic match for your Boursin, with its vibrant flavor elevating the garlic and herbs in the cheese while also providing a sweet acidity against the Gouda and the Manchego. For reds, a Pinot Noir is fruit forward and somewhat sweet, and will not overwhelm the flavors of any cheeses on your board. Beaujolais is even sweeter and offers a fresher, brighter flavor as a counterbalance to all three cheeses!",
    knife1 = "Narrow Plane Knife",
    knife2 = "Spreader Knife",
    knife1cheese = "Manchego and Gouda",
    knife2cheese = "Boursin",
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
    meatInfo = "Prosciutto is a salty, fatty meat that makes it a perfect match to the buttery Brie. Meanwhile, Salami offers a robust and potent flavor that provides a perfect balance to the creamy nature of Brie!",
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


const camembert = new Cheeseboard(
    bigCheese = "Camembert",
    cheeseFlavor = "Strong, rich, and buttery, with an earthy edible rind",
    cheeseTexture = "Soft",
    cheeseInfo = "Camembert is a French cheese -- pronounce it as Cam-em-bear! First produced in the eponymously named village in Normandy, Camembert is quite similar to Brie! However, Camembert has a stronger, earthier flavor than Brie, and has a lower milkfat content, making it overall less buttery and creamy by comparison.",
    biscuitName = "Water crackers or Sourdough slices",
    biscuitInfo = "With a stronger cheese like Camembert, a neutral cracker like a Saltine or even a Wheat Thin provides a simple platter to let the cheese speak for itself. Sourdough bread slices provide a delightful tang that will not take away from the soft and creamy Camembert.",
    spreadName = "Apricot or Raspberry Jam",
    spreadInfo = "A bright, sweet fruit preserve makes a beautiful complement to an earthy, strong cheese like Camembert. Apricot, raspberry, even strawberry preserves are great options!",
    meatName = "Prosciutto, Salami or Capicolla",
    meatInfo = "Prosciutto is a sweet, light meat that provides a lovely counterbalance to the creamy, earthy Camembert. Salami offers a drier, savory if mild flavor against Camembert, and Capicolla provides a middle of the road texture with a bit of a saltier smoke flavor!",
    fruitName = "Apples, Pears, Dried Figs",
    fruitInfo = "A crisp, sweet apple like a Granny Smith or Honeycrisp offers a sweet acidity to go against the smooth and rich cheese. Pears provide a true sweetness that has a slightly less intense tart flavor than an apple! If you'd like a dried fruit, figs and apricots (if you haven't already used them in a preserve form) offer that same bright flavor that can truly enhance your cheese.",
    compCheese1 = "Chévre",
    compCheese2 = "Aged Gouda",
    compCheeseInfo = "Chévre is a tangy, soft goat cheese that provides a similar texture to Camembert but a brighter, lighter flavor! Meanwhile, Aged Gouda is a firmer cheese that offers another strong flavor, but a different flavor profile than Camembert.",
    saltyOptions = "Toasted Nuts and Roasted Peppers",
    saltyInfo = "Smoked Almonds and Toasted Walnuts are great options for bold flavor profiles with these cheeses. Meanwhile, roasted red peppers are soft, sweet, and savory, making for a strong complement to the tangy Chévre and the harder-textured Gouda. The earthy Camembert with a roasted red pepper will offer a bright and salty bite!",
    sweetName = "Nutella, Vanilla crackers, Turkish Delight",
    sweetInfo = "Nutella, or really any rich chocolate and nutty combo, provides a rich depth that pairs well with Gouda and Camembert. Meanwhile, vanilla crackers or shortbread cookies (Nilla Wafers, if you're feeling nostalgic!) are a light, sweet crunch that lets your cheese shine. Turkish Delight, a bright, sugary sweet candy, is almost like a fruit gummy and adds an elevated sweet twist to the Chévre and the Camembert.",
    wineName = "Riesling, Sauvignon Blanc, Merlot, Roscato",
    wineInfo = "A lighter, sweeter white offers a bright acidity that complements the earthy flavors of your cheese and the brighter sweeter flavors of your accoutrements. Riesling offers a sparkle, and Suavignon Blanc gives crispy and even a bit of that earthy vibe! A soft Merlot (think lower tannins) offers a fruity and rich depth without overpowering your cheeses. If you like the sweet sparkle of a Riesling, a Roscato (Rosé meets Moscato!) pairs beautifully with creamy cheeses and salty meats!",
    knife1 = "Narrow plane knife",
    knife2 = "Pronged knife",
    knife1cheese = "Aged Gouda",
    knife2cheese = "Camembert and Chévre",
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

const colby = new Cheeseboard(
    bigCheese = "Colby",
    cheeseFlavor = "Mild, buttery, sweet",
    cheeseTexture = "Semi-hard",
    cheeseInfo = "Named for the city in Wisconsin, Colby is a popular feature in sandwiches, salads, and yes, cheeseboards! ",
    biscuitName = "Multi-grain crackers or Butter Crackers",
    biscuitInfo = "The nuttiness and crisp texture of mult-grain crackers are a smooth complement to Colby, while butter crackers are a perfect match in flavor to Colby, making for a melt-in-your-mouthfeel!",
    spreadName = "Fig Jam or Caramelized Onion Jam",
    spreadInfo = "Figs provide a rich sweet depth to Colby, while caramelized onion adds a sweet and savoury flavor!",
    meatName = "Prosciutto, Salami, Soppressata",
    meatInfo = "Prosciutto is delicate, salty, and savory, pairing nicely with the sweet and creaminess of Colby. Salami is peppery and fatty, providing a rich contrast to the mellow Colby! Soppressata is a stronger flavor, but won't overwhelm the Colby in neither texture nor flavor.",
    fruitName = "Strawberries, Blueberries, Dried Mango ",
    fruitInfo = "Strawberries are juicy, somewhat tart, and very sweet! Blueberries are just as bright, but a milder sweetness that won't counterbalance your Colby. For a drier mouthfeel, slices of dried mango add a tropical punch that matches up brilliantly with Colby!",
    compCheese1 = "Havarti",
    compCheese2 = "Monterey Jack",
    compCheeseInfo = "Havarti matches Colby's creamy and buttery mouthfeel, but adds a new texture and a bit of a tang in flavor. Meanwhile, Monterey Jack is another semi-soft cheese (like Havarti!) but has a very similar flavor profile to Colby.",
    saltyOptions = "Pickled Vegetables",
    saltyInfo = "Pickles, carrots, or even okra offer a briny tang that offers a new flavor against the mild cheeses on your board! Plus, you'll find new textures and additional pops of color.",
    sweetName = "Honeycomb and brownies",
    sweetInfo = "Honeycomb offers a rich sweet and salty flavor, as well as a delightful crunch! For a spot of chocolate, a brownie provides a fudgey richness that complements the mild, creamy cheeses on your board.",
    wineName = "Chardonnay, Riesling, Pinot Noir, Roscato",
    wineInfo = "A buttery white like Chardonnay complements the creaminess of Colby as well as the Havarti and the Monterey Jack. Riesling is just as crisp, but with a true sweet flavor that balances the mild richness of your cheeses and balances the saltier meats on your board. For reds, another sweet option is a Roscato, which adds an ultra-indulgent fruit flavor and a bit of sparkle! Pinot Noir is just as sweet, but adds a new depth that won't overpower any of the accoutrements on your board.",
    knife1 = "Narrow Plane Knife",
    knife2 = "Cheese Fork",
    knife1cheese = "all three cheeses",
    knife2cheese = "Colby and Monterey Jack-- but you won't need to slice with this fork, you'll just use it to serve up pre-cubed Colby and Monterey Jack cheese!",
    hasNuts = false,
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

const edam = new Cheeseboard(
    bigCheese = "Edam",
    cheeseFlavor = "Mild, salty, nutty",
    cheeseTexture = "Semi Hard",
    cheeseInfo = "Gouda's best friend! Edam is another Dutch cheese, best recognized for the hearty inedible rind of red surrounding it in most packaging. Unlike Gouda, Edam is quite dry with a milder flavor, while Gouda has a much softer texture and a richer flavor profile.",
    biscuitName = "Water or Whole Wheat Crackers",
    biscuitInfo = "For a mild cheese like Edam, a neutral cracker is best to allow the subtler cheese to shine. A whole wheat cracker can add a nice sweeter contrast, if a greater flavor profile is desired!",
    spreadName = "Honey or Dijon Mustard",
    spreadInfo = "A dipper of honey provides a sweet counterbalance to Edam! For a hearty kick, Dijon or brown mustard provides a tangy and sharp contrasting flavor.",
    meatName = "Prosciutto, Cappicola or Salami",
    meatInfo = "Salty, delicate prosciutto is a great complement to creamy Edam! Cappicola is spicy, without being too intense against a milder cheese. Lastly, a Genoa Salami matches the milder nature of Edam, but also provides a bit of spice!",
    fruitName = "Stone fruits",
    fruitInfo = "Apricots, Cherries, Peaches! Brighter, summery fruits offer a delightful sweetness that won't overpower the Edam.",
    compCheese1 = "Havarti",
    compCheese2 = "Manchego",
    compCheeseInfo = "While Edam is a mild semi-hard cheese, Havarti is a mild semi-soft cheese! Manchego is another milder cheese, but the flavor is relatively strong and the texture is much harder than the other cheeses present.",
    saltyOptions = "Cashews, Almonds, and Pistachios",
    saltyInfo = "Go nuts! Roasted cashews, almonds, and pistachios will provide an earthy crunch that matches the nutty flavors of Edam and Manchego, while also enhancing the buttery Havarti.",
    sweetName = "Milk Chocolate Squares, Caramels, Shortbread cookies",
    sweetInfo = "Classic milk chocolate is a rich complement to all three cheeses! Caramels are a rich, sweet and salty flavor that pairs well with all three cheeses, while Shortbread cookies are an equally mild flavor that provide a great crunch!",
    wineName = "Sauvignon Blanc, Pinot Noir, Prosecco, Rosé",
    wineInfo = "Sauvignon Blanc is a white with a zing! The strong acidity cuts through the Edam and the Havarti, while creating a great contrast against Manchego. Pinot Noir offers a similar acidity cut, while still providing a mild and fruity flavor that pairs well with all three cheeses! A dry Rosé is a great way to meet in the middle and provide fruity and citrusy acidity. Prosecco works too AND provides a bubbly texture as a beautiful palate cleanser!",
    knife1 = "Skeleton knife",
    knife2 = "Flat knife",
    knife1cheese = "Havarti and Manchego",
    knife2cheese = "Edam",
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


const fontina = new Cheeseboard(
    bigCheese = "Fontina",
    cheeseFlavor = "Creamy, buttery, nutty, mild funk",
    cheeseTexture = "Fontina is a Semi-Soft Cheese",
    cheeseInfo = "Fresh from the Alps, Fontina is an Italian cheese that occasionally has holes in it, like Swiss! If you're a pizza fan, you can find Fontina cheese in your next slice of Quatro Formaggi, which is a four-cheese pizza consisting of Mozzarella, Gorgonzola, Parmesan, and Fontina!",
    biscuitName = "Seeded Crackers or Baguette Slices",
    biscuitInfo = "A seeded cracker brings an earthy flavor and a doubly crunchy vibe against the buttery smooth Fontina! A baguette slice is a quieter base, and lends itself well to Fontina's presence in a cheesy pizza!",
    spreadName = "Raspberry Preserves or Truffle Butter",
    spreadInfo = "Raspberry Preserves are a sweet presence that counterbalances the savoury notes of Fontina. Meanwhile, a white truffle butter complements the buttery flavors of Fontina, while also adding an earthy flavor to the board!",
    meatName = "Prosciutto, Soppressata or Capicolla",
    meatInfo = "The salty, fatty Prosciutto is an incredible counterbalance against creamy and buttery Fontina. Meanwhile Soppressata and Cappicolla add a decent amount of savoury fat as well as a bit of spice and pepper, making it another beautiful counterbalance to mildly sweet and nutty Fontina!",
    fruitName = "Apples or Strawberries",
    fruitInfo = "Slices of Honeycrisp or Pink Lady Apples are crisp and slightly tart, making them ideal for a creamy cheese like Fontina! Strawberries are a brighter, juicier fruit that offers a great counterbalance against the milder nature of Fontina.",
    compCheese1 = "Havarti",
    compCheese2 = "Aged Gouda",
    compCheeseInfo = "Havarti is another soft cheese, but with a much milder flavor profile than Fontina! Aged Gouda provides a much firmer texture, with a sharp nutty flavor similar to Fontina but with a sweet, almosts caramel touch!",
    saltyOptions = "Olives!",
    saltyInfo = "Castelvetrano olives are a great briny bite for this board. It's buttery and rich, while still providing that salt. Kalamata olives are another great choice, especially with the Aged Gouda and the Fontina, for being extra briny and even a bit more bold a flavor!",
    sweetName = "Milk Chocolate Truffles, Brownie Bites, Honeycomb",
    sweetInfo = "Soft and creamy milk chocolate pairs great with the creamy Havarti and Fontina cheeses. A rich, chocolatey brownie bite is a dynamite match for an Aged Gouda, too! For a salty-sweet crunch, honeycomb pairs especially great with Aged Gouda and the Fontina!",
    wineName = "Chardonnay, Riesling, Zinfandel, Grenache,",
    wineInfo = "Chardonnay is a buttery white wine that matches the creaminess of Havarti and Fontina, as well as a great counterbalance to the dense and salty Aged Gouda. Riesling is a much sweeter white wine with an acidity that elevates the flavor of the cheese while also cutting through the saltiness. For reds, both Zinfandel and Grenache are rich and juicy, making them ideal matches for a creamy cheese like Havarti and Fontina and standing up well against the Aged Gouda.",
    knife1 = "Skeleton knife",
    knife2 = "Flat Blade",
    knife1cheese = "Fontina",
    knife2cheese = "Aged Gouda and Havarti",
    hasNuts = true,
    hasMeat = true,
    hasWine = true
);

const gorgonzola = new Cheeseboard(
    bigCheese = "Gorgonzola",
    cheeseFlavor = "Creamy, pungent, salty",
    cheeseTexture = "Soft and crumbly",
    cheeseInfo = "A famous Italian blue cheese, Gorgonzola takes its name from the village in Milan! Its texture varies from Dolce, which is more delicate and buttery, and Piccante, which is much stronger and more crumbly! Most commonly, Gorgonzola is frequently a key ingredient in many a blue cheese salad dressing.",
    biscuitName = "Multigrain Crackers or Water Crackers",
    biscuitInfo = "The salty crunch of a nutty, seedy cracker is a lovely complement to the bolder Gorgonzola. A water cracker is a neutral cracker that really allows the cheese to shine!",
    spreadName = "Fig Jam or Whole Grain Mustard",
    spreadInfo = "For a sweeter mouthfeel, Fig Jam is rich and indulgent enough to counterbalance the strong flavors of Gorgonzola. Meanwhile, Whole Grain Mustard offers an earthy texture and an equally sharp flavor that contrasts well with the creamy nature of Gorgonzola.",
    meatName = "Prosciutto, Calabrese Salami, Pancetta",
    meatInfo = "Prosciutto is salty while still maintaining a lighter sweetness, ideal against a stronger cheese like Gorgonzola! Calabrese Salami is a hotter meat, creating a fun energy against the creamy Gorgonzola. For a bit of a wild card, Pancetta is quite savory and offers a flavor profile similar to bacon!",
    fruitName = "Apples, Cherries, or Dried Apricot",
    fruitInfo = "A crisp, sweet apple like Honeycrisp or Pink Lady gives a good sweet crunch against creamy Gorgonzola. Meanwhile, cherries are bright and tart, making for a great balance against the tangy flavors of Gorgonzola. For a dried fruit, apricot is chewy and and sweet, without being too overwhelming against a strong blue cheese!",
    compCheese1 = "Brie",
    compCheese2 = "Manchego",
    compCheeseInfo = "Brie is creamy like Gorgonzola, but both earthier in flavor and buttery in delivery! Manchego is a firm cheese that also offers a buttery flavor that contrasts well with creamy and powerful Gorgonzola.",
    saltyOptions = "Olives!",
    saltyInfo = "Milder olives like Castelvetrano or Picholine offer a salty punch that won't contrast too deeply against the different flavors of each cheese.",
    sweetName = "Milk Chocolate Squares, Honeycomb, Fruit Gummies",
    sweetInfo = "Classic milk chocolate is a smooth complement to these creamy cheeses! Honeycomb offers a true crunch, with a salty sweet flavor that is delightful with the Gorgonzola and the Brie while also pairing wonderfully with the salty Manchego.",
    wineName = "Sauvignon Blanc, Zinfandel, Prosecco",
    wineInfo = "Sauvignon Blanc is fresh and bright, matching Manchego's brightness and cutting through the Gorgonzola and Brie. Meanwhile, a sweet and fruit forward red like Zinfandel balances the Manchego and the Gorgonzola without overwhelming the flavors of Brie. For a sparkly number, Prosecco is light and sweet, with the bubbles making for the ultimate palate cleanser.",
    knife1 = "Open blade",
    knife2 = "Heart knife",
    knife1cheese = "Brie and Gorgonzola",
    knife2cheese = "Manchego",
    hasNuts = false,
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

const gruyere = new Cheeseboard(
    bigCheese = "Gruyére",
    cheeseFlavor = "Rich, creamy, salty, caramel",
    cheeseTexture = "Firm/Hard",
    cheeseInfo = "One of the finest Alpine cheeses, Gruyére is a Swiss cheese without any holes (or \"eyes\"). With a fantastic meltability, Gruyére is ideal for fondue and French Onion soup!",
    biscuitName = "Whole Grain Crackers or Sourdough",
    biscuitInfo = "A hearty whole-grain cracker adds a sweeter flavor that matches the saltiness and caramel flavors of Gruyére. Meanwhile, Sourdough's chew and tangy flavor complements the firm nature of Gruyére as well as the nutty notes in the flavor!",
    spreadName = "Caramelized Onion Jam or Honey",
    spreadInfo = "French Onion Soup is a natural pairing with Gruyére, so it should come as no surprise that a spread made of jammy sweet onion is a phenomenal pairing, too! For a sweeter indulgence, a honey drizzle is a perfect touch, and a truffle or rosemary-infused honey adds a touch of elegance!",
    meatName = "Prosciutto, Spicy Soppressata or Pepper Salami",
    meatInfo = "Salty, delicate prosciutto offers a great complement to the nutty flavors of Gruyére! The heat of Soppressata cuts through the richness of Gruyére, while the extra seasoning from a peppery Salami adds a great complement to Gruyére's flavors.",
    fruitName = "Apples or Cherries",
    fruitInfo = "A crisp apple like Honeycrisp, Pink Lady, or Granny Smith is sweet with a bit of tart, which complements the salty, nutty Gruyére without overwhelming the other flavors on your board. Cherries are also sweet and tart, but with an elegant rich depth!",
    compCheese1 = "Taleggio",
    compCheese2 = "Sharp Cheddar",
    compCheeseInfo = "Taleggio is softer in texture than Gruyére, but just as creamy! It's an all around milder cheese than Gruyére, with its funkier notes singing with the meaty and luscious sweet flavors on your board. A Sharp Cheddar is firmer than Gruyére, and offers a bold tang that will be a beautiful counterbalance to all the flavors and textures!",
    saltyOptions = "Olives and Cornichons",
    saltyInfo = "Castelvetrano Olives are mildly briny and majorly buttery, making it an ideal pairing for the creamy Taleggio, the nutty Gruyére, and the Sharp Cheddar. Cornichons are basically tiny pickles, and are briny enough to cut through the rich flavors of your cheeses, meats, and fruit accompaniments.",
    sweetName = "Salted Dark chocolate, Maple candy, Candied Orange Peel",
    sweetInfo = "Dark chocolate + salt = an ideal pairing for Gruyére and sharp Cheddar. Make it a dark chocolate bark with a rich fruit or a nutty flavor, and it will make a beautiful match for Taleggio! Maple candy adds a sweet depth that matches the nutty flavors of Cheddar, creamy Tallegio, and caramelly Gruyére! For a truly magical pairing, a candied orange peel adds a fantastic sweetness to Taleggio, while counterbalancing the sharpness of the Cheddar and the sweeter notes of Gruyére.",
    wineName = "Prosecco, Riesling, Pinot Noir, Zinfandel,",
    wineInfo = "For these cheeses, drier white wines are your best bet! An Off-Dry Riesling provides a gentle sweetness and an acidity that cuts through the strong flavors on your board. Prosecco accomplishes this too, and provides bubbles as a delightful palate cleanser! For red wine pairings, Pinot Noir has an earthy juiciness that pairs up beautifully with Gruyère and Taleggio, while counterbalancing the Sharp Cheddar. Zinfandel is a richer red, but doesn't overwhelm any of the flavors of your cheeses or accoutrements!",
    knife1 = "Narrow plane knife",
    knife2 = "Open Blade knife",
    knife1cheese = "Gruyère and Sharp Cheddar",
    knife2cheese = "Taleggio",
    hasNuts = false,
    hasMeat = true,
    hasWine = true
);

const havarti = new Cheeseboard(
    bigCheese = "Havarti",
    cheeseFlavor = "Creamy, mild, buttery",
    cheeseTexture = "Semi-soft",
    cheeseInfo = "A Danish cheese, Havarti takes its name from an ancient Viking word, 'avarti,' meaning a flowery riverbank. Havarti has a delicious meltability, making it perfect for grilled cheese!",
    biscuitName = "Whole Grain Bread or Butter Crackers",
    biscuitInfo = "A whole wheat or grain bread provides a hearty, earthy flavor that pairs well with the slightly nutty flavor of Havarti. To really let the creaminess come through, a butter cracker is a perfect match for Havarti!",
    spreadName = "Hot Honey or Dijon Mustard",
    spreadInfo = "A milder cheese like Havarti calls for a fun condiment! Warmth and sweetness await with a hot honey, and a Dijon Mustard adds zest without overpowering the cheese.",
    meatName = "Prosciutto, Capicola, Soppressata",
    meatInfo = "Prosciutto is salty while still maintaining a lighter sweetness, just like Havarti! Capicola is rich and slightly smoky, matching wonderfully with Havarti's smooth texture. For a true heat, soppressatta is chewy and provides a counterbalance to the creamy cheese!",
    fruitName = "Berries and Apples",
    fruitInfo = "Strawberries are bright and juicy, while blackberries offer a nice tart flavor! Meanwhile, Honeycrisp and Pink Lady apples are crisp, but a bit acidic, cutting through the richer, salty flavors of your board.",
    compCheese1 = "Gouda",
    compCheese2 = "Chévre",
    compCheeseInfo = "Gouda is just as creamy, with a bit more texture. Chévre is softer and creamier, but with a much brighter flavor!",
    saltyOptions = "Walnuts, Almonds and Pecans",
    saltyInfo = "Toasted Walnuts and Pecans are bitter and slightly sweet, making a for a fantastic contrast against the creamy cheeses. Meanwhile, Roasted Almonds are nutty and sweet, but when tossed in smoked paprika, you get a bit of heat to pair up with the hot honey!",
    sweetName = "Salted Caramels, Dark Chocolate Orange, Fruit Gummies",
    sweetInfo = "Caramels are rich, sweet and salty, making for a great match with both the Gouda and the Havarti! For a fun contrast, a rich chocolate with a citrusy punch makes a fantastic counterbalance with Havarti and Chévre. If you're looking for a more fruity flair, fruit flavored gummies offer a fun texture that contrasts with your cheeses' textures! Stick to berry and citrus flavors for maximum impact.",
    wineName = "Sauvignon Blanc, Brut Champagne, Pinot Noir, Merlot",
    wineInfo = "Sauvignon Blanc is fresh and bright, cutting through the rich creaminess of Havarti and Chévre while also giving a nice lift to the Gouda. A Brut Champagne has a drier flavor but overall the same affect, while also bringing the bubbles as a palate cleanser. For reds, a Pinot Noir is sweet and juicy, bringing a strong flavor that won't overpower that of your cheeses. A Merlot is a stronger wine in general, but the darker fruit flavors play well with Gouda and Havarti and can easily cozy up to an herbed or aged Chévre!",
    knife1 = "Cheese Wire",
    knife2 = "Narrow Plane knife",
    knife1cheese = "Havarti and Chévre",
    knife2cheese = "Gouda",
    hasNuts = true,
    hasMeat = true,
    hasWine = true
);

const jarlsberg = new Cheeseboard(
    bigCheese = "Jarlsberg",
    cheeseFlavor = "Mild, buttery, softly nutty and sweet",
    cheeseTexture = "Semi firm",
    cheeseInfo = "Though classified as a \"Swiss\" cheese, Jarlsberg originates from Norway, not Switzerland! Like Gruyére, the flavor is somewhat sweet and nutty, and has a quality meltability, making it ideal for Grilled Cheese and Fondue!",
    biscuitName = "Pumpernickel bread or butter crackers",
    biscuitInfo = "The slightly sweet and nutty flavor of Pumpernickel makes it a beautiful match for Jarlsberg. For a more neutral palate, a butter cracker (like a classic Ritz!) enhances the richness of the Jarlsberg, giving it a true moment in the spotlight!",
    spreadName = "Dijon Mustard or Apple Butter",
    spreadInfo = "For a sophisticated palate, Dijon Mustard has great bite that acts as a great counterbalance against the \"mellow yellow\" Jarlsberg! For a sweeter touch, apple butter has a warm sweetness that elevates the rich, inherent buttery flavors of Jarlsberg.",
    meatName = "Genoa Salami, Soppressata or Black Forest Ham",
    meatInfo = "A salami provides fat and tang, elevating the saltiness of the flavors while also adding a cutting contrast to the sweeter notes. A spicy Soppressata will overwhelm, but a mild and sweet variant is rich and offers a great complexity! Meanwhile, Black Forest Ham provides a smoky and lightly sweet flavor that makes it a classic Jarlsberg pairing!",
    fruitName = "Strawberries and Figs",
    fruitInfo = "Strawberries are bright with a bit of tartness. It pops against the creamy nuttiness of Jarlsberg! Figs, either dried or fresh, are earthy and honey sweet, just like Jarlsberg!",
    compCheese1 = "Fontina",
    compCheese2 = "Aged Gouda",
    compCheeseInfo = "Fontina is a semi-soft cheese with a similar flavor profile to Jarlsberg. Aged Gouda is much more intense in terms of flavor and texture, while still being rich enough without overwhelming any of the other flavors on the board!",
    saltyOptions = "Olives and Cornichons",
    saltyInfo = "Castelvetrano Olives are mildly briny and majorly buttery, making it an ideal pairing for the milder cheeses, while a roasted garlic stuffed olive is a bolder flavor that adds a counterbalance to Aged Gouda! Cornichons are basically tiny pickles, and are briny enough to cut through the rich flavors of your cheeses and meats.",
    sweetName = "Sea Salt Chocolate bark, Honeycomb, Fruit Gummies",
    sweetInfo = "A salted chocolate bark elevates all three cheeses and provides a good crunch! For another good crunch, honeycomb's rich sweetness is a beautiful match with the sweeter notes of the cheeses. A berry or fig flavored fruit jelly offers a brighter sweetness to contrast the savory cheeses.",
    wineName = "Prosecco, Riesling, Pinot Noir Gamay",
    wineInfo = "For these cheeses, sweeter white wines are your best bet! An Off-Dry Riesling provides a gentle sweetness and an acidity that cuts through the salty flavors on your board. Prosecco accomplishes this too, and provides bubbles as a delightful palate cleanser! For red wine pairings, Pinot Noir and Gamay have earthy and fruity juiciness that is a perfect match for rich and nutty Fontina and Aged Gouda, while also complementing the sweetness of the Jarlsberg!",
    knife1 = "Narrow plane knife",
    knife2 = "Skeleton Knife",
    knife1cheese = "Jarlsberg and Aged Gouda",
    knife2cheese = "Fontina",
    hasNuts = false,
    hasMeat = true,
    hasWine = true
);

const manchego = new Cheeseboard(
    bigCheese = "Manchego",
    cheeseFlavor = "Savory, rich, tangy",
    cheeseTexture = "Semi hard, crumbly",
    cheeseInfo = "Hola from Spain! Manchego hails from La Mancha range of Spain, which literary fans will recognize as the land from \"Don Quixote\". A rich cheese with a salty finish, Manchego melts beautifully and is a staple in Spanish cuisine!",
    biscuitName = "Water Crackers or French Baguette",
    biscuitInfo = "A thin, neutral cracker gives the flavors of Manchego a chance to shine! For a more intentional pairing, a crusty baguette has a chewy interior that provides a perfect contrast to the smooth texture of Manchego.",
    spreadName = "Olive Tampenade or Fig Jam",
    spreadInfo = "Tapenade is a savory, salty spread made from olives! It is a beautiful complement to the buttery, rich Manchego. Fig Jam is a sweeter option that enhances the nutty flavors of the cheese.",
    meatName = "Serrano Ham, Chorizo, Salchichón",
    meatInfo = "A Spanish cheese calls for Spanish meats! Serrano ham is a salty, dry-cured meat that brings out the tangier notes of Manchego. A Spanish-style chorizo offers fragrant notes with a kick that provide an incredible counterbalance to the smooth nuttiness of Manchego. For guests who like salami without the spice, Salchichón is a Spanish sausage that still provides a strong, salty, fatty flavor!",
    fruitName = "Apples and Figs",
    fruitInfo = "A crisp, slightly sweet apple like a Honeycrisp or a Fuji, is a beautiful balance for the creamy cheese and salty meats. Meanwhile, fresh or dried figs are super sweet and pair beautifully with Manchego. A drizzle of honey will take slices of apples or figs to a whole new level!",
    compCheese1 = "Fontina",
    compCheese2 = "Boursin",
    compCheeseInfo = "Fontina is a semi-soft cheese with a buttery, mild flavor, while having a tang similar to Manchego. Boursin is a spreadable, herby cheese that provides a great contrast to the firmness of Manchego!",
    saltyOptions = "Marcona Almonds and Castelvetrano Olives",
    saltyInfo = "Marcona Almonds are a classic pairing for the Spanish Manchego! Marcona Almonds also offer a great complement to the herby Boursin and the nutty smoothness of Fontina. Castelvetrano Olives are mildly briny and majorly buttery, making a perfect texture contrast to Boursin, elevating the earthier notes in Fontina, and complementing the richer flavors of Manchego.",
    sweetName = "Honeycomb, Dark chocolate cherries, Fruit tarts",
    sweetInfo = "Honeycomb is salty sweet and provides a great crunch, making for a fun texture contrast with all three cheeses without creating a flavor challenge! Dark chocolate cherries offer a great rich depth, while also providing a fruity zing that harmonizes with all three cheeses. To really focus in on fruity sweetness, a fruit tart made with pear or citrus adds brightness and crispiness while perfectly cutting the richer flavors of the board.",
    wineName = "Chardonnay, Viognier, Cava, Pinot Noir,",
    wineInfo = "A dry, buttery Chardonnay will complement the rich and creamy cheeeses while contrasting counterbalancing the nutty and salty Manchego. Viognier is a more powerful white wine in terms of fruity notes, but it has a creamier mouthfeel that plays well with Fontina and Boursin without overwhelming the Manchego. Being a Spanish cheese, Manchego sings with Cava, a sparkling Spanish wine that will act as a bright palate cleanser for each bite. For a red wine, Pinot Noir is your best bet, with a sweetness and balanced acidity that complements the creamy Fontina and Boursin while counterbalancing the savoury rich flavors of the Manchego.",
    knife1 = "Skeleton Knife",
    knife2 = "Heart Knife",
    knife1cheese = "Fontina and Boursin",
    knife2cheese = "Manchego",
    hasNuts = true,
    hasMeat = true,
    hasWine = true
);

const montereyJack = new Cheeseboard(
    bigCheese = "Monterey Jack",
    cheeseFlavor = "Mild, slightly sweet",
    cheeseTexture = "Semi hard, creamy",
    cheeseInfo = "Considered a remnant of Spanish rule, Monterey Jack is a variant of Farmer's Cheese from the central coast of California. Monterey Jack is often combined with Colby cheese to create a Marbled \"Colby Jack\", or infused with peppers to make (you guessed it) \"Pepper Jack\" cheese!",
    biscuitName = "Wheat Crackers or French Baguette",
    biscuitInfo = "An earthy, hearty crunch makes Wheat Crackers a great palate for Monterey Jack! Toasted French Baguette is another good option, for a plainer taste but a similar crunch while providing great potential for a stack of charcuterie!",
    spreadName = "Red Pepper Jelly or Fig Jam",
    spreadInfo = "Monterey Jack loves a good kick! Red Pepper Jelly provides a bit of heat without being overly spicy. For those who find even the gentlest of kicks a bit much, Fig Jam is an earthy sweet spread that provides a hearty flavor that contrasts well with the mildness of your cheese.",
    meatName = "Genoa Salami, Prosciutto, Black Forest Ham",
    meatInfo = "Genoa Salami is a milder meat choice that provides a bit of tang and hearty fat. Prosciutto is a lighter meat choice that will provide a more delicate touch while still providing that fatty meat flavor. For true harmony, Black Forest Ham is smoky and a bit sweet, tying each of your flavors together beautifully!",
    fruitName = "Strawberries and Plums",
    fruitInfo = "A bright, acidic fruit like Strawberries provides a great contrast to the Monterey Jack cheese. Meanwhile, plums are juicy, tart and sweet, cutting through the salt of the meats and complementing the cheese!",
    compCheese1 = "Brie",
    compCheese2 = "Gruyère",
    compCheeseInfo = "Take your charcuterie game to the next level with a DOUBLE CREAM Brie. It differs from regular Brie by offering a higher fat content from butter, making it extra luxurious and melt-in-your-mouth buttery rich. This makes it a great pairing with your Monterey Jack, providing a softer texture that elevates the other flavors on your board. Gruyère is another firm cheese, but offers while adding an elegant finish. Gruyère is another firmer cheese like Monterey Jack, but adds a more savoury and complex flavor!",
    saltyOptions = "Marcona Almonds and Castelvetrano Olives",
    saltyInfo = "Marcona Almonds offer a great crunch while providing a brilliant Mediterranean vibe to your board! Castelvetrano Olives are mildly briny and majorly buttery, making a perfect match for your creamy Brie, nutty Gruyère, and mellow Monterey Jack.",
    sweetName = "Candied Ginger, Sea Salt Dark Chocolate Squares, Shortbread cookies",
    sweetInfo = "If you like a bit of a challenge in your dessert, the kick of Candied Ginger offers a spicy zing that will take the flavors of your cheese to the next level without overwhelming them. For a chocolate lover, Dark Chocolate with a touch of sea salt plays on the richer flavors of your board, with the saltiness bridging the gap between the savoury notes of your cheese! For a calmer palate, Shortbread Cookies are rich and sweet, with just enough crunch to keep things fresh!",
    wineName = "Sauvignon Blanc, Viognier, Prosecco, Pinot Noir",
    wineInfo = "A bright, dry white like Sauvignon Blanc will contrast the richness of the cheeses while complementing the flavors. Viognier provides a fruitier profile, enhancing the creaminess and nuttiness of Gruyère and Brie while also elevating the milder flavors of Monterey Jack. For a sparkling option, Prosecco is a drier option that cleanses the palate! If you're a red wine fan, Pinot Noir offers a sweet fruitiness that is a heavenly match for the mild Monterey, the creamy Brie, and the nutty Gruyère. ",
    knife1 = "Narrow Plane Knife",
    knife2 = "Pronged Knife",
    knife1cheese = "Monterey Jack and Gruyère",
    knife2cheese = "Brie",
    hasNuts = true,
    hasMeat = true,
    hasWine = true
);

const parmesan = new Cheeseboard(
    bigCheese = "Parmesan",
    cheeseFlavor = "Rich, nutty, savoury",
    cheeseTexture = "Hard, granular",
    cheeseInfo = "Considered the \"King of Cheeses\", Parmesan (or Parmegianno Reggiano) is a sharp cheese that is served shaved or grated over pasta dishes, or just eaten on its own! Parmesan is a nutritional goldmine, as a source of Vitamins A and D, iron, and potassium.",
    biscuitName = "Rosemary Crackers or French Baguette",
    biscuitInfo = "A fragrant cracker makes for a pretty contrast with the saltiness of Parmesan. Meanwhile, toasted baguette slices are simple with a good crunch, with a mild flavor that lets the Parmesan shine.",
    spreadName = "Fig or Tomato Jam",
    spreadInfo = "Sweet and slightly earthy, a fig jam is a great way to highlight the nuttiness of the Parmesan. Tomato Jam is a saltier, savoury choice that brings a classic Italian flavor.",
    meatName = "Soppressata, Prosciutto, Salami",
    meatInfo = "Either a mild or spicy Soppressata offers a bold flavor or a touch of heat that holds up well with the sharpness of Parmesan! Prosciutto is a lighter option that provides a beautiful, more delicate flavor to match the Parmesan. Fennel Salami specifically provides a fun, herbal twist that will not only match the salty nuttiness of Parmesan but also make a complex flavor profile with the other flavors on the board.",
    fruitName = "Pears and Plums",
    fruitInfo = "A bright, crisp fruit like a Pear provides a stunning flavor profile with the Parmesan. Plums are a softer fruit that provides a new texture and a tart flavor against the Parmesan!",
    compCheese1 = "Brie",
    compCheese2 = "Taleggio",
    compCheeseInfo = "Brie is a softer, rich cheese that provides a good contrast to the strong flavors of Parmesan! Taleggio is another soft cheese, but offers a flavor that is both strong and contrasts the strong flavor of Parmesan!",
    saltyOptions = "Pistachios and Castelvetrano Olives",
    saltyInfo = "For a colorful and salty-sweet pop of flavor, Pistachios go great with your cheeses! Castelvetrano olives are rich and buttery, making for a briny zing that will match the Brie and Taleggio without overpowering the Parmesan.",
    sweetName = "Salted Caramels, Dark Chocolate Covered Cherries, Butter cookies",
    sweetInfo = "Salted caramels provide a rich sweetness that melts with Brie, contrasts the funk of Taleggio, and echoes the nutty flavors of Parmesan. Dark Chocolate Cherries provide that luxury chocolate flavor while the cherries provide a fruity flavor to contrast the salty sharpness of your cheeses. For a simpler palate, butter cookies are sweet and crunchy enough to make an impact without overpowering the intense flavors of the other flavors on your board.",
    wineName = "Sauvignon Blanc, Prosecco, Pinot Noir, Gamay",
    wineInfo = "A bright, dry white like Sauvignon Blanc will contrast the richness of the cheeses while complementing the flavors. For a sparkling option, Prosecco is a drier option that cleanses the palate! If you're a red wine fan, Pinot Noir offers a sweet fruitiness complements the softer cheeses and cuts through the sharpness of Parmesan, without overwhelming each cheese. Gamay is a brighter, fresher red that pairs well with Brie and Taleggio but still has a good structure against the salty Parmesan.",
    knife1 = "Skeleton Knife",
    knife2 = "Cheese Fork",
    knife1cheese = "Taleggio and Brie",
    knife2cheese = "Parmesan",
    hasNuts = true,
    hasMeat = true,
    hasWine = true
);

const provolone = new Cheeseboard(
    bigCheese = "Provolone",
    cheeseFlavor = "Mild, buttery, slightly tangy",
    cheeseTexture = "Semi-Hard",
    cheeseInfo = "An Italian cheese, Provolone is a versatile cheese that originates near Vesuvius! Provolone has two forms: Dolce (or sweet) and Picante (spicy). Either choice gets you a savory, tangy cheese that is ideal for your next sandwich or charcuterie board!",
    biscuitName = "Rosemary Crackers or French Baguette",
    biscuitInfo = "A fragrant but mild Rosemary cracker makes for a pretty yet neutral palate for Provolone. Toasted baguette slices provide a similar simplicity!",
    spreadName = "Fig Jam or Dijon Mustard",
    spreadInfo = "Fig Jam is a sweet, luxurious spread that goes a long way with Provolone and balances out the savoury flavors of Provolone. Dijon Mustard is a heartier spread with a tangy flavor profile that provides a contrasting power against the milder Provolone.",
    meatName = "Prosciutto, Salami, Capicola",
    meatInfo = "Prosciutto is a salty, smooth meat that contrasts with the mild Provolone! Salami is rich and slightly spicy, adding a new flavor to complement the Provolone. Capicola is tender with a slightly spiced flavor that provides a counterbalance against the buttery flavors.",
    fruitName = "Apples and Pears",
    fruitInfo = "Apples are crisp and sweet, providing a crunchy contrast to the smoother notes of Provolone. Pears ofter a subtler sweetness and a softer texture, while still providing that extra zing! Go for Honeycrisp or Fuji Apples and Anjou or Bartlett Pears!",
    compCheese1 = "Fontina",
    compCheese2 = "Mozzarella",
    compCheeseInfo = "All three of these cheeses call hail from Bellissima Italia! Fontina provides a softer tangy flavor that complements Provolone, while Mozzarella is a milder cheese in terms of flavor and texture!",
    saltyOptions = "Olives",
    saltyInfo = "Buttery, mild Castelvetrano olives provide a briny crispness that will pair wonderfully with all three cheeses. For a new bolder flavor, Kalamata olives offer a saltier tang that contrast the milder cheeses on your board.",
    sweetName = "Milk Chocolate Sea Salt Caramels, Turkish Delight, Shortbread cookies",
    sweetInfo = "Milk Chocolate + Sea Salt, with Caramel, makes a luxurious dessert with excellent mouthfeel, pairing beautifully with the creamy cheeses. Turkish Delight is a floral and fruity choice with a texture that will counterbalance the softer cheeses as well as the Provolone. Shortbread cookies are a buttery, neutral cookie that provide a milder sweetness for a more classic sweet bite that doubles as a palate cleanser! ",
    wineName = "Pinot Grigio, Prosecco, Pinot Noir, Lambrusco",
    wineInfo = "Pinot Grigio is a classic pairing for Italian cheeses, with its crisp fruitiness cutting through the fattier cheeses and lifting the milder flavors. For a sparkly option, Prosecco is the perfect match, another Italian native with fruity flavors and perfect palate cleansing bubbles! A Pinot Noir is a red option that is both light and fruity, pairing lovely with all three cheeses without overwhelming them. For a really fun option, Lambrusco is a SPARKLING red, providing that fruity flair and bubbles to cut through the fatty flavors.",
    knife1 = "Skeleton Knife",
    knife2 = "Heart Knife",
    knife1cheese = "Fontina and Mozzarella",
    knife2cheese = "Provolone",
    hasNuts = false,
    hasMeat = true,
    hasWine = true
);

const roquefort = new Cheeseboard(
    bigCheese = "Roquefort",
    cheeseFlavor = "Tangy, pungent, sharp",
    cheeseTexture = "Semi-Hard, Crumbly yet creamy",
    cheeseInfo = "Bonjour! As a French \"Bleu\" cheese, Roquefort has a legendary story: a young Frenchman was eating a classic cheese when he spotted a beautiful woman. He ran to meet her, abandoning his meal. He returned a few months later to find his cheese had transformed with mold, creating the cheese we now recognize as Roquefort!",
    biscuitName = "Rye Bread or Water Crackers",
    biscuitInfo = "Rye Bread offers a hearty depth and a slight tang that complements the bold flavors of Roquefort. Water Crackers provide a great crunch that contrasts beautifully with Roquefort's creaminess!",
    spreadName = "Red Onion Marmalade or Honey",
    spreadInfo = "Red Onion Marmalade offers a sweet and tangy flavor that contrasts the salty pungence of Roquefort. For a true sweet contrast against Roquefort, a honey drizzle goes a long way!",
    meatName = "Prosciutto, Soppressata, Chorizo",
    meatInfo = "Prosciutto is a salty, smooth meat that pairs beautifully with a creamy cheese like Roquefort! Soppressata is a spicier meat that provides a great counterbalance to the strong Roquefort. Chorizo, meanwhile provides a great smoky flavor that will be a perfect kick against Roquefort!",
    fruitName = "Berries or Apricots",
    fruitInfo = "Blackberries or Raspberries offer a tangy sweetness and a fresh zing! Apricots are tart and chewy, either dried or fresh, and provide a great balance against the richness of Roquefort!",
    compCheese1 = "Brie",
    compCheese2 = "Comté",
    compCheeseInfo = "Brie is a softer, rich cheese with a mild and buttery flavor! Comté is a cheese with a similar texture but a beautiful nutty flavor that contrasts the strong flavors of Roquefort without overpowering it.",
    saltyOptions = "Castelvetrano Olives or Cornichons",
    saltyInfo = "Buttery, mild Castelvetrano olives provide a briny crispness that will pair wonderfully with all three cheeses. Cornichons are tiny pickles that provide that briny flavor while also cutting through the richer notes.",
    sweetName = "Sea Salt Dark Chocolate Truffles, Fig Newtons, Fruit Gummies",
    sweetInfo = "Dark Chocolate Truffles are ideal, with a beautiful contrasting depth against the tang of Roquefort and a balance to Brie and Comté's richness. A sprinkle of sea salt just takes everything to the next level! Fig Newtons are a nostalgic cookie with a playful texture and a sweetness that provides a counterbalance to a strong Roquefort and the richness of Brie and Comté. Fruit Gummies are another nostalgic choice that provide a bright sweetness against the sharpness of Roquefort, creamy Brie, and nutty Comté. Be sure to choose a bold flavor though, like sour cherry or tangerine!",
    wineName = "Sauturnes, Chardonnay, Pinot Noir, Port",
    wineInfo = "Dessert wines await with the cheeses on this board! Sauturnes and Port are two incredible wines (the former white and the latter red) that complement the flavors of your cheeses and providing a contrast through the richness! Chardonnay is a buttery wine that matches the richness of Brie, enhancing the nuttiness of Comté, and matches up the strength of Roquefort. Pinot Noir is a classic red match for most cheeses, with bright and fruity flavors that will provide a sweeter delivery than Chardonnay, while still pairing up with each cheese in a similar fashion!",
    knife1 = "Skeleton Knife",
    knife2 = "Heart Knife",
    knife1cheese = "Fontina and Mozzarella",
    knife2cheese = "Provolone",
    hasNuts = false,
    hasMeat = true,
    hasWine = true
);



const stilton = new Cheeseboard(
    bigCheese = "Stilton",
    cheeseFlavor = "Rich, salty, nutty and sweet",
    cheeseTexture = "Semi Soft, crumbly, creamy with age",
    cheeseInfo = "Stilton is a crumbly blue cheese named after the village of Stilton in England. Despite its namesake, however, Stilton cannot be made IN Stilton! The European Commission has designated only three places where true Stilton can be produced: Derbyshire, Lancastershire, and Nottinghamshire!",
    biscuitName = "Sourdough Crackers or Honey Oat Crackers",
    biscuitInfo = "The tangy notes of Sourdough are a lovely match to the stronger flavors of Stilton. Stilton is a saltier cheese, so pairing with a cracker with a sweeter flavor (or even a Digestive biscuit) makes for a beautiful flavor profile!",
    spreadName = "Caramelized Onion or Fig Jam",
    spreadInfo = "Caramelized Onion jam is sweet, savoury, and rich... just like Stilton! For a sweeter contrast, Fig Jam provides a bright sweetness that is just as rich. ",
    meatName = "Prosciutto, Salami, Roast Beef",
    meatInfo = "A fatty, salty meat like Prosciutto pairs well with the tangy flavors of Stilton! For a counterbalance, a rich, sweet dry cured meat like Genoa Salami is a great match. For a gold star pairing, roast beef slices are a savoury complement to the sharper Stilton.",
    fruitName = "Blackberries, Pears, Apricots",
    fruitInfo = "A bright, tart berry provides a fantastic counter flavor against a strong cheese like Stilton. Pears are a classic, if subtler approach! Apricots, either fresh or dried, offer a tangy sweetness that makes it ideal for Stilton.",
    compCheese1 = "Brie",
    compCheese2 = "Parmesan",
    compCheeseInfo = "The best cheeseboards offer a diverse portfolio of tastes and textures. Brie is a softer cheese, like Stilton, but offers a milder, buttery flavor against the strong Stilton. Meanwhile, Parmesan is another stronger flavor, with nutty notes, but is a much harder cheese by way of texture!",
    saltyOptions = "Walnuts or Kalamata Olives",
    saltyInfo = "Walnuts have a good crunch, and the mild bitterness adds an extra depth to the buttery Brie and the ultra strong Stilton! Meanwhile, Kalamata olives are a salty punch that makes a good match for the Parmesan and the Stilton.",
    sweetName = "Meringue, Fruit Gummies, Dark Chocolate Squares",
    sweetInfo = "Lighter desserts are a better bet against the stronger cheeses present. Meringues are sweet and light with a great crunch! Fruit gummies offer a bit more punch, while still being a brighter counterbalance. If you truly want a rich, depthful plate, dark chocolate/semisweet chocolate squares (at least 70%, but no more than 85%) will make for an incredible counterbalance without overwhelming the senses.",
    wineName = "Riesling, Brut Champagne, Port, Pinot Noir",
    wineInfo = "Dry and sparkly whites are a great complement to the stronger, salty cheeses here. The sweetness of Riesling balances the salts, and the bubbles of a champagne are a great palate cleanser! For reds, a fruit forward, sweet red wine is a fantastic balance against the flavors at play. Pinot Noir is always a winner with its blooming fruit flavors, without being too dry. A dessert wine, like a Tawny Port, is a classic Stilton pairing that will also match the richness of Brie and the strength of Parmesan!",
    knife1 = "Pronged knife",
    knife2 = "Spade or Heart Knife",
    knife1cheese = "Brie and Stilton",
    knife2cheese = "Parmesan",
    hasNuts = true,
    hasMeat = true,
    hasWine = true
);

const swiss = new Cheeseboard(
    bigCheese = "Swiss",
    cheeseFlavor = "Mild, nutty, savoury",
    cheeseTexture = "Medium/Semi-Hard",
    cheeseInfo = "An Alpine cheese, Swiss cheese is used to describe any cheese that resembles Emmental (a cheese from the Emme Valley in Switzerland). Visually distinct for the holes or 'eyes' in the cheese, Swiss cheese is a sandwich classic all over the world!",
    biscuitName = "Sesame Crackers or Rye Bread",
    biscuitInfo = "Sesame crackers offer a nutty crunch that complements a Swiss cheese! Meanwhile, Rye bread has an earthy flavor that pairs well with the nutty savoury Swiss.",
    spreadName = "Caramelized Onion or Fig Jam",
    spreadInfo = "Swiss cheese is a relatively neutral cheese, without a lot of salt in its flavor profile. As such, a saltier condiment like a caramelized onion jam makes for a great addition to a cheeseboard featuring Swiss! For a truly sweeter flavor against a nutty Swiss cheese, fig jam creates a delightful and sunny contrast. ",
    meatName = "Prosciutto, Turkey, Salami",
    meatInfo = "Swiss pairs best with lighter meats or with a strongly contrasting meat. Prosciutto and Turkey offer a sweeter protein flavor, and a salty spicy Salami can add a big flavor boost!",
    fruitName = "Apples, Pears, Cherries",
    fruitInfo = "The crisp, sweet flavors of an apple or a pear offer a bright contrast to the nutty, mild Swiss cheese! For an extra punch, cherries offer a deep sweet contrast that is both complex and delightful.",
    compCheese1 = "Aged Cheddar",
    compCheese2 = "Fontina",
    compCheeseInfo = "A sharp cheddar provides a similar texture to Emmental/Swiss, but with a stronger flavor that crumbles well. Meanwhile, Fontina is a much softer cheese with a very strong flavor.",
    saltyOptions = "Olives or Baby Carrots",
    saltyInfo = "A briny, soft olive can offer a bold and salty contrast against the neutral Swiss as well as a balance to the stronger flavors of Fontina and Aged Cheddar. Baby carrots are somewhat sweet and crunchy, making for a fantastic and powerful bite!",
    sweetName = "Chocolate caramels, Fig Newtons, Honeycomb",
    sweetInfo = "For this board, your best bet for a sweet treat will be a warm, salty-sweet combo or a bright fruity flavor! Milk chocolate with caramel squares pair beautifully with the nutty cheeses here. A Fig Newton (or really, any fruit-flavored cookie!) is a nostalgic burst of fruity sweetness that matches the saltier flavors as well as contrast the neutral ones. Honeycomb provides a rich, caramelly crunch that is a beautiful contrast to the flavors and textures of your cheeses.",
    wineName = "Sauvignon Blanc, Pinot Grigio, Merlot, Pinot Noir",
    wineInfo = "Dry whites and low tannin reds will be your friends for this board! A Sauvignon Blanc is a bright, citrusy wine that matches well with the Fontina and the Cheddar, while creating a beautiful contrast in the creamy, nutty Swiss. Pinot Grigio is another light and crispy white wine that will offer your cheese a chance to shine. Merlot and Pinot Noir are both smooth and fruity, making them ideal choices to counterbalance your strong cheeses as well as liven up your neutral cheeses.",
    knife1 = "Flat or Chisel knife",
    knife2 = "Cheese Plane",
    knife1cheese = "Swiss and Aged Cheddar",
    knife2cheese = "Fontina",
    hasNuts = false,
    hasMeat = true,
    hasWine = true
);

const wensleydale = new Cheeseboard(
    bigCheese = "Wensleydale",
    cheeseFlavor = "Mild, slightly sweet and tart",
    cheeseTexture = "Medium, creamy, crumbly",
    cheeseInfo = "An English cheese, Wensleydale gets its name from the eponymous village in the Yorkshire territory of England. Does it harken back to your youth? Probably because Wensleydale saw a surge in popularity after its many referenced in the 'Wallace & Gromit' tv series, with sales of Wensleydale increasing by 23% after the release of the first 'Wallace and Gromit' movie!",
    biscuitName = "Neutral or Herbed Crackers",
    biscuitInfo = "A cheese like Wensleydale needs a place to shine! A plain cracker allows for Wensleydale to take center stage, and a mild herbed cracker (think Rosemary or even Sea Salt) provides an elevated flavor without overwhelming the cheese.",
    spreadName = "Honey or Tapenade",
    spreadInfo = "A honey drizzle is a beautiful compliment to the sweeter notes of Wensleydale. For a more savoury flavor, tapenade (a spread made with olives) provides a salty tang that practically blooms with Wensleydale!",
    meatName = "Prosciutto, Salami, Spicy Chorizo",
    meatInfo = "Prosciutto is salty and buttery, making it a great counterbalance to the creamy, sweet Wensleydale. Of that same token, Salami is a drier salted meat, offering a true contrast to Wensleydale. For an extra kick, a spicy Chorizo adds a level of heat against the milder, creamy cheese!",
    fruitName = "Apples, Cranberries, Blueberries",
    fruitInfo = "The bright, sweet flavors of a Honeycrisp elevate the sweetness of the Wensleydale to a whole new level. Cranberries are a classic pairing for Wensleydale, and oftentimes during the holiday season you'll find cranberry-infused Wensleydale! Blueberries are sweet and sharp, making it another beautiful pairing for this cheese.",
    compCheese1 = "Stilton",
    compCheese2 = "Aged Cheddar",
    compCheeseInfo = "A strong blue cheese like Stilton offers a similar texture with a much stronger flavor. Aged Cheddar provides another strong flavor, while also providing a harder texture than Stilton or Wensleydale.",
    saltyOptions = "Olives or Cornichons",
    saltyInfo = "Briny salty flavors play well with all the cheeses on this board! Green olives like Kalamata or Castelvetrano are milder olives that provide a refreshing contrast to Stilton and a pop of saltiness to Wensleydale, while black olives are a bit stronger in flavor without overwhelming any of your cheeses. Tiny tart pickles like Cornichons offer a tangy bite against the Stilton and the Cheddar, while providing an enhanced flavor profile with the mildness of Wensleydale.",
    sweetName = "Milk Chocolate and Sea Salt Squares, Honeycomb, Gingerbread Cookies",
    sweetInfo = "The sweetness of milk chocolate combined with a touch of salt is an incredible contrast to Cheddar and Stilton, while also creating a richer flavor against the milder Wensleydale. Honeycomb is another rich flavor, with the salty-sweet crunch making for a great new texture against your cheeses! To best match a more seasonal vibe, Gingerbread cookies invites a complex and fun flavor to Stilton, with the chewy and thick texture making for a fun match against Aged Cheddar and Wensleydale",
    wineName = "Champagne, Sauvignon Blanc, Pinot Noir, Port",
    wineInfo = "A brut Champagne offers a crisp dryness that complements the cheeses. Sauvignon Blanc offers a bright and citrusy acidity that pairs beautifully with the mild Wensleydale and the stronger savoury Cheddar and Stilton. For reds, a Pinot Noir is a lighter, earthier choice that provides acidity and complexity to your charcuterie board, while a Port's rich sweetness offers a great counterbalance to the saltier cheeses and a solid match to sweet Wensleydale.",
    knife1 = "Flat or Chisel knife",
    knife2 = "Heart Knife",
    knife1cheese = "Wensleydale and Stilton",
    knife2cheese = "Aged Cheddar",
    hasNuts = false,
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






