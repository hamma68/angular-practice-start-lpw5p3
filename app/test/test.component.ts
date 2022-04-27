import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  constructor(private http: HttpClient) {}
  url = 'https://jsonplaceholder.typicode.com/todos';
  data: any = [];
  ngOnInit() {
    this.http.get(this.url).subscribe((data) => {
      this.data = data;
      console.log('data', data);
    });
  }
}
