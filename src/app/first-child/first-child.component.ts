import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.scss'],
})
export class FirstChildComponent implements OnInit {
  public id: number;

  constructor(private activeRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activeRoute.url.subscribe((data) => {
      console.log(data);
      this.id = parseInt(data[1].path);
    });
  }
}
