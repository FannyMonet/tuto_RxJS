import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

export default (addItem:any) => {
    Observable.create((observer:any) => {
        observer.next('Hey guys!')
    })
    .map((val:any) => val.toUpperCase())
    .subscribe((x:any) => addItem(x));
}