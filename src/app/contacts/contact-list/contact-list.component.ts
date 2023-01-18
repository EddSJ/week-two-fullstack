import { Component } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  infos: Contact[] = [
    new Contact(1, 'R. Kent', 'jackson@byui.edu', 2084963771, '../../assets/jacksonk.jpg', 'null'),
    new Contact(2, 'Rex Barzee', 'barzeer@byui.edu', 2084963768, '../../assets/barzeer.jpg', 'null')
  ]; 
}
