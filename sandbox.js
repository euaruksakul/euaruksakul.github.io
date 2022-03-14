//import { select } from 'd3';

const message = "Good afternoon";
console.log(message);

// const values = d3.json("values@1.json");
// console.log(values);

const margin = {top: 10, right: 30, bottom: 30, left: 60},
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

//d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/2_TwoNum.csv").then( function (data){
d3.csv("Table0.csv").then( function (data){
    console.log(data);

    // Add X axis
    const x = d3.scaleLinear()
    .domain([-50, 400])
    .range([ 0, width ]);
    svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x));

    // Add Y axis
    const y = d3.scaleLinear()
    .domain([1500, 4000])
    .range([ height, 0]);
    svg.append("g")
    .call(d3.axisLeft(y));

    // Add dots
    svg.append('g')
    .selectAll("dot")
    .data(data)
    .join("circle")
        .attr("cx", function (d) { return x(d.DXPS01_hv); } )
        .attr("cy", function (d) { return y(d.DXPS01); } )
        .attr("r", 1.5)
        .style("fill", "#69b3a2")
});
const svg = d3.select('svg');
svg.style('background-color','grey')