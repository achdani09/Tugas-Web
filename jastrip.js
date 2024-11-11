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
        document.getElementById('success-messag-section').style.display ='block';
    } else {
        formstatus.innerText = 'terjadi keslahan. silakan coba lagi.';
    }
})