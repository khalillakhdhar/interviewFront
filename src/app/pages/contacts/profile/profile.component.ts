import { Component, OnInit } from '@angular/core';

import { revenueBarChart, statData } from './data';

import { UtilisateurService } from '../../../shared/services/utilisateur.service';
import { ChartType } from './profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

/**
 * Contacts-profile component
 */
export class ProfileComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  revenueBarChart: ChartType;
  statData:any;
  utilisateur:any;
email:any;
  constructor(private utilisateurService:UtilisateurService) { 
    this.email = localStorage.getItem('email');
    console.log(this.email);
  }

  ngOnInit() {
    this.getUserbyEmail(this.email);

    this.breadCrumbItems = [{ label: 'Contacts' }, { label: 'Profile', active: true }];


    // fetches the data
    this._fetchData();
  }

  /**
   * Fetches the data
   */
  private _fetchData() {
    this.revenueBarChart = revenueBarChart;
    this.statData = statData;
  }
  getUserbyEmail(email:any){
    this.utilisateurService.findUserByEmail(email).subscribe(data=>{
      this.utilisateur = data;
      console.log(this.utilisateur);
    })
  }

}
