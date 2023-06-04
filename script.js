    


        
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
                water: 'Generally speaking, a good watering schedule for garlic provides an inche (2.5 cm.) of water per week. This is a combination of rainwater and supplemental irrigation.',
                complement: 'Lettuce, broccoli, spinach, cauliflower, beans, rhubarb, and peanuts.',
                space: 'They should be spaced around 12 to 18 inches apart and planted no more than 5 inches deep.'
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
        