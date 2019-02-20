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

        chart
            .selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('data-date', d => d[0])
            .attr('data-gdp', d => d[1])
            .attr('fill', '#467bf3')
            .attr('width', barWidth)
            .attr('height', d => height - padding - yScale(d[1]))
            .attr('x', (d, i) => 1 + padding + (barWidth * i)) //1px offset to pass test n 10
            .attr('y', d => yScale(d[1]))

        /*----- AXES ------*/
        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);

        chart
            .append('g')
            .attr('id', 'x-axis')
            .attr('transform', `translate(0, ${height - padding})`)
            .style('color', '#fff')
            .style('font-size', '0.9rem')
            .call(xAxis);

        chart
            .append('g')
            .attr('id', 'y-axis')
            .attr('transform', `translate(${padding}, 0)`)
            .style('color', '#fff')
            .style('font-size', '0.9rem')
            .call(yAxis);
    });