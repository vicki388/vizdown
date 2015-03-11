var jade = require('jade')

module.exports = function(data) {

	var lines = []
    var colors = ["stroke:rgb(255,0,0);stroke-width:2", "stroke:rgb(0,255,0);stroke-width:2", "stroke:rgb(0,0,255);stroke-width:2", "stroke:rgb(50,0,50);stroke-width:2", "stroke:rgb(80,80,80);stroke-width:2"]

	//data.forEach(function(d,i) {
	for(var i=0; i<data.length-1; i++){
		d1 = data[i]
		d2 = data[i+1]
      var line = {
            x1: d1[0]*80, //scaling
            y1: d1[1]*60,
            x2: d2[0]*80,
            y2: d2[1]*60,
            style: colors[i%3]
        }
        lines.push(line)
		 }

    var html = jade.renderFile(__dirname + '/templates/linegraph.jade', {
        data: lines,
        h: 300,
        w: 600
    })
    // console.log(html)
    
    return html
}
