function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = '';
      mapLink.href = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12279.530971673405!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1663892730360!5m2!1sen!2sus`;
      mapLink.innerHTML = `<iframe src="https://maps.google.com/maps?q=${latitude}, ${longitude}&z=15&output=embed" width="360" height="270" frameborder="0" style="border:0"></iframe>`;
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  
  document.querySelector('#find-me').addEventListener('click', geoFindMe);


//   <button id="find-me">Show my location</button><br />
//   <p id="status"></p>
//   <a id="map-link" target="_blank"></a>