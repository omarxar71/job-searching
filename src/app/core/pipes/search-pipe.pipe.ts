import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe',
  standalone: true
})
export class SearchPipePipe implements PipeTransform {

  transform(jobs:any[] , searchTerm:string) {
    return jobs.filter((e)=>e.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
