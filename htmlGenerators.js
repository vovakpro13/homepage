//блочні генератори html
const htmlDetailsBlock = ({blockId, label, listId}) =>
    (`
        <input type="checkbox" id="${blockId}">
        <label for="${blockId}" class="summary">${label}</label>
        <div>
            <ul id="${listId}"></ul>
        </div> 
    `);

const htmlAchievmentsBlock = ({title, listId}) => `<h3>${title}</h3><ol class="inverted" id="${listId}"> </ol>`;


const htmlRecentBlock = ({title, listId}) => {
    return `<h6>${title}</h6><div id="${listId}"> </div>`;
};

const htmlSimpleSectionBlock = ({title, listId}) => {
    return `
        <h3>${title}</h3>
        <p class="tags small" id="${listId}" ></p>`
};

//айтемові генератори html
const htmlEventItem = ({year, eventsHTML}) => {
    return (`
        <p style="margin-top: 10px"><b><em>${year}</em></b></p>
        <ul>${eventsHTML.map(event => `<li>${event}</li>`).join('')}</ul>
    `);
};

const htmlPublicationItem = ({year, eventsHTML}) => {
    return (`
        <div style="margin-top: 10px" >
            <div class="labels" style="height: 30px" >
                <a rel="external" class="label" ><b><em>${year}</em></b></a>
            </div>
            <ul>${eventsHTML.map(event => `<li>${event}</li>`).join('')}</ul>
        </div>
        
    `);
};

const htmlAchievmentsItem = ({textHTML}) => {
    return `<p><em>${textHTML}</em></p><br>`;
};

const htmlBackEventsItem = ({id, year, eventsHTML}) =>
    (`
    <input type="checkbox" id="${id}">
    <label for="${id}" class="summary">
        <div class="labels" style="height: 30px" >
            <a rel="external" class="label" ><b><em>${year}</em></b></a>
        </div>
    </label>
    <div>
      <ul>${eventsHTML.map(e => `<li>${e}</li>`).join('')}</ul>
    </div>
        
`);

const simpleReturn = (value) => value;
