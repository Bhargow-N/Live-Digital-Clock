function updateClock() {
    const now = new Date();
  
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = timeString;
  
    const options = { month: 'long', day: 'numeric', year: 'numeric', weekday: 'long' };
    const dateString = now.toLocaleDateString('en-US', options);
    document.getElementById('date').textContent = dateString;
  }
  
  // Initial call
  updateClock();
  // Update every second
  setInterval(updateClock, 1000);  