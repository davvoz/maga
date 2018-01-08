import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-draw-canvas',
  templateUrl: './draw-canvas.component.html',
  styleUrls: ['./draw-canvas.component.css']
})
export class DrawCanvasComponent implements OnInit {
  @ViewChild("myCanvas") myCanvas: ElementRef;
  context: CanvasRenderingContext2D;
  canvas = { width: 300, height: 300 };
  constructor() { }

  ngOnInit() {
    this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
  }
  
  monitorEvent($event) {
    console.log($event);
    function getMousePos( canvas,evt) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
    }
    this.context.fillStyle = "#000000";
    this.context.fillRect(getMousePos(this.context.canvas,$event).x, getMousePos(this.context.canvas,$event).y, 10, 10);
   
  }

}
