import { Component, OnInit } from '@angular/core';
import{Products} from '../products'
import{ProductsService} from '../products.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import{Router} from'@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:Products[];
  product:Products=new Products();
   closeResult = '';
   updateflag:boolean=false;
   UpdateId:number;

  constructor(private  productService:ProductsService,private modalService: NgbModal,private router:Router) 
  {
   
   }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data:Products[])=>{console.log(data);this.products=data;
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
    this.productService.add(this.product).subscribe(data=>{console.log(data);},error=>console.log(error));
  }

  onSubmit()
  {
    
    
    if(this.updateflag==true)
    {
      
      this.productService.update(this.UpdateId,this.product).subscribe(error=>console.log(error));
      console.log("update called well");
      //this.router.navigate(['Persons']);
    }

    else
    {
     
      this.add();
      console.log("add called well");
      this.router.navigate(['Products']);
    }

   
   // this.product.name="";
    //this.product.color="";
    //this.product.price="";
    
  }

  update(id:number,content)
  {

    this.open(content);
    this.productService.getByid(id).subscribe(data=>{this.product=data;},error=>console.log(error));
    this.updateflag=true;
    this.UpdateId=id;


  }

  delete(id:number)
  {

    
    //this.personService.getByid(id).subscribe(data=>{this.person=data;},error=>console.log(error));
    console.log("delete called");
    this.productService.delete(id).subscribe(data=>{this.router.navigate(['home']);});
    
    

  }


}
