/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@zummy/users';

@Component({
  selector: 'zummy-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent implements OnInit {
  constructor(private authService: AuthService) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {}

  onLogout() {
    this.authService.logout();
  }
}
