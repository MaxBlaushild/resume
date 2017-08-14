import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {

  pictures: string[] = [
    'assets/images/profile-one.jpg',
    'assets/images/profile-two.jpg',
    'assets/images/profile-three.jpg',
    'assets/images/profile-four.jpg',
    'assets/images/profile-five.jpg',
  ];

  constructor() { }

  ngOnInit() {
  }

}
