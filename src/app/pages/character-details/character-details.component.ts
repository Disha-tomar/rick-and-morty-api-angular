import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpService) {}

  character;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const characterId = params['id'];
      console.log(characterId);
      this.getCharacterDetail(characterId);
    });
  }

  getCharacterDetail(id) {
    this.http.getCharacter(id).subscribe((response) => {
      console.log(response);
      this.character = response;
    });
  }
}
