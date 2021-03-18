import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from 'src/app/services/people.service';
import { Person } from '../../models/Person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-update-form',
  templateUrl: './person-update-form.component.html',
  styleUrls: ['./person-update-form.component.css']
})
export class PersonUpdateFormComponent implements OnInit {

  idToFind: string = '';

  person: any = {
    name: '',
    surname: '',
    birthday: '',
    address: '',
    phoneNumber: 0,
    country: ''
  }

  constructor(private peopleService: PeopleService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      res => {
        this.getThePerson(res.id);
        this.idToFind = res.id.toString();
      },
      err => {
        console.log(err);
      }
    )
  }

  getThePerson(id:number){
    this.peopleService.getPerson(id.toString()).subscribe(
      res => {
        let personFound: Person = res as Person;
        this.person = personFound;
        this.person.birthday = personFound.birthday.toString().slice(0,10);
      },
      err => {
        console.log(err);
      }
    );
  }

  update(){
    this.peopleService.updatePerson(this.person, this.idToFind).subscribe(
      res => {
        this.router.navigate(['/people']);
      },
      err => {
        console.log(err);
      }
    )
  }

}
