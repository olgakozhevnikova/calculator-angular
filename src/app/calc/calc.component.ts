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
      if (ind >= 0 || item === '.' || item === '=') {
        return;
      } else {
        this.value = item;
      }
    } else {
      const lastChar = this.value[this.value.length - 1];
      const ind = _.findIndex(this.operators, function(x) { return x === lastChar; });
      // do calculation when press '='
      if (item === '=') {
        if (ind >= 0 || lastChar === '.') {
          return;
        }
        this.value = eval(this.value);
      }
      // if last symbol of input is operator, do not do anything
      else if (this.operators.indexOf(item) !== -1 || item === '.') {
        if (ind >= 0 || lastChar === '.') {
          return;
        } else {
          this.value += item;
        }
      } else {
        this.value += item;
      }
    }
  }

  refresh() {
    this.value = 0;
  }

}
