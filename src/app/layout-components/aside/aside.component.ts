import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html'
})
export class AsideComponent implements OnInit {

  constructor(private router: Router) {
    
  }

  ngOnInit() {
  }

  public logOut(): void {
    
  }

  /**
   * slice roles with group_role_id
   */
  public sliceRoles(group_role_id: number) {
    
  }

}
