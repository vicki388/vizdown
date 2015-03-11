var jade = require('jade')

module.exports = function(data,options) {

	var rects = []
	var max = 0
	var wsize = options

	var min = data[0]
//    console.log(min)
	// var color = ['red','yellow','green','blue','purple', 'skyblue', 'pink']
    var color = ['blue','green','blue','green','blue', 'green', 'blue', 'green', 'blue','green','blue','green','blue','green','blue', 'green', 'blue', 'green', 'blue','green','blue','green','blue','green','blue', 'green', 'blue', 'green', 'blue', 'green','blue','green','blue','green','blue', 'green', 'blue', 'green', 'blue','green','blue','green','blue','green','blue', 'green', 'blue', 'green', 'blue','green', 'blue','green','blue','green','blue', 'green', 'blue', 'green', 'blue']
	
	for(var i=0; i<data.length; i++){
		if(max<data[i])
			max = data[i]
       if(min>data[i])
           min = data[i]
        
		  var rect = {
            x: (wsize +15) * i,
            height_origin: data[i],
				height: data[i],
            width:wsize,
			color:color[i]
        }
        rects.push(rect)
    }

	//normalization to 0~100
	 rects.forEach(function(d, i){
	 	d.height = (d.height-min)*(100/(max-min))
		console.log('normalized to range 0 ~ 100: ', d.height)
	 })
    var html = jade.renderFile(__dirname + '/templates/barchart.jade', {
        //data: data
        data: rects,
        h: 200,
        w: 1500
    })
    // console.log(html)
    return html
}

