import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  isToastOpen = false;

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  username: string='';
 
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    
    ) { }
 
  ngOnInit() {
    const username = this.activatedRoute.snapshot.queryParams['username'];
    console.log('Bienvenido, ' + username);
   } }