import { Observable } from 'rxjs-compat/Observable';
import 'rxjs/add/operator/share';

export default (addItem:any) => {
    var observable = Observable.create((observer:any) => {
        try {
            observer.next('Hey guys!')
            observer.next('How are you?')
            setInterval(() => {
                observer.next('I am good')
            }, 2000)
        } catch (err) {
            observer.error(err)
        }
    }).share();
    
    var subscription = observable.subscribe(
        (x:any) => addItem(x),
        (error:any) => addItem(error),
        () => addItem('Completed')
    );
    
    setTimeout(() => {
        var subscription2 = observable.subscribe(
            (x:any) => addItem('Subscriber 2: '+x)
        );
    }, 1000);
}