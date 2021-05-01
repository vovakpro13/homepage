//знайти елемент
const getEl = (id) => (document.getElementById(id));

//додати елемент в батька
const add = (fatherId, child) => document.getElementById(fatherId).appendChild(child);


//робота з утворенням та рендером масиву елементів
function listsService(lists){
    this.lists = lists;

    this.createList = ({tag:tagName, classList, attributes, data, htmlCreator}) => {
        return data.map((item) => {
            const tag = document.createElement(tagName);
            tag.classList.add(...classList || '');
            attributes && attributes.forEach(a => tag.setAttribute(a.attr, a.value))
            tag.innerHTML = htmlCreator(item);
            return tag;
        })
    };

    this.renderAllLists = () =>{
        this.lists.forEach(list => {
            this.createList(list.listParameters).forEach(li => add(list.fatherId, li));
        })
    }
}

const listService = new listsService(lists);

//функція для утворення  блоку
const createBlock = (blockData) => {
    const block = document.createElement(blockData.tag);
    block.classList.add(...blockData.tagClasses);
    blockData.attributes && blockData.attributes.forEach(a => block.setAttribute(a.attr, a.value))
    block.innerHTML = blockData.htmlCreator(blockData)
    return block;
};


//рендер...

listService.renderAllLists()

detailBlocks.forEach(block =>{
    //створили блок
    const createdBlock = createBlock(block.detailBlock)
    //додали блок на сторінку
    add(block.fatherId, createdBlock);
    //додали блоку всі його дочірні елементи
    listService.createList(block.detailBlock.listItem).map(item => add(block.detailBlock.listId, item))
})

