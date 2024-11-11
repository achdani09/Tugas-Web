document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const formstatus = document.getElementById('form-status');
    formstatus.innerText = 'mengirim...';

    const formData = new formData(this);
    
    
})