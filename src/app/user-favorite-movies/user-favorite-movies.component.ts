import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { GenreComponent } from '../genre/genre.component';
import { DirectorComponent } from '../director/director.component';
import { MovieInfoComponent } from '../movie-info/movie-info.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-favorite-movies',
  templateUrl: './user-favorite-movies.component.html',
  styleUrls: ['./user-favorite-movies.component.scss']
})
export class UserFavoriteMoviesComponent {
  favorites: any = [];
  favoriteMovies: any = [];
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getFavorites();
  }

  getFavorites(): void {
    this.favorites, this.favoriteMovies = [];
    this.fetchApiData.getUser().subscribe((resp: any) => {
      this.favorites = resp.FavoriteMovies;
      this.favorites.map((favorite: any) => {
        console.log(favorite);
        this.fetchApiData.getMovies(favorite).subscribe((resp: any) => {
          this.favoriteMovies.push(resp);
        });
      });
    });
  }

  // check if a movie is a user's favorite
  isFavorite(id: string): boolean {
    return this.favorites.includes(id);
  }

  // add a movie to a user's favorites
  addToFavorites(id: string): void {
    this.fetchApiData.addFavoriteMovie(id).subscribe((result) => {
      this.snackBar.open('Movie added to favorites', 'OK', {
        duration: 2000,
      });
      this.ngOnInit();
    });
  }

  // Removes a movie from a user's favorites
  removeFromFavorites(id: string): void {
    console.log(id);
    this.fetchApiData.deleteFavoriteMovie(id).subscribe((result) => {
      this.snackBar.open('Movie removed from favorites', 'OK', {
        duration: 2000,
      });
      this.ngOnInit();
    });
  }

  // Open genre information from GenreComponent
  openGenre(name: string, description: string): void {
    this.dialog.open(GenreComponent, {
      data: {
        Name: name,
        Description: description,
      },
      width: '400px',
    });
  }

  // Open director information from DirectorComponent
  openDirector(name: string, bio: string, birthday: string): void {
    this.dialog.open(DirectorComponent, {
      data: {
        Name: name,
        Bio: bio,
        Birth: birthday,
      },
      width: '400px',
    });
  }

  // Open movie details from MovieInfoComponent
  openSynopsis(title: string, description: string): void {
    this.dialog.open(MovieInfoComponent, {
      data: {
        Title: title,
        Description: description,
      },
      width: '400px',
    });
  }
}
