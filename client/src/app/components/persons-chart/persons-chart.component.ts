import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

import { PeopleService } from '../../services/people.service';
import { Person } from '../../models/Person';
import { Country } from '../../models/Country';

@Component({
  selector: 'app-persons-chart',
  templateUrl: './persons-chart.component.html',
  styleUrls: ['./persons-chart.component.css']
})
export class PersonsChartComponent implements OnInit {

  people: Person[] = [];

  countries: Country[] = [];

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(' + (Math.floor(Math.random() * (155 - 75)) + 75) + "," + (Math.floor(Math.random() * (155 - 75)) + 75) + "," + (Math.floor(Math.random() * (155 - 75)) + 75) + "," + "0.7)"],
    },
  ];

  constructor(private peopleService: PeopleService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.getEverybody()
  }
  
  getEverybody(){
    this.peopleService.getPeople().subscribe(
      res => {
        let countriesNames: any = [];
        this.people = res as Person[];
        for (let i = 0; i < this.people.length; i++) {
          let countryName = this.people[i].country;
          if(!countriesNames.includes(countryName)){
            countriesNames.push(countryName);
          }
        }
        for (let i = 0; i < countriesNames.length; i++) {
          this.countries.push({name: countriesNames[i], amount: this.countForCountry(countriesNames[i], this.people)});
        }
        for (let i = 0; i < countriesNames.length; i++) {
          this.addLabel(this.countries[i].name, this.countries[i].amount);
        }
      },
      err => console.error(err)
    );
  }

  countForCountry(countryName: string, list: Person[]){
    let res = 0;
    for (let i = 0; i < list.length; i++) {
      if(list[i].country === countryName){
        res++;
      }
    }
    return res;
  }

  addLabel(name: string, amount: number){
    this.pieChartLabels.push(name);
    this.pieChartData.push(amount);
    let red = Math.floor(Math.random() * (255 - 0)) + 0;
    let green = Math.floor(Math.random() * (255 - 0)) + 0;
    let blue = Math.floor(Math.random() * (255 - 0)) + 0;
    let newColor: string = 'rgba(' + red.toString() + "," + green.toString() + "," + blue.toString() + "," + "0.7)";
    this.pieChartColors[0].backgroundColor.push(newColor);
  }

}
