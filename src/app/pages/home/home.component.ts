import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpService, private router: Router) {}

  charactersList;

  statusClass;

  ngOnInit(): void {
    this.http.geAllCharacters().subscribe((response) => {
      // console.log(response.results);
      this.charactersList = response.results;
      console.log(this.charactersList);
    });
  }

  openCharacterDetail(event, character) {
    console.log(character);
    this.router.navigate(['character/' + character['id']]);
  }
}
