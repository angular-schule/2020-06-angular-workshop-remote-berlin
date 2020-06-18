import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'br-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      term: new FormControl()
    });

    this.searchForm.get('term').valueChanges
      .subscribe(e => console.log(e));

      /*
      ## Typeahead-Suche

      Implementiere eine Typeahead-Suche. Nutze als Basis dafür den Datenstrom `valueChanges` aus dem Formular, um während der Eingabe eine Suche zu starten.

      - Suchbegriff muss mindestens 3 Zeichen lang sein
      - nicht zu viele Anfragen kurz hintereinander zum Server schicken ("erst wenn der Nutzer für eine bestimtme Zeit die Finger still hält") (200 ms)
      - niemals zwei gleiche Begriffe direkt hintereinander suchen (Blick aufs Handout!)
      - Suche mit HTTP zum Server schicken: Swagger-UI gucken! Service-Methode bauen: this.bs.search()
      - Ergebnisse in einfacher Liste darstellen (z. B. alle Titel in Bulletpoint-Liste)
      - AsyncPipe
      - Zusatz: Ladeanzeige
      - Zusatz: Meldung, wenn keine Ergebnisse vorhanden sind
      */
  }

}
