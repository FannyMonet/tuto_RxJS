import observableExample from './observable'
import observable from './observable';

observable(addItem);

function addItem(value:any) {
    const node = document.createElement('li');
    const textNode = document.createTextNode(value);
    node.appendChild(textNode);
    document.getElementById('output').appendChild(node);
}