async function TU_REST_API() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value; 
  
    const data = {
        UserName: username,
        PassWord: password
    };
  
    try {
        const applicationKey = "TU64560abd4b6deaeb11e0e6b05a402c254f7be0b7b6b8135be1999842a11f138a054c22eb31bd5f7cc7fa869527dda333";
        const response = await fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Application-Key': applicationKey
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Login Successful:', result);
            alert('Login success');
        } else {
            const errorResult = await response.json();
            console.log('Login failed:', result);
            alert('Login failed: ' + result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while logging in.');
    }
}