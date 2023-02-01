
const parser = new DOMParser();
const  xmlString =`
<list>
    <student>
        <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
<!--    <student>-->
<!--        <name lang="ru">-->
<!--            <first>Петр</first>-->
<!--            <second>Петров</second>-->
<!--        </name>-->
<!--        <age>58</age>-->
<!--        <prof>driver</prof>-->
<!--    </student>-->
</list>`;

 const xmlDom = parser.parseFromString(xmlString,'text/xml');
const listNode = xmlDom.querySelector("list");
const studentNode  = listNode.querySelector("student");
const nameNode = studentNode.querySelector("name");
const firstNode = nameNode.querySelector("first");
const secondNode = nameNode.querySelector("second");
const ageNode = studentNode.querySelector("age");
const profNode = studentNode.querySelector("prof");
const langAtr = nameNode.getAttribute('lang');

const result = {
    name: firstNode+secondNode,
    age: ageNode,
    prof: profNode,
    lang: langAtr
}
console.log(parser)
//console.log(result)