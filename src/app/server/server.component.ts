import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html' 
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
  serverCreationStatus = "No server was created"
  allowNewServer = false;
  allowButton = false;
  clickedUsername=''
  serverName = ''
  username=''
  serverCreated = false

  // constructor() {
  //   setTimeout(() => {
  //     this.allowNewServer = true
  //   }, 5000);
  // }

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online': 'offline';
  }

  getUserName() {
    this.clickedUsername = "Hello " + this.username
  }

  getServerStatus() {
    return this.serverStatus
  }

  onCreateServer() {
    this.serverCreationStatus = "The Server " + this.serverName + " Was Created"
    this.serverCreated = true
  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}