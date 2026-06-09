// ==========================================
// 1. DỮ LIỆU TẬP TRUNG TẤT CẢ SẢN PHẨM (27 SẢN PHẨM)
// ==========================================
const productList = [
    // --- 12 LAPTOP ASUS GAMING ---
    { 
        id: "1", 
        name: "Laptop ASUS Gaming V16 V3607VU-RP343W", 
        price: 24990000, 
        image: "../assets/images/laptop1.jpg", 
        desc: "Thiết kế hầm hố, tản nhiệt mát mẻ, lựa chọn tuyệt vời cho game thủ eSports.",
        specs: { "CPU": "Intel Core 5-210H", "Card đồ họa (GPU)": "NVIDIA GeForce RTX 4050", "Dung lượng RAM": "16GB", "Ổ cứng": "512GB SSD", "Màn hình": "16 inches WUXGA" }
    },
    { 
        id: "2", 
        name: "Laptop ASUS Gaming Vivobook 16X K3605VC", 
        price: 19990000, 
        image: "../assets/images/laptop2.jpg", 
        desc: "Dòng Vivobook lai Gaming mỏng nhẹ nhưng vẫn sở hữu sức mạnh đồ họa ấn tượng.",
        specs: { "CPU": "Intel Core i5-13420H", "Card đồ họa (GPU)": "NVIDIA GeForce RTX 3050", "Dung lượng RAM": "16GB", "Ổ cứng": "512GB SSD", "Màn hình": "16 inches WUXGA" }
    },
    { 
        id: "3", 
        name: "Laptop ASUS TUF Gaming F16 FX607VU-RL045W", 
        price: 26990000, 
        image: "../assets/images/laptop3.jpg", 
        desc: "Độ bền chuẩn quân đội, hiệu năng cực khỏe để cày cuốc ngày đêm.",
        specs: { "CPU": "Intel Core 5-210H", "Card đồ họa (GPU)": "NVIDIA GeForce RTX 4050", "Dung lượng RAM": "16GB", "Ổ cứng": "512GB SSD", "Màn hình": "16 inches FHD+" }
    },
    { 
        id: "4", 
        name: "Laptop ASUS TUF Gaming F16 FX608JHR-RV037W", 
        price: 35890000, 
        image: "../assets/images/laptop4.jpg", 
        desc: "Bản nâng cấp toàn diện với chip i7 siêu phân luồng và không gian lưu trữ 1TB rộng rãi.",
        specs: { "CPU": "Intel Core i7-14650HX", "Card đồ họa (GPU)": "NVIDIA GeForce RTX 5050", "Dung lượng RAM": "16GB", "Ổ cứng": "1TB SSD", "Màn hình": "16 inches WUXGA" }
    },
    { 
        id: "5", 
        name: "Laptop ASUS TUF Gaming A15 FA506NCG-HN184W", 
        price: 22490000, 
        image: "../assets/images/laptop5.jpg", 
        desc: "Cấu hình đội đỏ AMD Ryzen 7 mạnh mẽ, đa nhiệm cực tốt và tiết kiệm pin.",
        specs: { "CPU": "AMD Ryzen 7-7445HS", "Card đồ họa (GPU)": "NVIDIA GeForce RTX 3050", "Dung lượng RAM": "16GB", "Ổ cứng": "512GB SSD", "Màn hình": "15.6 inches Full HD" }
    },
    { 
        id: "6", 
        name: "Laptop ASUS TUF Gaming F16 FX608JHI-TU209W", 
        price: 39990000, 
        image: "../assets/images/laptop6.jpg", 
        desc: "Sức mạnh tuyệt đỉnh với card đồ họa RTX 5050 thế hệ mới nhất.",
        specs: { "CPU": "Intel Core i7-14650HX", "Card đồ họa (GPU)": "NVIDIA GeForce RTX 5050", "Dung lượng RAM": "16GB", "Ổ cứng": "512GB SSD", "Màn hình": "16 inches WUXGA" }
    },
    { 
        id: "7", 
        name: "Laptop ASUS ROG Strix G16 G614PH-S5101W", 
        price: 43990000, 
        image: "../assets/images/laptop7.jpg", 
        desc: "Dòng ROG cao cấp, tản nhiệt kim loại lỏng, dải LED RGB viền máy cực kỳ rực rỡ.",
        specs: { "CPU": "AMD Ryzen 9-8940HX", "Card đồ họa (GPU)": "NVIDIA GeForce RTX 5050", "Dung lượng RAM": "16GB", "Ổ cứng": "512GB SSD", "Màn hình": "16 inches WQXGA" }
    },
    { 
        id: "8", 
        name: "Laptop ASUS ROG Flow Z13 GZ302EA-RU145WS", 
        price: 92990000, 
        image: "../assets/images/laptop8.jpg", 
        desc: "Tablet Gaming mạnh nhất thế giới, thiết kế tháo rời bàn phím đỉnh cao công nghệ.",
        specs: { "CPU": "AI MAX+ 395", "Card đồ họa (GPU)": "AMD Radeon", "Dung lượng RAM": "128GB", "Ổ cứng": "1TB SSD", "Màn hình": "13.4 inches WQXGA" }
    },
    { 
        id: "9", 
        name: "Laptop ASUS Gaming V16 V3607VJ-RP071W", 
        price: 24290000, 
        image: "../assets/images/laptop9.jpg", 
        desc: "Màn hình tỉ lệ 16:10 mở rộng không gian hiển thị, lý tưởng cho lập trình viên.",
        specs: { "CPU": "Intel Core 5-210H", "Card đồ họa (GPU)": "NVIDIA GeForce RTX 3050", "Dung lượng RAM": "16GB", "Ổ cứng": "512GB SSD", "Màn hình": "16 inches WUXGA" }
    },
    { 
        id: "10", 
        name: "Laptop ASUS ROG Zephyrus G14 GA403GM-SY004W", 
        price: 63590000, 
        image: "../assets/images/laptop10.jpg", 
        desc: "Cỗ máy 14 inch mạnh nhất, màn hình 3K OLED siêu đẹp, mặt lưng AniMe Matrix độc đáo.",
        specs: { "CPU": "AMD Ryzen 9 AI 465", "Card đồ họa (GPU)": "NVIDIA GeForce RTX 5060", "Dung lượng RAM": "32GB", "Ổ cứng": "1TB SSD", "Màn hình": "14.0 inches 3K OLED" }
    },
    { 
        id: "11", 
        name: "Laptop ASUS TUF Dash F15 (Custom 32GB Edition)", 
        price: 27500000, 
        image: "../assets/images/laptop11.jpg", 
        desc: "Cấu hình quốc dân cực kỳ tối ưu. Sẵn 32GB RAM và card RTX 3060, máy dư sức cân mượt game nặng.",
        specs: { "CPU": "Intel Core i5-12450H", "Card đồ họa (GPU)": "NVIDIA GeForce RTX 3060 6GB", "Dung lượng RAM": "32GB DDR5 4800MHz", "Ổ cứng": "512GB PCIe Gen4 SSD", "Màn hình": "15.6 inches FHD 144Hz" }
    },
    { 
        id: "12", 
        name: "Laptop ASUS ROG Strix SCAR 16", 
        price: 75000000, 
        image: "../assets/images/laptop12.jpg", 
        desc: "Quái vật phần cứng. Xử lý mượt mà các bài toán mô phỏng hệ thống phức tạp và các chuỗi thuật toán đa luồng nặng nề nhất.",
        specs: { "CPU": "Intel Core i9-14900HX", "Card đồ họa (GPU)": "NVIDIA GeForce RTX 4080 12GB", "Dung lượng RAM": "32GB DDR5 5600MHz", "Ổ cứng": "1TB PCIe Gen4 SSD", "Màn hình": "16 inches 2.5K Mini LED" }
    },

    // --- 5 CHUỘT GAMING ---
    {
        id: "mouse-01",
        name: "Chuột Logitech G502 Hero High Performance",
        price: 1190000,
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60",
        desc: "Cảm biến HERO 25K siêu chính xác, 11 nút lập trình và hệ thống tạ tùy chỉnh trọng lượng.",
        specs: { "Cảm biến": "HERO 25K", "Độ phân giải (DPI)": "100 - 25.600 DPI", "Số nút": "11 nút", "Kết nối": "Dây cáp USB" }
    },
    {
        id: "mouse-02",
        name: "Chuột Không Dây Razer DeathAdder V3 Pro",
        price: 3490000,
        image: "../assets/images/chuot.jpg",
        desc: "Thiết kế công thái học siêu nhẹ 63g, mắt đọc Focus Pro 30K cực đỉnh cho game thủ FPS.",
        specs: { "Cảm biến": "Focus Pro 30K", "Trọng lượng": "63g", "Thời lượng pin": "Lên đến 90 giờ", "Kết nối": "Không dây Razer HyperSpeed" }
    },
    {
        id: "mouse-03",
        name: "Chuột Gaming SteelSeries Rival 3",
        price: 650000,
        image: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=500&auto=format&fit=crop&q=60",
        desc: "Chất liệu polymer siêu bền, đèn LED RGB PrismSync 3 vùng độc lập, giá thành hợp lý.",
        specs: { "Cảm biến": "TrueMove Core", "Độ phân giải (DPI)": "8.500 DPI", "Độ bền": "60 triệu lần click", "Chất liệu": "Nhựa ABS cao cấp" }
    },
    {
        id: "mouse-04",
        name: "Chuột Không Dây ASUS ROG Keris Wireless AimPoint",
        price: 2150000,
        image: "../assets/images/chuot2.jpg",
        desc: "Trọng lượng 75g, cảm biến ROG AimPoint 36.000 DPI, hỗ trợ thay switch nhanh độc quyền.",
        specs: { "Cảm biến": "ROG AimPoint", "Độ phân giải (DPI)": "36.000 DPI", "Trọng lượng": "75g", "Kết nối": "Bluetooth / Wireless 2.4GHz / Dây" }
    },
    {
        id: "mouse-05",
        name: "Chuột Corsair M65 RGB Ultra Wireless",
        price: 2890000,
        image: "../assets/images/chuot3.jpg",
        desc: "Khung nhôm anodized siêu bền, cảm biến 26.000 DPI tích hợp con quay hồi chuyển 6 trục.",
        specs: { "Cảm biến": "MARKSMAN 26K", "Khung viền": "Nhôm Anodized", "Tính năng đặc biệt": "Con quay hồi chuyển 6 trục", "Kết nối": "Slipstream Wireless / Bluetooth" }
    },

    // --- 5 BÀN PHÍM CƠ ---
    {
        id: "kb-01",
        name: "Bàn phím cơ AKKO 3068B Plus Blue on White",
        price: 1590000,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60",
        desc: "Layout 68 phím nhỏ gọn, kết nối 3 chế độ (Type-C/Bluetooth/2.4Ghz), Akko Switch v3 mượt mà.",
        specs: { "Layout": "68 Phím (65%)", "Switch": "Akko CS Switch V3", "Keycap": "PBT Double-Shot", "Kết nối": "3 Chế độ (Dây / Bluetooth / 2.4GHz)" }
    },
    {
        id: "kb-02",
        name: "Bàn phím cơ Corsair K70 RGB PRO Cherry MX",
        price: 3890000,
        image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500&auto=format&fit=crop&q=60",
        desc: "Khung nhôm cao cấp, công nghệ xử lý AXON nhanh gấp 8 lần bàn phím thường, có đệm kê tay.",
        specs: { "Layout": "Fullsize 104 Phím", "Switch": "Cherry MX Mechanical", "Tần số phản hồi": "8000Hz (Công nghệ AXON)", "Đèn LED": "RGB từng phím" }
    },
    {
        id: "kb-03",
        name: "Bàn phím cơ Leopold FC900R PD OE Dark Blue",
        price: 3250000,
        image: "../assets/images/phim.jpg",
        desc: "Thương hiệu cao cấp từ Hàn Quốc, Keycap PBT Double-shot siêu dày, gõ đầm tay và chống ồn tốt.",
        specs: { "Layout": "Fullsize", "Switch": "Cherry MX", "Chất liệu Keycap": "PBT Double-Shot 1.5mm", "Xuất xứ": "Hàn Quốc" }
    },
    {
        id: "kb-04",
        name: "Bàn phím cơ Razer BlackWidow V4 Pro",
        price: 5690000,
        image: "../assets/images/phim1.jpg",
        desc: "Razer Green/Yellow Switch cơ học chuyên game, hệ thống đèn LED gầm rực rỡ, trang bị nút xoay Command Dial.",
        specs: { "Layout": "Fullsize + Macro Keys", "Switch": "Razer Mechanical Switch", "Đèn LED": "Razer Chroma RGB", "Phụ kiện": "Đệm kê tay bọc da cao cấp" }
    },
    {
        id: "kb-05",
        name: "Bàn phím cơ Keychron K2 Pro QMK/VIA",
        price: 2390000,
        image: "../assets/images/phim2.jpg",
        desc: "Layout 75%, hỗ trợ tùy biến phím qua phần mềm VIA, tương thích hoàn hảo cho cả Mac và Windows.",
        specs: { "Layout": "75%", "Hỗ trợ phần mềm": "QMK / VIA", "Hot-swappable": "Có (Thay switch dễ dàng)", "Tương thích": "macOS / Windows / Android / iOS" }
    },

    // --- 5 CARD MÀN HÌNH / VGA ---
    {
        id: "vga-01",
        name: "Card màn hình ASUS ROG Strix GeForce RTX 4070 Ti SUPER",
        price: 26500000,
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500&auto=format&fit=crop&q=60",
        desc: "Kiến trúc Ada Lovelace, tản nhiệt 3 quạt hầm hố, hỗ trợ Ray Tracing và DLSS 3 ổn định ở độ phân giải 2K/4K.",
        specs: { "GPU": "NVIDIA GeForce RTX 4070 Ti SUPER", "Bộ nhớ VRAM": "16GB GDDR6X", "Băng thông": "256-bit", "Cổng kết nối": "3 x DisplayPort, 2 x HDMI" }
    },
    {
        id: "vga-02",
        name: "Card màn hình MSI GeForce RTX 4060 Ti Gaming X 8G",
        price: 11890000,
        image: "../assets/images/card.jpg",
        desc: "Hệ thống tản nhiệt TWIN FROZR 9 cực mát, dòng sản phẩm quốc dân tối ưu hiệu năng trên giá thành cho Streamer.",
        specs: { "GPU": "NVIDIA GeForce RTX 4060 Ti", "Bộ nhớ VRAM": "8GB GDDR6", "Tản nhiệt": "Twin Frozr 9 (2 Quạt)", "Đèn LED": "Mystic Light RGB" }
    },
    {
        id: "vga-03",
        name: "Card màn hình Gigabyte AORUS GeForce RTX 4090 Master 24G",
        price: 58900000,
        image: "../assets/images/card1.jpg",
        desc: "Quái vật đồ họa mạnh nhất hiện tại, tích hợp màn hình LCD hiển thị thông số và tản nhiệt quạt Bionic Shark.",
        specs: { "GPU": "NVIDIA GeForce RTX 4090", "Bộ nhớ VRAM": "24GB GDDR6X", "Băng thông": "384-bit", "Tính năng đặc biệt": "Màn hình LCD cạnh bên" }
    },
    {
        id: "vga-04",
        name: "Card màn hình ASUS Dual Radeon RX 7600 XT OC Edition 16GB",
        price: 9290000,
        image: "../assets/images/card2.jpg",
        desc: "Dung lượng VRAM lên tới 16GB từ AMD giúp xử lý mượt mà các tựa game AAA nặng và render video mượt mà.",
        specs: { "GPU": "AMD Radeon RX 7600 XT", "Bộ nhớ VRAM": "16GB GDDR6", "Băng thông": "128-bit", "Ép xung (OC)": "Có" }
    },
    {
        id: "vga-05",
        name: "Card màn hình Colorful iGame GeForce RTX 4060 Ultra W DUO OC",
        price: 8150000,
        image: "../assets/images/card3.jpg",
        desc: "Thiết kế tông màu trắng (White Edition) độc đáo bắt mắt kết hợp dải màu hologram, có nút ép xung nhanh vật lý.",
        specs: { "GPU": "NVIDIA GeForce RTX 4060", "Bộ nhớ VRAM": "8GB GDDR6", "Màu sắc": "Trắng Hologram", "Tính năng vật lý": "Nút One-Key Overclock" }
    }
];

// ==========================================
// 2. KHỞI TẠO GIỎ HÀNG TỪ LOCALSTORAGE
// ==========================================
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartUI() {
    const cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) cartCountEl.innerText = cart.length;
    localStorage.setItem('cart', JSON.stringify(cart));
}

// ==========================================
// 3. XỬ LÝ ĐỔ DỮ LIỆU TRANG DANH SÁCH (san-pham.html)
// ==========================================
function renderProducts() {
    const listEl = document.getElementById('product-list');
    if (!listEl) return;
    listEl.innerHTML = productList.map(p => {
        // Tự động kiểm tra linh kiện (chuột/phím/vga) không có sẵn "Ổ cứng" để tránh hiển thị trống badge bừa bãi
        const extraBadge1 = p.specs["Dung lượng RAM"] || p.specs["Cảm biến"] || p.specs["Switch"] || p.specs["GPU"];
        const extraBadge2 = p.specs["Ổ cứng"] || p.specs["Độ phân giải (DPI)"] || p.specs["Layout"] || p.specs["Bộ nhớ VRAM"];

        return `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="card shadow-sm h-100 border-0 rounded-3 text-center">
                    <div class="p-3">
                        <img src="${p.image}" class="card-img-top object-fit-contain" alt="${p.name}" style="height: 180px;">
                    </div>
                    <div class="card-body d-flex flex-column border-top pt-3">
                        <h5 class="card-title fs-6 fw-bold text-dark" style="min-height: 48px;">${p.name}</h5>
                        <p class="text-danger fw-bold fs-5 mt-2">${p.price.toLocaleString('vi-VN')}đ</p>
                        
                        <div class="d-flex justify-content-center gap-2 mb-3 mt-1">
                            <span class="badge bg-light text-dark border">${extraBadge1}</span>
                            <span class="badge bg-light text-dark border">${extraBadge2}</span>
                        </div>

                        <a href="chi-tiet.html?id=${p.id}" class="btn btn-outline-primary mt-auto w-100 fw-bold">Chi tiết</a>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ==========================================
// 4. XỬ LÝ ĐỔ DỮ LIỆU ĐỘNG TRANG CHI TIẾT (chi-tiet.html)
// ==========================================
function renderDetail() {
    const detailEl = document.getElementById('product-detail');
    if (!detailEl) return;

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const product = productList.find(p => p.id === id);

    if (product) {
        let specsRows = "";
        if (product.specs) {
            for (const [key, value] of Object.entries(product.specs)) {
                specsRows += `
                    <tr>
                        <td class="bg-light text-secondary p-3" style="width: 30%; font-weight: 500;">${key}</td>
                        <td class="p-3 text-dark" style="line-height: 1.6;">${value}</td>
                    </tr>
                `;
            }
        }

        detailEl.innerHTML = `
            <div class="col-md-5 text-center mb-4">
                <img src="${product.image}" class="img-fluid rounded shadow-sm p-4 bg-white" alt="${product.name}" style="max-height: 400px; object-fit: contain;">
            </div>
            <div class="col-md-7 ps-md-4">
                <h1 class="fw-bold h2 text-dark">${product.name}</h1>
                <h2 class="text-danger my-3 fw-bold">${product.price.toLocaleString('vi-VN')} VNĐ</h2>
                <p class="text-muted fs-6 mb-4" style="line-height: 1.6;">${product.desc}</p>
                <div class="mb-4">
                    <button class="btn btn-primary btn-lg px-4 py-2 fw-bold shadow-sm" onclick="addToCart('${product.id}')">Thêm vào giỏ hàng</button>
                    <a href="san-pham.html" class="btn btn-outline-secondary btn-lg px-4 py-2 ms-2 fw-bold">Quay lại shop</a>
                </div>
            </div>
            
            ${specsRows ? `
                <div class="col-12 mt-5 mb-5">
                    <div class="d-flex justify-content-between align-items-end mb-3">
                        <h3 class="fw-bold h4 mb-0 text-dark">Thông số kỹ thuật</h3>
                    </div>
                    <div class="border rounded overflow-hidden shadow-sm bg-white">
                        <table class="table table-bordered mb-0 align-middle">
                            <tbody>
                                ${specsRows}
                            </tbody>
                        </table>
                    </div>
                </div>
            ` : ""}
        `;
    }
}

// ==========================================
// 5. THÊM VÀO GIỎ HÀNG
// ==========================================
window.addToCart = function(id) {
    const product = productList.find(p => p.id === id);
    cart.push(product);
    updateCartUI();
    alert("Đã thêm " + product.name + " vào giỏ hàng thành công!");
};

// ==========================================
// 6. XỬ LÝ TRANG GIỎ HÀNG (gio-hang.html)
// ==========================================
function renderCart() {
    const cartEl = document.getElementById('cart-content');
    if (!cartEl) return;

    if (cart.length === 0) {
        cartEl.innerHTML = `
            <div class="text-center py-5">
                <h3 class="text-muted mb-4">Giỏ hàng của bạn đang trống</h3>
                <a href="san-pham.html" class="btn btn-primary btn-lg fw-bold">Tiếp tục mua sắm</a>
            </div>`;
        return;
    }

    let total = cart.reduce((sum, item) => sum + item.price, 0);
    let html = `
        <div class="table-responsive">
            <table class="table align-middle table-hover border">
                <thead class="table-light">
                    <tr>
                        <th class="text-center">Hình ảnh</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Giá</th>
                        <th class="text-center">Thao tác</th>
                    </tr>
                </thead>
                <tbody>`;
    
    cart.forEach((item, index) => {
        html += `
            <tr>
                <td class="text-center"><img src="${item.image}" width="60" height="60" style="object-fit: contain;"></td>
                <td><strong class="text-dark">${item.name}</strong></td>
                <td class="text-danger fw-bold">${item.price.toLocaleString('vi-VN')}đ</td>
                <td class="text-center"><button class="btn btn-sm btn-outline-danger fw-bold" onclick="removeFromCart(${index})">Xóa</button></td>
            </tr>`;
    });

    html += `
                </tbody>
            </table>
        </div>
        
        <div class="text-end mt-4 p-4 bg-white rounded shadow-sm border">
            <h4 class="mb-3">Tổng cộng thanh toán: <span class="text-danger fw-bold fs-3">${total.toLocaleString('vi-VN')}đ</span></h4>
            <button id="btn-checkout" class="btn btn-success btn-lg px-5 fw-bold" onclick="showPaymentMethods()">Tiến Hành Thanh Toán</button>
            
            <div id="payment-methods" class="mt-4 pt-4 border-top text-start" style="display: none;">
                <h5 class="fw-bold mb-4 text-center">Chọn phương thức thanh toán</h5>
                <div class="row justify-content-center">
                    <div class="col-md-5 mb-3">
                        <div class="card h-100 border-primary shadow-sm">
                            <div class="card-body text-center d-flex flex-column">
                                <h5 class="card-title text-primary fw-bold">Giao hàng trực tiếp</h5>
                                <p class="card-text text-muted small mb-4">Thanh toán bằng tiền mặt (COD) khi shipper giao máy đến tận tay bạn.</p>
                                <button class="btn btn-primary w-100 mt-auto fw-bold" onclick="confirmOrder('COD')">Chọn Giao Hàng</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 mb-3">
                        <div class="card h-100 border-success shadow-sm">
                            <div class="card-body text-center d-flex flex-column">
                                <h5 class="card-title text-success fw-bold">Quét mã QR</h5>
                                <p class="card-text text-muted small mb-2">Chuyển khoản qua MoMo, ZaloPay hoặc App Ngân hàng.</p>
                                <img src="../assets/images/qr.jpg" class="img-fluid mx-auto mb-2 rounded border" alt="QR Code" style="width: 150px; cursor: pointer;" onclick="window.open(this.src)">
                                <p class="small text-muted">Bấm vào ảnh để phóng to</p>
                                <p class="fw-bold text-danger mb-3">Cần chuyển: ${total.toLocaleString('vi-VN')}đ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    
    cartEl.innerHTML = html;
}

window.showPaymentMethods = function() {
    document.getElementById('btn-checkout').style.display = 'none';
    document.getElementById('payment-methods').style.display = 'block';
};

window.confirmOrder = function(method) {
    if(method === 'COD') {
        alert('🎉 Đặt hàng thành công! Máy sẽ được giao đến tận nơi sớm nhất để bạn kịp cày deadline.');
    } else {
        alert('🎉 Xác nhận thanh toán thành công! Chúng tôi đã nhận được tiền và đang đóng gói đơn hàng.');
    }
    cart = []; 
    updateCartUI();
    renderCart();
};

window.removeFromCart = function(index) {
    cart.splice(index, 1);
    updateCartUI();
    renderCart();
};

// ==========================================
// 7. XỬ LÝ LOGIC TÌM KIẾM ĐỘNG (DÙNG CHUNG)
// ==========================================
const searchInput = document.getElementById('search-input');
const searchDropdown = document.getElementById('search-results-dropdown');

if (searchInput && searchDropdown) {
    searchInput.addEventListener('input', function() {
        const keyword = this.value.trim().toLowerCase();
        
        if (keyword === '') {
            searchDropdown.classList.add('hidden');
            searchDropdown.innerHTML = '';
            return;
        }

        // Lọc trực tiếp từ mảng tổng productList
        const filteredProducts = productList.filter(product => 
            product.name.toLowerCase().includes(keyword)
        );

        renderSearchResults(filteredProducts);
    });

    function renderSearchResults(results) {
        searchDropdown.innerHTML = '';
        searchDropdown.classList.remove('hidden');

        if (results.length === 0) {
            searchDropdown.innerHTML = `<div class="no-result">Không tìm thấy sản phẩm tương ứng.</div>`;
            return;
        }

        results.forEach(product => {
            const itemLink = document.createElement('a');
            // Cập nhật đường dẫn chuẩn hướng về trang chi-tiet.html kèm id
            itemLink.href = `chi-tiet.html?id=${product.id}`;
            itemLink.className = 'search-item';
            
            itemLink.innerHTML = `
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/40'">
                <div class="info">
                    <span class="name">${product.name}</span>
                    <span class="price">${product.price.toLocaleString('vi-VN')}đ</span>
                </div>
            `;
            searchDropdown.appendChild(itemLink);
        });
    }

    // Đóng dropdown khi click ra ngoài
    document.addEventListener('click', function(event) {
        const container = document.querySelector('.search-container');
        if (container && !container.contains(event.target)) {
            searchDropdown.classList.add('hidden');
        }
    });
}

// ==========================================
// 8. TỰ ĐỘNG CHẠY KHI TẢI TRANG
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    renderProducts();
    renderDetail();
    renderCart();
});
// ==========================================
// 9. XỬ LÝ KHỞI TẠO NÚT MESSENGER CHAT ĐỘNG CỐ ĐỊNH
// ==========================================
function initMessengerWidget() {
    // THAY THẾ 'hoaihehe' THÀNH USERNAME LINK FACEBOOK HOẶC ID FANPAGE CỦA BẠN
    // Ví dụ: facebook.com/hoaihehe -> điền 'hoaihehe'
    const FACEBOOK_USERNAME = "hoaihehe"; 
    
    // Tạo phần tử thẻ <a> động bằng Javascript để không cần sửa từng file HTML thủ công
    const messengerLink = document.createElement('a');
    messengerLink.href = `https://www.messenger.com/t/le.huu.hoai.2025`;
    messengerLink.target = "_blank";
    messengerLink.rel = "noopener noreferrer"; // Bảo mật luồng tab tránh chiếm quyền bộ nhớ
    messengerLink.className = "fb-messenger-widget";
    messengerLink.title = "Nhắn tin qua Facebook Messenger";

    // Chèn mã vẽ SVG của biểu tượng Messenger chuẩn nhà phát hành Meta
    messengerLink.innerHTML = `
        <svg viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.14 2 11.25c0 2.91 1.45 5.51 3.71 7.17.19.14.3.37.28.61l-.22 2.18c-.05.5.42.89.88.69l2.45-1.07c.18-.08.38-.07.55.02 1.4.73 2.98 1.15 4.65 1.15 5.52 0 10-4.14 10-9.25C22 6.14 17.52 2 12 2zm1.03 12.31l-2.58-2.75-5.02 2.75 5.51-5.85 2.63 2.75 4.97-2.75-5.51 5.85z"/>
        </svg>
    `;

    // Đẩy nút chat này vào cuối body của trang hiện tại
    document.body.appendChild(messengerLink);
}

// Chạy khởi tạo Widget ngay khi cấu trúc HTML của trang web được tải xong
document.addEventListener('DOMContentLoaded', () => {
    // ... các hàm cũ của bạn giữ nguyên ...
    initMessengerWidget(); 
});
const FACEBOOK_USERNAME = "Lê Hữu Hoài";