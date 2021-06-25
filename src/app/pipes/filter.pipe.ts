import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPorLetra'
})
export class FilterPipe implements PipeTransform {

 transform(items: any[], value: string) : any{
   if (items.length === 0 || !items) {
     return
   }

   return items.filter(item => item.nombre.toLowerCase().indexOf(value.toLocaleLowerCase())>=0);

 }

}
