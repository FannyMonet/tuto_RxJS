import { from } from "rxjs/Observable/from";
import "rxjs/add/operator/pluck";

export default (addItem:any) => {
    from([
        { first: 'Gary', last: 'Simon', age: '34'},
        { first: 'Jane', last: 'Simon', age: '34'},
        { first: 'John', last: 'Simon', age: '34'},
    ])
    .pluck('first')
    .subscribe((x:any) => addItem(x));
}