function draw() {
	const canvas = document.getElementById("canvas");
	if (canvas.getContext) {
		const ctx = canvas.getContext('2d');
		ctx.save();
		ctx.clearRect(0,0,canvas.width,canvas.height);

		//background
		const lineGrad = ctx.createLinearGradient(0,0,0,1920);
		lineGrad.addColorStop(0, '#758ef2');
		lineGrad.addColorStop(1, '#9bb1ea');
		ctx.fillStyle = lineGrad;
		ctx.fillRect(0,0,1080,1920);

		ctx.translate(540, 860);
		//sunlight
		const radialGrad = ctx.createRadialGradient(0,0,122,0,0,200);
		radialGrad.addColorStop(0, 'rgba(204,204,255,1)');
		radialGrad.addColorStop(0.3, 'rgba(219,222,255,0.8)');
		radialGrad.addColorStop(0.5, 'rgba(209,219,255,0.6)');
		radialGrad.addColorStop(0.7, 'rgba(202,215,249,0.4)');
		radialGrad.addColorStop(0.8, 'rgba(200,212,250,0.3)');
		radialGrad.addColorStop(0.9, 'rgba(192,205,249,0.2)');
		radialGrad.addColorStop(1, 'rgba(189,201,249,0.1)');
		ctx.fillStyle = radialGrad;
		ctx.beginPath();
		ctx.arc(0,0,200,0,Math.PI*2,true);
		ctx.fill();
		//sun
		ctx.fillStyle = '#fff7ec';
		ctx.beginPath();
		ctx.arc(0,0,122,0,Math.PI*2,true);
		ctx.fill();

		ctx.translate(-540,-860);
		//grassLand
		ctx.beginPath();
		ctx.moveTo(700, 1697);
		ctx.quadraticCurveTo(870, 1600, 1080, 1660);
		ctx.lineTo(1080, 1800);
		ctx.lineTo(700, 1800);
		ctx.closePath();
		ctx.strokeStyle = '#a7b9e1';
		ctx.stroke();
		const lineGrad2 = ctx.createLinearGradient(700, 1690, 700, 1800);
		lineGrad2.addColorStop(0, '#a9bef3');
		lineGrad2.addColorStop(1, '#a7bbed');
		ctx.fillStyle = lineGrad2;
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(0,1700);
		ctx.bezierCurveTo(280, 1490, 902, 1737, 1080, 1702);
		ctx.strokeStyle = '#bacffc';
		ctx.lineTo(1080,1920);
		ctx.lineTo(0,1920);
		ctx.closePath();
		ctx.stroke();
		const lineGrad1 = ctx.createLinearGradient(0,1700,0,1920);
		lineGrad1.addColorStop(0, 'rgba(195,209,255,0.8');
		lineGrad1.addColorStop(0.3, 'rgba(176,197,242, 0.9');
		lineGrad1.addColorStop(1, '#9bb1ea');
		ctx.fillStyle = lineGrad1;
		ctx.fill();

		//tents
		drawTriangle(ctx,122,1734,139,1734,132,1682,'fill','#a6bdee');
		drawTriangle(ctx,122,1734,139,1734,125,1757,'fill','#94a6e8');

		drawTriangle(ctx,164,1743,206,1743,183,1663,'fill','#9ab0e9');
		drawTriangle(ctx,164,1743,206,1743,177,1783,'fill','#94aee7');

		drawTriangle(ctx,224,1727,240,1727,233,1693,'fill','#9ab0e9');
		drawTriangle(ctx,224,1727,240,1727,230,1743,'fill','#9ab0e9');

		drawTriangle(ctx,894,1645,943,1645,920,1608,'fill','#9db8ef');
		drawTriangle(ctx,894,1645,943,1645,923,1668,'fill','#96abea');

		//windmill
		drawQuadrilateral(ctx,289,1542,292,1542,294,1640,286,1640,'fill','#b4caf3');
		windmill.draw(ctx);
		windmill.rotate += windmill.vr;
		

		ctx.restore();
		
		window.requestAnimationFrame(draw);
	}

}
window.requestAnimationFrame(draw);

let windmill = {
	rotate: 0,
	vr: 0.01,
	color: '#b4caf3',
	draw: function(ctx) {

		ctx.translate(290,1544);
		ctx.save();
		ctx.rotate(this.rotate*Math.PI);
		drawTriangle(ctx,-55,32,0,6,-5,-3,'fill', this.color);
		drawTriangle(ctx,-5,-3,0,-60,5,-3,'fill', this.color);
		drawTriangle(ctx,5,-3,55,32,0,6,'fill', this.color);
		drawTriangle(ctx,5,-3,-5,-3,0,6,'fill', this.color);
		ctx.restore();
	}
}

function drawTriangle(ctx,x1,y1,x2,y2,x3,y3,type,color) {
	ctx.beginPath();
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.lineTo(x3,y3);
	ctx.closePath();
	ctx[type + 'Style'] = color;
	ctx[type]();
}

function drawQuadrilateral(ctx,x1,y1,x2,y2,x3,y3,x4,y4,type,color) {
	ctx.beginPath();
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.lineTo(x3,y3);
	ctx.lineTo(x4,y4);
	ctx.closePath();
	ctx[type + 'Style'] = color;
	ctx[type]();
}