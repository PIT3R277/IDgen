function getParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param) || '';
}

window.onload = () => {
  document.getElementById('photo').src = getParam('image');
  document.getElementById('name').textContent = getParam('name');
  document.getElementById('surname').textContent = getParam('surname');
  document.getElementById('birthday').textContent = getParam('birthday');
  document.getElementById('sex').textContent = getParam('sex') === 'm' ? 'Mężczyzna' : 'Kobieta';
  document.getElementById('nationality').textContent = getParam('nationality');
  document.getElementById('familyName').textContent = getParam('familyName');
  document.getElementById('fathersFamilyName').textContent = getParam('fathersFamilyName');
  document.getElementById('mothersFamilyName').textContent = getParam('mothersFamilyName');
  document.getElementById('birthPlace').textContent = getParam('birthPlace');
  document.getElementById('countryOfBirth').textContent = getParam('countryOfBirth');
  document.getElementById('adress1').textContent = getParam('adress1');
  document.getElementById('adress2').textContent = getParam('adress2');
  document.getElementById('city').textContent = getParam('city');
};
