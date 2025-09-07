document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        // E/I - Extraversion / Introversion (how you get your energy)
        {
            question: "Khi đưa ra quyết định, bạn có xu hướng dựa vào...",
            options: [
                { text: "Cảm xúc cá nhân và những giá trị cốt lõi của mình?", trait: "F" },
                { text: "Lý trí, logic và những lý do khách quan?", trait: "T" }
            ]
        },
        {
            question: "Trong một cuộc họp, bạn thường...",
            options: [
                { text: "Lắng nghe cẩn thận trước khi đưa ra ý kiến của mình?", trait: "I" },
                { text: "Chia sẻ ý tưởng ngay lập tức và tham gia vào cuộc thảo luận sôi nổi?", trait: "E" }
            ]
        },
        {
            question: "Bạn cảm thấy thoải mái nhất khi làm việc...",
            options: [
                { text: "Trong nhóm và tương tác thường xuyên với người khác?", trait: "E" },
                { text: "Một mình để có thể tập trung sâu sắc?", trait: "I" }
            ]
        },
        {
            question: "Khi có một dự án mới, bạn thích...",
            options: [
                { text: "Tạo ra ý tưởng và phác thảo kế hoạch sơ bộ?", trait: "N" },
                { text: "Tìm hiểu chi tiết cụ thể và các bước thực tế để bắt đầu?", trait: "S" }
            ]
        },
        {
            question: "Trong một buổi tiệc, bạn thường...",
            options: [
                { text: "Tích cực trò chuyện với nhiều người khác nhau?", trait: "E" },
                { text: "Dành phần lớn thời gian quan sát và nói chuyện với một vài người thân thiết?", trait: "I" }
            ]
        },
        {
            question: "Bạn thấy việc kết bạn với người lạ...",
            options: [
                { text: "Dễ dàng và thú vị?", trait: "E" },
                { text: "Khó khăn và không thoải mái?", trait: "I" }
            ]
        },
        {
            question: "Bạn cảm thấy bản thân mình được thúc đẩy bởi...",
            options: [
                { text: "Những người khác và các hoạt động bên ngoài?", trait: "E" },
                { text: "Những suy nghĩ, cảm xúc và động lực nội tại?", trait: "I" }
            ]
        },
        {
            question: "Khi làm việc, bạn thích một môi trường...",
            options: [
                { text: "Có nhiều hoạt động, năng động, và đầy người?", trait: "E" },
                { text: "Yên tĩnh, ngăn nắp và có trật tự?", trait: "I" }
            ]
        },
        {
            question: "Khi gặp gỡ một người mới, bạn thường...",
            options: [
                { text: "Thích đặt câu hỏi để tìm hiểu về họ?", trait: "E" },
                { text: "Thích lắng nghe họ nói trước?", trait: "I" }
            ]
        },
        {
            question: "Bạn cảm thấy hứng thú nhất khi...",
            options: [
                { text: "Nói chuyện và chia sẻ ý kiến với người khác?", trait: "E" },
                { text: "Nghiền ngẫm và suy nghĩ trong tâm trí?", trait: "I" }
            ]
        },
        {
            question: "Khi có một vấn đề, bạn thích...",
            options: [
                { text: "Trao đổi với người khác để tìm giải pháp?", trait: "E" },
                { text: "Tự mình tìm tòi và suy nghĩ để giải quyết?", trait: "I" }
            ]
        },
        {
            question: "Sau một tuần bận rộn, bạn muốn...",
            options: [
                { text: "Tham gia một bữa tiệc hoặc sự kiện xã hội?", trait: "E" },
                { text: "Dành thời gian ở nhà một mình để thư giãn?", trait: "I" }
            ]
        },

        // S/N - Sensing / Intuition (how you perceive information)
        {
            question: "Bạn quan tâm nhiều hơn đến...",
            options: [
                { text: "Sự thật và những thông tin cụ thể?", trait: "S" },
                { text: "Các lý thuyết trừu tượng và ý tưởng tiềm ẩn?", trait: "N" }
            ]
        },
        {
            question: "Khi học một điều mới, bạn thích...",
            options: [
                { text: "Cách tiếp cận thực tế, thực hành và những ví dụ rõ ràng?", trait: "S" },
                { text: "Tìm hiểu nguyên lý, khái niệm và mối liên hệ?", trait: "N" }
            ]
        },
        {
            question: "Bạn thường mô tả bản thân là người...",
            options: [
                { text: "Thực tế, thực dụng và luôn sống với hiện tại?", trait: "S" },
                { text: "Nhìn xa trông rộng và tập trung vào tương lai?", trait: "N" }
            ]
        },
        {
            question: "Trong một dự án, bạn thích làm việc với...",
            options: [
                { text: "Những chi tiết cụ thể và dữ liệu thực tế?", trait: "S" },
                { text: "Những bức tranh toàn cảnh và các chiến lược tổng thể?", trait: "N" }
            ]
        },
        {
            question: "Bạn cảm thấy dễ chịu hơn khi...",
            options: [
                { text: "Làm những việc quen thuộc, đã được chứng minh hiệu quả?", trait: "S" },
                { text: "Thử những điều mới mẻ và chấp nhận rủi ro?", trait: "N" }
            ]
        },
        {
            question: "Khi viết, bạn thích...",
            options: [
                { text: "Diễn tả bằng lời nói một cách chính xác và rõ ràng?", trait: "S" },
                { text: "Sử dụng những hình ảnh ẩn dụ và trừu tượng?", trait: "N" }
            ]
        },
        {
            question: "Bạn tin vào...",
            options: [
                { text: "Những kinh nghiệm sống và các sự thật đã được kiểm chứng?", trait: "S" },
                { text: "Trực giác và linh cảm của bản thân?", trait: "N" }
            ]
        },
        {
            question: "Bạn thường nhớ về quá khứ bằng cách...",
            options: [
                { text: "Nhớ lại những khoảnh khắc, chi tiết cụ thể?", trait: "S" },
                { text: "Nhớ lại cảm giác và ý nghĩa của những khoảnh khắc đó?", trait: "N" }
            ]
        },
        {
            question: "Bạn thích đọc sách về...",
            options: [
                { text: "Những câu chuyện thực tế và thông tin hữu ích?", trait: "S" },
                { text: "Khoa học viễn tưởng hoặc triết học?", trait: "N" }
            ]
        },
        {
            question: "Khi đưa ra một quyết định, bạn thường...",
            options: [
                { text: "Dựa vào những dữ kiện, số liệu đã có?", trait: "S" },
                { text: "Dựa vào cảm nhận và trực giác của mình về tương lai?", trait: "N" }
            ]
        },
        {
            question: "Bạn thích làm việc với...",
            options: [
                { text: "Những thứ hữu hình và cụ thể?", trait: "S" },
                { text: "Những ý tưởng, lý thuyết và khái niệm?", trait: "N" }
            ]
        },
        {
            question: "Bạn cảm thấy công việc nhàm chán khi...",
            options: [
                { text: "Không có đủ thử thách và sáng tạo?", trait: "N" },
                { text: "Không thấy ứng dụng thực tế của chúng?", trait: "S" }
            ]
        },
        {
            question: "Bạn thấy một người là người giỏi khi họ có...",
            options: [
                { text: "Kỹ năng thực tế và làm việc tỉ mỉ?", trait: "S" },
                { text: "Sự sáng tạo và những ý tưởng độc đáo?", trait: "N" }
            ]
        },

        // T/F - Thinking / Feeling (how you make decisions)
        {
            question: "Khi đưa ra quyết định quan trọng, bạn coi trọng điều gì hơn?",
            options: [
                { text: "Sự công bằng, khách quan và logic?", trait: "T" },
                { text: "Mối quan hệ cá nhân và cảm xúc của người khác?", trait: "F" }
            ]
        },
        {
            question: "Trong một cuộc tranh luận, bạn thích...",
            options: [
                { text: "Đưa ra những luận điểm sắc bén và logic để thắng cuộc?", trait: "T" },
                { text: "Tìm kiếm sự đồng thuận và duy trì hòa khí?", trait: "F" }
            ]
        },
        {
            question: "Khi đánh giá một người, bạn dựa trên...",
            options: [
                { text: "Hiệu suất làm việc và sự hiệu quả?", trait: "T" },
                { text: "Lòng tốt và những giá trị đạo đức?", trait: "F" }
            ]
        },
        {
            question: "Bạn có xu hướng...",
            options: [
                { text: "Phân tích một cách khách quan mọi tình huống?", trait: "T" },
                { text: "Đồng cảm với người khác và đặt mình vào vị trí của họ?", trait: "F" }
            ]
        },
        {
            question: "Khi có một lời phê bình, bạn...",
            options: [
                { text: "Nhìn nhận nó như một phản hồi khách quan để cải thiện?", trait: "T" },
                { text: "Cảm thấy bị tổn thương và buồn bã?", trait: "F" }
            ]
        },
        {
            question: "Bạn sẽ đưa ra một quyết định nếu nó...",
            options: [
                { text: "Phù hợp với lý trí, có lợi và hiệu quả?", trait: "T" },
                { text: "Phù hợp với hệ thống giá trị và lương tâm của bạn?", trait: "F" }
            ]
        },
        {
            question: "Bạn thường thích những lời khen ngợi dành cho...",
            options: [
                { text: "Sự thông minh và năng lực của bạn?", trait: "T" },
                { text: "Lòng tốt và sự tử tế của bạn?", trait: "F" }
            ]
        },
        {
            question: "Bạn cảm thấy khó chịu nhất khi phải đối mặt với...",
            options: [
                { text: "Sự vô lý và thiếu logic?", trait: "T" },
                { text: "Sự bất hòa và xung đột tình cảm?", trait: "F" }
            },
        },
        {
            question: "Bạn tin rằng, một xã hội lý tưởng được xây dựng dựa trên...",
            options: [
                { text: "Sự công bằng và luật pháp chặt chẽ?", trait: "T" },
                { text: "Sự hài hòa và lòng trắc ẩn?", trait: "F" }
            ]
        },
        {
            question: "Trong công việc nhóm, vai trò của bạn là...",
            options: [
                { text: "Phân tích vấn đề và tìm ra giải pháp tối ưu?", trait: "T" },
                { text: "Kết nối mọi người và duy trì sự hòa thuận?", trait: "F" }
            ]
        },
        {
            question: "Bạn có xu hướng...",
            options: [
                { text: "Che giấu cảm xúc thật của mình?", trait: "T" },
                { text: "Bộc lộ cảm xúc một cách dễ dàng và thoải mái?", trait: "F" }
            ]
        },
        {
            question: "Bạn thích làm việc với những công việc...",
            options: [
                { text: "Đòi hỏi tư duy phân tích và giải quyết vấn đề phức tạp?", trait: "T" },
                { text: "Liên quan đến việc giúp đỡ và chăm sóc người khác?", trait: "F" }
            ]
        },

        // J/P - Judging / Perceiving (how you approach life)
        {
            question: "Khi làm việc, bạn thích có...",
            options: [
                { text: "Một kế hoạch và lịch trình chi tiết?", trait: "J" },
                { text: "Sự tự do và linh hoạt để làm mọi thứ theo cảm hứng?", trait: "P" }
            ]
        },
        {
            question: "Bạn thường có xu hướng...",
            options: [
                { text: "Hoàn thành công việc trước hạn chót?", trait: "J" },
                { text: "Để lại một vài việc cho đến phút cuối?", trait: "P" }
            ]
        },
        {
            question: "Cuộc sống của bạn...",
            options: [
                { text: "Luôn được tổ chức và có trật tự?", trait: "J" },
                { text: "Khá ngẫu nhiên và dễ thay đổi?", trait: "P" }
            ]
        },
        {
            question: "Bạn thích môi trường làm việc...",
            options: [
                { text: "Có cấu trúc và quy trình rõ ràng?", trait: "J" },
                { text: "Linh hoạt và cho phép sự sáng tạo?", trait: "P" }
            ]
        },
        {
            question: "Khi bạn đi du lịch, bạn thích...",
            options: [
                { text: "Lên kế hoạch mọi thứ từ trước?", trait: "J" },
                { text: "Khám phá ngẫu nhiên và không theo kế hoạch?", trait: "P" }
            ]
        },
        {
            question: "Bạn cảm thấy hài lòng nhất khi...",
            options: [
                { text: "Một công việc được hoàn thành theo đúng kế hoạch đã định?", trait: "J" },
                { text: "Có thể thích nghi với mọi thay đổi và giải quyết vấn đề bất ngờ?", trait: "P" }
            ]
        },
        {
            question: "Bạn có xu hướng...",
            options: [
                { text: "Nhanh chóng đưa ra quyết định?", trait: "J" },
                { text: "Cân nhắc nhiều lựa chọn trước khi đưa ra quyết định?", trait: "P" }
            ]
        },
        {
            question: "Bạn thích làm việc trong những công việc...",
            options: [
                { text: "Có deadline rõ ràng và mục tiêu cụ thể?", trait: "J" },
                { text: "Có thể làm việc theo cảm hứng và không bị giới hạn bởi thời gian?", trait: "P" }
            ]
        },
        {
            question: "Bạn thấy mình là người...",
            options: [
                { text: "Có tổ chức và luôn đúng giờ?", trait: "J" },
                { text: "Spontane và thường hay trì hoãn?", trait: "P" }
            ]
        },
        {
            question: "Khi học bài, bạn thích...",
            options: [
                { text: "Tuân thủ một thời khóa biểu nghiêm ngặt?", trait: "J" },
                { text: "Học khi nào bạn cảm thấy có hứng thú?", trait: "P" }
            ]
        },
        {
            question: "Bạn thích nhận những lời khen ngợi về...",
            options: [
                { text: "Sự siêng năng và có tổ chức?", trait: "J" },
                { text: "Sự linh hoạt và thích ứng nhanh chóng?", trait: "P" }
            ]
        },
        {
            question: "Bạn cảm thấy không thoải mái khi...",
            options: [
                { text: "Mọi thứ trở nên hỗn loạn, mất trật tự và thiếu kế hoạch?", trait: "J" },
                { text: "Phải làm những công việc nhàm chán, lặp đi lặp lại?", trait: "P" }
            ]
        },
        {
            question: "Bạn thích...",
            options: [
                { text: "Hoàn thành công việc trước khi vui chơi?", trait: "J" },
                { text: "Vừa làm vừa chơi một cách linh hoạt?", trait: "P" }
            ]
        },
    ];

    // Define the careers for each MBTI type based on the provided PDF.
    const careers = {
        [cite_start]ISTJ: ["Quản lý kinh doanh [cite: 35][cite_start]", "Quản trị và giám đốc điều hành [cite: 36][cite_start]", "Kế toán và nhân viên tài chính [cite: 37][cite_start]", "Lập trình viên, phân tích hệ thống, và chuyên gia máy tính [cite: 38, 39][cite_start]", "Nhà phân tích tài chính [cite: 40][cite_start]", "Nhà đầu tư chứng khoán [cite: 41]"],
        [cite_start]INTJ: ["Nhà khoa học [cite: 79][cite_start]", "Kỹ sư [cite: 80][cite_start]", "Nhà hoạch định chiến lược và xây dựng tổ chức công ty [cite: 81][cite_start]", "Quản trị kinh doanh / nhà quản lý [cite: 82][cite_start]", "Luật sư [cite: 82][cite_start]", "Lập trình viên máy tính, nhà phân tích hệ thống và chuyên gia máy tính [cite: 83]"],
        [cite_start]ISFJ: ["Marketing [cite: 114][cite_start]", "Quản lý hành chính [cite: 115][cite_start]", "Trợ lý giám đốc [cite: 115][cite_start]", "Công tác xã hội [cite: 116][cite_start]", "Người quản lý cửa hàng [cite: 117][cite_start]", "PR [cite: 117]"],
        [cite_start]INFJ: ["Các lĩnh vực liên quan đến chăm sóc sức khoẻ [cite: 153][cite_start]", "Nhà tâm lý học [cite: 154][cite_start]", "Những người làm công tác xã hội [cite: 155][cite_start]", "Cố vấn, tư vấn [cite: 156][cite_start]", "Luật sư [cite: 157][cite_start]", "Nhà phân tích tài chính [cite: 158][cite_start]", "Kinh doanh [cite: 159]"],
        [cite_start]ISFP: ["Nghệ sĩ [cite: 196][cite_start]", "Nhà thiết kế [cite: 197][cite_start]", "Người làm công tác xã hội - Cố vấn [cite: 198][cite_start]", "Nhà tâm lí học [cite: 198][cite_start]", "Bác sĩ [cite: 199][cite_start]", "Truyền thông [cite: 200][cite_start]", "Marketing [cite: 200]"],
        [cite_start]ISTP: ["Lập trình viên, chuyên gia phân tích hệ thống, chuyên gia máy tính [cite: 235][cite_start]", "Kỹ sư [cite: 236][cite_start]", "Nhà thầu khoán [cite: 237][cite_start]", "Kiểm toán [cite: 238][cite_start]", "Luật sư [cite: 239][cite_start]", "Nhà phân tích chứng khoán [cite: 240]"],
        [cite_start]INFP: ["Cố vấn / Nhân viên xã hội [cite: 273][cite_start]", "Giáo viên / Giáo sư [cite: 274][cite_start]", "Nhạc sĩ [cite: 275][cite_start]", "Kinh doanh [cite: 276]"],
        [cite_start]INTP: ["Nhà khoa học - đặc biệt trong nghiên cứu Vật lí, Hóa học [cite: 307][cite_start]", "Chiến lược gia [cite: 308][cite_start]", "Giáo sư đại học [cite: 309][cite_start]", "Lập trình viên, nhà phân tích cấu trúc dữ liệu, người vẽ hoạt hình máy tính và chuyên gia máy tính [cite: 312][cite_start]", "Chuyên viên thiết lập kỹ thuật [cite: 313][cite_start]", "Kỹ sư [cite: 314][cite_start]", "Luật sư [cite: 315]"],
        [cite_start]ESTP: ["Nhân viên đại diện bán hàng [cite: 355][cite_start]", "Kỹ sư máy tính [cite: 356][cite_start]", "Hỗ trợ kỹ thuật máy tính [cite: 357][cite_start]", "Doanh nhân [cite: 358]"],
        [cite_start]ESFP: ["Nghệ sĩ, người biểu diễn và diễn viên [cite: 387][cite_start]", "Đại diện bán hàng [cite: 388][cite_start]", "Tư vấn tâm lí / Công tác xã hội [cite: 389][cite_start]", "Thiết kế thời trang [cite: 390][cite_start]", "Trang trí nội thất [cite: 391][cite_start]", "Chuyên gia tự vẫn [cite: 392][cite_start]", "Nhiếp ảnh gia [cite: 393]"],
        [cite_start]ENFP: ["Chuyên viên tư vấn [cite: 429][cite_start]", "Doanh nhân [cite: 430][cite_start]", "Luật sư [cite: 431][cite_start]", "Chính trị gia / Nhà ngoại giao [cite: 432][cite_start]", "Nhà văn/ Nhà báo [cite: 433][cite_start]", "Phóng viên [cite: 434][cite_start]", "Lập trình viên, chuyên gia phân tích hệ thống hoặc chuyên gia máy tính [cite: 435][cite_start]", "Khoa học gia / Kỹ sư [cite: 436]"],
        [cite_start]ENTP: ["Luật sư [cite: 470][cite_start]", "Nhà tâm lý học [cite: 470][cite_start]", "Doanh nhân [cite: 471][cite_start]", "Cố vấn [cite: 472][cite_start]", "Kỹ sư [cite: 473][cite_start]", "Nhà khoa học [cite: 474][cite_start]", "Nhân viên đại diện bán hàng [cite: 475][cite_start]", "Tiếp thị cá nhân [cite: 476][cite_start]", "Lập trình viên, nhà phân tích cấu trúc dữ liệu, chuyên gia máy tính [cite: 477]"],
        [cite_start]ESTJ: ["Quản lý [cite: 509][cite_start]", "Quan tòa [cite: 510][cite_start]", "Nhân viên kế toán [cite: 511][cite_start]", "Nhà giáo [cite: 512][cite_start]", "Bán hàng [cite: 513]"],
        [cite_start]ESFJ: ["Kinh doanh hộ gia đình [cite: 541][cite_start]", "Lãnh đạo [cite: 542][cite_start]", "Trưởng phòng [cite: 543][cite_start]", "Cố vấn Công tác xã hội [cite: 544][cite_start]", "Kế toán [cite: 544][cite_start]", "Trợ lý giám đốc [cite: 545]"],
        [cite_start]ENFJ: ["Nhà tư vấn [cite: 578][cite_start]", "Nhà tâm lý học [cite: 579][cite_start]", "Công tác xã hội / Cố vấn [cite: 580][cite_start]", "Nhà giáo [cite: 581][cite_start]", "Đại diện bản hàng [cite: 582][cite_start]", "Quản lí nhân sự [cite: 583][cite_start]", "Quản lí [cite: 584][cite_start]", "Tổ chức sự kiện [cite: 585][cite_start]", "Chính trị gia / Nhà ngoại giao [cite: 586]"],
        [cite_start]ENTJ: ["Giám đốc điều hành [cite: 614][cite_start]", "Xây dựng tổ chức/doanh nghiệp/công ty [cite: 615][cite_start]", "Doanh nhân [cite: 615][cite_start]", "Cố vấn về máy tính [cite: 616][cite_start]", "Luật sư [cite: 616][cite_start]", "Quản trị doanh nghiệp [cite: 616][cite_start]", "Giảng viên (Đại học) [cite: 616]"]
    };

    const form = document.getElementById('quiz-form');
    const submitBtn = document.getElementById('submit-btn');
    const resultsDiv = document.getElementById('results');
    const personalityTypeEl = document.getElementById('personality-type');
    const careerSuggestionsEl = document.getElementById('career-suggestions');

    // Dynamically create question elements
    questions.forEach((q, index) => {
        const questionGroup = document.createElement('div');
        questionGroup.className = 'question-group';
        questionGroup.innerHTML = `<p>Câu hỏi ${index + 1}: ${q.question}</p>`;

        const optionGroup = document.createElement('div');
        optionGroup.className = 'option-group';

        q.options.forEach((option, optionIndex) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${index}`;
            input.value = option.trait;
            input.required = true;

            label.appendChild(input);
            label.appendChild(document.createTextNode(option.text));
            optionGroup.appendChild(label);
        });

        questionGroup.appendChild(optionGroup);
        form.appendChild(questionGroup);
    });

    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();

        // Validate that all questions are answered
        const allAnswered = questions.every((_, index) => {
            return document.querySelector(`input[name="question${index}"]:checked`);
        });

        if (!allAnswered) {
            alert("Vui lòng trả lời tất cả các câu hỏi.");
            return;
        }

        // Calculate the score for each trait
        const scores = {
            E: 0, I: 0,
            S: 0, N: 0,
            T: 0, F: 0,
            J: 0, P: 0
        };

        const answers = new FormData(form);
        for (const [key, value] of answers.entries()) {
            scores[value]++;
        }

        // Determine the final MBTI type
        const personality =
            (scores.E > scores.I ? 'E' : 'I') +
            (scores.S > scores.N ? 'S' : 'N') +
            (scores.T > scores.F ? 'T' : 'F') +
            (scores.J > scores.P ? 'J' : 'P');

        // Display the results
        personalityTypeEl.textContent = `${personality} - ${getPersonalityName(personality)}`;

        careerSuggestionsEl.innerHTML = '';
        if (careers[personality]) {
            careers[personality].forEach(career => {
                const li = document.createElement('li');
                li.innerHTML = career;
                careerSuggestionsEl.appendChild(li);
            });
        }

        resultsDiv.style.display = 'block';
    });

    // Helper function to get the full name of the personality type from the PDF
    function getPersonalityName(type) {
        switch (type) {
            [cite_start]case "ISTJ": return "THE DUTY FULFILLERS - NGƯỜI TẬN TÂM VỚI CÔNG VIỆC [cite: 3]";
            [cite_start]case "INTJ": return "THE SCIENTISTS - NHÀ KHOA HỌC [cite: 48]";
            [cite_start]case "ISFJ": return "THE NURTURERS - NGƯỜI CHĂM NOM [cite: 89]";
            [cite_start]case "INFJ": return "THE PROTECTORS - NGƯỜI CHE CHỞ [cite: 121]";
            [cite_start]case "ISFP": return "THE ARTISTS - NGHỆ SĨ [cite: 164]";
            [cite_start]case "ISTP": return "THE MECHANICS - THỢ CƠ KHÍ [cite: 205]";
            [cite_start]case "INFP": return "THE IDEALISTS - NHÀ LÝ TƯỞNG HÓA [cite: 244]";
            [cite_start]case "INTP": return "THE THINKERS - NHÀ TƯ DUY [cite: 280]";
            [cite_start]case "ESTP": return "THE DOERS - NGƯỜI NĂNG ĐỘNG [cite: 320]";
            [cite_start]case "ESFP": return "THE PERFORMERS - NGƯỜI TRÌNH DIỄN [cite: 363]";
            [cite_start]case "ENFP": return "THE INSPIRERS - NGƯỜI TRUYỀN CẢM HỨNG [cite: 397]";
            [cite_start]case "ENTP": return "THE VISIONARIES - NGƯỜI NHÌN XA TRÔNG RỘNG [cite: 441]";
            [cite_start]case "ESTJ": return "THE GUARDIANS - NGƯỜI GIÁM HỘ [cite: 481]";
            [cite_start]case "ESFJ": return "THE CAREGIVERS - NGƯỜI CHĂM SÓC [cite: 517]";
            [cite_start]case "ENFJ": return "THE GIVERS - NGƯỜI CHO ĐI [cite: 550]";
            [cite_start]case "ENTJ": return "THE EXECUTIVES - NHÀ ĐIỀU HÀNH [cite: 590]";
            default: return "Không xác định";
        }
    }
});