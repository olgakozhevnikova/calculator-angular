import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  value;

  numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '='];

  operators = ['+', '-', '*', '/'];

  equalIsPressed: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  click(item) {
    if (!this.value) {
      // if input is empty, do not use operators
      const ind = _.findIndex(this.operators, function(x) { return x === item; });
      if (ind >= 0 || item === '.') {
        return;
      } else {
        this.value = item;
      }
    } else {
      // do calculation when press '='
      if (item === '=') {
        const lastChar = this.value[this.value.length - 1];
        const ind = _.findIndex(this.operators, function(x) { return x === lastChar; });
        if (ind >= 0 || lastChar === '.') {
          return;
        }
        this.value = eval(this.value);
      } else {
        this.value += item;
      }
    }
  }

  refresh() {
    this.value = 0;
  }

}
