document.addEventListener('DOMContentLoaded', function() {
    var clientRows = document.getElementsByClassName('client-row');

    for (var i = 0; i < clientRows.length; i++) {
      clientRows[i].addEventListener('click', function() {
        var clientData = this.nextElementSibling;
        clientData.style.display = clientData.style.display === 'none' ? 'table-row' : 'none';
      });
    }
  });

  document.querySelectorAll('.edit-btn').forEach(function(button) {
    button.addEventListener('click', function() {
      alert('Edit button clicked');
      // Perform edit operation here
    });
  });
  
  document.querySelectorAll('.delete-btn').forEach(function(button) {
    button.addEventListener('click', function() {
      alert('Delete button clicked');
      // Perform delete operation here
    });
  });

  
  
  
  
  
  
  