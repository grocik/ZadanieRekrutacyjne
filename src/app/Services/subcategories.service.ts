import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { SubCategory } from '../shared/models/subCategory.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriesService {

  subcategory: SubCategory = {subCategoryId: '00000000-0000-0000-0000-000000000000',subCategoryName: ''}
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  
  //wywołuje zapytanie do api w celu pobrania kategori
  getCategories(): Observable<SubCategory[]>{
    return this.http.get<SubCategory[]>(this.baseApiUrl + '/api/subcategories');
  }

}
