import { Component, OnInit, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ShoppingService {
  cartDetails: Array<any> = [];
  buttonEnable: Array<any> = [];
  url = "https://api.myjson.com/bins/qzuzi";
  constructor(private http: HttpClient) {}
  getMethod() {
    return this.http.get(this.url);
  }
}
