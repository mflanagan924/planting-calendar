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
        matchDiv.innerHTML = `<span><b>Name:</b> ${match.name}</span><br><span><b>Sun:</b> ${match.sun}</span><br><span><b>Soil:</b> ${match.soil}</span><br><span><b>Water:</b> ${match.water}</span><br><span><b>Companion Plants:</b> ${match.complement}</span><br><span><b>Spacing: </b> ${match.space}</span>`;

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
    
    chartData.datasets.push(firstDataset, secondDataset,newDataset);

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
