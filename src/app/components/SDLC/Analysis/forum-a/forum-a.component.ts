import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-forum-a',
  templateUrl: './forum-a.component.html',
  styleUrls: ['./forum-a.component.scss']
})
export class ForumAComponent implements OnInit {

  
  titulo:string | undefined;
  comentarios:string[] = [""];
  coment = new FormControl('');
  title = new FormControl('');

  constructor() {
    this.titulo = "";
  }

  setComment(){
    this.comentarios.push(this.coment.value);
    this.coment.setValue('');
  }

  setTitle(){
    this.titulo = this.title.value;
  }

  ngOnInit(): void {
  }

}
