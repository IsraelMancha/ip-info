const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '261d6b805fmsh8f58e3a5e2669c3p1704b0jsn27c7e4002cfb',
		'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com'
	}
};
const fetchIpInfo = ip =>{
  return fetch(`https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?ip=${ip}&apikey=873dbe322aea47f89dcf729dcc8f60e8`,OPTIONS)
  .then(res => res.json())
  .catch(err => console.error(err))
}

const $form = document.querySelector('#form-ip');
const $input = document.querySelector('#user-ip');
const $submit = document.querySelector('#submit');
const $results = document.querySelector('#results');

$form.addEventListener('submit',async (event) => {
  event.preventDefault();
  const {value} = $input;
  if(!value) swal("Hey!", "Todos los campos son obligatorios", "error");

  $submit.setAttribute('disbled','');
  $submit.setAttribute('aria-busy','true')

  const ipInfo = await fetchIpInfo(value);
  if(ipInfo){
    $results.innerHTML = JSON.stringify(ipInfo, null, 2);
  }

  $submit.removeAttribute('disbled');
  $submit.removeAttribute('aria-busy')
})










