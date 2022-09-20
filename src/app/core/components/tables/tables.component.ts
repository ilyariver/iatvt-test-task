import { Component, DoCheck, OnInit } from '@angular/core';
import { Data } from 'types/data';
import { TablesService } from '../../services/tables.service'

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit, DoCheck {
  saleList?: any;
  errorMessage: string = '';

  constructor(
    private tablesService: TablesService
  ) {
    // this.saleList = this.tablesService.getSaleItems();
  }

  ngOnInit(): void {
    debugger
    console.log(';;;;;;')
    this.tablesService.getSaleItems()
      .subscribe(data => {
        this.saleList = data, (error: string) => this.errorMessage = error
      })
  }

  ngDoCheck(): void {
    console.log('saleList', this.saleList)
  }

}
