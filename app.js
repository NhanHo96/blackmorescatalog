/* ==========================================================================
   BLACKMORES PRODUCTS CATALOG DATA & RENDERING LOGIC
   ========================================================================== */

// 1. PRODUCT DATABASE ( Vietnamese translations, cleaned titles, exact image references )
// Ghi chú:
// - Bạn có thể dễ dàng điều chỉnh giá tiền hiển thị ở thuộc tính 'price'.
// - Bạn có thể cấu hình 'compareUrl' là link trực tiếp đến trang chi tiết sản phẩm.
// - Nếu bỏ trống 'compareUrl', hệ thống sẽ TỰ ĐỘNG sinh link tìm kiếm so sánh giá chính xác.
const products = [
    {
        id: 1,
        name: "Thực phẩm bảo vệ sức khỏe Blackmores Bio C 1000mg",
        category: "vitamin",
        categoryLabel: "Vitamin & Sức đề kháng",
        image: "IMAGES/Blackmores_Bio_C_1000mg.PNG",
        price: "420.000 đ",
        description: "Giải pháp bổ sung Vitamin C liều cao kết hợp với nguồn ascorbate tự nhiên giúp hấp thu tối đa, thân thiện với dạ dày. Sản phẩm giúp tăng cường sức đề kháng bền vững và duy trì làn da khỏe mạnh.",
        benefits: [
            "Bổ sung Vitamin C 1000mg hàm lượng cao tối ưu",
            "Hỗ trợ giảm nhẹ mức độ và rút ngắn thời gian cảm cúm",
            "Tăng khả năng chống oxy hóa, kích thích sản sinh collagen tự nhiên",
            "Giúp mau lành vết thương và bảo vệ mao mạch vững chắc"
        ],
        usage: "Người lớn: Uống 1 viên mỗi ngày cùng bữa ăn, hoặc theo chỉ định của bác sĩ chuyên khoa."
    },
    {
        id: 2,
        name: "Thực phẩm bảo vệ sức khỏe Blackmores Bio Magnesium",
        category: "xuong-khop",
        categoryLabel: "Xương khớp & Cơ",
        image: "IMAGES/Blackmores_Bio_Magnesium.PNG",
        price: "380.000 đ",
        description: "Bổ sung lượng Magie thiết yếu ở dạng sinh học dễ hấp thu, phối hợp cùng Vitamin giữ vai trò quan trọng trong việc hỗ trợ co giãn cơ, ngăn ngừa tình trạng đau cơ, chuột rút cơ bắp.",
        benefits: [
            "Hỗ trợ chức năng cơ bắp khỏe mạnh, linh hoạt",
            "Giảm thiểu rõ rệt tình trạng chuột rút, co thắt cơ và đau mỏi",
            "Duy trì sức khỏe hệ tim mạch và ổn định hệ thần kinh trung ương",
            "Hỗ trợ hấp thu canxi giúp khung xương chắc khóa"
        ],
        usage: "Người lớn: Uống 1 viên mỗi ngày cùng bữa ăn, hoặc theo hướng dẫn trực tiếp từ chuyên gia y tế."
    },
    {
        id: 3,
        name: "Thực phẩm bảo vệ sức khỏe Blackmores Cholesterol Health",
        category: "tim-mach",
        categoryLabel: "Tim mạch & Huyết áp",
        image: "IMAGES/Blackmores_Cholesterol_Health.PNG",
        price: "510.000 đ",
        description: "Công thức chứa phytosterol (sterol thực vật) liều khoa học, được thiết kế đặc biệt nhằm ngăn chặn sự hấp thu cholesterol có hại từ thức ăn vào cơ thể, hỗ trợ bảo vệ mạch máu.",
        benefits: [
            "Làm giảm lượng Cholesterol hấp thu từ nguồn thực phẩm ăn uống",
            "Hỗ trợ duy trì chỉ số Cholesterol toàn phần khỏe mạnh ở người bình thường",
            "Bảo vệ thành mạch máu, ngăn ngừa nguy cơ xơ vữa động mạch",
            "Hỗ trợ đắc lực cho chế độ ăn uống lành mạnh của hệ tim mạch"
        ],
        usage: "Người lớn: Uống 1 viên, ngày 2 lần cùng với bữa ăn chính, hoặc theo hướng dẫn của bác sĩ."
    },
    {
        id: 4,
        name: "Thực phẩm bảo vệ sức khỏe Blackmores Co Q10 150Mg",
        category: "tim-mach",
        categoryLabel: "Tim mạch & Huyết áp",
        image: "IMAGES/Blackmores_CoQ10_150Mg.PNG",
        price: "490.000 đ",
        description: "Cung cấp hàm lượng Coenzyme Q10 tinh khiết dồi dào, đóng vai trò then chốt trong quá trình sản sinh năng lượng của tế bào cơ tim, đồng thời chống oxy hóa cực mạnh giúp bảo vệ tim luôn khỏe mạnh.",
        benefits: [
            "Tăng năng lượng cho cơ tim hoạt động dẻo dai và bền bỉ",
            "Hỗ trợ cải thiện và duy trì sức khỏe của hệ thống tim mạch",
            "Chống oxy hóa mạnh mẽ, ngăn chặn tác hại của các gốc tự do",
            "Giúp làm chậm quá trình lão hóa tự nhiên của các cơ quan"
        ],
        usage: "Người lớn: Uống 1 viên mỗi ngày cùng bữa ăn chính để cơ thể hấp thu Coenzyme Q10 một cách tốt nhất."
    },
    {
        id: 5,
        name: "Thực phẩm bảo vệ sức khỏe Blackmores Milk Thistle",
        category: "thai-doc",
        categoryLabel: "Hỗ trợ & Thải độc",
        image: "IMAGES/Blackmores_Milk_Thistle.PNG", // exact trailing space mapping
        price: "350.000 đ",
        description: "Chiết xuất chuẩn hóa từ cây kế sữa (Milk Thistle) chứa hàm lượng silymarin cao, là liệu pháp thảo dược vàng giúp phục hồi màng tế bào gan, tăng khả năng thanh lọc độc tố của cơ thể.",
        benefits: [
            "Bảo vệ tế bào gan trước các tác nhân gây hại như bia rượu, hóa chất",
            "Kích thích quá trình thải độc tự nhiên, thanh nhiệt, mát gan",
            "Hỗ trợ hạ men gan và thúc đẩy tái tạo tế bào gan mới",
            "Cải thiện chức năng gan mật, hỗ trợ tiêu hóa ăn uống ngon miệng hơn"
        ],
        usage: "Người lớn: Uống 1 viên, ngày 3 lần trước hoặc trong khi dùng bữa ăn."
    },
    {
        id: 6,
        name: "Thực phẩm bảo vệ sức khỏe Blackmores Multivitamin for Men",
        category: "vitamin",
        categoryLabel: "Vitamin & Sức đề kháng",
        image: "IMAGES/Blackmores_Multivitamin_for_Men.PNG",
        price: "450.000 đ",
        description: "Công thức vitamin và khoáng chất tổng hợp toàn diện thiết kế chuyên biệt cho phái mạnh. Giúp bù đắp thiếu hụt dinh dưỡng hàng ngày, tăng cường sinh lực và tăng cường khả năng chịu đựng áp lực.",
        benefits: [
            "Cung cấp các vitamin và dưỡng chất thiết yếu tối ưu cho nam giới",
            "Tăng cường sinh lực dồi dào, giảm nhanh mệt mỏi thể chất và trí óc",
            "Hỗ trợ chức năng cơ bắp săn chắc và duy trì phong độ phái mạnh",
            "Bảo vệ gan và duy trì hệ thống miễn dịch khỏe mạnh trước áp lực cuộc sống"
        ],
        usage: "Nam giới trưởng thành: Uống 1 viên mỗi ngày cùng bữa ăn để cơ thể hấp thu trọn vẹn dinh dưỡng."
    },
    {
        id: 7,
        name: "Thực phẩm bảo vệ sức khỏe Blackmores Pregnancy & Breast Feeding Gold",
        category: "phu-nu",
        categoryLabel: "Sức khỏe Phụ nữ",
        image: "IMAGES/Blackmores_Pregnancy_Breast_Feeding_Gold.PNG",
        price: "620.000 đ",
        description: "Cung cấp đầy đủ và khoa học 20 dưỡng chất quan trọng bậc nhất cho phụ nữ trong suốt thai kỳ và giai đoạn cho con bú. Sản phẩm là nền tảng vững chắc bảo vệ mẹ bầu và giúp bé yêu phát triển tối ưu.",
        benefits: [
            "Bổ sung Acid Folic hàm lượng chuẩn giúp ngăn ngừa dị tật ống thần kinh",
            "Cung cấp Sắt, I-ốt, và Canxi hỗ trợ sự phát triển khung xương của thai nhi",
            "Cung cấp DHA tinh khiết hỗ trợ phát triển vượt trội trí não và thị lực của bé",
            "Tăng cường sức khỏe toàn diện và giảm mệt mỏi, ốm nghén cho mẹ bầu"
        ],
        usage: "Phụ nữ chuẩn bị mang thai, đang mang thai và cho con bú: Uống 2 viên mỗi ngày cùng bữa ăn."
    },
    {
        id: 8,
        name: "Thực phẩm bảo vệ sức khỏe Blackmores Evening Primrose Oil",
        category: "phu-nu",
        categoryLabel: "Sức khỏe Phụ nữ",
        image: "IMAGES/Blackmores_Evening_Primrose_Oil.PNG",
        price: "550.000 đ",
        description: "Tinh dầu hoa anh thảo cao cấp được ép lạnh nguyên chất giúp giữ nguyên vẹn các axit béo GLA quý giá. Đây là người bạn đồng hành không thể thiếu giúp phái đẹp cân bằng nội tiết tố và duy trì nhan sắc xuân thì.",
        benefits: [
            "Hỗ trợ cân bằng nội tiết tố nữ, điều hòa chu kỳ kinh nguyệt",
            "Giảm thiểu các triệu chứng khó chịu thời kỳ tiền mãn kinh và mãn kinh",
            "Dưỡng ẩm da từ sâu bên trong, giảm khô ráp, rụng tóc và giòn móng",
            "Hỗ trợ cải thiện tình trạng mụn trứng cá do rối loạn nội tiết tố"
        ],
        usage: "Người lớn: Uống 1 đến 3 viên mỗi ngày cùng bữa ăn hoặc ngay sau khi ăn để đạt hiệu quả tối ưu."
    },
    {
        id: 9,
        name: "Thực phẩm bảo vệ sức khỏe Blackmores Omega Double High Strength Fish oil",
        category: "tim-mach",
        categoryLabel: "Tim mạch & Huyết áp",
        image: "IMAGES/Blackmores_Omega_Double_High_Strength_Fish_oil.PNG",
        price: "580.000 đ",
        description: "Dầu cá hồi chất lượng cao chiết xuất từ nguồn cá biển khơi sạch nhất hành tinh, trải qua quy trình màng lọc kép tinh khiết. Cung cấp hàm lượng Omega-3 đậm đặc gấp hai lần dầu cá thông thường.",
        benefits: [
            "Cung cấp EPA và DHA hàm lượng cao hỗ trợ tuần hoàn máu tối ưu",
            "Hỗ trợ kiểm soát mỡ máu, bảo vệ cơ tim và duy trì huyết áp ổn định",
            "Phát triển trí não, tăng khả năng ghi nhớ và chống mỏi mắt cho người làm việc nhiều",
            "Hỗ trợ bôi trơn khớp và làm giảm các triệu chứng viêm khớp nhẹ"
        ],
        usage: "Người lớn: Uống 1 viên mỗi ngày cùng bữa ăn (hoặc tối đa 3 viên uống chia đều nếu hỗ trợ giảm viêm khớp)."
    },
    {
        id: 10,
        name: "Thực phẩm bảo vệ sức khỏe Blackmores Ginkgoforte",
        category: "nao-bo",
        categoryLabel: "Não bộ & Trí nhớ",
        image: "IMAGES/Blackmores_Ginkgoforte.PNG",
        price: "410.000 đ",
        description: "Chứa chiết xuất từ lá cây bạch quả (Ginkgo biloba) chuẩn hóa khoa học cao cấp. Giúp giãn mạch máu não, tăng cường lưu lượng máu lên nao bộ giúp cải thiện trí lực và đẩy lùi mệt mỏi thần kinh.",
        benefits: [
            "Tăng tuần hoàn máu não, cải thiện lưu thông máu ngoại vi",
            "Hỗ trợ tăng cường trí nhớ, tăng độ tập trung và khả năng phản xạ",
            "Làm giảm nhanh các cơn đau đầu, chóng mặt, ù tai và suy nhược thần kinh",
            "Hỗ trợ giấc ngủ sâu hơn, cải thiện trí lực hiệu quả ở người lớn tuổi"
        ],
        usage: "Người lớn: Uống 1 viên, ngày 3 lần cùng bữa ăn hoặc tuân thủ theo chỉ dẫn của bác sĩ điều trị."
    },
    {
        id: 11,
        name: "Thực phẩm bảo vệ sức khỏe Superkids Multi Chewables",
        category: "tre-em",
        categoryLabel: "Dành cho Trẻ em",
        image: "IMAGES/Blackmores_Superkids_Multi_Chewables.PNG",
        price: "290.000 đ",
        description: "Viên nhai hương dâu tự nhiên thơm ngon, cung cấp 18 dưỡng chất thiết yếu đặc biệt cân đối cho sự phát triển khỏe mạnh của trẻ nhỏ. Công thức hoàn toàn thân thiện và an toàn tuyệt đối với răng bé.",
        benefits: [
            "Bổ sung vitamin, khoáng chất giúp trẻ ăn ngon miệng, hấp thu dinh dưỡng tốt",
            "Tăng đề kháng, giảm thiểu ốm vặt và thúc đẩy phát triển chiều cao",
            "Cung cấp dưỡng chất hỗ trợ tư duy, sáng mắt và phát triển não bộ",
            "Sử dụng chất tạo ngọt tự nhiên xylitol, cam kết 99.9% không gây sâu răng"
        ],
        usage: "Trẻ em từ 2 đến 12 tuổi: Nhai đều và kỹ 1 viên mỗi ngày cùng bữa ăn. Tuyệt đối không nuốt chửng."
    }
];

// Hàm hỗ trợ tự động sinh link so sánh giá động (Generic) sang hệ thống Pharmacity
function getCompareUrl(product) {
    // 1. Nếu sản phẩm đã được cấu hình link trực tiếp sẵn trong database, ưu tiên sử dụng link trực tiếp
    if (product.compareUrl && product.compareUrl.trim().startsWith("http")) {
        return product.compareUrl.trim();
    }

    // 2. Nếu không có link trực tiếp, tự động tách từ khóa cốt lõi của sản phẩm để sinh link tìm kiếm
    let rawName = product.name;

    // Loại bỏ các tiền tố chung chung của dược phẩm để tăng độ chính xác khi tìm kiếm
    const redundantWords = [
        "Thực phẩm bảo vệ sức khỏe",
        "Thực phẩm bảo vệ sức khoẻ",
        "Thực phẩm chức năng",
        "Sản phẩm bảo vệ sức khỏe"
    ];

    redundantWords.forEach(word => {
        rawName = rawName.replace(word, "");
    });

    const coreKeyword = rawName.trim();

    // Mã hóa từ khóa URL-encoding chuẩn quốc tế để ghép vào link tìm kiếm động của Pharmacity
    return `https://www.pharmacity.vn/search?keyword=${encodeURIComponent(coreKeyword)}`;
}

// 2. RENDERING LOGIC & FILTERING
document.addEventListener("DOMContentLoaded", () => {
    const productsListContainer = document.getElementById("products-list");
    const productsCountSpan = document.getElementById("products-count");
    const categoryButtons = document.querySelectorAll(".filter-btn");
    const searchInputDesktop = document.getElementById("product-search");
    const searchInputMobile = document.getElementById("product-search-mobile");

    let currentCategory = "all";
    let searchQuery = "";

    // Function to render the filtered products as a professional top-to-bottom list
    function renderProducts() {
        // Filter products by category and search query
        const filtered = products.filter(product => {
            const matchesCategory = currentCategory === "all" || product.category === currentCategory;
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  product.benefits.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesCategory && matchesSearch;
        });

        // Update count badge
        productsCountSpan.textContent = filtered.length;

        // Clear container
        productsListContainer.innerHTML = "";

        if (filtered.length === 0) {
            productsListContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-face-frown"></i>
                    <p>Không tìm thấy sản phẩm nào phù hợp với tìm kiếm của bạn.</p>
                    <p style="font-size: 0.85rem; font-weight: normal; margin-top: 5px;">Vui lòng thử từ khóa khác hoặc đổi danh mục sản phẩm.</p>
                </div>
            `;
            return;
        }

        // Render each product as a beautiful row-item (top-to-bottom)
        filtered.forEach(product => {
            const productRow = document.createElement("div");
            productRow.className = "product-row";

            // Build benefits list item bullet points
            const benefitsHTML = product.benefits.map(benefit => `
                <li><i class="fa-solid fa-circle-check"></i> <span>${benefit}</span></li>
            `).join("");

            // Sinh link so sánh giá động (Generic) cho sản phẩm
            const resolvedCompareUrl = getCompareUrl(product);

            productRow.innerHTML = `
                <!-- Left: Perfectly scaled image container -->
                <div class="product-image-container">
                    <span class="origin-badge">Nhập Khẩu Úc</span>
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>

                <!-- Right: Product details -->
                <div class="product-details-container">
                    <div class="product-details-header">
                        <span class="category-tag">${product.categoryLabel}</span>
                        <div class="price-compare-container">
                            <span class="product-row-price">${product.price}</span>
                            <a href="${resolvedCompareUrl}" target="_blank" class="compare-link" rel="noopener noreferrer">
                                <i class="fa-solid fa-scale-balanced"></i> So sánh giá
                            </a>
                        </div>
                    </div>

                    <h3 class="product-row-title">${product.name}</h3>
                    <p class="product-row-desc">${product.description}</p>

                    <!-- Bullet benefits list -->
                    <ul class="product-benefits-list">
                        ${benefitsHTML}
                    </ul>

                    <!-- Bottom: Instructions for usage box -->
                    <div class="product-usage-box">
                        <h4><i class="fa-solid fa-circle-info"></i> Liều lượng & Cách dùng</h4>
                        <p>${product.usage}</p>
                    </div>
                </div>
            `;

            productsListContainer.appendChild(productRow);
        });
    }

    // Category button click listener
    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from previous
            categoryButtons.forEach(btn => btn.classList.remove("active"));

            // Add active class to clicked button
            button.classList.add("active");

            // Set current category & render
            currentCategory = button.getAttribute("data-category");
            renderProducts();
        });
    });

    // Real-time Search inputs
    const handleSearchInput = (e) => {
        searchQuery = e.target.value;
        // Sync values between desktop and mobile search boxes
        if (e.target.id === "product-search") {
            searchInputMobile.value = searchQuery;
        } else {
            searchInputDesktop.value = searchQuery;
        }
        renderProducts();
    };

    searchInputDesktop.addEventListener("input", handleSearchInput);
    searchInputMobile.addEventListener("input", handleSearchInput);

    // Initial Render
    setTimeout(() => {
        renderProducts();
    }, 300); // Small timeout to simulate dynamic API loading beautifully
});
