import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() submitted: EventEmitter<string> = new EventEmitter<string>(); 
  inputText: string = "";

  onInput(event: Event) {
    this.inputText = (event.target as HTMLInputElement).value;
  }

  onFormSubmit(event: Event) {
    event.preventDefault();
    this.submitted.emit(this.inputText);
  }
}
