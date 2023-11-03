export interface LineChartData {
    name: string;
    series: DataPoint[];
  }
  
export interface DataPoint {
    value: number;
    name: string;
}