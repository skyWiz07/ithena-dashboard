import { Component, OnInit } from '@angular/core';
import { MrrService } from 'src/app/services/mrr.service';
import { MtrService } from 'src/app/services/mtr.service';
import { ViewsService } from 'src/app/services/views.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public barChartDataset: any = [];
  public bubbleChartDataset: any = [];
  public doughnutChartDataset: any = [];

  constructor(
    private mtrService: MtrService,
    private mrrService: MrrService,
    private viewsService: ViewsService
  ) {}

  ngOnInit() {
    this.loadDashboardData();
  }

  private loadDashboardData() {
    //TODO: send some date params
    this.getMTRData();
    this.getMRRDatabyCountry();
    this.getPageViews();
  }

  public dateRangeChangeHandler() {
    this.loadDashboardData();
  }

  private getMRRData() {}

  private getMTRData(params?: any) {
    this.mtrService.getMTRData(params).subscribe((data) => {
      this.barChartDataset = data;
    });
  }

  private getPageViews(params?: any) {
    this.viewsService.getPageViewsData(params).subscribe((data) => {
      this.doughnutChartDataset = data;
    });
  }

  private getMRRDatabyCountry(params?: any) {
    this.mrrService.getMRRStatsByCountryData(params).subscribe((data) => {
      this.bubbleChartDataset = data;
    });
  }
}
