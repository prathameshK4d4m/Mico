import { Component } from '@angular/core';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  call = faPhone;
  email = faEnvelope;
  location = faMapMarkerAlt;
  facebook = faFacebookF;
  twitter = faTwitter;
  linkedIn = faLinkedinIn;
  instagram = faInstagram;
}
