import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './nav/nav';
import { HttpRequest } from '@angular/common/http';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Form } from './form/form';
import { Table } from './table/table';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Header, Footer, Form, Table],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Uebung6';
}
