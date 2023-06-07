// Sample object
const data = [
    {
        name: 'Beetroot',
        harvestHistory: [[3,7], [6,10],[0,0],[0,12]], // [0,12] allows us to always see the entire graph
        image: 'images/beetroot-gcefe31291_1280.jpg',
        sun: 'Full sun',
        soil: 'The ideal soil is medium to light which hasn\'t been recently manured - this can cause misshapen roots. The soil should be neutral or slightly alkaline (PH 6.5 to 7.5) although it is tolerant of most normal conditions.',
        water: 'Generally speaking, a good watering schedule for beets provides an inch (2.5 cm.) of water per week. This is a combination of rainwater and supplemental irrigation.',
        complement: 'Onions, beans, lettuce, cabbages, radishes, and catnip.',
        space: 'Plant each seed 1 inch deep and 2-4 inches apart.'
    },
    {
        name: 'Broad beans',
        harvestHistory: [[1,4], [3,8], [0,0],[0,12]], // [0,12] allows us to always see the entire graph
        image: 'images/broad-bean-g0aa9097a6_1280.jpg',
        sun: 'Full sun - at least 3 hours of full sun a day',
        soil: 'The ideal soil is firm, fertile, well-drained soil.',
        water: 'Generally speaking, a good watering schedule for broad beans provides 1 - 1.5 inches (2.5 - 3.8 cm.) of water per week. This is a combination of rainwater and supplemental irrigation.',
        complement: 'Potatoes, carrots, cucumber, cabbage, lettuce, peas, parsley, and cauliflowers.',
        space: 'Sow your broad bean seeds in double rows, 23cm (9") apart. Stagger the seeds along each set of double rows to make the most of the space. Broad bean seeds should be planted at a depth of 5cm (2") deep and a distance of 23cm (9") apart within each row.'
    },
    {
        name: 'Calabrese',
        harvestHistory: [[2,5], [5,9], [0,0],[0,12]], // [0,12] allows us to always see the entire graph
        image: 'images/13720297803_b6f23fa995_c.jpg',
        sun: 'Full sun',
        soil: 'The ideal soil is rich, free-draining soil.',
        water: 'Generally speaking, a good watering schedule for calabrese provides 1 - 1.5 inches (2.5 - 3.8 cm.) of water per week. This is a combination of rainwater and supplemental irrigation.',
        complement: 'Beets, celery, chamomile, lettuce, potatoes, rhubarb, rosemary, shallots, spinach.',
        space: 'Plant seeds ½” (13mm) and spaced 12″ (30cm) between rows.'
    },
    {
        name: 'Carrot',
        harvestHistory: [[2,7], [4,11], [0,0],[0,12]], // [0,12] allows us to always see the entire graph
        image: 'images/carrots-g90e0b4b66_1280.jpg',
        sun: 'Full sun',
        soil: 'The ideal soil is light, fertile, well-drained soil.',
        water: 'Generally speaking, a good watering schedule for carrots provides an inch (2.5 cm.) of water per week. This is a combination of rainwater and supplemental irrigation.',
        complement: 'Chives, leeks, onions, tomatoes, radishes, rosemary, sage, and lettuce.',
        space: 'Plant carrot seeds ¼ inch deep and 1 inch apart. Later in the spring, thin carrot plants to 2-3 inches apart in rows 16-24 inches apart.'
    },
    {
        name: 'Chard',
        harvestHistory: [[3,8], [0,12], [0,0],[0,12]], // [0,12] allows us to always see the entire graph
        image: 'images/swiss-chard-gb95469da6_1280.jpg',
        sun: 'Full sun',
        soil: 'The ideal soil is rich, moist soil with a soil pH between 6.0 and 6.8.',
        water: 'Generally speaking, a good watering schedule for chard provides 1 - 1.5 inches (2.5 - 3.8 cm.) of water per week. This is a combination of rainwater and supplemental irrigation.',
        complement: 'Alliums, annual flowers, brassicas, celery, herbs, legumes, and lettuce.',
        space: 'Plant seeds one-fourth to one-half inch deep, in rows 18 to 30 inches apart.'
    },
    {
        name: 'Fennel',
        harvestHistory: [[3,7], [5,11], [0,0],[0,12]], // [0,12] allows us to always see the entire graph
        image: 'images/fennel-g84a8f1994_1280.jpg',
        sun: 'Full sun',
        soil: 'The ideal soil is fertile and drains well.',
        water: 'Generally speaking, a good watering schedule for fennel provides an inch (2.5 cm.) of water per week. This is a combination of rainwater and supplemental irrigation.',
        complement: 'Peas, lettuce, cucumber, and sage.',
        space: 'Fennel seeds should be sown about 1cm (½in) deep. Space seeds 4-6 inches apart in the row with rows 18 inches apart.'
    },
    {
        name: 'French beans',
        harvestHistory: [[3,7], [5,10], [0,0],[0,12]], // [0,12] allows us to always see the entire graph
        image: 'images/french-bean-basket-gb008d5e55_1280.jpg',
        sun: 'Full sun',
        soil: 'The ideal soil is rich and moisture-retentive.',
        water: 'Generally speaking, a good watering schedule for French beans provides 2 inches (5 cm.) of water per week. This is a combination of rainwater and supplemental irrigation.',
        complement: 'Broccoli, brussels sprouts, cabbage, carrots, cauliflower, celery, kale, and peas.',
        space: 'Sow the seeds individually, 5cm (2in) deep and 15cm (6in) apart.'
    },
    {
        name: 'Garlic',
        harvestHistory: [[1,3], [4,9], [0,0],[0,12]], // [0,12] allows us to always see the entire graph
        image: 'images/garlic-g1a8060587_1280.jpg',
        sun: 'Full sun',
        soil: 'Garlic grows best in well-drained, moisture-retentive soil with pH between 6.0 and 7.0.',
        water: 'Generally speaking, a good watering schedule for garlic provides .5 - 1 inches (1.2 - 2.5 cm.) of water per week. This is a combination of rainwater and supplemental irrigation.',
        complement: 'Fruit trees, dill, beets, kale, spinach, potatoes, carrots, eggplants.',
        space: 'Plant your cloves 2-4” deep and at least 4-8” apart.'
    },
    {
        name: 'Jerusalem artichokes',
        harvestHistory: [[2,4], [0,2], [9,12], [0,12]], // [0,12] allows us to always see the entire graph
        image: 'images/jerusalem artichokes.jpg',
        sun: 'Full sun',
        soil: 'Jerusalem artichoke grows best in light, sandy soil of good fertility.',
        water: 'Generally speaking, a good watering schedule for Jerusalem artichokes provides an inch (2.5 cm.) of water per week. This is a combination of rainwater and supplemental irrigation.',
        complement: 'Lettuce, broccoli, spinach, cauliflower, beans, rhubarb, and peanuts.',
        space: 'They should be spaced around 12 to 18 inches apart and planted no more than 5 inches deep.'
    },
    {
        name: 'Lettuce',
        harvestHistory: [[2,9], [0,12], [0,0], [0,12]], // [0,12] allows us to always see the entire graph
        image: 'images/lettuce-g70fc8c4f5_1280.jpg',
        sun: 'Full sun, some varieties can also be grown in partial shade.',
        soil: 'Lettuce grows best in loose, well-drained soil. Whether your soil is heavy clay or a light sandy type, the incorporation of compost will often improve the growing conditions.',
        water: 'Generally speaking, a good watering schedule for lettuce provides an inch (2.5 cm.) of water per week. This is a combination of rainwater and supplemental irrigation.',
        complement: 'Chives, garlic, marigolds, beets, carrots, parsnips, strawberries, radishes, inion, asparagus, corn, cucumber, eggplant, peas, spinach, tomatoes, sunflowers, and coriander.',
        space: 'Plant seeds 1/8 to 1/4 of an inch deep. Sow the small seeds thinly, 1cm (½in) deep, in rows 30cm (1ft) apart.'
    },
    {
        name: 'Onions',
        harvestHistory: [[2,4], [4,9], [0,0], [0,12]], // [0,12] allows us to always see the entire graph
        image: 'images/onion-g004ac5d15_1280.jpg',
        sun: 'Full sun.',
        soil: 'Onions grows best in well-drained soil with pH between 6.0 and 7.0, and high organic matter.',
        water: 'Generally speaking, a good watering schedule for onions provides an inch (2.5 cm.) of water per week. This is a combination of rainwater and supplemental irrigation.',
        complement: 'Cabbage, chamomile, summer savory, carrots, leeks, beets, lettuce, strawberries, tomatoes, swiss chard, and marigolds.',
        space: 'Plant seeds in rows 12 to 15 inches apart. Cover the seeds with 1/2 to 3/4 inch of soil. When the seedlings are 2 to 4 inches tall, thin the planting. For large, dry onions, plants should be spaced 2 to 3 inches apart after thinning.'
    },
    {
        name: 'Parsnips',
        harvestHistory: [[2,5], [0,3], [7,12], [0,12]], // [0,12] allows us to always see the entire graph
        image: 'images/parsnips-g00561840e_1280.jpg',
        sun: 'Full sun.',
        soil: 'Parsnips grows best in fertile, light soil that drains readily. Soil that has been improved with well-rotted manure or garden compost the previous season is ideal.',
        water: 'Giving parsnips a good soak every 2-3 weeks in dry conditions will usually be sufficient.',
        complement: 'Anise, bush bean, garlic, lettuce, onion, oregano, radish, rosemary, and tomato.',
        space: 'Sow seeds in a 2 inch band, about 1 inch apart, the equivalent of 20 seeds per foot, ½ inch deep, in rows 18–24 inches apart.'
    },
    {
        name: 'Peas',
        harvestHistory: [[2,6], [4,10], [0,0], [0,12]], // [0,12] allows us to always see the entire graph
        image: 'images/vegetable-g93c1234d9_1280.jpg',
        sun: 'Peas require full sun to thrive — that\'s six to eight hours of direct sunlight daily. Peas will grow in partial shade, but not as vigorously.',
        soil: 'Peas grow best in soil with a pH between 6 and 7.5. Use well-rotted manure or compost at planting.',
        water: 'Generally speaking, a good watering schedule for peas provides an inch (2.5 cm.) of water per week. This is a combination of rainwater and supplemental irrigation.',
        complement: 'Beans, carrots, celery, corn, cucumbers, eggplant, peppers, radishes, spinach, tomatoes, and turnips.',
        space: 'Sow three rows using the full width, staggering the seeds so they\'re about 7.5cm (3in) apart. Cover with soil, then lightly firm and water well. If sowing additional sets of rows, space them at a distance equal to the height of the variety you are growing.'
    },
    {
        name: 'Potatoes',
        harvestHistory: [[1,4], [4,10], [0,0], [0,12]], // [0,12] allows us to always see the entire graph
        image: 'images/potatoes-g56fac1b72_1280.jpg',
        sun: 'Full sun',
        soil: 'Potatoes grow best in light, loose, well-drained soil. They prefer a slightly acid soil with a PH of 5.0 to 7.0.',
        water: 'Generally speaking, a good watering schedule for potatoes provides 1 - 2 inches (2.5 - 5 cm.) of water per week. This is a combination of rainwater and supplemental irrigation.',
        complement: 'Alyssum, cabbage, corn, chives, cilantro, flax, horseradish, leeks, legumes, marigolds, nasturtiums, petunias, and tansy.',
        space: '8" - 12" in-rows x 24" - 36" between row. If you would like to mainly harvest new potatoes, space plants 9” apart. If large storage potatoes are your goal space plants as far as 20” apart. Plant potatoes in furrows cut side down, 3- to 5-inches deep.'
    },
    {
        name: 'Radishes',
        harvestHistory: [[2,9], [3,11], [0,0], [0,12]], // [0,12] allows us to always see the entire graph
        image: 'images/garden-radish-gfb5912626_1280.jpg',
        sun: 'Full sun',
        soil: 'Any well-drained, slightly acidic to neutral soil with pH 6 to 7 will do for radishes, as long as the soil is not compacted.',
        water: 'Generally speaking, a good watering schedule for potatoes provides an inch (2.5 cm.) of water per week. This is a combination of rainwater and supplemental irrigation.',
        complement: 'Chervil, marigold, brassicas, dill, parsnip, pole beans, mint, peas, oregano, borage, nasturtiums, rosemary, and eggplant.',
        space: 'Sow seeds ½ inch deep in rows 2-3 inches apart.'
    },
    {
        name: 'Arugula',
        harvestHistory: [[2,9], [3,11], [0,0], [0,12]], // [0,12] allows us to always see the entire graph
        image: 'images/green-g25d528895_1280.jpg',
        sun: 'Full sun',
        soil: 'Arugula may be grown on a wide range of soil types. Loose fertile loams, and muck soils are best. Soils should provide good water holding capacity and good internal drainage, and a pH of 6.0-7.0.',
        water: 'A weekly long drink at the root will benefit them hugely if the weather has been dry. Try to give your runner beans about half a watering can per plant when they are mature.',
        complement: 'Onion, garlic, beans, cucumber, beetroot, leaf beet, lettuce, spinach, celery, thyme, rosemary, mint, chives, dill, and chamomile.',
        space: 'Arugula seeds can be direct-sown into the garden in shallow rows spaced 3 to 4 inches apart. Cover with 1/2 inch of soil.'
    },
    {
        name: 'Runner beans',
        harvestHistory: [[3,5], [5,10], [0,0], [0,12]], // [0,12] allows us to always see the entire graph
        image: 'images/runner-beans-g8a0daad96_1280.jpg',
        sun: 'Full sun',
        soil: 'Runner beans grow best in rich, moisture-retentive soil with plenty of well-rotted compost or manure added.',
        water: 'Generally speaking, a good watering schedule for potatoes provides an inch (2.5 cm.) of water per week. This is a combination of rainwater and supplemental irrigation.',
        complement: 'Strawberries, radishes, and celery.',
        space: 'Sow them at a depth of 5cm (2") at 30cm (12") intervals in rows 45cm (18") apart.'
    },
    {
        name: 'Shallots',
        harvestHistory: [[1,3], [6,9], [0,0], [0,12]], // [0,12] allows us to always see the entire graph
        image: 'images/red-shallots-g6e604e282_1280.jpg',
        sun: 'Full sun',
        soil: 'It requires fertile, well-drained soil.',
        water: 'Generally speaking, a good watering schedule for potatoes provides an inch (2.5 cm.) of water per week. This is a combination of rainwater and supplemental irrigation.',
        complement: 'Beets, cabbage, carrots, chamomile, mint, sage, and thyme.',
        space: 'Direct seed ½ inch deep, ½ to 1 inch apart, in rows 10 to 18 inches apart.'
    },
    {
        name: 'Spinach',
        harvestHistory: [[2,10], [0,12], [0,0], [0,12]], // [0,12] allows us to always see the entire graph
        image: 'images/spinach-g912ba21eb_1280.jpg',
        sun: 'Spinach likes full sun but will tolerate partial shade.',
        soil: 'It grows best in well-drained soil rich in organic matter such as compost or composted manure and with a pH of 6.5 to 7.',
        water: 'Generally speaking, a good watering schedule for potatoes provides an inch (2.5 cm.) of water per week. This is a combination of rainwater and supplemental irrigation.',
        complement: 'Cabbage, chamomile, summer savory, carrots, leeks, beets, lettuce, strawberries, tomatoes, swiss chard, and marigolds.',
        space: 'Scatter seeds thinly in drills 2.5cm (1in) deep and 20cm (8in) apart.'
    },
    {
        name: 'Spring onions',
        harvestHistory: [[1,8], [1,10], [0,0], [0,12]], // [0,12] allows us to always see the entire graph
        image: 'images/green-onion-spring-onions-vegetables.jpg',
        sun: 'Spring onions likes full sun but will tolerate partial shade.',
        soil: 'Does best in moist, well-drained soil. They like the soil to be slightly acidic (pH 5–6) but aren\'t too fussy and can grow in soils up to pH 7.',
        water: 'Generally speaking, a good watering schedule for potatoes provides an inch (2.5 cm.) of water per week. This is a combination of rainwater and supplemental irrigation.',
        complement: 'Broccoli, kale, cabbage, and cauliflower.',
        space: 'Make drills 1.5cm (0.5") deep and 15cm (6") apart and sow thinly.'
    },
    {
        name: 'Sweetcorn',
        harvestHistory: [[4,5], [6,9], [0,0], [0,12]], // [0,12] allows us to always see the entire graph
        image: 'images/sweetcorn-g447dccf40_1280.jpg',
        sun: 'Full sun',
        soil: 'Does best in well-drained soil supplied with organic matter, with a pH of 5.8 to 7.0.',
        water: 'Generally speaking, a good watering schedule for potatoes provides an inch (2.5 cm.) of water per week. This is a combination of rainwater and supplemental irrigation.',
        complement: 'Basil, dill, nasturtiums, pole beans, potatoes, pumpkins, radishes, sunflowers, and white clover.',
        space: 'Plant the seeds 1/2 inch deep in cool, moist soil and 1 to 1 1/2 inches deep in warm, dry soil. Space the kernels 9 to 12 inches apart in the row. Plant two or more rows of each variety side by side to ensure good pollination and ear development. Allow 30 to 36 inches between rows.'
    },
    {
        name: 'Turnips',
        harvestHistory: [[2,7], [5,10], [0,0], [0,12]], // [0,12] allows us to always see the entire graph
        image: 'images/Turnip_2622027.jpg',
        sun: 'Full sun',
        soil: 'Turnips thrive in slightly acidic to slightly basic soil with pH levels 6 to 7.5.',
        water: 'Generally speaking, a good watering schedule for potatoes provides an inch (2.5 cm.) of water per week. This is a combination of rainwater and supplemental irrigation.',
        complement: 'Broccoli, kale, cauliflower, and brussels sprouts.',
        space: 'Plant seeds one to two inches apart in rows 18 to 30 inches apart. Sow seeds directly in the soil ¼ to ½ of an inch deep.'
    },
    {
        name: 'Blackberries',
        harvestHistory: [[10,12], [6,9], [0,0], [0,12], [2,3]], // [second planting,harvest,0,[0,12] accounts for the full year,first planting]
        image: 'images/blackberries-g6cc5a73bf_1280.jpg',
        sun: 'Full sun, light shade',
        soil: 'Blackberriers prefer moisture-retentive but free-draining soil.',
        water: 'Blackberry plants require approximately 1 to 2 inches (2.5 - 5 cm) of water per week from mid-May through October.',
        complement: 'Apple trees, grapes, mint, lemon balm, hyssop, bee balm, borage, tansy, chives, thyme, hazelnut, serviceberry, thmbleberry, roses, sunflowers, beans, peans, garlic, blueberries, and strawberries.',
        space: 'Trailing blackberry plants should be spaced about 10 feet apart in the row.'
    },
    {
        name: 'Apples',
        harvestHistory: [[10,12], [7,10], [0,0], [0,12], [0,3]], // [second planting,harvest,0,[0,12] accounts for the full year,first planting]
        image: 'images/apple-g23dccbc64_1280.jpg',
        sun: 'Full sun',
        soil: 'Apples grow best on a well-drained, loam soils having a depth of 45 cm and a pH range of pH 5.5-6.5.',
        water: 'About an inch (2.5 cm.) or so of rainfall every week to ten days is adequate for most apple trees.',
        complement: 'Lemon balm, borage, artichoke, chives, onions, garlic, fennel, dill, mint, comfrey, dandelion, yarrow, coriander, clover, rhubarb, Siberian pea shrub, marigold, chrysanthemums, nasturtium, wormwood, chamomile, lavender, artemesia, and sea buckthorn.',
        space: 'Apple is normally planted at a spacing of 4 x 4 m in pits of 60 cm x 60 cm x 60 cm.'
    },
    {
        name: 'Apricots',
        harvestHistory: [[9,12], [6,9], [0,0], [0,12], [0,0]], // [second planting,harvest,0,[0,12] accounts for the full year,first planting]
        image: 'images/apricots-ga0c815642_1280.jpg',
        sun: 'Full sun',
        soil: 'Apricot trees prefer deep, well-drained soil to thrive.',
        water: 'An apricot tree usually needs 20-35 inches of water per year in order to have good vegetative development and yield.',
        complement: 'Sunflowers, plums, peaches, basil, onion, wormwood, garlic, strawberry, grape, asparagus, tansy, comfrey, nasturtium, buckwheat, and southernwood.',
        space: 'The apricot plants are generally spaced at 6 meter x 6 meter.'
    },
    {
        name: 'Blackcurrants',
        harvestHistory: [[9,12], [6,8], [0,0], [0,12], [0,3]], // [second planting,harvest,0,[0,12] accounts for the full year,first planting]
        image: 'images/spinarum-g209692797_1280.jpg',
        sun: 'Full sun, light shade',
        soil: 'Blackcurrants prefer well-drained but moisture-retentive soil, although they will cope in most other soil conditions.',
        water: 'Water newly planted blackcurrants regularly during their first summer. Once well established, blackcurrants generally only need watering in dry spells, ideally at ground level rather than overhead. But avoid heavy watering when the fruits are ripening, as this can cause the skins to split.',
        complement: 'Blackcurrants do not grow well with companion plants, so it is best to plant them alone.',
        space: 'Space plants 1.5–1.8m (5–6ft) apart.'
    },
    {
        name: 'Blueberries',
        harvestHistory: [[10,12], [6,9], [0,0], [0,12], [0,3]], // [second planting,harvest,0,[0,12] accounts for the full year,first planting]
        image: 'images/blueberries-g4695234ab_1280.jpg',
        sun: 'Full sun',
        soil: 'Blueberries require acidic, well-drained, loose soils with a high organic matter content.',
        water: 'Blueberry plants require at least one inch of water per week.',
        complement: 'Evergreens, dogwood trees & shrubs, rhododendron & azalea, heather, thyme, cranberry bushes, columbine, mountain laurel, fern, holly, hydrangea, lilac bush, and strawberry.',
        space: 'Blueberries can be planted as close as 2 - 2½ feet apart to form solid hedgerows or spaced up to 6 feet apart and grown individually. If planted in rows, allow 8 to 10 feet between the rows depending on equipment used for mowing or cultivating.'
    },
    {
        name: 'Cape Gooseberries',
        harvestHistory: [[4,6], [8,10], [0,0], [0,12], [0,0]], // [second planting,harvest,0,[0,12] accounts for the full year,first planting]
        image: 'images/physalis-g9060c841d_1280.jpg',
        sun: 'Full sun, light shade',
        soil: 'It grows well in a wide range of soil types from gravely loams to heavy loams, but does best in a moist well drained sandy loam and seems to thrive on neglect. If drainage is a problem plant bushes on mounds.',
        water: 'The plant does need about 800 milliliters of water daily.',
        complement: 'Currants, elderberry, and strawberry.',
        space: 'Sow seed 5mm (1/4in) deep, firm down gently and keep moist. Seedlings appear 7-21 days. Transfer to final growing position when sturdy enough, spacing plants 50cm (20in) apart.'
    },
    {
        name: 'Cherries',
        harvestHistory: [[10,12], [5,9], [0,0], [0,12], [0,2]], // [second planting,harvest,0,[0,12] accounts for the full year,first planting]
        image: 'images/cherry-g1954bef93_1280.jpg',
        sun: 'Full sun',
        soil: 'All cherries prefer deep, fertile, well-drained soil that is ideally slightly acidic, with a pH of 6.5–6.7.',
        water: 'Established cherry trees rarely need to be watered. In your region, if you receive at least an inch (2.5 cm.) of rain every ten days, your cherry trees should be receiving adequate water.',
        complement: 'Marigolds, comfrey, dandelion, chives, daisies, spring bulbs, nasturtium, sweet alyssum, lupine and white clover, lavender, and rosemary.',
        space: 'In regions with cold winters and short grower seasons, dwarf cherry trees need a spacing of 6 to 8 feet, semi-dwarf trees about 15 feet, and standard or full-sized trees about 25 feet.'
    },
    {
        name: 'Cranberries',
        harvestHistory: [[8,11], [8,11], [0,0], [0,12], [2,5]], // [second planting,harvest,0,[0,12] accounts for the full year,first planting]
        image: 'images/backdrop-g72d7c4b65_1280.jpg',
        sun: 'Full sun, dappled shade',
        soil: 'Cranberries require moist, but not saturated, lime-free, humus-rich soil',
        water: 'The old rule-of-thumb states that cranberry vines need approximately an inch of water a week to grow.',
        complement: 'Azaleas, blueberries, lingonberries, and rhododendrons.',
        space: 'Space your cranberry plants 2\' to 3\' apart. They will only grow about 8-10 inches high.'
    },
    {
        name: 'Figs',
        harvestHistory: [[10,12], [7,9], [0,0], [0,12], [0,3]], // [second planting,harvest,0,[0,12] accounts for the full year,first planting]
        image: 'images/figs-g8d600ef53_1280.jpg',
        sun: 'Full sun',
        soil: 'Figs prefer organically rich soil that is consistently moist and well-drained.',
        water: 'Fig trees needs at least 1 to 1 1/2 inches of water a week.',
        complement: 'Mediterranean herbs, wildflowers, strawberries, comfrey, rue, and marigolds.',
        space: 'Figs grown in the bush form may be set as close as 10 feet apart in the row and 15 feet apart between rows. Figs grown in tree form should be set 15 to 20 feet apart in the row and 20 feet apart between rows.'
    },
    {
        name: 'Gooseberries',
        harvestHistory: [[9,12], [5,7], [0,0], [0,12], [0,3]], // [second planting,harvest,0,[0,12] accounts for the full year,first planting]
        image: 'images/gooseberry-g4b1282aab_1280.jpg',
        sun: 'Full sun',
        soil: 'They cope in most soil conditions, but prefer moist, well-drained ground.',
        water: 'Water newly planted gooseberries regularly for at least the first growing season, until established. After that, watering is seldom required, although in very dry spells water every 14 days.',
        complement: 'Beans, tomatoes, tansy, chives, marigolds, marjoram, mint, nasturtiums, oregano, and tarragon.',
        space: 'Allow the following spacings, if planting more than one: Bushes and standards: 1.2–1.5m (4–5ft) apart. Cordons: 30–38cm (12–15in) apart.'
    },
    {
        name: 'Grapes',
        harvestHistory: [[9,11], [8,10], [0,0], [0,12], [1,4]], // [second planting,harvest,0,[0,12] accounts for the full year,first planting]
        image: 'images/grapes-gf4fdbb80b_1280.jpg',
        sun: 'Full sun',
        soil: 'Well-drained, deep, fertile loams are excellent, yet grapes thrive on soils containing clay, slate, gravel, shale, and sand. Gravelly soils generally drain well, and they absorb and reflect the sun\'s warmth, providing heat for the vines.',
        water: 'Young grapes require about 1/2 to 1 inch of water per week.',
        complement: 'Hyssop, oregano, basil, beans, blackberries, clover, geraniums, and peas.',
        space: 'Space vines 6 to 10 feet apart (16 feet for muscadines). For each vine, dig a planting hole 12 inches deep and 12 inches wide. Fill with 4 inches of topsoil.'
    },
    {
        name: 'Melons',
        harvestHistory: [[3,4], [6,10], [0,0], [0,12], [0,0]], // [second planting,harvest,0,[0,12] accounts for the full year,first planting]
        image: 'images/melon-g048703474_1280.jpg',
        sun: 'Full sun',
        soil: 'Melons grow best on well-drained, sandy loam soils, with a pH between 6.0 and 6.5.',
        water: 'Water deeply and infrequently, one to two inches per week.',
        complement: 'Peas, pole beans, bush beans, onions, leeks, chives, garlic, cabbage, broccoli, cauliflower, carrots, kale, okra, spinach, sunflowers, lettuce, and Brussels sprouts.',
        space: 'Plant your melons in single rows after all risk of frost has gone and the soil is warm. Melons should be planted 20-36in (50-90cm) apart leaving 6-8ft (2-2.5m) between rows or other vegetables.'
    },
    {
        name: 'Nectarines',
        harvestHistory: [[8,12], [6,9], [0,0], [0,12], [0,0]], // [second planting,harvest,0,[0,12] accounts for the full year,first planting]
        image: 'images/nectarines-g99bad8fbd_1280.jpg',
        sun: 'Full sun',
        soil: 'Nectarines like deep, fertile, moisture-retentive but well-drained soil.',
        water: 'Give your tree enough water to soak the ground all around the roots. It\'s important to note that even if you\'re in the midst of a brown-lawn drought, you don\'t want to water too much. Once every 10 days or two weeks is plenty.',
        complement: 'Coriander, dill, chives, garlic, onions, nasturtiums, marigolds, mint, tansy, bee balm, bergamot, and comfrey.',
        space: 'Tree spacing should be about 8 to 12 ft. apart.'
    },
    {
        name: 'Peaches',
        harvestHistory: [[8,12], [6,9], [0,0], [0,12], [0,0]], // [second planting,harvest,0,[0,12] accounts for the full year,first planting]
        image: 'images/apricots-g885a61ab9_1280.jpg',
        sun: 'Full sun',
        soil: 'Peaches prefer slightly acid soil (pH 6.0-6.8) and thrive in lightweight loamy, well-draining soil.',
        water: 'The total minimum water requirement for mature peach trees is about 36 inches per year. Under normal conditions a mature peach tree requires about 35 - 40 gallons of water per day during July and August.',
        complement: 'Bee balm, cosmos, strawberries, tansy, garlic, legumes, red clover, basil, buckwheat, lupine, chicory, Mexican marigolds, asparagus, Queen Anne’s Lace, and geraniums.',
        space: 'Plant the peach pit about 3 to 4 inches (8-10 cm.) deep and then cover it with about an inch (2.5 cm.) or so of straw or similar mulch for overwintering.'
    },
    {
        name: 'Pears',
        harvestHistory: [[10,12], [7,10], [0,0], [0,12], [0,3]], // [second planting,harvest,0,[0,12] accounts for the full year,first planting]
        image: 'images/pear-gb078f54c2_1280.jpg',
        sun: 'Full sun',
        soil: 'The soil should be deep, fertile and free draining.',
        water: 'Newly planted trees need roughly a gallon (4 L.) of water a week, whether that comes from pear tree irrigation, rainfall, or a combination of the two. You can get a sense of whether you need to water by feeling the soil 6 inches (15 cm.) from the trunk and 6 to 10 inches (15-25 cm.) deep. If the soil is damp, the tree doesn’t need to be watered.',
        complement: 'Broccoli, kale, cauliflower, and brussels sprouts.',
        space: 'Depending on the landscape, and what your uses may be for your pear trees, try spacing them 15-20 feet apart. No more than 20 feet to ensure the trees cross pollinate.'
    },
    {
        name: 'Plums',
        harvestHistory: [[10,12], [6,10], [0,0], [0,12], [0,2]], // [second planting,harvest,0,[0,12] accounts for the full year,first planting]
        image: 'images/plums-geba56590c_1280.jpg',
        sun: 'Full sun',
        soil: 'Plums like fertile soil, ideally slightly acidic, with a pH of 6–6.5, but they\'re tolerant of a wide range of soils.',
        water: 'Plum trees should receive at least one inch of water a week.',
        complement: 'Foxgloves, marigolds, nasturtiums, dill, comfrey, chives, coriander, and lavender.',
        space: 'Plums grow 20 to 25 feet tall with a spread of 15 to 20 feet, so provide each plant with 20 feet of space on all sides. Dwarf plums grow eight to 10 feet tall and wide. Allot 10 feet of space between these.'
    },
    {
        name: 'Raspberries (Summer)',
        harvestHistory: [[10,12], [6,8], [0,0], [0,12], [0,3]], // [second planting,harvest,0,[0,12] accounts for the full year,first planting]
        image: 'images/raspberries-gb1e73b848_1280.jpg',
        sun: 'Full sun',
        soil: 'Raspberries prefer fertile, well-drained, moisture-retentive soil that is slightly acidic (ideally pH 6.5–6.7).',
        water: 'During fruit development, raspberries require one to 1-1-/2 inches of water (either from rain or irrigation) per week.',
        complement: 'Garlic, leeks, chive, onions, chervil, turnips, and yarrow.',
        space: 'Raspberry plants should be spaced 45–60cm (18–24in) apart, with 1.8m (6ft) between rows.'
    },
    {
        name: 'Raspberries (Autumn)',
        harvestHistory: [[10,12], [7,11], [0,0], [0,12], [0,3]], // [second planting,harvest,0,[0,12] accounts for the full year,first planting]
        image: 'images/téléchargement.jpg',
        sun: 'Full sun',
        soil: 'Raspberries prefer fertile, well-drained, moisture-retentive soil that is slightly acidic (ideally pH 6.5–6.7).',
        water: 'During fruit development, raspberries require one to 1-1-/2 inches of water (either from rain or irrigation) per week.',
        complement: 'Garlic, leeks, chive, onions, chervil, turnips, and yarrow.',
        space: 'Leave 1.8m (6ft) between rows. Each can should be 60cm apart. Plant your canes to a depth of 8cm (3in), gently firm them in, and water well.'
    },
    {
        name: 'Red & Whitecurrents',
        harvestHistory: [[9,12], [6,8], [0,0], [0,12], [0,3]], // [second planting,harvest,0,[0,12] accounts for the full year,first planting]
        image: 'images/red-current-gc0fcdff0e_1280.jpg',
        sun: 'Full sun, light shade',
        soil: 'Redcurrant and whitecurrants are tolerant of quite wide ranging conditions but avoid poor drainage. As far as ph is concerned they prefer to be neutral to slightly acid, but this is only a preference. As long as the soil has good drainage but isn\'t too thin or dry then your new bushes should thrive.',
        water: 'Currants a deep watering once a week. The best gauge is to keep the soil a little moist but not wet in between watering.',
        complement: 'Gooseberries, marigolds, chives, and garlic.',
        space: 'Space 1.5m apart with the same distance between rows to allow plants to expand to their full size at maturity.'
    },
    {
        name: 'Strawberries (Perpetual)',
        harvestHistory: [[2,10], [4,10], [0,0], [0,12], [0,0]], // [second planting,harvest,0,[0,12] accounts for the full year,first planting]
        image: 'images/strawberries-gd9689c1a0_1280.jpg',
        sun: 'Full sun',
        soil: 'Strawberries like fertile, well-drained, slightly acidic soil.',
        water: 'Everbearing strawberries require regular watering and need one to two inches of water per week during the growing season',
        complement: 'Beans, borage, chives, lettuce, onions, peas, radishes, and spinach.',
        space: 'Plant the strawberry plants 30-45cm apart, in rows 75cm apart, so their roots are just buried, and firm the soil around them.'
    },
    {
        name: 'Strawberries (Summer)',
        harvestHistory: [[2,10], [4,7], [0,0], [0,12], [0,0]], // [second planting,harvest,0,[0,12] accounts for the full year,first planting]
        image: 'images/strawberries-g53d7989a1_1280.jpg',
        sun: 'Full sun',
        soil: 'Strawberries like fertile, well-drained, slightly acidic soil.',
        water: 'During normal weather conditions, strawberries need water equal to 1 to 1.5 inches of rain each week. During hot, dry periods, water as needed to prevent shallow roots from drying out.',
        complement: 'Beans, borage, chives, lettuce, onions, peas, radishes, and spinach.',
        space: 'Plant the strawberry plants 30-45cm apart, in rows 75cm apart, so their roots are just buried, and firm the soil around them.'
    },
];

// Function to populate search options
function populateSearchOptions() {
    const searchOptions = document.getElementById('searchOptions');
    searchOptions.innerHTML = '';

    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const matches = data.filter(item => {
        return Object.values(item).some(value =>
            String(value).toLowerCase().includes(searchTerm)
        );
    });

    matches.forEach(match => {
        const option = document.createElement('option');
        option.value = match.name;
        searchOptions.appendChild(option);
    });
}

        // Event listener for search input
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', populateSearchOptions);

// Function to perform search
function search() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const resultDiv = document.getElementById('searchResult');
    resultDiv.innerHTML = '';

    const match = data.find(item => {
        return item.name.toLowerCase() === searchTerm;
    });

    if (match) {
        const containerDiv = document.createElement('div');
        containerDiv.classList.add('description-container');

        const matchDiv = document.createElement('div');
        const matchImg = document.createElement('img');

        matchDiv.classList.add('result-item');
        matchDiv.innerHTML = `<span><b>Name:</b> ${match.name}</span><br><span class="horizontal-line"></span><br><span><b>Sun:</b> ${match.sun}</span><br><span class="horizontal-line"></span><br><span><b>Soil:</b> ${match.soil}</span><br><span class="horizontal-line"></span><br><span><b>Water:</b> ${match.water}</span><br><span class="horizontal-line"></span><br><span><b>Companion Plants:</b> ${match.complement}</span><br><span class="horizontal-line"></span><br><span><b>Spacing: </b> ${match.space}</span>`;

        // Set the image source and any other attributes
        matchImg.src = match.image;
        matchImg.alt = match.name;
        // Append the image element to the containerDiv
        
        containerDiv.appendChild(matchImg);
        // Append the matchDiv to the containerDiv
        containerDiv.appendChild(matchDiv);
        
        

        // Append the containerDiv to the resultDiv
        resultDiv.appendChild(containerDiv);
    } else {
        const noResultDiv = document.createElement('div');
        noResultDiv.classList.add('result-item');
        noResultDiv.textContent = 'No results found.';
        resultDiv.appendChild(noResultDiv);
    }

    // Update the chart
    updateChart(match);
}


// Event listener for search button
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', search);

// Event listener for search button when pressing the enter button
document.getElementById("searchInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("searchButton").click();
    }
  });

// Function to update the chart
let chart;

function updateChart(match) {
const legendContainer = document.querySelector('.legend-container');
legendContainer.style.display = match ? 'block' : 'none';


const ctx = document.getElementById('chart').getContext('2d');
const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: []
};

if (match) {
    chartData.labels = ['Sow', 'Harvest'];
    
    // Splitting the harvest data
    const firstHarvestData = match.harvestHistory.slice(1, 2)[0];
    const secondHarvestData = match.harvestHistory.slice(2, 3)[0];
    
    // Creating two datasets for the two parts
    const firstDataset = {
        label: `${match.name}'s Harvest History (Part 1)`,
        data: [match.harvestHistory[0]],
        backgroundColor: 'rgba(255,0,0, 0.5)',
        borderWidth: 1
    };
    
    const secondDataset = {
        label: `${match.name}'s Harvest History (Part 2)`,
        data: [firstHarvestData, secondHarvestData],
        backgroundColor: 'rgba(0,255,0, 0.5)',
        borderWidth: 1
    };
    const newDataset = {
        label: `${match.name}'s Harvest History (Part 3)`,
        data: match.harvestHistory[3],
        backgroundColor: 'rgba(120,120,120,0)',
        borderWidth: 2
    };
    //accounts for if the planting is both at the beginning and end of year
    const newDataset2 = {
        label: `${match.name}'s Harvest History (Part 4)`,
        data: [match.harvestHistory[4]],
        backgroundColor: 'rgba(255,0,0, 0.5)',
        borderWidth: 2
    };
    
    chartData.datasets.push(firstDataset, secondDataset,newDataset,newDataset2);

    // Destroy the existing chart before creating a new one
    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            indexAxis: 'y',
            
            scales: {
                y: {
                    display: false,
                },
                x: {
                    ticks: {
                        stepSize: 1,
                        callback: function (value, index) {
                            const monthNames = [
                                'January', 'February', 'March', 'April', 'May', 'June',
                                'July', 'August', 'September', 'October', 'November', 'December'
                            ];
                            return monthNames[index];
                        }
                    }
                }
            },
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Planting Planner'
                },
                tooltip: {
                    enabled: false // Disable tooltips
                }
            }, 
            barPercentage: 10, // Adjust the value as needed
            categoryPercentage: 5 // Adjust the value as needed
        }
    });
} else {
    // Destroy the existing chart and clear canvas if no match is found
    if (chart) {
        chart.destroy();
    }
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
}
