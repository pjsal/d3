

var dataset = [5,10,15,20,25];

d3.select(".para")
  .selectAll('p')
  .data(dataset)
  .enter()
   .append("p")
   .text(function(d){
      
       return d;
   });

   console.log(d3.selectAll('p'));

