import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Category } from '../shared/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  
  //wywołuje zapytanie do api w celu pobrania wszystkich kategori
  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.baseApiUrl + '/api/categories');
  }
}
