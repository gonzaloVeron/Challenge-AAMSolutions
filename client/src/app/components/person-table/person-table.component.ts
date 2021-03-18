import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.css']
})
export class PersonTableComponent implements OnInit {

  people: any = [];

  constructor(private peopleService: PeopleService, private router: Router) { }

  ngOnInit(): void {
    this.getEverybody()
  }

  getEverybody(){
    this.peopleService.getPeople().subscribe(
      res => {
        this.people = res;
      },
      err => console.error(err)
    );
  }

  deletePerson(id: number){
    this.peopleService.deletePerson(id.toString()).subscribe(
      res => {
        this.getEverybody();
      },
      err => console.error(err)
    );
  }

  updatePerson(theId: number){
    this.router.navigate(['/people/update'], { queryParams: { id: theId } });
  }

}
