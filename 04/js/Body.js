class Body {
    constructor(x, y, radius, ctx) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.ctx = ctx;
}



draw(x, y) {


    //bras gauche
    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.fillStyle = "pink";
    this.ctx.beginPath();
    this.ctx.ellipse(-170, 0, 110, 130, 10, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.stroke()
    this.ctx.closePath();
    this.ctx.restore();

      //pied droite
 this.ctx.save();
 this.ctx.translate(this.x, this.y);
 this.ctx.fillStyle = "#ff4d4d";
 this.ctx.beginPath();
 this.ctx.ellipse(320, 350, 130, 185, 9.5, 0, 2 * Math.PI);
 this.ctx.fill();
 this.ctx.stroke()
 this.ctx.closePath();
 this.ctx.restore();
  
  //corp  
    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.fillStyle = "pink";
    this.ctx.beginPath();
    this.ctx.arc(180, 0, 350, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.restore();

    //faussette d
    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.fillStyle = "	 #ff66b3";
    this.ctx.beginPath();
    this.ctx.ellipse(385, 45, 30, 50, 1.7, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.restore();

    //bras droite
    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.fillStyle = "pink";
    this.ctx.beginPath();
    this.ctx.ellipse(510, -80, 120, 125, 3.2, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.stroke()
    this.ctx.closePath();
    this.ctx.restore();
    

    //faussette g
    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.fillStyle = "	 #ff66b3";
    this.ctx.beginPath();
    this.ctx.ellipse(-20, 50, 30, 50, 1.4, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.restore();

   
     

    
  }

}