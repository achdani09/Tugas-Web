document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const formstatus = document.getElementById('form-status');
    formstatus.innerText = 'mengirim...';

    const formData = new formData(this);

    const response = await fetch('fast.php',{
        method: 'post',
        body: formData
    });
    
    if (response.ok) {
        document.getElementById('contact-form-section').style.display ='none';
        document.getElementById('success-message-section').style.display ='block';
    } else {
        formstatus.innerText = 'terjadi keslahan. silakan coba lagi.';
    }
});

function resetForm() {
    document.getElementById('contact-form-section').style.display ='block';
    document.getElementById('succsess-message-section').style.display ='none';
    document.getElementById('contact-form').reset();
    document.getElementById('form-status').innerText = '';
}