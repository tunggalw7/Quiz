// import { Pipe, PipeTransform } from "@angular/core";

// @Pipe({
//   name: "tableFilter"
// })
// export class TableFilterPipe implements PipeTransform {
//   // transform(list: any[], filters: Object) {
//   //   debugger;
//   //   const keys = Object.keys(filters).filter(key => filters[key]);
//   //   const filterUser = user => keys.every(key => user[key] === filters[key]);

//   //   return keys.length ? list.filter(filterUser) : list;
//   // }
//   transform(value: any, param: any): any {
//     debugger;
//     if (!param.filters) {
//       return value;
//     }
//     return value.filter(val => {
//       // if (filters.filter == '')
//       let rVal =
//         val.name.toLocaleLowerCase().includes(param.filters) ||
//         val.gender.toLocaleLowerCase().includes(param.filters) ||
//         val.country.toLocaleLowerCase().includes(param.filters);
//       return rVal;
//     });
//   }
// }

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myfilter',
    pure: false
})
export class MyFilterPipe implements PipeTransform {
    transform(value: any, param: any, filterBy: string): any {
        if (!param) {
          return value;
        }
        return value.filter((val:any) => {
            let values = "";

            if (!filterBy){
                values =
                    val.id.toLocaleLowerCase().includes(param) ||
                    val.name.toLocaleLowerCase().includes(param) ||
                    val.reporter.toLocaleLowerCase().includes(param) ||
                    val.createDate.toLocaleLowerCase().includes(param) || 
                    val.status.toLocaleLowerCase().includes(param) || 
                    val.activity.toLocaleLowerCase().includes(param) || 
                    val.product.toLocaleLowerCase().includes(param) ;
            } else {
                switch(filterBy) { 
                    case "ticket": { 
                        values = val.name.toLocaleLowerCase().includes(param);
                        break; 
                    } 
                    case "reporter": { 
                        values = val.reporter.toLocaleLowerCase().includes(param);
                        break; 
                    } 
                    case "date": { 
                        values = val.createDate.toLocaleLowerCase().includes(param);
                        break; 
                    } 
                    case "status": { 
                        values = val.status.toLocaleLowerCase().includes(param);
                        break; 
                    } 
                    default: { 
                        //statements; 
                        break; 
                    } 
                } 
            }

          return values;
        });
    }
}