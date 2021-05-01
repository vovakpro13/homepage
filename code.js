//знайти елемент
const getEl = (id) => (document.getElementById(id));

//додати елемент в батька
const add = (fatherId, child) => document.getElementById(fatherId).appendChild(child);


//функція утворює масив node-елементів з масиву даних
const createList = ({tag: tagName, classList, attributes, data, htmlCreator}) => {
    return data.map((item) => {
        const tag = document.createElement(tagName);
        tag.classList.add(...classList || '');
        attributes && attributes.forEach(a => tag.setAttribute(a.attr, a.value))
        tag.innerHTML = htmlCreator(item);
        return tag;
    })
};

//функція для утворення  блоку на основі html, який вертає функція blockData.htmlCreator
const createBlock = (blockData) => {
    const block = document.createElement(blockData.tag);
    block.classList.add(...blockData.tagClasses);
    blockData.attributes && blockData.attributes.forEach(a => block.setAttribute(a.attr, a.value))
    block.innerHTML = blockData.htmlCreator(blockData)
    return block;
};


//рендер...
detailBlocks.forEach(block => {
    //створили блок
    const createdBlock = createBlock(block.detailBlock)
    //додали блок на сторінку
    add(block.fatherId, createdBlock);
    //додали блоку всі його дочірні елементи
    createList(block.detailBlock.listItem).map(item => add(block.detailBlock.listId, item))
})

