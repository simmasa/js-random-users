const gallery = document.getElementById('gallery')

const btn = document.getElementById('getter')
btn.addEventListener('click',getUser)

let userCount=0;

function getUser () {
    const data = axios.get('https://randomuser.me/api/')
                 .then(function (response) {
                    userCount++;
                 console.group('user '+userCount);
                 console.log(response.data.results[0].name);
                 console.log(response.data.results[0].location);
                 console.log(response.data.results[0].dob);
                 console.groupEnd();
                 createCard(response.data.results[0]);
                 })
                 .catch(function (error) {
                 console.log(error);
                 })
}

function createCard(data) {

const div = document.createElement('div');
div.classList.add('col-lg-4','text-center','my-3');
gallery.appendChild(div);

const img = document.createElement('img');
img.classList.add('bd-placeholder-img','rounded-circle');
img.width="140";
img.height="140";
img.src=data.picture.large;
div.appendChild(img);

const name = document.createElement('h2');
name.className = "fw-normal";
name.innerHTML = data.name.first + " " + data.name.last;
div.appendChild(name);

const address = document.createElement('p');
address.innerHTML = data.location.city +", "+data.location.country;
div.appendChild(address);

}
