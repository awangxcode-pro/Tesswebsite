/* ==========================================
   CONFIG.JS - AWANG MARKET
   ========================================== */

const storeConfig = {
    storeName: "Awang OfficiaL",
    shortDescription: "Pusat Kebutuhan Digital Terpercaya",
    whatsappNumber: "556184127506",
    
    aiService: {
        baseUrl: "https://api.groq.com/openai/v1/chat/completions",
        aiName: "Customer Service",
        apiProvider: "groq",
        apiKey: "gsk_" + "Qe2rfsEbitCZ96Gc2swwWGdyb3FY6oSTtndcrC5QAa8ZVJWFyzoU",
        model: "llama-3.3-70b-versatile",
        systemPrompt: "Anda adalah Asisten Customer Service AI resmi dari Awang OFC, toko digital terpercaya di Indonesia yang dikelola oleh Awang. Tugas utama Anda adalah membantu pengunjung dengan ramah, profesional, dan solutif. Anda mengetahui semua informasi toko. Produk kami meliputi: 1. Panel Pterodactyl (Ram 1GB dan Ram 2GB). 2. Layanan Lainnya 3. nokos all negara ( nomor kosong ). PENTING: Jangan pernah menyebutkan harga barang apapun dalam respon Anda, cukup sebutkan nama layanannya saja. Metode pembayaran yang didukung meliputi QRIS (Tanpa biaya admin), DANA. Jika pengunjung bertanya tentang cara membeli atau menuju halaman tertentu, berikan instruksi dan sertakan link berikut: Halaman Produk: /prod , Halaman Pembayaran: /pay , Halaman Profil & Info: /prof , Halaman Keranjang: /cart , Kembali ke Beranda: / . Jawablah dengan ringkas, jelas, dan selalu utamakan kepuasan pelanggan."
    },

    images: {
        profile: "assets/images/profile.jpg",
        mainBanner: "assets/images/banner.jpg",
        promoBanners: [
            "assets/images/promo1.jpg",
            "assets/images/promo2.jpg",
            "assets/images/promo3.jpg"
        ]
    },

    ownerProfile: {
        tabName: "Pusat Informasi", 
        name: "Awang OfficiaL",
        role: "Founder & CEO Awang Market",
        aboutStore: "Awang Market adalah destinasi utama untuk kebutuhan server, Pterodactyl panel, dan script bot WhatsApp terpercaya di Indonesia.",
        
        description: "Selamat datang di ruang informasi resmi Awang Market. Berawal dari ketertarikan mendalam di dunia teknologi dan rekayasa perangkat lunak, platform ini dibangun untuk memberikan kemudahan dan infrastruktur digital yang solid bagi Anda. Komitmen kami adalah menghadirkan inovasi yang berkesinambungan serta keamanan transaksi yang terjamin untuk setiap pelanggan.",
        
        motto: '"Inovasi tanpa batas, pelayanan tanpa kompromi."',
        
        contactText: "Punya pertanyaan khusus, penawaran kerja sama, atau butuh bantuan teknis tingkat lanjut? Jangan ragu untuk menghubungi tim kami secara langsung."
    },

    paymentMethods: {
        qris: {
            image: "assets/images/qris.jpg",
            name: "QRIS All Payment",
            instructions: [
                "Buka aplikasi e-wallet atau m-banking Anda.",
                "Pilih menu Scan QRIS atau Upload dari Galeri.",
                "Scan/unggah gambar QRIS Awang OFC di atas.",
                "Masukkan nominal sesuai dengan total tagihan.",
                "Konfirmasi pembayaran dan simpan bukti transfer."
            ]
        },
        accounts: [
            {
                bank: "DANA",
                number: "085848307759",
                name: "ANWAR R****"
            }
        ]
    },

    categories: [
        {
            id: "panel",
            name: "Panel Pterodactyl",
            icon: "fas fa-server",
            image: "assets/images/panel-cat.jpg",
            description: "Panel kontrol server yang powerful dan mudah digunakan.",
            products: [
                {
                    id: "p1",
                    name: "Panel Ram 1GB",
                    description: "1GB DDR4 Memory, 1 Core CPU, 10GB SSD Storage, Unlimited Bandwidth.",
                    price: "Rp 1.000",
                    priceNumber: 1000,
                    icon: "fas fa-server"
                },
                {
                    id: "p2",
                    name: "Panel Ram 2GB",
                    description: "2GB DDR4 Memory, 1 Core CPU, 20GB SSD Storage, Unlimited Bandwidth.",
                    price: "Rp 1.500",
                    priceNumber: 1500,
                    icon: "fas fa-server"
                },
                {
                    id: "p3",
                    name: "Panel Ram 3GB",
                    description: "3GB DDR4 Memory, 2 Core CPU, 30GB SSD Storage, Unlimited Bandwidth.",
                    price: "Rp 2.000",
                    priceNumber: 2000,
                    icon: "fas fa-server"
                },
                {
                    id: "p4",
                    name: "Panel Ram 4GB",
                    description: "4GB DDR4 Memory, 2 Core CPU, 40GB SSD Storage, Unlimited Bandwidth.",
                    price: "Rp 2.500",
                    priceNumber: 2500,
                    icon: "fas fa-server"
                },
                {
                    id: "p5",
                    name: "Panel Ram 5GB",
                    description: "5GB DDR4 Memory, 2 Core CPU, 50GB SSD Storage, Unlimited Bandwidth.",
                    price: "Rp 3.000",
                    priceNumber: 3000,
                    icon: "fas fa-server"
                },
                {
                    id: "p6",
                    name: "Panel Ram 6GB",
                    description: "6GB DDR4 Memory, 3 Core CPU, 60GB SSD Storage, Unlimited Bandwidth.",
                    price: "Rp 3.500",
                    priceNumber: 3500,
                    icon: "fas fa-server"
                },
                {
                    id: "p7",
                    name: "Panel Ram 7GB",
                    description: "7GB DDR4 Memory, 3 Core CPU, 70GB SSD Storagez, Unlimited Bandwidth.",
                    price: "Rp 4.000",
                    priceNumber: 4000,
                    icon: "fas fa-server"
                },
                {
                    id: "p8",
                    name: "Panel Ram 8GB",
                    description: "8GB DDR4 Memory, 4 Core CPU, 80GB SSD Storage, Unlimited Bandwidth.",
                    price: "Rp 4.500",
                    priceNumber: 4500,
                    icon: "fas fa-server"
                },
                {
                    id: "p9",
                    name: "Panel Ram 9GB",
                    description: "9GB DDR4 Memory, 4 Core CPU, 90GB SSD Storage, Unlimited Bandwidth.",
                    price: "Rp 5.000",
                    priceNumber: 5000,
                    icon: "fas fa-server"
                },
                {
                    id: "p10",
                    name: "Panel Ram Unlimited",
                    description: "Unlimited Memory, 4 Core CPU, Unlimited SSD Storage, Unlimited Bandwidth.",
                    price: "Rp 6.000",
                    priceNumber: 6000,
                    icon: "fas fa-server"
                }
            ]
        },
        {
            id: "Upgrade",
            name: "Upgrade Role",
            icon: "fas fa-user-circle",
            image: "assets/images/upgrade.jpg",
            description: "Peluang anda yang ingin memulai bisnis seller panel..",
            products: [
                {
                    id: "u1",
                    name: "Join Reseller Panel",
                    description: "Bisa Creat panel sepuasny, Bisa jualan panel lagi, Bisa open sewa bot wa & tele, Bisa open jasa run bot wa & tele, Di jamin balmod asal niat!!.",
                    price: "Rp 8.000",
                    priceNumber: 8000,
                    icon: "fas fa-user-circle"
                },
                {
                    id: "u2",
                    name: "Join Admin Panel",
                    description: "Bisa Creat panel sepuasny, Bisa jualan panel lagi, Bisa open reseller panel, Bisa open sewa bot wa & tele, Bisa open jasa run bot wa & tele, Di jamin balmod asal niat!!, Bisa taruh buyer di gb gw.",
                    price: "Rp 10.000",
                    priceNumber: 10000,
                    icon: "fas fa-user-circle"
                },
                {
                    id: "u3",
                    name: "Join Partner Panel",
                    description: "Bisa Creat panel sepuasny, Bisa jualan panel lagi, Bisa open reseller panel, Bisa open admin panel, Bisa open sewa bot wa & tele, Bisa open jasa run bot wa & tele, Di jamin balmod asal niat!!, Bisa taruh buyer di gb gw.",
                    price: "Rp 15.000",
                    priceNumber: 15000,
                    icon: "fas fa-user-circle"
                },
                {
                    id: "u4",
                    name: "Join Owner Panel",
                    description: "Bisa Creat panel sepuasny, Bisa jualan panel lagi, Bisa open reseller panel, Bisa open admin panel, Bisa open partner panel, Bisa open sewa bot wa & tele, Bisa open jasa run bot wa & tele, Di jamin balmod asal niat!!, Bisa taruh buyer di gb gw.",
                    price: "Rp 20.000",
                    priceNumber: 20000,
                    icon: "fas fa-user-circle"
                }
            ]
        },
        {
            id: "nokos",
            name: "Nokos All Negara",
            icon: "fas fa-phone",
            image: "assets/images/nokos.jpg",
            description: "Nomor kosong dari berbagai negara untuk verifikasi akun. dan bisa request negara",
            products: [
                {
                    id: "n1",
                    name: "Nokos Indonesia",
                    description: "Nomor +62 Indonesia, Instant Delivery, Support OTP WhatsApp.",
                    price: "Rp 6.000",
                    priceNumber: 6000,
                    icon: "fas fa-phone"
                },
                {
                    id: "n2",
                    name: "Nokos Usa",
                    description: "Nomor +1 USA, Instant Delivery, Support OTP WhatsApp, Garansi 24 jam.",
                    price: "Rp 45.000",
                    priceNumber: 45000,
                    icon: "fas fa-phone"
                },
                {
                    id: "n3",
                    name: "Nokos Africa",
                    description: "Nomor +27 Afrika Selatan, Instant Delivery, Support OTP WhatsApp, Garansi 24 jam.",
                    price: "Rp 7.000",
                    priceNumber: 7000,
                    icon: "fas fa-phone"
                },
                {
                    id: "n4",
                    name: "Nokos Canada",
                    description: "Nomor +1 Canada, Instant Delivery, Support OTP WhatsApp, Garansi 24 jam.",
                    price: "Rp 9.000",
                    priceNumber: 9000,
                    icon: "fas fa-phone"
                },
                {
                    id: "n5",
                    name: "Nokos Philipines",
                    description: "Nomor +63 Philippines, Instant Delivery, Support OTP WhatsApp, Garansi 24 jam.",
                    price: "Rp 8.000",
                    priceNumber: 8000,
                    icon: "fas fa-phone"
                },
                {
                    id: "n6",
                    name: "Nokos Brasil",
                    description: "Nomor +55 Brazil, Instant Delivery, Support OTP WhatsApp, Garansi 24 jam.",
                    price: "Rp 23.000",
                    priceNumber: 23000,
                    icon: "fas fa-phone"
                },
                {
                    id: "n7",
                    name: "Nokos Germany",
                    description: "Nomor +49 Germany, Instant Delivery, Support OTP WhatsApp, Garansi 24 jam.",
                    price: "Rp 85.000",
                    priceNumber: 85000,
                    icon: "fas fa-phone"
                },
                {
                    id: "n8",
                    name: "Nokos Palestina",
                    description: "Nomor +970 Palestine, Instant Delivery, Support OTP WhatsApp, Garansi 24 jam.",
                    price: "Rp 7.000",
                    priceNumber: 7000,
                    icon: "fas fa-phone"
                },
                {
                    id: "n9",
                    name: "Nokos Israel",
                    description: "Nomor +972 Israel, Instant Delivery, Support OTP WhatsApp, Garansi 24 jam.",
                    price: "Rp 70.000",
                    priceNumber: 70000,
                    icon: "fas fa-phone"
                },
                {
                    id: "n10",
                    name: "Nokos Malaysia",
                    description: "Nomor +60 Malaysia, Instant Delivery, Support OTP WhatsApp, Garansi 24 jam.",
                    price: "Rp 10.000",
                    priceNumber: 10000,
                    icon: "fas fa-phone"
                },
                {
                    id: "n11",
                    name: "Nokos Manaco",
                    description: "Nomor +377 Monaco, Instant Delivery, Support OTP WhatsApp, Garansi 24 jam.",
                    price: "Rp 11.000",
                    priceNumber: 11000,
                    icon: "fas fa-phone"
                },
                {
                    id: "n12",
                    name: "Nokos Saudi Arab",
                    description: "Nomor +966 Saudi Arabia, Instant Delivery, Support OTP WhatsApp, Garansi 24 jam.",
                    price: "Rp 35.000",
                    priceNumber: 35000,
                    icon: "fas fa-phone"
                },
                {
                    id: "n13",
                    name: "Nokos Thailand",
                    description: "Nomor +66 Thailand, Instant Delivery, Support OTP WhatsApp, Garansi 24 jam.",
                    price: "Rp 17.000",
                    priceNumber: 17000,
                    icon: "fas fa-phone"
                },
                {
                    id: "n14",
                    name: "Nokos Vietnam",
                    description: "Nomor +84 Vietnam, Instant Delivery, Support OTP WhatsApp, Garansi 24 jam.",
                    price: "Rp 8.000",
                    priceNumber: 8000,
                    icon: "fas fa-phone"
                },
                {
                    id: "n15",
                    name: "Nokos Laos",
                    description: "Nomor +856 Laos, Instant Delivery, Support OTP WhatsApp, Garansi 24 jam.",
                    price: "Rp 15.000",
                    priceNumber: 15000,
                    icon: "fas fa-phone"
                }
            ]
        },
        {
            id: "join",
            name: "Join Murid",
            icon: "fas fa-user-graduate",
            image: "assets/images/join.jpg",
            description: "Layanan edukasi dengan akses berbagai platform belajar.",
            products: [
                {
                    id: "j1",
                    name: "Murid Nomor Kosong",
                    description: "Mendapatkan Website Nokos, Mendapatkan Aplikasi Virtual SIM, Full Pengejaran Bagi Pemula, Bisa Menjual Ulang Murid Nokos, Di Jamin Balik Modal Asal Niat.",
                    price: "Rp 5.000",
                    priceNumber: 5000,
                    icon: "fas fa-user-graduate"
                },
                {
                    id: "n2",
                    name: "Murid Suntik Sosmed",
                    description: "Dikasih Website Suntik Sosmed, Full Pengajaran Bagi Pemula, Bisa Menjual Ulang Murid Suntik, Di Jamin Balik Modal Asal Niat.",
                    price: "Rp 6.000",
                    priceNumber: 6000,
                    icon: "fas fa-user-graduate"
                }
            ]
        },
        {
            id: "sewa",
            name: "Sewa Bot",
            icon: "fas fa-robot",
            image: "assets/images/sewa.jpg",
            description: "Bot WA untuk otomasi bisnis & layanan pelanggan.",
            products: [
                {
                    id: "se1",
                    name: "1 Minggu ",
                    description: "Cocok untuk jaga grub kalian.",
                    price: "Rp 5.000",
                    priceNumber: 5000,
                    icon: "fas fa-robot"
                },
                {
                    id: "se2",
                    name: "2 Minggu",
                    description: "Cocok untuk jaga grub kalian.",
                    price: "Rp 10.000",
                    priceNumber: 10000,
                    icon: "fas fa-robot"
                },
                {
                    id: "se3",
                    name: "1 Bulan",
                    description: "Cocok untuk jaga grub kalian.",
                    price: "Rp 15.000",
                    priceNumber: 15000,
                    icon: "fas fa-robot"
                },
                {
                    id: "se4",
                    name: "2 Bulan",
                    description: "Cocok untuk jaga grub kalian.",
                    price: "Rp 20.000",
                    priceNumber: 20000,
                    icon: "fas fa-robot"
                }
            ]
        },
        {
            id: "jasa",
            name: "Jasa Rename Sc",
            icon: "fas fa-code",
            image: "assets/images/jasa.jpg",
            description: "Rename & custom script sesuai kebutuhan.",
            products: [
                {
                    id: "se1",
                    name: "Rename",
                    description: "Rubah nama owner, Rubah nama bot,Rubah gambar bot, Dan lainnya.",
                    price: "Rp 9.000",
                    priceNumber: 9000,
                    icon: "fas fa-code"
                }
            ]
        }
    ],

    aboutUs: [
        {
            title: "Siapa Kami?",
            content: "Awang OfficiaL adalah platform e-commerce yang berdedikasi untuk menyediakan produk-produk digital dan layanan server berkualitas tinggi. Kami berfokus pada kecepatan, keamanan, dan kepuasan pelanggan."
        },
        {
            title: "Visi & Misi Toko",
            content: "Visi kami adalah menjadi penyedia layanan digital nomor satu di Indonesia. Misi kami meliputi penyediaan infrastruktur server yang stabil, script bot yang up-to-date, dan pelayanan customer service yang responsif 24/7."
        },
        {
            title: "Garansi & Kebijakan",
            content: "Semua produk digital dan layanan server kami dilengkapi dengan garansi. Jika terdapat kendala pada server dalam masa aktif, kami memberikan garansi perbaikan atau pergantian secara gratis sesuai syarat dan ketentuan."
        }
    ],

    footer: {
        about: "Awang OfficaL selalu mengutamakan kepuasan pelanggan dengan produk bergaransi dan dukungan penuh.",
        quickLinks: [
            {
                name: "Beranda",
                url: "/"
            },
            {
                name: "Katalog Produk",
                url: "/prod"
            },
            {
                name: "Pusat Informasi",
                url: "/prof"
            }
        ],
        contact: {
            email: "admin@awangmarket.com",
            phone: "556184127506",
            address: "Tegal, Jawa Tengah, Indonesia",
            mapLink: "https://maps.google.com/?q=Tegal,Jawa+Tengah"
        },
        socialMedia: [
            {
                name: "Telegram",
                url: "https://t.me/awangoffc",
                icon: "fab fa-telegram-plane"
            },
            {
                name: "YouTube",
                url: "https://youtube.com/@awangofc",
                icon: "fab fa-youtube"
            },
            {
                name: "WhatsApp",
                url: "https://wa.me/556184127506",
                icon: "fab fa-whatsapp"
            }
        ],
        copyright: "© 2026 Awang OfficiaL. Hak Cipta Dilindungi."
    }
};
