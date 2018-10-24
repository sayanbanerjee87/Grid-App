import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { FetchDataService } from './fetch.service';
import { DataModel } from './../../models/data.model';


@Component({
	templateUrl: './home.html',
	styleUrls: ['./home.scss'],
	providers: [FetchDataService]
})

export class HomeComponent implements OnInit{

	gridData: MatTableDataSource<DataModel>;
	displayedColumns: string[];

	@ViewChild(MatPaginator) paginator: MatPaginator;
  	@ViewChild(MatSort) sort: MatSort;

	constructor(private ftch: FetchDataService){

	}

	ngOnInit(){
		this.ftch.getData()
		.subscribe(res => {
			this.gridData = new MatTableDataSource(res);
			this.displayedColumns = Object.keys(res[0]);
			this.gridData.paginator = this.paginator;
    		this.gridData.sort = this.sort;
		})
	}
}