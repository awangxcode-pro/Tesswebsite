/* ==========================================
   MAIN.JS - AWANG MARKET
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    function handleLoadingScreen() {
        const loader = document.getElementById("page-loader");
        if (!loader) return;
        if (sessionStorage.getItem('awangMarketLoaded')) {
            loader.style.display = 'none';
        } else {
            setTimeout(() => {
                loader.style.opacity = "0";
                loader.style.visibility = "hidden";
                sessionStorage.setItem('awangMarketLoaded', 'true');
            }, 800);
        }
    }

    window.addEventListener("load", handleLoadingScreen);

    function setFallbackImage(imgElement, text) {
        if (!imgElement) return;
        imgElement.onerror = function() {
            const width = this.getAttribute('width') || 800;
            const height = this.getAttribute('height') || 400;
            const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect fill="#e0e0e0" width="${width}" height="${height}"/><text fill="#777777" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="bold">${text}</text></svg>`;
            this.src = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
            this.onerror = null;
        };
    }

    const formatCurrency = (num) => "Rp " + num.toLocaleString('id-ID');

    function getCurrentDate() {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date().toLocaleDateString('id-ID', options) + " WIB";
    }

    function generateOrderID() {
        return "AWG-" + Date.now().toString().slice(-6) + Math.floor(Math.random() * 100);
    }

    const pageTitle = document.getElementById("page-title");
    if (pageTitle && pageTitle.textContent.includes("Awang Market")) {
        pageTitle.textContent = pageTitle.textContent.replace("Awang Market", storeConfig.storeName);
    }
    
    const elStoreName = document.getElementById("store-name");
    if (elStoreName) elStoreName.textContent = storeConfig.storeName;
    
    const elStoreNameTop = document.getElementById("store-name-top");
    if (elStoreNameTop) elStoreNameTop.innerHTML = `${storeConfig.storeName} <i class="fas fa-chevron-right"></i>`;
    
    const elShortDesc = document.getElementById("short-description");
    if (elShortDesc) elShortDesc.textContent = storeConfig.shortDescription;
    
    const profileImg = document.getElementById("store-profile");
    if (profileImg) {
        setFallbackImage(profileImg, "Profil Toko");
        profileImg.src = storeConfig.images.profile;
    }

    const mainBannerImg = document.getElementById("main-banner");
    if (mainBannerImg) {
        setFallbackImage(mainBannerImg, "Banner Utama");
        mainBannerImg.src = storeConfig.images.mainBanner;
    }

    const accordionContainer = document.getElementById("accordion-container");
    if (accordionContainer) {
        storeConfig.aboutUs.forEach((item) => {
            const accItem = document.createElement("div");
            accItem.className = `accordion-item`;
            accItem.innerHTML = `
                <button class="accordion-header">
                    ${item.title}
                    <i class="fas fa-chevron-down"></i>
                </button>
                <div class="accordion-content">
                    <p>${item.content}</p>
                </div>
            `;
            const headerBtn = accItem.querySelector(".accordion-header");
            headerBtn.addEventListener("click", () => {
                accItem.classList.toggle("active");
            });
            accordionContainer.appendChild(accItem);
        });
    }

    const categoryGrid = document.getElementById("category-grid");
    const categoryProductsModal = document.getElementById("category-products-modal");
    const closeCategoryProductsBtn = document.getElementById("close-category-products");
    const modalProductList = document.getElementById("modal-product-list");
    const checkoutModal = document.getElementById("checkout-modal");
    const closeCheckoutBtn = document.getElementById("close-checkout");

    let selectedProduct = null;
    let currentQty = 1;

    if (categoryGrid) {
        storeConfig.categories.forEach((category) => {
            const card = document.createElement("div");
            card.className = "category-card";
            card.innerHTML = `
                <div class="category-img-wrapper">
                    <img class="category-img" src="${category.image}" alt="${category.name}">
                </div>
                <div class="category-info">
                    <h3 class="category-title"><i class="${category.icon}"></i> ${category.name}</h3>
                    <p class="category-desc">${category.description}</p>
                    <button class="view-category-btn">Lihat Daftar Harga <i class="fas fa-arrow-right"></i></button>
                </div>
            `;
            const imgEl = card.querySelector('.category-img');
            setFallbackImage(imgEl, category.name);
            card.addEventListener('click', () => {
                openCategoryModal(category);
            });
            categoryGrid.appendChild(card);
        });

        const searchInput = document.getElementById("search-input");
        if (searchInput) {
            searchInput.addEventListener("input", (e) => {
                const keyword = e.target.value.toLowerCase();
                document.querySelectorAll('.category-card').forEach((card) => {
                    const text = card.textContent.toLowerCase();
                    if (text.includes(keyword)) {
                        card.style.display = "flex";
                    } else {
                        card.style.display = "none";
                    }
                });
            });
        }
    }

    function openCategoryModal(category) {
        if (!categoryProductsModal || !modalProductList) return;
        document.getElementById("modal-category-title").innerHTML = `<i class="${category.icon}"></i> ${category.name}`;
        modalProductList.innerHTML = "";
        if (category.products.length === 0) {
            modalProductList.innerHTML = "<p class='empty-msg'>Belum ada layanan di kategori ini.</p>";
        } else {
            category.products.forEach(product => {
                const item = document.createElement("div");
                item.className = "list-product-item";
                item.innerHTML = `
                    <div class="list-product-icon">
                        <i class="${product.icon || 'fas fa-box'}"></i>
                    </div>
                    <div class="list-product-details">
                        <h4>${product.name}</h4>
                        <p>${product.description}</p>
                        <strong class="list-product-price">${product.price}</strong>
                    </div>
                    <button class="list-buy-btn"><i class="fas fa-shopping-cart"></i> Beli</button>
                `;
                item.querySelector('.list-buy-btn').addEventListener('click', (e) => {
                    e.stopPropagation(); 
                    categoryProductsModal.classList.remove("active");
                    openCheckoutModal(product);
                });
                modalProductList.appendChild(item);
            });
        }
        categoryProductsModal.classList.add("active");
    }

    if (closeCategoryProductsBtn && categoryProductsModal) {
        closeCategoryProductsBtn.addEventListener("click", () => {
            categoryProductsModal.classList.remove("active");
        });
    }

    function updateNotaTotal() {
        if (!selectedProduct) return;
        const total = selectedProduct.priceNumber * currentQty;
        const elTotal = document.getElementById("nota-total-price");
        if (elTotal) elTotal.textContent = formatCurrency(total);
    }

    function openCheckoutModal(product) {
        if (!checkoutModal) return;
        selectedProduct = product;
        currentQty = 1;
        const elDate = document.getElementById("nota-date");
        if (elDate) elDate.textContent = `Tanggal: ${getCurrentDate()}`;
        const iconEl = document.getElementById("nota-icon");
        if (iconEl) iconEl.className = product.icon || 'fas fa-box';
        const elTitle = document.getElementById("nota-title");
        if (elTitle) elTitle.textContent = product.name;
        const elPrice = document.getElementById("nota-price");
        if (elPrice) elPrice.textContent = formatCurrency(product.priceNumber);
        const inputQty = document.getElementById("input-qty");
        if (inputQty) inputQty.value = currentQty;
        updateNotaTotal();
        checkoutModal.classList.add("active");
    }

    if (closeCheckoutBtn && checkoutModal) {
        closeCheckoutBtn.addEventListener("click", () => {
            checkoutModal.classList.remove("active");
        });
    }

    const btnQtyMin = document.getElementById("btn-qty-min");
    if (btnQtyMin) {
        btnQtyMin.addEventListener("click", () => {
            if (currentQty > 1) {
                currentQty--;
                document.getElementById("input-qty").value = currentQty;
                updateNotaTotal();
            }
        });
    }

    const btnQtyPlus = document.getElementById("btn-qty-plus");
    if (btnQtyPlus) {
        btnQtyPlus.addEventListener("click", () => {
            if (currentQty < 99) {
                currentQty++;
                document.getElementById("input-qty").value = currentQty;
                updateNotaTotal();
            }
        });
    }

    function getOrderNotes(prefix = "") {
        const notesEl = document.getElementById(prefix + "order-notes");
        if(!notesEl) return "-";
        const notes = notesEl.value.trim();
        return notes || "-";
    }

    const btnManualPay = document.getElementById("btn-manual-pay");
    if (btnManualPay) {
        btnManualPay.addEventListener("click", () => {
            const notes = getOrderNotes("");
            const total = formatCurrency(selectedProduct.priceNumber * currentQty);
            const orderID = generateOrderID();
            
            let msg = `*🛍️ INVOICE PESANAN BARU*\n`;
            msg += `*===========================*\n`;
            msg += `*📅 Tanggal :* ${getCurrentDate()}\n`;
            msg += `*🧾 Order ID:* ${orderID}\n`;
            msg += `*===========================*\n\n`;
            msg += `*📝 DETAIL LAYANAN:*\n`;
            msg += `*${selectedProduct.name}*\n`;
            msg += ` • Harga Satuan : ${formatCurrency(selectedProduct.priceNumber)}\n`;
            msg += ` • Jumlah Pesan : ${currentQty}x\n\n`;
            msg += `*===========================*\n`;
            msg += `*💰 TOTAL BAYAR : ${total}*\n`;
            msg += `*===========================*\n\n`;
            msg += `*📌 Catatan Pembeli:*\n_${notes}_\n\n`;
            msg += `Halo Admin, saya ingin memproses pesanan di atas. Mohon konfirmasi dan instruksi pembayarannya. Terima kasih! 🙏`;

            window.open(`https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
            if(checkoutModal) checkoutModal.classList.remove("active");
        });
    }

    let cart = JSON.parse(localStorage.getItem('awangMarketCart')) || [];
    const cartBadges = document.querySelectorAll("#cart-badge");
    
    function updateCartBadge() {
        const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
        cartBadges.forEach(badge => {
            badge.textContent = totalItems;
            if (totalItems > 0) {
                badge.classList.add("show");
            } else {
                badge.classList.remove("show");
            }
        });
    }

    function saveCart() {
        localStorage.setItem('awangMarketCart', JSON.stringify(cart));
        updateCartBadge();
    }

    updateCartBadge(); 

    const btnAddCart = document.getElementById("btn-add-cart");
    if (btnAddCart) {
        btnAddCart.addEventListener("click", () => {
            const existingItem = cart.find(item => item.id === selectedProduct.id);
            if (existingItem) {
                existingItem.qty += currentQty;
            } else {
                cart.push({
                    ...selectedProduct,
                    qty: currentQty
                });
            }
            saveCart();
            alert(`${selectedProduct.name} (x${currentQty}) berhasil ditambahkan ke keranjang!`);
            if(checkoutModal) checkoutModal.classList.remove("active");
        });
    }

    const cartPageContainer = document.getElementById("cart-page-items-container");
    const cartPageGrandTotal = document.getElementById("cart-page-grand-total");
    const cartPageTotalItems = document.getElementById("cart-page-total-items");
    const btnPageCheckoutCart = document.getElementById("btn-page-checkout-cart");

    if (cartPageContainer) {
        function renderFullCart() {
            cartPageContainer.innerHTML = "";
            let grandTotal = 0;
            let totalQty = 0;

            if (cart.length === 0) {
                cartPageContainer.innerHTML = `
                    <div class="empty-cart-page">
                        <i class="fas fa-shopping-basket"></i>
                        <p>Keranjang belanja Anda masih kosong.</p>
                        <a href="/prod" class="primary-btn mt-3" style="text-decoration:none;">Belanja Sekarang</a>
                    </div>
                `;
                if(cartPageGrandTotal) cartPageGrandTotal.textContent = "Rp 0";
                if(cartPageTotalItems) cartPageTotalItems.textContent = "0";
                return;
            }

            cart.forEach((item, index) => {
                const itemTotal = item.priceNumber * item.qty;
                grandTotal += itemTotal;
                totalQty += item.qty;

                const cartItemEl = document.createElement("div");
                cartItemEl.className = "cart-page-item";
                cartItemEl.innerHTML = `
                    <div class="cart-page-icon">
                        <i class="${item.icon || 'fas fa-box'}"></i>
                    </div>
                    <div class="cart-page-details">
                        <h4>${item.name}</h4>
                        <p class="cart-page-price">${formatCurrency(item.priceNumber)} x ${item.qty}</p>
                        <strong class="cart-page-total">${formatCurrency(itemTotal)}</strong>
                    </div>
                    <button class="remove-cart-btn" data-index="${index}"><i class="fas fa-trash"></i></button>
                `;
                cartPageContainer.appendChild(cartItemEl);
            });

            if(cartPageGrandTotal) cartPageGrandTotal.textContent = formatCurrency(grandTotal);
            if(cartPageTotalItems) cartPageTotalItems.textContent = totalQty;

            document.querySelectorAll(".remove-cart-btn").forEach(btn => {
                btn.addEventListener("click", (e) => {
                    const index = e.currentTarget.getAttribute("data-index");
                    cart.splice(index, 1);
                    saveCart();
                    renderFullCart();
                });
            });
        }

        renderFullCart();

        if (btnPageCheckoutCart) {
            btnPageCheckoutCart.addEventListener("click", () => {
                if (cart.length === 0) {
                    alert("Keranjang Anda kosong!");
                    return;
                }

                const notes = getOrderNotes("cart-");
                const orderID = generateOrderID();
                
                let msg = `*🛍️ INVOICE CHECKOUT KERANJANG*\n`;
                msg += `*===========================*\n`;
                msg += `*📅 Tanggal :* ${getCurrentDate()}\n`;
                msg += `*🧾 Order ID:* ${orderID}\n`;
                msg += `*===========================*\n\n`;
                
                let grandTotal = 0;
                msg += `*📝 DAFTAR BARANG YANG DIBELI:*\n\n`;
                cart.forEach((item, index) => {
                    const itemTotal = item.priceNumber * item.qty;
                    grandTotal += itemTotal;
                    msg += `*${index + 1}. ${item.name}*\n`;
                    msg += ` • Harga : ${formatCurrency(item.priceNumber)}\n`;
                    msg += ` • Jumlah: ${item.qty}x\n`;
                    msg += ` • Subtotal: ${formatCurrency(itemTotal)}\n\n`;
                });

                msg += `*===========================*\n`;
                msg += `*💰 TOTAL TAGIHAN : ${formatCurrency(grandTotal)}*\n`;
                msg += `*===========================*\n\n`;
                msg += `*📌 Catatan Pembeli:*\n_${notes}_\n\n`;
                msg += `Halo Admin, saya ingin memproses semua pesanan di atas. Mohon konfirmasi dan instruksi pembayarannya. Terima kasih! 🙏`;

                window.open(`https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
                cart = [];
                saveCart();
                renderFullCart();
            });
        }
    }

    const ownerName = document.getElementById("owner-name");
    if (ownerName) ownerName.textContent = storeConfig.ownerProfile.name;
    
    const ownerRole = document.getElementById("owner-role");
    if (ownerRole) ownerRole.textContent = storeConfig.ownerProfile.role;
    
    const ownerAbout = document.getElementById("owner-about-store");
    if (ownerAbout) ownerAbout.textContent = storeConfig.ownerProfile.aboutStore;
    
    const ownerDesc = document.getElementById("owner-desc");
    if (ownerDesc) ownerDesc.textContent = storeConfig.ownerProfile.description;
    
    const ownerMotto = document.getElementById("owner-motto");
    if (ownerMotto) ownerMotto.textContent = storeConfig.ownerProfile.motto;
    
    const ownerContactText = document.getElementById("owner-contact-text");
    if (ownerContactText) ownerContactText.textContent = storeConfig.ownerProfile.contactText;
    
    const ownerImg = document.getElementById("owner-img");
    if (ownerImg) {
        setFallbackImage(ownerImg, "Foto Profil");
        ownerImg.src = storeConfig.images.profile;
    }

    const ownerContactBtn = document.getElementById("owner-contact-btn");
    if (ownerContactBtn) {
        ownerContactBtn.href = `https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent("Halo " + storeConfig.ownerProfile.name + ", saya ingin bertanya seputar Awang Market.")}`;
    }

    const bankList = document.getElementById("bank-list");
    if (bankList) {
        storeConfig.paymentMethods.accounts.forEach(acc => {
            const li = document.createElement("li");
            li.innerHTML = `
                <div class="bank-icon-wrapper"><i class="fas fa-money-check-alt bank-icon"></i></div>
                <div class="bank-details">
                    <strong class="text-primary-luxe">${acc.bank}</strong>
                    <span class="text-muted-luxe">${acc.number} - A/N: ${acc.name}</span>
                </div>
                <button class="copy-btn-luxe" onclick="navigator.clipboard.writeText('${acc.number}'); alert('Nomor disalin!');"><i class="far fa-copy"></i></button>
            `;
            bankList.appendChild(li);
        });
    }

    const qrisImage = document.getElementById("qris-image");
    const qrisName = document.getElementById("qris-name");
    const qrisInstructionList = document.getElementById("qris-instruction-list");
    
    if (qrisImage && storeConfig.paymentMethods.qris) {
        setFallbackImage(qrisImage, "QRIS Image");
        qrisImage.src = storeConfig.paymentMethods.qris.image;
        if(qrisName) qrisName.textContent = storeConfig.paymentMethods.qris.name;
        
        if (qrisInstructionList) {
            storeConfig.paymentMethods.qris.instructions.forEach(inst => {
                const li = document.createElement("li");
                li.textContent = inst;
                qrisInstructionList.appendChild(li);
            });
        }
    }

    const footerAbout = document.getElementById("footer-about");
    if (footerAbout) footerAbout.textContent = storeConfig.footer.about;
    
    const quickLinksContainer = document.getElementById("footer-quick-links");
    if (quickLinksContainer) {
        storeConfig.footer.quickLinks.forEach(link => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="${link.url}">${link.name}</a>`;
            quickLinksContainer.appendChild(li);
        });
    }

    const footerEmail = document.getElementById("footer-email");
    if (footerEmail) footerEmail.textContent = storeConfig.footer.contact.email;
    
    const linkEmail = document.getElementById("link-email");
    if (linkEmail) linkEmail.href = `mailto:${storeConfig.footer.contact.email}`;
    
    const footerPhone = document.getElementById("footer-phone");
    if (footerPhone) footerPhone.textContent = storeConfig.footer.contact.phone;
    
    const linkPhone = document.getElementById("link-phone");
    if (linkPhone) linkPhone.href = `tel:${storeConfig.footer.contact.phone.replace(/[^0-9+]/g, '')}`;
    
    const footerAddress = document.getElementById("footer-address");
    if (footerAddress) footerAddress.textContent = storeConfig.footer.contact.address;
    
    const linkAddress = document.getElementById("link-address");
    if (linkAddress) linkAddress.href = storeConfig.footer.contact.mapLink;
    
    const footerCopyright = document.getElementById("footer-copyright");
    if (footerCopyright) footerCopyright.textContent = storeConfig.footer.copyright;

    const socialLinksContainer = document.getElementById("social-links");
    if (socialLinksContainer) {
        storeConfig.footer.socialMedia.forEach(social => {
            const link = document.createElement("a");
            link.href = social.url;
            link.title = social.name;
            link.target = "_blank";
            link.innerHTML = `<i class="${social.icon}"></i>`;
            socialLinksContainer.appendChild(link);
        });
    }

    const chatForm = document.getElementById("chat-form");
    const chatInput = document.getElementById("chat-input");
    const chatMessages = document.getElementById("chat-messages");

    if (chatForm && chatInput && chatMessages) {
        let conversationHistory = [
            { role: "system", content: storeConfig.aiService.systemPrompt }
        ];

        function appendMessage(role, text) {
            const msgDiv = document.createElement("div");
            msgDiv.classList.add("chat-msg", role === "user" ? "chat-msg-user" : "chat-msg-ai");
            msgDiv.style.maxWidth = "85%";
            msgDiv.style.animation = "fadeIn 0.3s ease-out";
            
            let formattedText = text.replace(/\/prod/g, '<a href="/prod" style="color: inherit; text-decoration: underline; font-weight: bold;">Halaman Produk</a>')
                                    .replace(/\/pay/g, '<a href="/pay" style="color: inherit; text-decoration: underline; font-weight: bold;">Halaman Pembayaran</a>')
                                    .replace(/\/prof/g, '<a href="/prof" style="color: inherit; text-decoration: underline; font-weight: bold;">Halaman Info</a>')
                                    .replace(/\/cart/g, '<a href="/cart" style="color: inherit; text-decoration: underline; font-weight: bold;">Halaman Keranjang</a>');
            
            if (role === "user") {
                msgDiv.style.alignSelf = "flex-end";
                msgDiv.innerHTML = `
                    <div style="display: flex; gap: 10px; align-items: flex-end; flex-direction: row-reverse;">
                        <div class="msg-bubble" style="background: linear-gradient(135deg, #5c2d91 0%, #3a1c5d 100%); color: #ffffff; padding: 14px 18px; border-radius: 20px; border-bottom-right-radius: 4px; box-shadow: 0 4px 15px rgba(92,45,145,0.2); font-size: 14px; line-height: 1.6;">
                            ${formattedText}
                        </div>
                    </div>
                `;
            } else {
                msgDiv.style.alignSelf = "flex-start";
                msgDiv.innerHTML = `
                    <div style="display: flex; gap: 10px; align-items: flex-end;">
                        <div style="width: 30px; height: 30px; background: #5c2d91; color: white; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 12px; flex-shrink: 0; box-shadow: 0 2px 5px rgba(92,45,145,0.2);">
                            <i class="fas fa-robot"></i>
                        </div>
                        <div class="msg-bubble" style="background: #ffffff; color: #2d3748; padding: 14px 18px; border-radius: 20px; border-bottom-left-radius: 4px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); font-size: 14px; line-height: 1.6; border: 1px solid #edf2f7;">
                            ${formattedText}
                        </div>
                    </div>
                `;
            }
            chatMessages.appendChild(msgDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        chatForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const userText = chatInput.value.trim();
            if (!userText) return;

            appendMessage("user", userText);
            chatInput.value = "";
            conversationHistory.push({ role: "user", content: userText });

            const typingDiv = document.createElement("div");
            typingDiv.classList.add("chat-msg", "chat-msg-ai", "typing-indicator");
            typingDiv.style.alignSelf = "flex-start";
            typingDiv.style.maxWidth = "85%";
            typingDiv.innerHTML = `
                <div style="display: flex; gap: 10px; align-items: flex-end;">
                    <div style="width: 30px; height: 30px; background: #5c2d91; color: white; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 12px; flex-shrink: 0; box-shadow: 0 2px 5px rgba(92,45,145,0.2);">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="msg-bubble" style="background: #ffffff; color: #2d3748; padding: 14px 18px; border-radius: 20px; border-bottom-left-radius: 4px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); font-size: 14px; line-height: 1.6; border: 1px solid #edf2f7;">
                        <i class="fas fa-circle-notch fa-spin"></i> Sedang mengetik...
                    </div>
                </div>
            `;
            chatMessages.appendChild(typingDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;

            try {
                const response = await fetch(storeConfig.aiService.baseUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${storeConfig.aiService.apiKey}`
                    },
                    body: JSON.stringify({
                        model: storeConfig.aiService.model, 
                        messages: conversationHistory,
                        temperature: 0.7
                    })
                });

                const data = await response.json();
                chatMessages.removeChild(typingDiv);

                if (data.choices && data.choices.length > 0) {
                    const aiText = data.choices[0].message.content;
                    appendMessage("ai", aiText);
                    conversationHistory.push({ role: "assistant", content: aiText });
                } else {
                    appendMessage("ai", "Maaf, sistem sedang sibuk. Silakan coba lagi.");
                }
            } catch (error) {
                console.error("AI Error:", error);
                chatMessages.removeChild(typingDiv);
                appendMessage("ai", "Maaf, terjadi kesalahan koneksi server AI. Silakan hubungi admin via WhatsApp.");
            }
        });
    }
});
