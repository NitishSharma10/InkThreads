document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('Cart:', cart);
    }

    function updateWishlist() {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        console.log('Wishlist:', wishlist);
    }

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000); // Remove notification after 3 seconds
    }

    function addToCart(productId, productName, productPrice) {
        const product = { productId, productName, productPrice };
        cart.push(product);
        updateCart();
        showNotification(`Added "${productName}" to the cart.`);
    }

    function addToWishlist(productId, productName, productPrice) {
        const product = { productId, productName, productPrice };
        wishlist.push(product);
        updateWishlist();
        showNotification(`Added "${productName}" to your wishlist.`);
    }

    document.querySelectorAll('.buy-button').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            const productName = this.getAttribute('data-product-name');
            const productPrice = this.getAttribute('data-product-price');

            console.log('Add to Cart Clicked:', productId, productName, productPrice);
            addToCart(productId, productName, productPrice);
        });
    });

    document.querySelectorAll('.wishlist-button').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            const productName = this.getAttribute('data-product-name');
            const productPrice = this.getAttribute('data-product-price');

            console.log('Add to Wishlist Clicked:', productId, productName, productPrice);
            addToWishlist(productId, productName, productPrice);
        });
    });
});
