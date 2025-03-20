document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phone = document.getElementById("phone").value;
    const city = document.getElementById("city").value;
    
    alert(`Ім'я: ${firstName}\nПрізвище: ${lastName}\nТелефон: ${phone}\nНаселений пункт: ${city}`);
});
