$(document).ready(function() {

let members;
let selectedMemberIndex = 0;
let modalContainer = document.querySelector('.modal-content');
let key = 0;

function displayModalForUser(member){
let modalHTML;

  modalHTML += '<div class"surround">';
  modalHTML += '<li class="modalLine">';
  modalHTML += '<img class="picModal" src="' + member.picture.large + '"></a></li>';
  modalHTML += '<li class="picModal">';
  modalHTML += '<p class="center">' + member.name.first + " " + member.name.last + '</li>';
  modalHTML += '<li class="picModal">';
  modalHTML += '<p>' + member.email + '</li>';
  modalHTML += '<p class="center">' + member.location.city + '</li>';
  modalHTML += '<p class="center">' + member.phone + '</li>';
  modalHTML += '<p class="center">' + member.location.street + '</li>';
  modalHTML += '<p class="center">' + member.location.city + '</li>';
  modalHTML += '<p class="center">' + member.location.state + '</li>';
  modalHTML += '<p class="center">' + member.location.postcode + '</li>';
  modalHTML += '<p class="center">' + '<p>Birthday</p>' + member.dob + '</li>';
  modalHTML += '</div>';
  modalContainer.innerHTML = modalHTML;
}
$('.modal').hide();//hide the modal on page load


  $(function() {
    var randomuserAPI = 'https://randomuser.me/api/?results=12';
    var modalAPI = 'https://randomuser.me/api/';

    function displayPhotos(data) {
      members = data.results;


      var photoHTML = '<ul id="box">';
      var modalHTML = '<ul class="modal-content">';
      $.each(members, function(i, photo) {
        photoHTML += `<div class="surround" key="${key}">`;
        photoHTML += '<li class="line">';
        photoHTML += '<img src="' + photo.picture.large + '"></a></li>';
        photoHTML += '<li class="pic">';
        photoHTML += '<p class="caps">' + photo.name.first + " " + photo.name.last + '</li>';
        photoHTML += '<li class="pic">';
        photoHTML += '<p>' + photo.email + '</li>';
        photoHTML += '<li class="pic">';
        photoHTML += '<p class="location">' + photo.location.city + '</li>';
        photoHTML += '</div>';
        key ++;
      });

      photoHTML += '</ul>';
      $('#photos').append(photoHTML);

      $('.surround').on('click', (e) => {
        let memberIndex = e.target.getAttribute('key');
        displayModalForUser(members[memberIndex]);
        $('.modal').show();
      });

}

    $.getJSON(randomuserAPI, displayPhotos);
/*    $(function() {
      var modalAPI = 'https://randomuser.me/api/';


      function displayPhotos(data) {
        var modalHTML = '<ul class="modal-content">';

        $.each(data.results, function(i, photo) {

          modalHTML += '<div class"mod">';
          modalHTML += '<li class="modalLine">';
          modalHTML += '<a href="' + photo.picture.large + ' " class="picModal">';
          modalHTML += '<img class="picModal" src="' + photo.picture.large + '"></a></li>';
          modalHTML += '<li class="picModal">';

          modalHTML += '<p class="center">' + photo.name.first + " " + photo.name.last + '</li>';
          modalHTML += '<li class="picModal">';
          modalHTML += '<p>' + photo.email + '</li>';
          modalHTML += '<p class="center">' + photo.location.city + '</li>';
          modalHTML += '<p class="center">' + photo.phone + '</li>';
          modalHTML += '<p class="center">' + photo.location.street + '</li>';
          modalHTML += '<p class="center">' + photo.location.city + '</li>';
          modalHTML += '<p class="center">' + photo.location.state + '</li>';
          modalHTML += '<p class="center">' + photo.location.postcode + '</li>';

          modalHTML += '<p class="center">' + '<p>Birthday</p>' + photo.dob + '</li>';




          modalHTML += '</div>';

        });


        modalHTML += '</ul>';
        $('.modal-content').append(modalHTML);


      }

      $.getJSON(modalAPI, displayPhotos);
    });
*/


  });
});
