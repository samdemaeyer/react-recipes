const recipeDetails = [
  {
    id: 1,
    serves: '2',
    image: '/recipe-images/Greek-lamb-orzo-web.jpg',
    description: `
        <p>
          There’s nothing complicated going on here, just a collection of familiar flavours simmered together into
          something wonderful and comforting, a whole greater than the sum of its parts. It’s a relaxed one-pot wonder
          that requires little attention over its long cooking time.
        </p>
        <p>
          Versions of this delicious slow-cooked lamb dish appear on the menu of every family-run taverna (and nearly
          every family) in Greece, where it’s called yiouvetsi. When I island-hopped around the Aegean as a wide-eyed
          kid, I saw all the compulsory Grecian ruins but it was the food that seared itself into my memory (no
          surprise there, I guess). Lamb dishes were everywhere – some cooked with flinty retsina, some with olives,
          some spiked with heat from tiny dried chillies.
        </p>
        <p>
          I’ve taken a simpler route here, then, somewhat paradoxically, fancied it up right at the end, as if to
          amplify its Greek origins, with the addition of feta and fresh oregano. I think the feta is necessary;
          the fresh oregano, while wonderful if you have it around, shouldn’t hold you back from making it.
        </p>`,
    preparationSteps: [
      'Set your oven to 180°C (350°F).',
      `Put the lamb in a casserole dish and sprinkle with a little salt. Add the sliced onion, the cinnamon stick,
          broken in half, the dried oregano and olive oil. Grate in a clove of garlic. Stir together and roast,
          uncovered, for 45 minutes, stirring halfway through.`,
      `Stir the tomato paste into the chicken stock and pour over the lamb, together with the diced tomatoes.
          Don't be alarmed by the amount of liquid at this point: you'll be cooking the orzo in it later.`,
      'Cover the dish and return to the oven for 1½ hours.',
      `You can break the cooking at this point if you need to. Leave the dish to cool and pick up the cooking later
          the same day, or cool completely and refrigerate until the next day, if you like.`,
      `Either way, you finish the cooking on the stovetop. Bring the dish up to a rapid simmer and add the orzo.
          Be guided by recommended cooking time on the pack (some orzo takes a couple of minutes, some brands take 15)
          and by tasting at regular intervals. The orzo will absorb the liquid and the sauce will thicken up, so stir
          regularly to prevent it sticking.`,
      'Once cooked, spoon into bowls and serve with a crumbling of feta and some fresh oregano leaves, if using.',
    ],
    ingredients: [
      '750g (1½ pounds) diced shoulder lamb',
      '1 onion, halved and sliced',
      '1 cinnamon stick',
      '1 teaspoon dried oregano',
      '1 tablespoon olive oil',
      '1 clove garlic',
      '1 tablespoon tomato paste',
      '500ml (2 cups) chicken stock',
      '200g (7 oz) canned diced tomatoes',
      '200g (7 oz) orzo',
      '50g (2 oz) feta',
      'sea salt flakes',
      'fresh oregano leaves, to serve (optional)',
    ],
  },
  {
    id: 2,
    serves: '2',
    image: '/recipe-images/Leek-brie-risotto-1080.jpg',
    description: `
        <p>
          there’s an italian mantra for all <em>risotti</em>, a recipe in just five words:
          <em>sofritto, riso, vino, brodo, condimenti.</em>
        </p>
        <p>
          <em>sofritto</em> is the flavour base, almost always made with onion of some sort and often with celery and
          carrot,
          softened but never browned. then <em>riso e vino:</em> rice and wine.
        </p>
        <blockquote>
          <p>
            <strong>cook's tip:</strong> the rice for making risotto has to be particularly starchy and short-grained.
            the most common variety is arborio and produces excellent results. if you can find it, the italian vialone
            nano is
            superb.
          </p>
        </blockquote>
        <p>
          <em>brodo</em> is broth or stock (although it can be many other liquids, such as coconut milk or the water
          from soaking dried mushrooms), added slowly and stirred until absorbed.
          finally, the <em>condimenti</em>, those ingredients added in the final moments of cooking which can include
          cheese, fresh herbs, fresh mushrooms and seafood.</p>
        <p>
          here the <em>sofritto</em> is made with leeks, garlic, mustard and dried oregano, and the <em>condimenti</em>
          are
          brie, lots of freshly-ground pepper and a scattering of snipped chives.</p>
        <p>
          leeks come in many sizes from baby pencil through to gigantic so i've specified a weight, using the white and
          pale
          green parts. the way leeks are grown pushes dirt into the layers, so it's better to wash them after they're
          sliced.
        </p>`,
    preparationSteps: [
      `Cut the leek in half lengthways and slice into thin half-moons. Wash thoroughly in a colander and drain.
          (It will look like an enormous amount. Don't worry: it cooks down.)`,
      'Put the butter, oil and leek into a heavy-based saucepan and grate in the clove of garlic.',
      `Turn on medium heat and let the leek cook gently until very soft. It will take about 15 minutes; you don’t have
          to do anything other than give it an occasional stir and check that it’s not colouring.`,
      `Meanwhile, pour the stock into a small saucepan. Clamp on a lid and put it over low heat. It needs to be hot,
          but not boiling, in 15 minutes, so no rush.`,
      `Once the leeks have collapsed, add the oregano and stir in the rice until the grains are thoroughly coated. Add
          the blob of mustard and the vermouth, turn the heat up to medium-high and stir until no liquid remains.`,
      `Pour in about a third of the hot stock and simmer, insistently, until it has been absorbed. Stir often enough
          to stop it sticking. Add another third, wait for it to be absorbed, and the final third. It should take about
          20 minutes.`,
      `Taste: the rice should be cooked and slightly al dente although but without any chalkiness. If you need to
          extend the cooking time, add a little water from the kettle.`,
      `Cut the brie into thick slices and stir through the risotto until melted. Taste again, checking for salt. Serve
          immediately, grinding over some black pepper with a generous hand and a sprinkle of snipped fresh chives.`,
    ],
    ingredients: [
      '175g (6 oz) leeks',
      '25g (1 oz) butter',
      '1 teaspoon olive oil',
      '1 clove garlic',
      '½ teaspoon dried oregano',
      '125g (½ cup) vialone nano or arborio rice',
      '½ teaspoon Dijon mustard',
      '60ml (¼ cup) vermouth (or dry white wine)',
      '500ml (2 cups) vegetable stock',
      '100g (4 oz) brie',
      'sea salt flakes',
      'freshly ground black pepper',
      'fresh chives, snipped, to serve',
    ],
  },
  {
    id: 3,
    serves: '12',
    image: '/recipe-images/Chicken-wings.jpg',
    description: `
        <p>
          I have to start with a confession: I don't make popcorn for movie
          nights, I make a bowl of these sticky, spicy little winglets. There's something about being slumped on the
          couch, nibbling away on these, a stack of paper towels so I can wipe my fingers to fast-forward through all
          car chases (very few good movies hinge on the outcome of a car chase), a couple of cold beers – I am filled
          with domestic bliss. Odd, maybe, but true.
        </p>
        <p>
          Drumettes – the upper third of the wing joint – also make great party
          food because they're a bit easier to eat with one hand (the other holding a drink, of course) than a whole
          wing, and your guests can neatly wrap the single bone in a napkin and be done with it. It's easy on the cook,
          too, as they can be roasted a couple of dozen at a time. Use the whole wing if you like, and this recipe will
          happily work for 12 wings instead.
        </p>
        <p>
          It's a quick job to mix up the marinade and toss them in the fridge. You
          need to give them a full day's marinating to fully infuse all the flavours, but that's no work other than
          patience. Then 30 minutes in the oven and you're done. Domestic bliss, indeed.
        </p>`,
    preparationSteps: [
      `Whisk all the marinade ingredients (that's everything except the sesame seeds and the drumettes themselves)
          together in a small bowl.`,
      `Place the drumettes in a resealable plastic bag and pour over the marinade.
          Close the bag and give everything a gentle massage to get all the chicken pieces covered.`,
      'Put the bag in a bowl, in case of leakage, and refrigerate overnight.',
      'When ready to cook, set your oven to 200°C (425°F).',
      `Using tongs, remove the drumettes from the marinade and arrange on a foil-lined baking sheet.
          (If you have a rack to lift them up a little, use that, but it's not absolutely essential.)
          Reserve the remaining marinade.`,
      `Roast for 30 minutes, turning halfway through and basting occasionally with some of the reserved marinade,
          which will become sticky, dark glossy towards the end of the cooking time.`,
      'Sprinkle with the sesame seeds and serve.',
    ],
    ingredients: [
      '12 chicken drumettes',
      '2 tablespoon sambal oelek',
      '2 tablespoons soy sauce',
      '2 tablespoons honey',
      '1 tablespoon rice wine or mirin',
      '1 teaspoon sesame oil',
      '1 teaspoon grated ginger',
      '1 teaspoon grated garlic',
      '1 teaspoon sesame seeds, for sprinkling',
    ],
  },
  {
    id: 4,
    serves: '2',
    subRecipeDetailId: 2,
    image: '/recipe-images/Sausages.jpg',
    description: `
        <p>
          I cook sausages because they are deeply unfashionable. At a time when a Paleo quinoa cheesecake is a real
          thing (I'd link to it, but don't want to encourage such nonsense), it's the least I could do.
        </p>
        <p>
          This is my take on sausages and mash, pimped up with a tasty dressing of tomatoey spinach and lentils.
          In place of the mash, soft polenta flavoured with cheese and stock. It’s easy to make, requiring not much
          more from the cook than various bits of stirring, and you make the polenta while the sausages are gently
          braising, so there’s no multitasking business necessary.
        </p>
        <p>
          If you go in for exotically flavoured sausages, feel free to use them here. I follow the advice that you can
          judge the measure of a butcher by the quality of his pork sausages – it’s exactly how I settled on mine –
          and so I prefer them plain, though this is no less delicious for it.
        </p>`,
    preparationSteps: [
      'Heat the olive oil in a frying pan over medium-high heat. Brown the sausages all over and remove to a plate.',
      `Cut the shallot in half and slice it into thin half-moons. Sauté in the frying pan and grate in the garlic. C
          ook until the onion just begins to colour.`,
      `Pour in the stock and stir in the fresh tomato, tomato paste and lentils. Let everything come to a simmer and
          return the sausages to the pan. Let them simmer away for 6 minutes while you make the polenta.`,
      'In a small saucepan, heat the milk and stock to the edge of a boil.',
      `Pour the polenta in a fine, steady stream, whisking constantly. Turn down the heat and continue stirring for
          3 minutes. The polenta is ready when it has thickened and starts to come away from the side of the saucepan.
          When it’s done, stir in the Parmesan cheese.`,
      `To serve, spoon the polenta into deep dishes and top with the sausages. Mix the spinach leaves into the lentil
          sauce, just long enough to wilt them. Taste the sauce, season with salt and pepper, and pour over the
          sausages.`,
    ],
    ingredients: [
      '4 pork sausages (or however many you want)',
      '2 teaspoons olive oil',
      '1 shallot or small onion',
      '2 cloves garlic',
      '1 large ripe Roma tomato, diced',
      '2 tablespoons tomato paste',
      '250ml (1 cup) chicken or vegetable stock',
      '3 tablespoons red lentils',
      'large handful baby spinach leaves, roughly chopped',
      'sea salt flakes and freshly ground black pepper',
    ],
  },
  {
    id: 5,
    serves: '6-8',
    image: '/recipe-images/Orange-and-blueberry-cake.jpg',
    description: `
        <p>
          This is an uncomplicated cake but it has real presence thanks to the natural flavours of the fruit. The
          combination of orange and blueberries is wonderful, and I've restrained the sugar to let some their tartness
          shine through.
        </p>
        <p>
          I make it in a 3cm deep flan tin only because I like the fluted edges and, since it's a rather flat cake,
          hardly rising to the edges of the tin, it bakes faster. You can make it in any cake tin you like, of course;
          just bake until the edges are golden and you'll be fine.
        </p>
        <p>
          In keeping with its simplicity, there's no need to use an electric mixer. In fact, I think it's nicer to make
          cakes like this with a bowl and a wooden spoon, and it comes together very quickly with a few casual turns.
        </p>`,
    preparationSteps: [
      'Set your oven to 180°C (350°F).',
      `Melt the butter and brush a little of it inside a 23cm (9-inch) loose-based flan tin or cake tin, setting the
          rest aside.`,
      `In a mixing bowl, stir the flour, baking powder and sugar together with a balloon whisk or fork until well
          combined.`,
      `Add the orange zest and juice, egg, milk and melted butter, stirring until combined.
          Pour the batter into the tin, scatter over half the blueberries and bake for 15 minutes.`,
      `Scatter the remaining blueberries across the cake, which should be just firm enough to stop them sinking too
          much, and continue to bake for a further 20 minutes or until the edges are nicely golden and the centre is
          cooked through when tested with a toothpick.`,
      'Let it cool on a wire rack for 10 minutes before turning out.',
    ],
    ingredients: [
      '75g (3 oz) unsalted butter',
      '150g (1 cup) flour',
      '2 teaspoons baking powder',
      '75g (⅓ cup) caster sugar',
      'finely grated zest and 3 tablespoons juice from 1 orange',
      '1 egg',
      '80ml (⅓ cup) milk',
      '100g (4 oz) blueberries',
    ],
  },
  {
    id: 6,
    serves: '2',
    image: '/recipe-images/Eggplants-FINAL-2.jpg',
    description: `
        <p>
          This is my homespun version of a Japanese way with eggplants, fried in sesame-tinged oil with a few chilli
          flakes, sauced up with miso, soy, mirin and rice wine. It works as a lovely side dish – accommodating, too, as
          it doesn’t have to be served piping hot – though it’s substantial enough on its own. We often eat it
          unaccompanied by nothing but steamed rice.
        </p>
        <p>
          It’s a successful treatment for all kinds of eggplants, so as a guide I have specified a weight below, rather
          than a particular variety. If you’re using a large eggplant, cut it into 2cm (about 1 inch) cubes. For
          egg-sized baby eggplants, cut them into quarters, lengthways. For the long, slender Japanese eggplants,
          cut them in half lengthways.
        </p>`,
    preparationSteps: [
      `Place the canola oil, sesame oil and chilli flakes in a frying pan over medium heat.
          Warm through until the chilli flakes start to crackle.`,
      'Add the eggplants and fry, turning occasionally, until tender and golden all over.',
      `Meanwhile, combine the soy sauce, mirin, rice wine and sugar in a small bowl, stirring until the sugar
          dissolves. Add the miso and water, mixing until smooth.`,
      `Add the miso mixture to the eggplants, tossing for a minute or so until everything is nicely coated and warmed
          through.`,
      `Transfer to your serving bowl or bowls. Sprinkle with a few sesame seeds and some roughly chopped coriander
          leaves if you have them to hand.`,
    ],
    ingredients: [
      '350g (12 oz) eggplant (see preparation note above)',
      '1 tablespoon canola oil',
      '1 teaspoon sesame oil',
      '½ teaspoon dried red chilli flakes',
      '2 tablespoons rice wine',
      '1 tablespoon mirin',
      '1 tablespoon sugar',
      '1 teaspoon soy sauce',
      '2 tablespoons white miso',
      '1 tablespoon water',
    ],
  },
  {
    id: 7,
    subRecipeDetailId: 2,
    serves: '2',
    image: '/recipe-images/Chocolate-bonet.jpg',
    description: `<p>This is a quick write-up of a dessert I published on Instagram. I'll update it with the US
        conversions and notes.</p>`,
    preparationSteps: [
      `Set your oven to 160°C (320°F) and have a roasting tin or cake tin big enough to accomodate two 1½-cup ramekins
          standing by.`,
      `To make the caramel, place the sugar and water in a small saucepan and stir together. Place over medium-high
          heat and bring to a boil. Don’t stir; you can swirl it around with the handle, but no spoons (it will
          crystalise if you do). Continue to cook until it turns pale gold. It will continue to get darker quickly,
          so watch it carefully. Divide it between the ramekins. Set aside.`,
      `Grind the amaretti to a fine powder in a small food processor (or crush them in a bag with a rolling pin).
          Set aside.`,
      `Warm the milk, either on the stove or in a jug in the microwave. Either way, it only needs to be warm,
          not hot.`,
      'Place the egg and the extra yolk and sugar in a mixing bowl. Whisk together until combined.',
      'Sieve in the cocoa and mix thoroughly. Add the vanilla and the crushed amaretti. Mix well.',
      'Add the warm milk at little at a time, mixing well between each addition.',
      `Pour the mixture into your ramekins. Set them inside a roasting tin or cake tin and pour in enough hot water to
          come halfway up the sides.`,
      `Place on the centre shelf of the oven and cook for 45 minutes. Remove from the oven and leave in the water bath
          until the water is cool, then remove the ramekins, cover and refrigerate for at least six hours, overnight if
          possible.`,
      `When you’re ready to serve, run a sharp knife around the edge of the ramekin, cover with a serving plate and
          invert. The caramel will glaze the top and drizzle down the sides.`,
    ],
    ingredients: [
      '50g amaretti biscuits',
      '250ml (1 cup) milk',
      '1 egg',
      '1 egg yolk',
      '50g (3 tablespoons) caster sugar',
      '35g cocoa',
      '½ teaspoon vanilla extract',
    ],
  },
  {
    id: 8,
    serves: '2',
    image: '/recipe-images/Bananas-instagram.jpg',
    description: `
        <p>
          Here’s a quickly-scaled dessert idea that you can whip up anytime and is especially useful when you find
          yourself with bananas that rapidly approaching their use-by date.
        </p>
        <p>
          The coconut caramel, sweet and wonderfully creamy, is easy beyond belief – no fiddling around with sugar
          thermometers required. Don’t worry if it seems too thin on the stovetop, as it thickens up beautifully once
          you put it in the fridge.
        </p>
        <p>
          I get out my chargrill pan for this, though you need to know that it works perfectly well if you grill your
          bananas under a hot overhead grill (broiler) or, indeed, the barbecue if that’s up and running.
        </p>
        <p>
          I like the little sweet “lady finger” bananas with this, though of course it works just as well with any
          bananas you have to hand.
        </p>`,
    preparationSteps: [
      `To make the coconut caramel, place the coconut milk, brown sugar and salt in a small saucepan over medium-high
          heat. Bring it up to a boil, turn the heat down a little to medium and stir until the sugar has dissolved.`,
      `Continue to cook, stirring occasionally, for 5 minutes, until dark, fragrant and beginning to thicken. Remove
          from the heat, let it cool slightly, and pour into a small bowl. Refrigerate for at least 30 minutes.`,
      `Heat a dry frying pan over medium-high heat and toast the coconut flakes. until lightly golden. Transfer to a
          small bowl and set aside.`,
      `Add the butter and olive oil (to stop the butter burning) to the pan. Peel and halve the bananas lengthways and
          cook in the butter for about 3 minutes a side, until golden.`,
      `Transfer the bananas to serving plates, drizzle some of the coconut caramel over and sprinkle with coconut
          flakes and pecans.`,
    ],
    ingredients: [
      '125ml (½ cup) coconut milk',
      '4 tablespoons (¼ cup) light brown sugar',
      '¼ teaspoon sea salt flakes',
      '2 tablespoons butter',
      '1 teaspoon olive oil',
      '2 bananas',
      '2 tablespoons coconut flakes',
      '2 tablespoons pecans, chopped',
    ],
  },
]

module.exports = { recipeDetails }
