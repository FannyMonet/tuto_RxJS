import behaviorSubjectExample from './behaviorSubject'

behaviorSubjectExample(addItem);

function addItem(value:any) {
    const node = document.createElement('li');
    const textNode = document.createTextNode(value);
    node.appendChild(textNode);
    document.getElementById('output').appendChild(node);
}