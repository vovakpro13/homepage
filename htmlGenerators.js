//блочні генератори html
const htmlDetailsBlock = ({blockId, label ,listId}) =>
(`
    <input type="checkbox" id="${blockId}">
    <label for="${blockId}" class="summary">${label}</label>
    <div><ul id="${listId}"></ul></div>     
`);

const htmlAchievmentsBlock = ({title ,listId}) =>{
    return `<h3>${title}</h3><ol class="inverted" id="${listId}"> </ol>`;
}

const htmlSimpleSectionBlock = ({title,listId}) =>{
    return `
        <h3>${title}</h3>
        <p class="tags small" id="${listId}" ></p>`
}

//айтемові генератори html
const htmlAchievmentsItem = ({textHTML}) =>{
    return `<p><em>${textHTML}</em></p><br>`;
}

const htmlHistoryItem = ({year, eventsHTML}) =>{
    return (`
        <p><b><em>${year}</em></b></p>
        <ul>${eventsHTML.map(event => `<li>${event}</li>`).join('')}</ul>
    `);
}

const htmlBackEventsItem = ({id, year, eventsHTML}) =>
    (`
    <input type="checkbox" id="${id}">
    <label for="${id}" class="summary">${year}</label>
    <div>
      <ul>${eventsHTML.map(e => `<li>${e}</li>`).join('')}</ul>
    </div>
        
`);
