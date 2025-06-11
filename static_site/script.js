// 语言配置
const translations = {
    'zh-cn': {
        'tagline': '专业导师平台',
        'hero-title': '找到最适合的留学导师',
        'hero-subtitle': '专业的申请指导，个性化的服务体验',
        'start-filter': '开始筛选导师',
        'step1-title': '选择目标地区',
        'step2-title': '选择心仪院校',
        'step3-title': '选择专业方向',
        'next': '下一步',
        'show-results': '查看匹配导师',
        'search-school': '搜索院校...',
        'results-title': '为您推荐的导师',
        'reset-filter': '重新筛选',
        'contact-title': '联系导师',
        'contact-message': '如果对',
        'contact-interest': '老师感兴趣',
        'contact-instruction': '请添加CC留学微信，并备注老师编号：',
        'contact-tutor': '联系导师',
        'usa': '美国',
        'uk': '英国',
        'canada': '加拿大',
        'hongkong': '香港',
        'australia': '澳洲',
        'singapore': '新加坡',
        'business': '商科',
        'engineering': '工程',
        'cs': '计算机',
        'medicine': '医学',
        'arts': '艺术',
        'law': '法律',
        'education': '教育',
        'media': '传媒',
        'rating': '评分',
        'students': '人次咨询',
        'hourly-rate': '每小时',
        'specialties': '擅长服务',
        'awards': '获奖经历',
        'intro-title-1': '为什么选择CC留学？',
        'intro-content-1': '我们拥有来自世界顶尖院校的导师团队，提供专业的留学申请指导。每位导师都经过严格筛选，确保为您提供最优质的服务。',
        'intro-title-2': '我们的优势',
        'intro-content-2': '个性化定制申请方案，一对一专业指导，全程跟踪服务。从选校到文书，从面试到签证，我们为您提供全方位的支持。',
        'intro-title-3': '成功案例',
        'intro-content-3': '每年帮助数百名学生成功申请到理想院校。我们的导师团队拥有丰富的申请经验，能够帮助您实现留学梦想。'
    },
    'zh-tw': {
        'tagline': '專業導師平台',
        'hero-title': '找到最適合的留學導師',
        'hero-subtitle': '專業的申請指導，個性化的服務體驗',
        'start-filter': '開始篩選導師',
        'step1-title': '選擇目標地區',
        'step2-title': '選擇心儀院校',
        'step3-title': '選擇專業方向',
        'next': '下一步',
        'show-results': '查看匹配導師',
        'search-school': '搜索院校...',
        'results-title': '為您推薦的導師',
        'reset-filter': '重新篩選',
        'contact-title': '聯繫導師',
        'contact-message': '如果對',
        'contact-interest': '老師感興趣',
        'contact-instruction': '請添加CC留學微信，並備註老師編號：',
        'contact-tutor': '聯繫導師',
        'usa': '美國',
        'uk': '英國',
        'canada': '加拿大',
        'hongkong': '香港',
        'australia': '澳洲',
        'singapore': '新加坡',
        'business': '商科',
        'engineering': '工程',
        'cs': '計算機',
        'medicine': '醫學',
        'arts': '藝術',
        'law': '法律',
        'education': '教育',
        'media': '傳媒',
        'rating': '評分',
        'students': '人次諮詢',
        'hourly-rate': '每小時',
        'specialties': '擅長服務',
        'awards': '獲獎經歷',
        'intro-title-1': '為什麼選擇CC留學？',
        'intro-content-1': '我們擁有來自世界頂尖院校的導師團隊，提供專業的留學申請指導。每位導師都經過嚴格篩選，確保為您提供最優質的服務。',
        'intro-title-2': '我們的優勢',
        'intro-content-2': '個性化定制申請方案，一對一專業指導，全程跟蹤服務。從選校到文書，從面試到簽證，我們為您提供全方位的支持。',
        'intro-title-3': '成功案例',
        'intro-content-3': '每年幫助數百名學生成功申請到理想院校。我們的導師團隊擁有豐富的申請經驗，能夠幫助您實現留學夢想。'
    },
    'en': {
        'tagline': 'Professional Tutor Platform',
        'hero-title': 'Find Your Perfect Study Abroad Tutor',
        'hero-subtitle': 'Professional guidance and personalized service',
        'start-filter': 'Start Filtering Tutors',
        'step1-title': 'Choose Target Region',
        'step2-title': 'Select Preferred Universities',
        'step3-title': 'Choose Major Field',
        'next': 'Next',
        'show-results': 'Show Matching Tutors',
        'search-school': 'Search universities...',
        'results-title': 'Recommended Tutors for You',
        'reset-filter': 'Reset Filter',
        'contact-title': 'Contact Tutor',
        'contact-message': 'If you are interested in',
        'contact-interest': ',',
        'contact-instruction': 'Please add CC Study Abroad WeChat and note tutor ID:',
        'contact-tutor': 'Contact Tutor',
        'usa': 'USA',
        'uk': 'UK',
        'canada': 'Canada',
        'hongkong': 'Hong Kong',
        'australia': 'Australia',
        'singapore': 'Singapore',
        'business': 'Business',
        'engineering': 'Engineering',
        'cs': 'Computer Science',
        'medicine': 'Medicine',
        'arts': 'Arts',
        'law': 'Law',
        'education': 'Education',
        'media': 'Media',
        'rating': 'Rating',
        'students': 'consultations',
        'hourly-rate': 'per hour',
        'specialties': 'Specialties',
        'awards': 'Awards',
        'intro-title-1': 'Why Choose CC Study Abroad?',
        'intro-content-1': 'We have a team of tutors from world-renowned universities, providing professional study abroad application guidance. Each tutor is carefully selected to ensure the highest quality service for you.',
        'intro-title-2': 'Our Advantages',
        'intro-content-2': 'Personalized application plans, one-on-one professional guidance, and full-process tracking service. From school selection to essays, from interviews to visas, we provide comprehensive support.',
        'intro-title-3': 'Success Stories',
        'intro-content-3': 'We help hundreds of students successfully apply to their dream schools every year. Our tutor team has rich application experience and can help you achieve your study abroad dreams.'
    }
};

// 导师数据 
const tutorsData = [
    {
        id: 'T001',
        name: {
            'zh-cn': 'Clio',
            'zh-tw': 'Clio',
            'en': 'Clio'
        },
        school: {
            'zh-cn': '香港科技大学',
            'zh-tw': '香港科技大學',
            'en': 'Hong Kong University of Science and Technology'
        },
        major: {
            'zh-cn': '计算机',
            'zh-tw': '計算機',
            'en': 'Computer Science'
        },
        grade: {
            'zh-cn': '硕士',
            'zh-tw': '碩士',
            'en': 'Master'
        },
        region: {
            'zh-cn': '香港',
            'zh-tw': '香港',
            'en': 'Hong Kong'
        },
        specialties: {
            'zh-cn': ['CS申请', '机器学习', '软件工程', '算法优化'],
            'zh-tw': ['CS申請', '機器學習', '軟件工程', '算法優化'],
            'en': ['CS Application', 'Machine Learning', 'Software Engineering', 'Algorithm Optimization']
        },
        awards: {
            'zh-cn': ['HKUST睡觉大王'],
            'zh-tw': ['HKUST睡覺大王'],
            'en': ['HKUST Sleeping Champion']
        },
        price: 666,
        rating: 9.6,
        consultations: 156
    }
];

const schoolsData = {
    '美国': ['哈佛大学', '斯坦福大学', '麻省理工', '加州大学伯克利', '耶鲁大学', '普林斯顿大学', '哥伦比亚大学', '芝加哥大学'],
    '英国': ['牛津大学', '剑桥大学', '伦敦政经', '帝国理工', '伦敦大学学院', '爱丁堡大学', '曼彻斯特大学', '华威大学'],
    '加拿大': ['多伦多大学', '麦吉尔大学', '英属哥伦比亚大学', '滑铁卢大学', '女王大学', '阿尔伯塔大学', '麦克马斯特大学'],
    '香港': ['香港大学', '香港科技大学', '香港中文大学', '香港理工大学', '香港城市大学', '香港浸会大学'],
    '澳洲': ['墨尔本大学', '悉尼大学', '澳洲国立大学', '新南威尔士大学', '昆士兰大学', '蒙纳士大学'],
    '新加坡': ['新加坡国立大学', '南洋理工大学', '新加坡管理大学', '新加坡科技设计大学']
};

let currentLang = 'zh-cn';
let filterState = {
    region: '',
    schools: [],
    majors: []  // 修改为数组支持多选
};

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    updateLanguage();
});

function initializeEventListeners() {
    // 语言切换
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            switchLanguage(lang);
        });
    });

    // 开始筛选
    document.getElementById('startFilter').addEventListener('click', function() {
        document.getElementById('filterSection').style.display = 'block';
        document.querySelector('.hero').style.display = 'none';
        document.querySelector('.intro-section').style.display = 'none'; // 隐藏介绍模块
    });

    // 筛选步骤
    setupFilterSteps();

    // 重置筛选
    document.getElementById('resetFilter').addEventListener('click', function() {
        resetFilter();
    });

    // 模态框
    setupModal();
}

function switchLanguage(lang) {
    currentLang = lang;
    
    // 更新按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    updateLanguage();
}

function updateLanguage() {
    const t = translations[currentLang];
    
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.dataset.key;
        if (t[key]) {
            element.textContent = t[key];
        }
    });
    
    // 更新占位符
    const searchInput = document.getElementById('schoolSearch');
    if (searchInput) {
        searchInput.placeholder = t['search-school'];
    }
}

function setupFilterSteps() {
    // 步骤1：选择地区
    document.querySelectorAll('#step1 .option-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('#step1 .option-btn').forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
            filterState.region = this.dataset.value;
            document.getElementById('nextStep1').disabled = false;
        });
    });

    document.getElementById('nextStep1').addEventListener('click', function() {
        document.getElementById('step1').style.display = 'none';
        document.getElementById('step2').style.display = 'block';
        loadSchools();
    });

    // 步骤2：选择院校 - 支持多选
    document.getElementById('schoolSearch').addEventListener('input', function() {
        filterSchools(this.value);
    });

    document.getElementById('nextStep2').addEventListener('click', function() {
        document.getElementById('step2').style.display = 'none';
        document.getElementById('step3').style.display = 'block';
    });

    // 步骤 3：选择专业 - 支持多选
    document.querySelectorAll('#step3 .option-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('selected');
            updateSelectedMajors();
        });
    });

    document.getElementById('showResults').addEventListener('click', function() {
        showResults();
    });
}

function loadSchools() {
    const schools = schoolsData[filterState.region] || [];
    const container = document.getElementById('schoolOptions');
    container.innerHTML = '';
    
    schools.forEach(school => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = school;
        btn.dataset.value = school;
        
        btn.addEventListener('click', function() {
            this.classList.toggle('selected');
            updateSelectedSchools();
        });
        
        container.appendChild(btn);
    });
}

function filterSchools(searchTerm) {
    const schools = schoolsData[filterState.region] || [];
    const container = document.getElementById('schoolOptions');
    container.innerHTML = '';
    
    const filteredSchools = schools.filter(school => 
        school.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    filteredSchools.forEach(school => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = school;
        btn.dataset.value = school;
        
        btn.addEventListener('click', function() {
            this.classList.toggle('selected');
            updateSelectedSchools();
        });
        
        container.appendChild(btn);
    });
}

function updateSelectedSchools() {
    const selectedBtns = document.querySelectorAll('#schoolOptions .option-btn.selected');
    filterState.schools = Array.from(selectedBtns).map(btn => btn.dataset.value);
    document.getElementById('nextStep2').disabled = filterState.schools.length === 0;
}

function updateSelectedMajors() {
    const selectedBtns = document.querySelectorAll('#step3 .option-btn.selected');
    filterState.majors = Array.from(selectedBtns).map(btn => btn.dataset.value);
    document.getElementById('showResults').disabled = filterState.majors.length === 0;
}

function showResults() {
    document.getElementById('filterSection').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'block';
    document.querySelector('.intro-section').style.display = 'none'; // 隐藏介绍模块
    
    const filteredTutors = filterTutors();
    displayTutors(filteredTutors);
}

function filterTutors() {
    return tutorsData.filter(tutor => {
        const regionMatch = tutor.region[currentLang] === filterState.region;
        const schoolMatch = filterState.schools.length === 0 || filterState.schools.includes(tutor.school[currentLang]);
        const majorMatch = filterState.majors.length === 0 || filterState.majors.includes(tutor.major[currentLang]);
        
        return regionMatch && schoolMatch && majorMatch;
    });
}

function displayTutors(tutors) {
    const container = document.getElementById('tutorsGrid');
    const t = translations[currentLang];
    
    container.innerHTML = '';
    
    tutors.forEach(tutor => {
        const card = document.createElement('div');
        card.className = 'tutor-card';
        
        card.innerHTML = `
            <div class="tutor-header">
                <div class="tutor-avatar">${tutor.name[currentLang].charAt(0)}</div>
                <div class="tutor-info">
                    <h4>${tutor.name[currentLang]}</h4>
                    <div class="tutor-school">${tutor.school[currentLang]} · ${tutor.major[currentLang]} · ${tutor.grade[currentLang]}</div>
                </div>
            </div>
            <div class="tutor-details">
                <p><strong>${t.specialties}:</strong> ${tutor.specialties[currentLang].join(', ')}</p>
                <p><strong>${t.awards}:</strong> ${tutor.awards[currentLang].join(', ')}</p>
            </div>
            <div class="tutor-tags">
                ${tutor.specialties[currentLang].map(specialty => `<span class="tag">${specialty}</span>`).join('')}
            </div>
            <div class="tutor-price">¥${tutor.price} <span style="font-size: 0.8rem; color: #666;">/ ${t['hourly-rate']}</span></div>
            <div class="tutor-stats">
                <span>${tutor.consultations} ${t['students']}</span>
                <span>${t['rating']} ${tutor.rating}</span>
            </div>
            <button class="contact-btn" onclick="openContactModal('${tutor.id}', '${tutor.name[currentLang]}')">${t['contact-tutor']}</button>
        `;
        
        container.appendChild(card);
    });
    
    if (tutors.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #666;">
                <h3>暂无匹配的导师</h3>
                <p>请尝试调整筛选条件</p>
            </div>
        `;
    }
}

function resetFilter() {
    filterState = { region: '', schools: [], majors: [] };
    
    document.getElementById('resultsSection').style.display = 'none';
    document.querySelector('.hero').style.display = 'block';
    document.querySelector('.intro-section').style.display = 'block'; // 显示介绍模块
    document.getElementById('filterSection').style.display = 'none';
    
    // 重置所有步骤
    document.getElementById('step1').style.display = 'block';
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'none';
    
    // 清除选择状态
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    document.querySelectorAll('.next-btn').forEach(btn => btn.disabled = true);
}

function setupModal() {
    const modal = document.getElementById('contactModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function openContactModal(tutorId, tutorName) {
    const modal = document.getElementById('contactModal');
    const t = translations[currentLang];
    
    // 更新导师信息
    document.getElementById('tutorName').textContent = tutorName;
    document.getElementById('tutorCode').textContent = tutorId;
    
    // 显示模态框
    modal.style.display = 'block';
}

// 全局函数，供HTML调用
window.openContactModal = openContactModal;
