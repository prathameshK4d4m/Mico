import { Component } from '@angular/core';
import { faSearch, faUser, faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    searchIcon = faSearch;
    userIcon = faUser;
    call = faPhone;
    email = faEnvelope;
    location = faMapMarkerAlt;
}
