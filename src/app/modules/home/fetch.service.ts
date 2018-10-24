import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,tap,catchError} from 'rxjs/operators';
import { DataModel } from './../../models/data.model';

@Injectable()
export class FetchDataService{
	url: string = ' http://jsonplaceholder.typicode.com/posts ';
	constructor(private http: HttpClient){

	}

	getData(): Observable<DataModel[]>{
		return this.http.get<DataModel[]>(this.url);
	}
}
