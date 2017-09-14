import { Component, OnInit } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { PersonalComponent } from './personal/personal.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private current: ActivatedRoute, public router: Router) { }

  ngOnInit() {
  }

  public gotoAdmin() {
    this.router.navigate(['/settings/admin']);
  }

  public gotoPersonal() {
    this.router.navigate(['/settings/personal']);
  }
}

