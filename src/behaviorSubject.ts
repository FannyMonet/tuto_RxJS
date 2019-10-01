import { BehaviorSubject } from "rxjs/BehaviorSubject";

export default (addItem:any) => {
    var subject = new BehaviorSubject('First')
    
    subject.subscribe(
        data => addItem('Observer 1: '+ data),
        err => addItem(err),
        () => addItem('Observer 1 Completed')
    )
    
    subject.next('The first thing has been sent')
    subject.next('...Observer 2 is about to subscribe...')
    
    var observer2 = subject.subscribe(
        data => addItem('Observer 2: '+ data)
    )
    
    subject.next('The second thing has been sent')
    subject.next('A third thing has been sent')
    
    observer2.unsubscribe();
    
    subject.next('A final thing has been sent')
}
