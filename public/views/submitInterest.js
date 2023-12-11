export async function submitInterest(residenceId, name, phoneNumber, email) {
    try {
      const response = await fetch('http://localhost:3000/interests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ residenceId, name, phoneNumber, email }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Intresseanmälan skickad', data);
      alert("Intresseanmälan har skickats!");
    } catch (error) {
      console.error('Ett fel uppstod när din intresseanmälan skulle skickas', error);
      alert("Ett fel uppstod när din intresseanmälan skulle skickas");
    }
  }