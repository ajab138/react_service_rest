import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './headerCmp.css';
import {Navbar,Nav,NavItem,MenuItem,NavDropdown} from 'react-bootstrap';

/*
export default class OtroSaludo extends Component {
    render() {
      return (
        <p>Hola desde otro componente</p>
      )
    }
  }
*/

export const Cabecera = () => (
    <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">POC Fujitsu</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem ><Link to='/cfg' >Configuración</Link></NavItem>
      <NavItem><Link to='/websocket' >Equipos Online </Link>   </NavItem> 
    </Nav>
  </Navbar>
  );
 

  /*
export default class Cabecera extends Component {
   render() {
        return (
            
            <div class="header">
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                                <Link to='/inicio'><a class="navbar-brand" >POC Fujitsu</a></Link>
                                
                        </div>
                        <div class="collapse navbar-collapse" id="myNavbar">
                       
                        <Link to='/cfg'><a class="nav-link" >Configuración</a></Link>
                        <Link to='/websocket'>  <a class="nav-link" >Equipos Online</a></Link>
                            
                        <ul class="nav navbar-nav">
        <li><a class="nav-link" routerLink="/cfg">Configuración</a></li>
        <li><a class="nav-link" routerLink="/websock">Equipos Online</a></li>
      </ul>
                        
                        </div>
                    </div>    
                </nav>

                <div class="table-wrapper">
                    <div class="table-title">
                        <div class="row">
                            <div class="col-sm-12">
                                <h2>POC Fujitsu con dispositivos financieros (React-Redux)</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
*/
