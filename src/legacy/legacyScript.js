const BASE_URL =
  (typeof window !== "undefined" && window.__legacyBaseUrl)
    ? window.__legacyBaseUrl
    : "/";

const NORMALIZED_BASE_URL =
  BASE_URL === "/" ? "" : BASE_URL.replace(/\/+$/, "");

const MEDIA_BASE_PATH = `${NORMALIZED_BASE_URL}/media/`.replace(/\/{2,}/g, "/");

function resolveMediaUrl(path) {
  if (!path) {
    return path;
  }

  if (/^(?:[a-z]+:|\/\/)/i.test(path)) {
    return path;
  }

  if (path.startsWith(MEDIA_BASE_PATH)) {
    return path;
  }

  let normalized = path;

  if (normalized.startsWith("/")) {
    normalized = normalized.slice(1);
  }

  const baseWithoutLeadingSlash = NORMALIZED_BASE_URL.replace(/^\/+/, "");
  if (
    baseWithoutLeadingSlash &&
    normalized.startsWith(`${baseWithoutLeadingSlash}/`)
  ) {
    normalized = normalized.slice(baseWithoutLeadingSlash.length + 1);
  }

  if (normalized.startsWith("media/")) {
    normalized = normalized.slice("media/".length);
  }

  normalized = normalized.replace(/^\/+/, "");

  const encoded = normalized
    .split("/")
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join("/");

  return `${MEDIA_BASE_PATH}${encoded}`.replace(/\/{2,}/g, "/");
}

function toMediaPath(path) {
  if (!path) {
    return path;
  }
  if (Array.isArray(path)) {
    return path.map(toMediaPath);
  }
  return resolveMediaUrl(path);
}

function mapMediaPaths(paths) {
  if (!paths) {
    return paths;
  }
  return paths.map(toMediaPath);
}

function rewriteMediaReferences() {
  const attributeTargets = [
    ['[src^="/media/"]', 'src'],
    ['[data-src^="/media/"]', 'data-src'],
    ['[poster^="/media/"]', 'poster'],
    ['[href^="/media/"]', 'href'],
  ];

  const stylePattern = /(["'(\s])\/media\//g;
  const replaceMedia = (value) =>
    value.replace(stylePattern, (_match, prefix) => `${prefix}${MEDIA_BASE_PATH}`);

  attributeTargets.forEach(([selector, attribute]) => {
    document.querySelectorAll(selector).forEach((element) => {
      const original = element.getAttribute(attribute);
      if (original) {
        element.setAttribute(attribute, resolveMediaUrl(original));
      }
    });
  });

  document.querySelectorAll('[style*="/media/"]').forEach((element) => {
    const inlineStyle = element.getAttribute('style');
    if (inlineStyle && inlineStyle.includes('/media/')) {
      element.setAttribute('style', replaceMedia(inlineStyle));
    }
  });

  const styleSheets = Array.from(document.styleSheets || []);
  styleSheets.forEach((sheet) => {
    if (sheet.href && !sheet.href.startsWith(window.location.origin)) {
      return;
    }

    let rules;
    try {
      rules = sheet.cssRules;
    } catch (error) {
      console.warn('Unable to access stylesheet for media rewrite', error);
      return;
    }

    if (!rules) {
      return;
    }

    Array.from(rules).forEach((rule) => {
      if (typeof CSSRule !== 'undefined' && rule.type === CSSRule.STYLE_RULE && rule.style) {
        const text = rule.style.cssText;
        if (text && text.includes('/media/')) {
          rule.style.cssText = replaceMedia(text);
        }
      } else if (typeof CSSRule !== 'undefined' && rule.type === CSSRule.KEYFRAMES_RULE) {
        Array.from(rule.cssRules || []).forEach((keyframe) => {
          const frameText = keyframe.style && keyframe.style.cssText;
          if (frameText && frameText.includes('/media/')) {
            keyframe.style.cssText = replaceMedia(frameText);
          }
        });
      }
    });
  });
}
// Basket functionality
let basket = [];
let basketTotal = 0;

// Image gallery state
let currentImageGallery = [];
let currentImageIndex = 0;

function addToBasket(itemName, itemPrice, itemType, buttonElement) {
    // Check if item already exists in basket
    const existingItem = basket.find(item => item.name === itemName && item.type === itemType);
    if (existingItem) {
        existingItem.quantity += 1;
        updateBasketUI();
        updateAllButtonStates();
        showBasketNotification(`${itemName} quantity increased!`, 'success');
        return;
    }

    const price = parseInt(itemPrice.replace('₹', '').replace(',', ''));
    const item = {
        id: Date.now(), // Simple unique ID
        name: itemName,
        price: price,
        priceDisplay: itemPrice,
        type: itemType,
        quantity: 1
    };
    
    basket.push(item);
    updateBasketUI();
    updateAllButtonStates();
    showBasketNotification(`${itemName} added to basket!`);
}

function updateItemQuantity(itemId, change) {
    const item = basket.find(i => i.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromBasket(itemId);
            return;
        }
        updateBasketUI();
        updateAllButtonStates();
    }
}

function removeFromBasket(itemId) {
    const item = basket.find(i => i.id === itemId);
    basket = basket.filter(i => i.id !== itemId);
    updateBasketUI();
    updateAllButtonStates();
}

function getItemQuantityInBasket(itemName, itemType) {
    const item = basket.find(i => i.name === itemName && i.type === itemType);
    return item ? item.quantity : 0;
}

function updateButtonState(buttonElement, itemName, itemType) {
    if (!buttonElement) return;
    
    const quantity = getItemQuantityInBasket(itemName, itemType);
    
    if (quantity > 0) {
        buttonElement.classList.add('added');
        buttonElement.innerHTML = `
            <div class="button-content">
                <div class="button-controls">
                    <button class="quantity-btn-small" onclick="event.stopPropagation(); updateItemQuantityFromButton('${itemName}', '${itemType}', -1)">−</button>
                    <span class="quantity-display">${quantity}</span>
                    <button class="quantity-btn-small" onclick="event.stopPropagation(); updateItemQuantityFromButton('${itemName}', '${itemType}', 1)">+</button>
                </div>
                <div class="button-text">In Basket</div>
            </div>
        `;
    } else {
        buttonElement.classList.remove('added');
        buttonElement.innerHTML = '🛒 Add to Basket';
    }
}

function updateItemQuantityFromButton(itemName, itemType, change) {
    const item = basket.find(i => i.name === itemName && i.type === itemType);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            basket = basket.filter(i => i.id !== item.id);
        }
        updateBasketUI();
        updateAllButtonStates();
        
        if (change > 0) {
            showBasketNotification(`${itemName} quantity increased!`, 'success');
        } else {
            showBasketNotification(`${itemName} quantity decreased!`, 'warning');
        }
    }
}

function updateAllButtonStates() {
    // Reset all buttons
    const allButtons = document.querySelectorAll('.add-to-basket-btn');
    allButtons.forEach(button => {
        const onClickAttr = button.getAttribute('onclick');
        if (onClickAttr) {
            // Extract item name and type from onclick attribute
            const matches = onClickAttr.match(/addToBasket\('([^']+)',\s*'[^']+',\s*'([^']+)'/);
            if (matches) {
                const itemName = matches[1];
                const itemType = matches[2];
                updateButtonState(button, itemName, itemType);
            }
        }
    });
}

function updateBasketUI() {
    const basketCount = document.getElementById('basketCount');
    const basketItems = document.getElementById('basketItems');
    const basketTotal = document.getElementById('basketTotal');
    const totalAmount = document.getElementById('totalAmount');
    
    // Update basket count
    const totalItems = basket.reduce((sum, item) => sum + item.quantity, 0);
    if (totalItems > 0) {
        basketCount.textContent = totalItems;
        basketCount.style.display = 'flex';
    } else {
        basketCount.style.display = 'none';
    }
    
    // Update basket items
    if (basket.length === 0) {
        basketItems.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #666;">
                <div style="font-size: 3rem; margin-bottom: 15px;">🛒</div>
                <p>Your basket is empty</p>
                <p style="font-size: 0.9rem;">Add services to start building your perfect event!</p>
            </div>
        `;
        basketTotal.style.display = 'none';
    } else {
        let itemsHTML = '';
        let total = 0;
        
        basket.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            itemsHTML += `
                <div class="basket-item">
                    <div class="item-details">
                        <div class="item-name">${item.name}</div>
                        <div class="item-price">${item.priceDisplay} × ${item.quantity} = ₹${itemTotal.toLocaleString()}</div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <button class="quantity-btn" onclick="updateItemQuantity(${item.id}, -1)" style="background: #e74c3c; color: white; border: none; border-radius: 50%; width: 25px; height: 25px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">−</button>
                        <span style="font-weight: bold; min-width: 20px; text-align: center;">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateItemQuantity(${item.id}, 1)" style="background: var(--success-color); color: white; border: none; border-radius: 50%; width: 25px; height: 25px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">+</button>
                        <button class="item-remove" onclick="removeFromBasket(${item.id})">×</button>
                    </div>
                </div>
            `;
        });
        
        basketItems.innerHTML = itemsHTML;
        totalAmount.textContent = `Total: ₹${total.toLocaleString()}`;
        basketTotal.style.display = 'block';
    }
}

function showBasketNotification(itemName, type = 'success') {
    // Create notification
    const notification = document.createElement('div');
    const bgColor = type === 'warning' ? '#f39c12' : 'var(--success-color)';
    const icon = type === 'warning' ? '⚠️' : '✅';
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        z-index: 4000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;
    notification.innerHTML = `${icon} ${itemName}`;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function toggleBasket() {
    const basketModal = document.getElementById('basketModal');
    basketModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeBasket() {
    const basketModal = document.getElementById('basketModal');
    basketModal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

function sendToWhatsApp() {
    if (basket.length === 0) {
        alert('Your basket is empty!');
        return;
    }
    
    let message = "🎉 *Peeka Boo Events - Order Request* 🎉\n\n";
    message += "Hello! I would like to book the following services:\n\n";
    
    let total = 0;
    basket.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        message += `${index + 1}. ${item.name} - ${item.priceDisplay}`;
        if (item.quantity > 1) {
            message += ` (Qty: ${item.quantity}) = ₹${itemTotal.toLocaleString()}`;
        }
        message += `\n`;
        total += itemTotal;
    });
    
    message += `\n💰 *Total Amount: ₹${total.toLocaleString()}*\n\n`;
    message += "Please confirm availability and provide further details.\n\n";
    message += "Thank you! 🎊";
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/919821148631?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
}

// Enhanced Image viewer functions with swipe support
function viewImage(imageSrc, altText, imageArray = null, startIndex = 0) {
    if (imageArray && Array.isArray(imageArray) && imageArray.length > 0) {
        currentImageGallery = mapMediaPaths(imageArray);
        currentImageIndex = Math.max(0, Math.min(startIndex, currentImageGallery.length - 1));
    } else {
        currentImageGallery = [toMediaPath(imageSrc)];
        currentImageIndex = 0;
    }
    
    createImageViewer(currentImageGallery[currentImageIndex], altText);
}

function createImageViewer(imageSrc, altText) {
    const existingViewer = document.querySelector('.image-viewer-modal');
    if (existingViewer) {
        document.body.removeChild(existingViewer);
    }
    
    const modal = document.createElement('div');
    modal.className = 'image-viewer-modal show';
    
    const hasMultipleImages = currentImageGallery.length > 1;
    const navPrevHTML = hasMultipleImages ? `<button class="image-nav-arrow image-nav-prev" onclick="navigateImage(-1)" title="Previous (?+?)">??1</button>` : '';
    const navNextHTML = hasMultipleImages ? `<button class="image-nav-arrow image-nav-next" onclick="navigateImage(1)" title="Next (?+')">???</button>` : '';
    const counterHTML = hasMultipleImages ? `<div class="image-counter">${currentImageIndex + 1} / ${currentImageGallery.length}</div>` : '';
    const normalizedSrc = toMediaPath(imageSrc);
    
    modal.innerHTML = `
        <div class="image-viewer-overlay" onclick="closeImageViewer(this)"></div>
        <button class="image-viewer-close" onclick="closeImageViewer(this)" title="Close (ESC)">A-</button>
        ${navPrevHTML}
        ${navNextHTML}
        ${counterHTML}
        <div class="image-viewer-content">
            <img src="${normalizedSrc}" alt="${altText}" onload="centerImage(this)" />
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    
    // Add touch and keyboard event listeners
    modal.addEventListener('touchstart', handleTouchStart, { passive: false });
    modal.addEventListener('touchmove', handleTouchMove, { passive: false });
    modal.addEventListener('touchend', handleTouchEnd, { passive: false });
    
    // Initialize touch variables
    modal.touchStartX = 0;
    modal.touchStartY = 0;
    modal.touchEndX = 0;
    modal.touchEndY = 0;
}

function handleTouchStart(e) {
    const modal = e.currentTarget;
    modal.touchStartX = e.touches[0].clientX;
    modal.touchStartY = e.touches[0].clientY;
}

function handleTouchMove(e) {
    // Prevent default scrolling
    e.preventDefault();
}

function handleTouchEnd(e) {
    const modal = e.currentTarget;
    modal.touchEndX = e.changedTouches[0].clientX;
    modal.touchEndY = e.changedTouches[0].clientY;
    
    const deltaX = modal.touchEndX - modal.touchStartX;
    const deltaY = modal.touchEndY - modal.touchStartY;
    const minSwipeDistance = 50;
    
    // Horizontal swipe for navigation
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0) {
            // Swipe right - previous image
            navigateImage(-1);
        } else {
            // Swipe left - next image
            navigateImage(1);
        }
    }
    // Vertical swipe down to close
    else if (deltaY > minSwipeDistance && Math.abs(deltaX) < minSwipeDistance) {
        closeImageViewer(modal);
    }
}

function navigateImage(direction) {
    if (currentImageGallery.length <= 1) return;
    
    const img = document.querySelector('.image-viewer-content img');
    if (!img) return;
    
    // Add animation class
    if (direction > 0) {
        img.style.animation = 'slideLeft 0.3s ease';
    } else {
        img.style.animation = 'slideRight 0.3s ease';
    }
    
    // Update index
    currentImageIndex += direction;
    if (currentImageIndex >= currentImageGallery.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = currentImageGallery.length - 1;
    }
    
    // Update image after animation
    setTimeout(() => {
        img.src = currentImageGallery[currentImageIndex];
        img.style.animation = '';
        
        // Update counter
        const counter = document.querySelector('.image-counter');
        if (counter) {
            counter.textContent = `${currentImageIndex + 1} / ${currentImageGallery.length}`;
        }
    }, 150);
}

function centerImage(imgElement) {
    // The image is already styled to fit properly within the viewer
    // This function can be used for additional positioning if needed
}

function closeImageViewer(element) {
    const modal = element.closest('.image-viewer-modal') || element;
    modal.classList.remove('show');
    
    // Restore body scrolling
    document.body.style.overflow = 'auto';
    document.body.style.position = 'static';
    document.body.style.width = 'auto';
    
    setTimeout(() => {
        if (document.body.contains(modal)) {
            document.body.removeChild(modal);
        }
    }, 300);
    
    // Reset gallery state
    currentImageGallery = [];
    currentImageIndex = 0;
}

// Image gallery functions
function createImageGallery(images, packageName) {
    if (!images || images.length === 0) return '';
    
    const normalizedImages = mapMediaPaths(images);
    const galleryJson = JSON.stringify(normalizedImages).replace(/"/g, '&quot;');
    
    let galleryHtml = `
        <div class="package-gallery">
            <h5>?? Package Gallery</h5>
            <div class="gallery-grid">
    `;
    
    normalizedImages.forEach((img, index) => {
        galleryHtml += `
            <div class="gallery-item-thumb" onclick="viewImage('${img}', '${packageName} - Image ${index + 1}', ${galleryJson}, ${index})">
                <img src="${img}" alt="${packageName} - Image ${index + 1}" 
                     onerror="this.parentNode.innerHTML='<div class=\\'gallery-fallback\\'>??</div>';">
            </div>
        `;
    });
    
    galleryHtml += `</div></div>`;
    return galleryHtml;
}

// Theme panel toggle functionality
function toggleThemePanel() {
    const themePanel = document.getElementById('themePanel');
    themePanel.classList.toggle('show');
}

// Close theme panel when clicking outside
document.addEventListener('click', function(e) {
    const themeSelector = document.querySelector('.theme-selector');
    const themePanel = document.getElementById('themePanel');
    
    if (!themeSelector.contains(e.target)) {
        themePanel.classList.remove('show');
    }
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .add-to-basket-btn.added {
        background: var(--primary-color);
        padding: 5px 10px;
        min-height: 40px;
    }
    
    .button-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
    }
    
    .button-controls {
        display: flex;
        align-items: center;
        gap: 8px;
        background: rgba(255,255,255,0.2);
        border-radius: 15px;
        padding: 2px 8px;
    }
    
    .quantity-btn-small {
        background: rgba(255,255,255,0.3);
        color: white;
        border: none;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        font-weight: bold;
    }
    
    .quantity-btn-small:hover {
        background: rgba(255,255,255,0.4);
    }
    
    .quantity-display {
        color: white;
        font-weight: bold;
        font-size: 0.9rem;
        min-width: 15px;
        text-align: center;
    }
    
    .button-text {
        font-size: 0.8rem;
        color: white;
        font-weight: 600;
    }
`;
document.head.appendChild(style);

// Package data
const packages = {
    decoration: {
        title: "🎨 Decoration Packages",
        items: [
            {
                name: "Basic",
                price: "₹1,500",
                description: "200 balloons with ribbons and Happy Birthday strip banner or tag",
                images: [
                    "Decoration Packages/Basic/Decoration Package Basic 01.jpeg",
                    "Decoration Packages/Basic/Decoration Package Basic 02.jpeg",
                    "Decoration Packages/Basic/Decoration Package Basic 03.jpeg",
                    "Decoration Packages/Basic/Decoration Package Basic 04.jpeg",
                    "Decoration Packages/Basic/Decoration Package Basic 05.jpeg",
                    "Decoration Packages/Basic/Decoration Package Basic 06.jpeg",
                    "Decoration Packages/Basic/Decoration Package Basic 07.jpeg",
                    "Decoration Packages/Basic/Decoration Package Basic 08.jpeg"
                ]
            },
            {
                name: "Standard", 
                price: "₹2,500",
                description: "300 balloons with ribbons, happy birthday foil banner",
                images: [
                    "Decoration Packages/Standard/Decoration Package Standard 01.jpg",
                    "Decoration Packages/Standard/Decoration Package Standard 02.jpg",
                    "Decoration Packages/Standard/Decoration Package Standard 03.jpg",
                    "Decoration Packages/Standard/Decoration Package Standard 04.jpg",
                    "Decoration Packages/Standard/Decoration Package Standard 05.jpg",
                    "Decoration Packages/Standard/Decoration Package Standard 06.jpg",
                    "Decoration Packages/Standard/Decoration Package Standard 07.jpg",
                    "Decoration Packages/Standard/Decoration Package Standard 08.jpg",
                    "Decoration Packages/Standard/Decoration Package Standard 09.jpg",
                    "Decoration Packages/Standard/Decoration Package Standard 10.jpg",
                    "Decoration Packages/Standard/Decoration Package Standard 11.jpg",
                    "Decoration Packages/Standard/Decoration Package Standard 12.jpg",
                    "Decoration Packages/Standard/Decoration Package Standard 13.jpg",
                    "Decoration Packages/Standard/Decoration Package Standard 14.jpg"
                ]
            },
            {
                name: "Gold",
                price: "₹3,500", 
                description: "500 balloons with ribbons, happy birthday foil banner, foil name, foil curtain",
                images: [
                    "Decoration Packages/Gold/Decoration Package Gold 01.jpg",
                    "Decoration Packages/Gold/Decoration Package Gold 02.jpg",
                    "Decoration Packages/Gold/Decoration Package Gold 03.jpg",
                    "Decoration Packages/Gold/Decoration Package Gold 04.jpg",
                    "Decoration Packages/Gold/Decoration Package Gold 05.jpg",
                    "Decoration Packages/Gold/Decoration Package Gold 06.jpg",
                    "Decoration Packages/Gold/Decoration Package Gold 07.jpg",
                    "Decoration Packages/Gold/Decoration Package Gold 08.jpg",
                    "Decoration Packages/Gold/Decoration Package Gold 09.jpg",
                    "Decoration Packages/Gold/Decoration Package Gold 10.jpg",
                    "Decoration Packages/Gold/Decoration Package Gold 11.jpg",
                    "Decoration Packages/Gold/Decoration Package Gold 12.jpg",
                    "Decoration Packages/Gold/Decoration Package Gold 13.jpg",
                    "Decoration Packages/Gold/Decoration Package Gold 14.jpg"
                ]
            },
            {
                name: "Premium",
                price: "₹5,500",
                description: "800 balloons with ribbons, happy birthday foil banner, foil name, foil curtain, foil theme balloons, two party poppers",
                images: [
                    "Decoration Packages/Premium/Decoration Package Premium 01.jpg",
                    "Decoration Packages/Premium/Decoration Package Premium 02.jpg"
                ]
            },
            {
                name: "Platinum",
                price: "₹8,500",
                description: "Theme back drop, 1000 balloons with ribbons, happy birthday LED name, small led alphabetic name, Welcome board, foil theme balloons, balloon gate, Two LED lights on back drop, four party poppers",
                images: [
                    "Decoration Packages/Platinum/Decoration Package Platinum 01.jpg",
                    "Decoration Packages/Platinum/Decoration Package Platinum 02.jpg",
                    "Decoration Packages/Platinum/Decoration Package Platinum 03.jpg",
                    "Decoration Packages/Platinum/Decoration Package Platinum 04.jpg",
                    "Decoration Packages/Platinum/Decoration Package Platinum 05.jpg",
                    "Decoration Packages/Platinum/Decoration Package Platinum 06.jpg",
                    "Decoration Packages/Platinum/Decoration Package Platinum 07.jpg",
                    "Decoration Packages/Platinum/Decoration Package Platinum 08.jpg",
                    "Decoration Packages/Platinum/Decoration Package Platinum 09.jpg",
                    "Decoration Packages/Platinum/Decoration Package Platinum 10.jpg"
                ]
            }
        ]
    },
    dj: {
        title: "🎵 D.J with Light Packages",
        items: [
            {
                name: "Basic DJ Setup",
                price: "₹5,000",
                description: "2 50inch speakers, DJ console, Professional D.J. operator"
            },
            {
                name: "Two Way DJ Setup",
                price: "₹7,000", 
                description: "2 Tower Speakers, DJ Console, Professional D.J. operator, DJ lights on single stand"
            },
            {
                name: "Three Way DJ Setup",
                price: "₹10,000",
                description: "2 Bass & 2 Top Speakers, DJ Console, Professional D.J. operator, DJ lights on single stand"
            }
        ]
    },
    games: {
        title: "🎯 Game Stalls Packages",
        subtitle: "₹3,000 Per Game Stall",
        items: [
            {
                name: "Buzz Wire",
                image: "Game Stalls/Buzz Wire.jpeg"
            },
            {
                name: "Feed the Clown", 
                image: "Game Stalls/Feed the Clown.jpeg"
            },
            {
                name: "Knock the Cans",
                image: "Game Stalls/Knock the Cans.jpeg"
            },
            {
                name: "Hit the Hammer",
                image: "Game Stalls/Hit the Hammer.jpeg"
            },
            {
                name: "Balloon Shootings",
                image: "Game Stalls/Balloon Shootings.jpeg"
            },
            {
                name: "Basket Ball",
                image: "Game Stalls/Basket Ball.jpeg"
            },
            {
                name: "Ring Toss",
                image: "Game Stalls/Ring Toss.jpeg"
            },
            {
                name: "Twister",
                image: "Game Stalls/Twister.jpeg"
            },
            {
                name: "Wheel of Fortune",
                image: "Game Stalls/Wheel of Fortune.jpeg"
            },
            {
                name: "Archery",
                image: "Game Stalls/Archery.jpeg"
            },
            {
                name: "Bowling Alley", 
                image: "Game Stalls/Bowling alley.jpeg"
            },
            {
                name: "Dart Game",
                image: "Game Stalls/Dart.jpeg"
            },
            {
                name: "Jenga",
                image: "Game Stalls/Jenga.jpeg"
            }
        ]
    }
};

Object.values(packages).forEach(category => {
    if (!category || !category.items) return;
    category.items.forEach(item => {
        if (item.images) {
            item.images = mapMediaPaths(item.images);
        }
        if (item.image) {
            item.image = toMediaPath(item.image);
        }
    });
});

// Package display functions
function showPackages(type) {
    const modal = document.getElementById('packageModal');
    const title = document.getElementById('modalTitle');
    const content = document.getElementById('modalContent');
    
    const packageData = packages[type];
    title.textContent = packageData.title;
    
    let html = '';
    
    if (type === 'games') {
        if (packageData.subtitle) {
            html += `<div style="text-align: center; background: var(--card-gradient); padding: 20px; border-radius: 15px; margin-bottom: 30px; border: 2px solid var(--primary-color);">
                <h3 style="color: var(--primary-dark); margin: 0; font-size: 1.5rem;">${packageData.subtitle}</h3>
            </div>`;
        }
        
        html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">';
        
        packageData.items.forEach((item, index) => {
            html += `
                <div style="background: var(--card-gradient); border-radius: 15px; padding: 15px; text-align: center; border: 2px solid var(--primary-color); box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                    <div style="width: 100%; height: 150px; border-radius: 10px; overflow: hidden; margin-bottom: 15px; background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); display: flex; align-items: center; justify-content: center; cursor: pointer;" onclick="viewImage('${toMediaPath(item.image)}', '${item.name} Game Stall')">
                        <img src="${toMediaPath(item.image)}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.parentNode.innerHTML='<div style=\\'color: white; font-size: 2rem;\\'>🎯</div>';">
                    </div>
                    <h4 style="color: var(--primary-dark); margin: 0 0 10px 0; font-size: 1.1rem; font-weight: 700;">${index + 1}. ${item.name}</h4>
                    <button class="add-to-basket-btn" onclick="addToBasket('${item.name} Game Stall', '₹3,000', 'games', this)">
                        🛒 Add to Basket
                    </button>
                </div>
            `;
        });
        
        html += '</div>';
    } else {
        html += '<div style="display: grid; gap: 20px;">';
        
        packageData.items.forEach((item, index) => {
            const imageGallery = item.images ? createImageGallery(item.images, item.name) : '';
            
            html += `
                <div style="background: var(--card-gradient); border-radius: 15px; padding: 25px; border: 2px solid var(--primary-color); box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                        <h4 style="color: var(--primary-dark); margin: 0; font-size: 1.3rem; font-weight: 700;">${index + 1}. ${item.name}</h4>
                        <div style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); color: white; padding: 8px 15px; border-radius: 20px; font-weight: 700; font-size: 1.1rem;">${item.price}</div>
                    </div>
                    <p style="color: #666; line-height: 1.6; margin-bottom: 15px;">${item.description}</p>
                    ${imageGallery}
                    <button class="add-to-basket-btn" onclick="addToBasket('${item.name} (${type.toUpperCase()})', '${item.price}', '${type}', this)">
                        🛒 Add to Basket
                    </button>
                </div>
            `;
        });
        
        html += '</div>';
    }
    
    content.innerHTML = html;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Update button states after modal content is loaded
    setTimeout(() => {
        updateAllButtonStates();
    }, 100);
}

function closePackageModal() {
    const modal = document.getElementById('packageModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Theme switching functionality
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('selectedTheme', theme);
    
    // Update active theme option
    document.querySelectorAll('.theme-option').forEach(option => {
        option.classList.remove('active');
    });
    document.querySelector(`[data-theme="${theme}"]`).classList.add('active');
}

// Initialize theme
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('selectedTheme') || 'purple';
    setTheme(savedTheme);
    
    // Add theme option click handlers
    document.querySelectorAll('.theme-option').forEach(option => {
        option.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            setTheme(theme);
            // Close theme panel after selection
            document.getElementById('themePanel').classList.remove('show');
        });
    });
});

// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}

// Simple routing system
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.add('hidden'));
    
    // Show selected page
    const targetPage = document.getElementById(pageId + '-page');
    if (targetPage) {
        targetPage.classList.remove('hidden');
    }
    
    // Update active navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => link.classList.remove('active'));
    
    const activeNav = document.getElementById('nav-' + pageId);
    if (activeNav) {
        activeNav.classList.add('active');
    }
    
    // Close mobile menu
    document.getElementById('navLinks').classList.remove('show');
    
    // Update URL hash
    window.location.hash = pageId;
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Handle navigation clicks
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href') && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const hash = e.target.getAttribute('href').substring(1);
        showPage(hash);
    }
});

// Handle browser back/forward
window.addEventListener('hashchange', function() {
    const hash = window.location.hash.substring(1) || 'home';
    showPage(hash);
});

// Keyboard event handling for image viewer
document.addEventListener('keydown', function(e) {
    const imageViewer = document.querySelector('.image-viewer-modal.show');
    if (imageViewer) {
        switch(e.key) {
            case 'Escape':
                closeImageViewer(imageViewer);
                break;
            case 'ArrowLeft':
                navigateImage(-1);
                break;
            case 'ArrowRight':
                navigateImage(1);
                break;
        }
    } else if (e.key === 'Escape') {
        closePackageModal();
        closeBasket();
        document.getElementById('themePanel').classList.remove('show');
    }
});

// Close modal when clicking outside or pressing escape
document.addEventListener('click', function(e) {
    const packageModal = document.getElementById('packageModal');
    const basketModal = document.getElementById('basketModal');
    
    if (e.target === packageModal) {
        closePackageModal();
    }
    if (e.target === basketModal) {
        closeBasket();
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const navLinks = document.getElementById('navLinks');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    if (navLinks && toggle && !navLinks.contains(e.target) && !toggle.contains(e.target)) {
        navLinks.classList.remove('show');
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks && window.innerWidth > 768) {
        navLinks.classList.remove('show');
    }
});

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    rewriteMediaReferences();
    // Initialize theme system
    const savedTheme = localStorage.getItem('selectedTheme') || 'purple';
    setTheme(savedTheme);
    
    // Set up page routing
    const hash = window.location.hash.substring(1) || 'home';
    showPage(hash);
    
    // Clean up any modal states
    document.body.style.overflow = 'auto';
    
    console.log('🎉 Peeka Boo Events website initialized successfully!');
});








