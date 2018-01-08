import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-acid-canvas',
  templateUrl: './acid-canvas.component.html',
  styleUrls: ['./acid-canvas.component.css']
})
export class AcidCanvasComponent implements OnInit {
  @ViewChild("myCanvas") myCanvas: ElementRef;
  context: CanvasRenderingContext2D;
  canvas = { width: 300, height: 300 };
  myVar;
  interval = 300;
  max = 600;
  min = 0;
  play = false;
  alphaModel = "flat color"
  alphaM = 2;
  alpha = 1.0;
  maxAlpha = 2;
  minAlpha = 0;
  thumbLabel = true;
  img;
  imgSrc = "../../../assets/img/defImg.png";
  imgModel;
  x;
  y;
  constructor() {
    this.imgModel = this.imgSrc;
  }
  ngOnInit() {
    this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
  }
  ranomly() {
    coloreFill1 = "FF0000";
    var coloreFill1 = "rgba(" + Math.floor(Math.random() * 256) + "," +
      Math.floor(Math.random() * 256) + "," +
      Math.floor(Math.random() * 256) + "," + this.alpha + ")";
    this.context.fillStyle = coloreFill1;
    this.context.beginPath();
    this.context.arc(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.PI * 39, false);
    this.context.closePath();
    this.context.fillStyle = coloreFill1;
    this.context.fill();
    this.context.strokeStyle = "#000000";
    this.context.stroke();
  }
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  looppa() {
    this.play = true;
    this.myVar = setInterval(() => this.ranomly(), this.interval);
  }
  stoppa() {
    this.play = false;
    clearInterval(this.myVar);
  }
  speedSliderTouched($event) {
    clearInterval(this.myVar);
    this.interval = $event.value;
    this.play ? this.looppa():null;
  }
  alphaSliderTouched($event) {
    if($event.value === 0){
      this.alpha=0;
    }
    if($event.value  === 1){
      this.alpha=0.3;
    }
    if($event.value  === 2){
      this.alpha=1;
    }
    
  }
  save() {
    this.imgModel = this.context.canvas.toDataURL();
  }






}
