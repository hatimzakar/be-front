import { Component, OnInit } from '@angular/core';
import { PersonServiceService} from '../person-service.service';
import {Person} from '../person';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import{Router} from'@angular/router';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
   persons:Person[];
   person:Person= new Person();
   updateflag:boolean=false;
   UpdateId:number;
    

   closeResult = '';
  

  constructor( private router:Router,private modalService: NgbModal,private personService:PersonServiceService) {}

  ngOnInit(): void {

    this.personService.getPersons().subscribe((data:Person[])=>{console.log(data);this.persons=data;
    });
  }

  
open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  add()
  {
    this.personService.add(this.person).subscribe(data=>{console.log(data);},error=>console.log(error));
  }

  onSubmit()
  {
    
    //console.log(this.person);
   // this.add();
    if(this.updateflag==true)
    {
      
      this.personService.update(this.UpdateId,this.person).subscribe(error=>console.log(error));
      console.log("update called well");
      this.router.navigate(['Persons']);
    }

    else
    {
      console.log(this.person);
      this.add();
      console.log("add called well");
      this.router.navigate(['Persons']);
      
    }

    
    this.person.firstname="";
    this.person.lastname="";
    this.person.email="";
    this.person.phone="";
  }

  update(id:number,content)
  {

    this.open(content);
    this.personService.getByid(id).subscribe(data=>{this.person=data;},error=>console.log(error));
    this.updateflag=true;
    this.UpdateId=id;


  }

  delete(id:number)
  {

    
    //this.personService.getByid(id).subscribe(data=>{this.person=data;},error=>console.log(error));
    console.log("delete called");
    this.personService.delete(id).subscribe(data=>{this.router.navigate(['Persons']);});
    
    

  }
 
 
}
