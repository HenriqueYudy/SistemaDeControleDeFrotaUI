import { TokenStorage } from './../../../shared/token/tokenStorage';
import { AuthService } from './../../../login/auth.service';
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private token: TokenStorage
  ) { }

  titulo: string = "OnNet Telecom";
  conectado: boolean = true;
  status: string = "Logout";
  User: string;

  ngOnInit() {

    $(document).ready(function () {
      // toggle sidebar when button clicked
      $('.sidebar-toggle').on('click', function () {
        $('.sidebar').toggleClass('toggled');
      });

      // auto-expand submenu if an item is active
      var active = $('.sidebar .active');

      if (active.length && active.parent('.collapse').length) {
        var parent = active.parent('.collapse');

        parent.prev('a').attr('aria-expanded', true);
        parent.addClass('show');
      }
    });



    if (this.conectado == true) {
      this.status = "Logout";
    }

    this.User = this.token.getUser();

  }

  deslogar() {
    this.token.signOut();
    this.authService.logout();
  }
}
