document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const formStatus = document.getElementById('form-status');
    formStatus.innerText = 'mengirim...';

    const formData = new FormData(this);

    const response = await fetch ('fast.php', {
        method: 'POST',
        body: formData
    });
    
    if (response.ok) {
        document.getElementById('contact-form-section').style.display ='none';
        document.getElementById('success-message-section').style.display ='block';
    } else {
        formStatus.innerText = 'terjadi keslahan. silakan coba lagi.';
    }
});

function resetForm() {
    document.getElementById('contact-form-section').style.display ='block';
    document.getElementById('success-message-section').style.display ='none';
    document.getElementById('contact-form').reset();
    document.getElementById('form-status').innerText = '';
}