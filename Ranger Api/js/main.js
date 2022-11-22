// Function to get our Ranger data
const getData = async () => {
    let response = await axios.get(`https://my-json-server.typicode.com/CodingTemple/Power-Rangers-API-Json/rangers`)
    console.log(response.data)
    return response.data
}

// create Constants to hold DOM Elements
const DOM_Elements = {
    ranger_list: '.ranger-list'
}

// Creation of the Ranger List HTML
// Creation of the Ranger List HTML
const create_list = (id, name, color, season) => {
    const html = `<div class="card mt-3 mb-3" style="width: 18rem;">
  <ul class="list-group list-group-flush" id=${id}>
    <li class="list-group-item">${name}</li>
    <li class="list-group-item">${color}</li>    
    <li class="list-group-item">${season}</li>
  </ul>
</div>`;
    document.querySelector(DOM_Elements.ranger_list).insertAdjacentHTML('beforeend', html)
}

// Function to Load Data and display HTML 

const load_data = async () => {
    const rangers = await getData();

    rangers.forEach(element => create_list(element.id, element.name, element.color, element.season))
}

const clear_data = () => {
    document.querySelector(DOM_Elements.ranger_list).innerHTML = '';
}