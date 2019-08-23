import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoArray=[];
  todo;
  title="todo-app";
  // todoForm: new FormGroup()


   addTodo(value){
     
    if(value!==""){
     this.todoArray.push(value)
    //console.log(this.todos) 
  }else{
    alert('Field required **')
  }
    
  }

  /*delete item*/
  deleteItem(todo){
  	for(let i=0 ;i<= this.todoArray.length ;i++){
  		if(todo== this.todoArray[i]){
        this.todoArray.splice(i,1);
  		}
  	}
  }

  todoSubmit(value:any){
    if(value!==""){
   this.todoArray.push(value.todo)
    //this.todoForm.reset()
   }else{
     alert('Field required **')
   }
  }

}
