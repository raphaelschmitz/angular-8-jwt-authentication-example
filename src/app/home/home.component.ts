import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    users: User[];

    name = 'Set iframe source';
    url: string = "https://juliaraphael.de";
    urlSafe: SafeResourceUrl;
  
    constructor(private userService: UserService, public sanitizer: DomSanitizer) { 

        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://juliaraphael.de');

        xhr.responseType = 'blob';
        xhr.setRequestHeader('Authorization', 'Bearer ' );
        xhr.send();
        


    }


    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });


        this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

    }
}