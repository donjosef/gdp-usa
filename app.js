const width = 960;
const height = 500;
const padding = 50;

const chart = d3.select('.chart')
    .attr('width', width)
    .attr('height', height);

d3.json('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
    .then(json => {
        const { data } = json; //destructuring 
        const barWidth = (width - padding - padding) / data.length;

        const minDate = new Date(data[0][0]);
        const maxDate = new Date(data[data.length - 1][0]);

        const xScale = d3.scaleTime()
            .domain([minDate, maxDate])
            .range([padding, width - padding]);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d[1])])
            .range([height - padding, padding]);

        /*----- AXES ------*/
        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);

    });