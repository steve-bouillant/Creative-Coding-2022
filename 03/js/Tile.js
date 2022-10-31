class Tile {
  constructor(x, y, size, color, ctx) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.rotation = false;
    this.angle = Math.round(Math.random()) * (Math.PI / 2);
    this.ctx = ctx;
    this.bgColor = color;
    this.lineColor = this.bgColor === "white" ? "white" : "white";
    // this.r = Math.round(Math.random() * 255);
    // this.g = Math.round(Math.random() * 255);
    // this.b = Math.round(Math.random() * 255);
  }

  updateAngle() {
    this.angle += Math.PI / 2;
  }

  draw() {
    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.rotate(this.angle);
    // if (this.rotation) {
    //   this.angle += 1;
    // }
    // this.ctx.strokeStyle = "lightgrey";
    this.ctx.fillStyle = this.bgColor;

    this.ctx.beginPath();
    this.ctx.rect(0 - this.size / 2, 0 - this.size / 2, this.size, this.size);
    this.ctx.fill();
    // this.ctx.stroke();
    this.ctx.closePath();
    //
    // this.ctx.fillStyle = this.circleColor;
    this.ctx.strokeStyle = this.lineColor;
    this.ctx.lineWidth = 10;

    this.ctx.beginPath();
    this.ctx.rect(
      0 - this.size / 2,
      0 - this.size / 2,
      this.size / 2,
      this.size / 2
    );

    // this.ctx.arc(0 - this.size / 2,
    //   0 - this.size / 2,
    //   this.size / 2,
    //   0,
    //   Math.PI / 2,
    //   false
    // );

    // this.ctx.fill();
    // this.ctx.stroke();
    this.ctx.closePath();

  
    //cross top left
    this.ctx.beginPath();
    let x = 0 - this.size / 2;
    let y = 0 - this.size / 2 + this.size / 4;
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x + this.size / 2, y);
    x = 0 - this.size / 2 + this.size / 4;
    y = 0 - this.size / 2;
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x, y + this.size / 2);

    this.ctx.stroke();
    this.ctx.closePath();


        //cross bottom right
    this.ctx.fillStyle="white";
    this.ctx.beginPath();
    this.ctx.rect(0, 0, this.size / 2, this.size / 2);


    let x2 = 0 - this.size / 2;
    let y2 = 0 - this.size / 2 + this.size / 2;
    this.ctx.moveTo(x2, y2);
    this.ctx.lineTo(x2 + this.size / 2, y2);
    x2 = 0 - this.size / 2 ;
    y2 = 0 - this.size / 2 + this.size / 4;

    this.ctx.fill();
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x, y + this.size / 2);

    this.ctx.stroke();
    this.ctx.closePath();

    // //
    // this.ctx.beginPath();

    // this.ctx.moveTo(
    //   this.size / 2,
    //   this.size / 2,
    //   this.size / 2,
    //   Math.PI,
    //   -Math.PI / 2,
    //   false
    // );

    // this.ctx.lineTo(
    //   this.size / 2,
    //   this.size / 2,
    //   this.size / 2,
    //   Math.PI,
    //   -Math.PI / 2,
    //   false
    // );

    // // this.ctx.arc(
    // //   this.size / 2,
    // //   this.size / 2,
    // //   this.size / 2,
    // //   Math.PI,
    // //   -Math.PI / 2,
    // //   false
    // // );

    // // this.ctx.fill();
    // this.ctx.stroke();
    // this.ctx.closePath();

    this.ctx.restore();
  }
}
