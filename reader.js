if ('NDEFReader' in window) {
  const reader = new NDEFReader();
  let timer;
  
  // Handle errors
  reader.onerror = (event) => {
    console.log(event);
  };
  
  // Handle successful scans
  reader.onreading = (event) => {
    console.log(event.message);
    
    alert("Food is fresh!");
    resetTimer();
  };
  
  // Start scanning when the button is clicked
  const scanButton = document.getElementById('scan-button');
  scanButton.addEventListener('click', async () => {
    try {
      await reader.scan();
      resetTimer();
    } catch (error) {
      console.log(error);
    }
  });
  
  // Start the timer when the page is loaded
  startTimer();
  
  // Reset the timer when the user interacts with the page
  document.addEventListener('mousemove', resetTimer);
  document.addEventListener('keypress', resetTimer);
  
  // Timer functions
  function startTimer() {
    timer = setTimeout(() => {
      alert("Food is Not fresh!");
    }, 5000);
  }
  
  function resetTimer() {
    clearTimeout(timer);
    startTimer();
  }
} else {
  console.log("NFC not supported by the browser");
   alert("NFC not supported by the browser");
}