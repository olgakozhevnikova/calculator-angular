import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  operators = ['+', '-', '*', '/', '='];

  constructor() { }

  ngOnInit() {
  }

}
