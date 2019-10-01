import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { interval } from "rxjs/Observable/interval";
import "rxjs/add/operator/skipUntil";

export default (addItem:any) => {
    var observable1 = Observable.create((data:any) => {
        var i = 1
        setInterval(() => {
            data.next(i++)
        }, 1000)
    })
    
    var observable2 = new Subject;
    
    setTimeout(() => {
        observable2.next('Hey!')
    }, 3000)
    
    var newObs = observable1.skipUntil(observable2)
    
    newObs.subscribe((x:any) => addItem(x));
}