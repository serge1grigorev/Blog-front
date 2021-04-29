import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  public query: string = "";

  constructor(private router: Router){}

  ngOnInit(): void {
  }

  public onSearch(): void{
    this.router.navigate(['/search'], {queryParams: {t: this.query}});
  }
}
 