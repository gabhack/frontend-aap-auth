import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-csv-home',
  templateUrl: './csv-home.component.html',
  styleUrls: ['./csv-home.component.css']
})
export class CsvHomeComponent implements OnInit {
  users: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.authService.getAllUsers().subscribe({
      next: res  => this.users = res.users,
      error: err => console.error('Error al cargar usuarios', err)
    });
  }
}