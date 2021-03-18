import { Component, OnInit , HostBinding, Host } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';
import { Person } from '../../models/Person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  person: Person = {
    name: '',
    surname: '',
    birthday: new Date(),
    address: '',
    phoneNumber: 0,
    country: ''
  }

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
  }

  saveNewPerson(){
    this.peopleService.savePerson(this.person).subscribe(
      res => {
        this.refreshPerson();
      },
      err => {
        console.log(err);
      }
    );
  }

  refreshPerson(){
    this.person = {
      name: '',
      surname: '',
      birthday: new Date(),
      address: '',
      phoneNumber: 0,
      country: ''
    }
  }

}
