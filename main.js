const FRAME_HEIGHT = 500;
const FRAME_WIDTH = 200;
const MARGINS = {left: 100, right: 50, top: 50, bottom: 50};

const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right

const FRAME =
	d3.select('#vis')
		.append('svg')
			.attr('height', FRAME_HEIGHT)
			.attr('width', FRAME_WIDTH)
			.attr('class', 'frame');

const data = [55000, 48000, 27000, 66000, 90000];

// define scaling function
const MAX_Y = d3.max(data, (d) => {return d;});
const Y_SCALE = d3.scaleLinear()
				.domain([0, MAX_Y])
				.range([VIS_HEIGHT, 0]);

FRAME.selectAll('points')
		.data(data)
		.enter()
		.append('circle')
			.attr('cx', MARGINS.left + 30) 
			.attr('cy', (d) => {return (Y_SCALE(d) + MARGINS.top);})
			.attr('r', 10)
			.attr('class', 'point');

FRAME.append('g')
		.attr('transform', 'translate(' + (MARGINS.left)  + "," +  MARGINS.top + ')')
		.call(d3.axisLeft(Y_SCALE).ticks(4))
			.attr('font-size','20px');