let bundeslaender = [];

async function render(){
    await getData();
    for(let i = 0; i< bundeslaender.length; i++){
        document.getElementById('wrapper').innerHTML += `
        <a>
            <h2>Titel</h2>
            <span>Population</span>
        </a>
        `;
    }

}

async function getData(){
    let url = "bundesland.json"
    let response = await fetch(url);
    bundeslaender = response.json();
}