const addButtons = document.querySelectorAll('.add-button');
const cartItems = document.getElementById('cart-items');

addButtons.forEach(button => {
    button.addEventListener('click', function() {
        const itemText = this.parentElement.textContent.replace('إضافة', '').trim();
        const newItem = document.createElement('li');
        newItem.textContent = itemText;
        cartItems.appendChild(newItem);
        
        // تحديث عربة التسوق
        if (cartItems.children.length === 1 && cartItems.children[0].textContent === 'لا توجد عناصر في العربة.') {
            cartItems.innerHTML = ''; // إزالة الرسالة الافتراضية
        }
    });
});