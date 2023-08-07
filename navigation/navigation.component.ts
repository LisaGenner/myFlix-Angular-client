import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor(private router: Router) { }

  ngOnInit(): void { }

  toMovies(): void {
    this.router.navigate(['movies']);
  }

  toProfile(): void {
    this.router.navigate(['profile']);
  }

  toLogout(): void {
    this.router.navigate(['welcome']);
    localStorage.clear();
  }
}
