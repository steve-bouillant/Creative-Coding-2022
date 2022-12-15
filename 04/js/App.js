/**
 *  EASING REF:
 *  https://easings.net/#
 */
class App {
  constructor() {
    this.pixelRatio = window.devicePixelRatio || 1;
    this.canvas = document.createElement("canvas");
    this.canvas.width = window.innerWidth * this.pixelRatio;
    this.canvas.height = window.innerHeight * this.pixelRatio;
    this.canvas.style.width = window.innerWidth;
    this.canvas.style.height = window.innerHeight;
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.setup();
  }

  setup() {
    this.mouse = { x: 0, y: 0 };

    const center = {
      x: (window.innerWidth / 2) * this.pixelRatio,
      y: (window.innerHeight / 2) * this.pixelRatio,
    };
    

    //EYES
    this.eyes = new Array(
      new Eye(center.x - 100, center.y - 100, 100, this.ctx),
      new Eye(center.x + 100, center.y - 100, 100, this.ctx)
    );

    //BODY
    this.body = new Array(
      new Body(center.x - 180, center.y - 100, 150, this.ctx)
    );

//FOOTS
    this.foots = new Array(
      new Foots(center.x - 180, center.y - 100, 150, this.ctx)
    );
    
     //BOUCHE
     this.bouche = 
      new Bouche(center.x - 180, center.y - 100, 40, this.ctx)
    

    //CIRCLE
    this.circle = new Array(
      new Circle(center.x - 180, center.y - 100, 150, this.ctx)
    );

    document.addEventListener("click", this.click.bind(this));
    this.draw();
  

    // document.addEventListener("click", this.click.bind(this));
    document.addEventListener("mousemove", this.move.bind(this));
    this.draw();
    
  }

  

  draw() {
    this.ctx.fillStyle = "#ffc266";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    
    this.body.forEach((body) => {
      body.draw(this.mouse.x, this.mouse.y);
    });

    // this.bouche.forEach((bouche) => {
      this.bouche.draw(this.mouse.x, this.mouse.y);
    // });

    
    this.eyes.forEach((eye) => {
      eye.draw(this.mouse.x, this.mouse.y);
    });

    this.foots.forEach((foots) => {
      foots.draw(this.mouse.x, this.mouse.y);
    });

    requestAnimationFrame(this.draw.bind(this));
  }

  click(e) {
    this.bouche.resetAndGo();
  }
  
  move(e) {
    this.mouse = {
      x: e.clientX * this.pixelRatio,
      y: e.clientY * this.pixelRatio,
    };
    
  }


  


  dist(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  }
}

window.onload = function () {
  new App();
};
