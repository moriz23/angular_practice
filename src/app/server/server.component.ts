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
  serverName = ''

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 5000);
  }

  getServerStatus() {
    return this.serverStatus
  }

  onCreateServer() {
    this.serverCreationStatus = "The Server " + this.serverName + " Was Created"
  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}