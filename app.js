const width = 960;
const height = 500;
const padding = 50;

const chart = d3.select('.chart')
    .attr('width', width)
    .attr('height', height);

    d3.json('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
    .then(json => {
        const { data } = json; //destructuring        
    });