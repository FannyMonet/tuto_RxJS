import { AsyncSubject } from "rxjs/AsyncSubject";

export default (addItem:any) => {
    var subject = new AsyncSubject()

    subject.subscribe(
        data => addItem('Observer 1: '+ data),
        () => addItem('Observer 1 Completed')
    )

    var i = 1;
    setInterval(() => subject.next(i++), 100);

    setTimeout(() => {
        var observer2 = subject.subscribe(
            data => addItem('Observer 2: '+ data)
        )
        subject.complete();
    }, 500);
}
