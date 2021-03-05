import { Component, OnInit , EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styles: [
  ]
})
export class CockpitComponent implements OnInit {

  // Template:{serverName:string,serverContent:string}

  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  // @Output() serverCreated = new EventEmitter<{Template}>();
  // @Output('bpCreated') blueprintCreated = new EventEmitter<{Template}>();
  
  // newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput:HTMLInputElement) {
    // console.log(nameInput.value)
    this.serverCreated.emit({
    // serverName:this.newServerName,
    serverName: nameInput.value,
    serverContent:this.newServerContent
    });
    // this.serverCreated.emit({Template:{serverName:this.newServerName,serverContent:this.newServerContent}});
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
   this.blueprintCreated.emit({
    //  serverName:this.newServerName,
     serverName:nameInput.value,
     serverContent:this.newServerContent});
  //  this.blueprintCreated.emit({Template:{serverName:this.newServerName,serverContent:this.newServerContent}});
  }

}
