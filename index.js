function addingEventListener() {
    const button = document.getElementById('button');
  
    function buttonClick() {
      alert('Button clicked!');
    }
  
    button.addEventListener('click', buttonClick);
  }
  
  addingEventListener();
  