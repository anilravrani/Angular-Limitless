import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Response} from "@angular/http";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    public user: any = {
        username: "",
        password: ""
    };

    /**
     *
     */
    constructor(private router: Router) {

    }

    ngOnInit() {

    }

    
    
}
