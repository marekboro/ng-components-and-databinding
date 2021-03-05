import { Component, OnInit , EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';


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
  // newServerContent = '';
  @ViewChild('serverContentInput',{static:true}) serverContentInput :ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput:HTMLInputElement) {
    console.log(this.serverContentInput)
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value});
    };
    
  
  // onAddServer(nameInput:HTMLInputElement) {
  //   // console.log(nameInput.value)
  //   this.serverCreated.emit({
  //   // serverName:this.newServerName,
  //   serverName: nameInput.value,
  //   serverContent:this.newServerContent
  //   });
  //   // this.serverCreated.emit({Template:{serverName:this.newServerName,serverContent:this.newServerContent}});
  // }

  onAddBlueprint(nameInput:HTMLInputElement) {
   this.blueprintCreated.emit({
    //  serverName:this.newServerName,
     serverName:nameInput.value,
     serverContent:this.serverContentInput.nativeElement.value});
  //  this.blueprintCreated.emit({Template:{serverName:this.newServerName,serverContent:this.newServerContent}});
  }

}


/** 
   * @ViewChild('serverContentInput') serverContentInput: ElementRef; //! OLD !!!
   * 
   * @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;  //! NEW!!!!
   * 
   * The same change (add { static: true } as a second argument) needs to be applied to ALL usages of @ViewChild() (and also @ContentChild() which you'll learn about later) IF you plan on accessing the selected element inside of ngOnInit().

    If you DON'T access the selected element in ngOnInit (but anywhere else in your component), set static: false instead!

    If you're using Angular 9+, you only need to add { static: true } (if needed) but not { static: false }.
   * 
  */
