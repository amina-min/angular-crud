import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: Student = new Student();

  constructor(private http: HttpClient) { }

  Students: any;
  isShowTable: boolean = false;
  isSave: boolean = true;

  ngOnInit(): void {
    this.loadStudentData();
  }


  loadStudentData() {
    this.http.get('http://localhost:8080/studentApi/show').subscribe(student => {
      console.log(student);
      this.Students = student;
    })

  }

  saveStudent() {
    const headers = { 'content-Type': 'application/json' };
    this.http.post("http://localhost:8080/studentApi/student", JSON.stringify(this.student), { headers: headers })
      .subscribe(data => {
        console.log(data);

      })
  }

  updateStudent() {
    console.log("Update student");
    this.isSave = true;
    const headers = { 'content-Type': 'application/json' };
    this.http.put("http://localhost:8080/studentApi/student", JSON.stringify(this.student), { headers: headers })
      .subscribe(data => {
        console.log(data);

      })
  }


  toggleStudentList() {
    console.log("Heloooooo");
    this.isShowTable = !this.isShowTable;
    console.log(this.isShowTable);
  }

  editStudent(student: any) {
    console.log("Edit button");
    this.student = student;
    this.isSave = false;
  }


  deleteStudent(student:any) {
    console.log("delete button");
    const headers = { 'content-Type': 'application/json' };
    this.http.delete("http://localhost:8080/studentApi/student?id="+student.id,{ headers: headers })
      .subscribe(data => {
        console.log(data);

      })












<button (click)="toggleProductList()">Show Product List</button>
        <table *ngIf="isShowTable" border="1" cellpadding="1" cellspacing="0" width=75%>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>QUANTITY</th>
              <th>PRICE</th>
              <th>REMARKS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let product of Products; index as i;">
              <td>{{product.id}}</td>
              <td>{{product.name}}</td>
              <td>{{product.quantity}}</td>
              <td>{{product.price}}</td>
              <td>{{product.remarks}}</td>

              <td>
                <button (click)="editProduct(product)">Edit</button>
                <button (click)="deleteProduct(product)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>






 <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <p>Products Form!</p>
              <form (ngSubmit)="isSave? saveProduct():updateProduct()">
                <div class="form-group">
                  <label for="name">Product Name</label>
                  <input type="text" class="form-control" [(ngModel)]="product.product_name" name="name" id="name" />
                </div>
                <div class="form-group">
                  <label for="name">Quantity</label>
                  <input type="text" class="form-control" [(ngModel)]="product.quantity" name="quantity" id="quantity" />
                </div>
                <div class="form-group">
                  <label for="name">Price</label>
                  <input type="text" class="form-control" [(ngModel)]="product.price" name="price" id="price" />
                </div>
                <div class="form-group">
                  <label for="name">Remarks</label>
                  <input type="text" class="form-control" [(ngModel)]="product.remarks" name="remarks" id="remarks" />
                </div>
                <div>
                  <input type="submit" class="btn btn-primary mt-2" value="{{isSave? 'Save':'Update'}}" />
                </div>
                

              </form>
            </div>
          </div>
        </div>
















import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product: Product = new Product();

  constructor(private http: HttpClient) { }

  Products: any;
  isShowTable: boolean = false;
  isSave: boolean = true;

  ngOnInit(): void {
    this.loadProduct();
  }


  loadProduct() {
    this.http.get('http://localhost:8080/product/getAll').subscribe(product => {
      console.log(product);
      this.Products = product;
    })

  }

  saveProduct() {
    const headers = { 'content-Type': 'application/json' };
    this.http.post("http://localhost:8080/product/save", JSON.stringify(this.product), { headers: headers })
      .subscribe(data => {
        console.log(data);

      })
  }

  updateProduct() {
    console.log("Update product");
    this.isSave = true;
    const headers = { 'content-Type': 'application/json' };
    this.http.put("http://localhost:8080/product/update", JSON.stringify(this.product), { headers: headers })
      .subscribe(data => {
        console.log(data);

      })
  }


  toggleProductList() {
    console.log("Heloooooo");
    this.isShowTable = !this.isShowTable;
    console.log(this.isShowTable);
  }

  editProduct(product: any) {
    console.log("Edit button");
    this.product = product;
    this.isSave = false;
  }


  deleteProduct(product:any) {
    console.log("delete button");
    const headers = { 'content-Type': 'application/json' };
    this.http.delete("http://localhost:8080/product/delete?id="+product.id,{ headers: headers })
      .subscribe(data => {
        console.log(data);

      })
  }


}








  }


}
