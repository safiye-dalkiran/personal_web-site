
const data = {
    tr: {
        headerTitles: {
            skillHeader: "Yetenekler",
            profileHeader: "Profil",
            projectHeader: "Projeler",
            hireMe:"Birlikte Çalışalım"
        },
        heroSection: {
            name: "Safiye Dalkıran",
            text1: "Yaratıcı ve Çözüm Odaklı Geliştirici",
            description:
                "Merhaba! Ben Safiye. Kod ve tasarımı bir araya getirerek, kullanıcıya unutulmaz ve akıcı deneyimler sunmayı seviyorum. Web’i sadece göstermek yerine hissettirmek için çalışırım; detaycı ve deneyim odaklı yaklaşımım her projede önceliğimdir.",
            profileImage: "/src/assets/profilePhoto.jpg",
            socials: [
                {
                    logo: "/src/assets/github.svg",
                    altText: "GitHub",
                    text: "GitHub",
                    link: "https://github.com/safiye-dalkiran",
                },
                {
                    logo: "/src/assets/LinkedIn.svg",
                    altText: "LinkedIn",
                    text: "LinkedIn",
                    link: "https://www.linkedin.com/in/safiyedalkiran",
                },

            ],

        },
        skillSection: {
            skills: [
                { name: "HTML", altText: "HTML", text: "Temiz yapılı, semantik ve erişilebilir işaretleme." },
                { name: "CSS", altText: "CSS", text: "Responsive düzenler, animasyonlar ve modern stil teknikleri." },
                { name: "JavaScript", altText: "JavaScript", text: "ES6+ bilgisi, DOM manipülasyonu ve asenkron programlamaya hakim." },
                { name: "React", altText: "React", text: "Bileşen tabanlı mimari, hooks ve state yönetimi." },
                { name: "TailwindCSS", altText: "TailwindCSS", text: "Hızlı UI geliştirme için utility-first CSS framework." },
                { name: "Bootstrap", altText: "Bootstrap", text: "Önceden hazırlanmış responsive tasarım ve UI bileşenleri." },
                { name: "Redux", altText: "Redux", text: "Ölçeklenebilir React uygulamaları için global state yönetimi." },
                { name: "VS Code", altText: "VS Code", text: "Özelleştirilmiş eklentilerle ana geliştirme ortamı." },

            ],
        },

        profile: {
            profileData: {
                profileHeader: "Profil",
                birthDateLabel: "Doğum Tarihi",
                birthDate: "01.08.1999",
                hometownLabel: "İkamet Şehri",
                hometown: "Ankara",
                educationLabel: "Eğitim Durumu",
                education: "Hacettepe Üniv. Matematik",
                roleLabel: "Tercih Ettiği Rol",
                role: "Frontend, UI",
            },
            aboutData: {
                aboutHeader: "Hakkımda",
                aboutText1:
                    "Hacettepe Üniversitesi Matematik bölümünden mezun olduktan sonra bir süre öğretmenlik yaptım; bu süreç sabır, analiz yeteneği ve çözüm odaklı düşünme becerilerimi geliştirdi. Uzun süredir ilgim olan yazılıma yöneldim ve öğrenme sürecinde çeşitli projeler geliştirdim.",
                aboutText2:
                    "Tasarım ve kodu birleştirerek kullanıcıya değer katan, interaktif ve akılda kalan web deneyimleri yaratmayı seviyorum. Bu sitede kendimden parçalar paylaşmak ve öğrendiklerimi biriktirmek istiyorum."
            },
        },
        projects: [
            {
                id: 1,
                img: "/src/assets/pizzaOrderForm.png",
                name: "Statik Pizza Sitesi",
                description: "Tamamen HTML ve CSS ile geliştirilmiş, görsel olarak çekici bir statik web sitesi. Farklı pizzaları resimler ve açıklamalar ile sergiler, düzen, tipografi ve duyarlı tasarım üzerinde odaklanır. Proje, temiz ve semantik kod yazımını ön plana çıkarırken, farklı cihazlarda sorunsuz bir kullanıcı deneyimi sunmayı hedefler.",
                link: "https://github.com/safiye-dalkiran/pizza-order-form",
                tags: ["HTML", "CSS"],
            },
            {
                id: 2,
                img: "/src/assets/pizzaOrderApp.png",
                name: "Dinamik Pizza Sitesi",
                description: "React ve JavaScript kullanılarak oluşturulmuş etkileşimli bir pizza sipariş uygulaması. Kullanıcıların pizzaları seçmesine, boyut ve malzeme tercihlerini belirlemesine ve siparişlerini kolayca ve hızlı bir şekilde oluşturmasına olanak tanır. Bu proje, dinamik kullanıcı etkileşimleri ve sorunsuz bir kullanıcı deneyimi sunmayı amaçlar ve kullanıcı memnuniyetini ön planda tutar.",
                link: "https://github.com/safiye-dalkiran/pizza-order-app",
                tags: ["react", "redux", "axios"],
            },
            {
                id: 3,
                img: "/src/assets/eCommerceSite.png",
                name: "Çevrimiçi Alışveriş Sitesi",
                description: "Kullanıcıların ürünleri inceleyebileceği, detaylarını görebileceği ve satın alabileceği bir e-ticaret platformu. Erkek ve kadın giyim, takı ve elektronik gibi kategoriler içerir ve ürünler net görseller ve açıklamalar ile sunulur. Proje, responsive tasarım, akıcı gezinme ve farklı cihazlarda sorunsuz bir kullanıcı deneyimi sunmaya odaklanır.",
                link: "https://github.com/safiye-dalkiran/pizza-order-app",
                tags: ["react", "redux", "axios"],
            },
        ],

        footerSection: {
            title: "Bir sonraki ürününüz üzerinde birlikte çalışalım.",
            email: "safiyedal360@gmail.com",
            text: "Kişisel Blog"
        },
        button: "ENGLISH",
        darkMode: {
            dark: "Karanlık Mod",
            light: "Aydınlık Mod",
        },


    },

    en: {
         headerTitles: {
            skillHeader: "Skills",
            profileHeader: "Profile",
            projectHeader: "Projects",
            hireMe:"Here me"
        },
        heroSection: {
            name: "Safiye Dalkıran",
            text1: "Creative Problem-Solving Developer",
            description:
                "Hi! I'm Safiye. I love combining code and design to create memorable and smooth user experiences. I work to make the web not just seen, but felt; attention to detail and experience-focused approach is my priority in every project.",
            profileImage: "/src/assets/profilePhoto.jpg",
            socials: [

                {
                    logo: "/src/assets/github.svg",
                    altText: "GitHub",
                    text: "GitHub",
                    link: "https://github.com/safiye-dalkiran",
                },
                {
                    logo: "/src/assets/LinkedIn.svg",
                    altText: "LinkedIn",
                    text: "LinkedIn",
                    link: "https://www.linkedin.com/in/safiyedalkiran",
                },
            ],

        },
        skillSection: {
            skills: [
                { name: "HTML", altText: "HTML", text: "Clean, semantic, and accessible markup." },
                { name: "CSS", altText: "CSS", text: "Responsive layouts, animations, and modern styling techniques." },
                { name: "JavaScript", altText: "JavaScript", text: "Proficient in ES6+, DOM manipulation, and asynchronous programming." },
                { name: "React", altText: "React", text: "Component-based architecture, hooks, and state management." },
                { name: "TailwindCSS", altText: "TailwindCSS", text: "Utility-first CSS framework for rapid UI development." },
                { name: "Bootstrap", altText: "Bootstrap", text: "Prebuilt responsive design and UI components." },
                { name: "Redux", altText: "Redux", text: "Global state management for scalable React apps." },
                { name: "VS Code", altText: "VS Code", text: "Primary development environment with customized extensions." },
            ],
        },
        profile: {
            profileData: {
                profileHeader: "Profile",
                birthDateLabel: "Birthday",
                birthDate: "01.08.1999",
                hometownLabel: "City of Residence",
                hometown: "Ankara",
                educationLabel: "Education",
                education: "Hacettepe University - Math",
                roleLabel: "Preferred Role",
                role: "Frontend, UI",
            },
            aboutData: {
                aboutHeader: "About Me",
                aboutText1:
                    "After graduating from Hacettepe University with a degree in Mathematics, I worked as a teacher for a while; this experience helped me develop patience, analytical skills, and a problem-solving mindset. I later turned to coding, pursuing a long-standing interest, and built various projects during my learning journey. ",
                aboutText2:
                    "I enjoy combining design and code to create interactive and memorable web experiences that add value to users. On this site, I aim to share pieces of myself and collect the knowledge I gain."
            },
        },
        projects: [

            {
                id: 1,
                img: "/src/assets/pizzaOrderForm.png",
                name: "Static Pizza Site",
                description: "A visually appealing static website built entirely with HTML and CSS. It showcases a variety of pizzas with images and descriptions, focusing on layout, typography, and responsive design. The project emphasizes clean and semantic code while providing a smooth user experience across different devices.",
                link: "https://github.com/safiye-dalkiran/pizza-order-form",
                tags: ["HTML", "CSS"],
            },
            {
                id: 2,
                img: "/src/assets/pizzaOrderApp.png",
                name: "Dynamic Pizza Site",
                description: "An interactive pizza ordering app built with React and JavaScript. It allows users to select pizzas, choose size and toppings, and easily and quickly create their orders. This project aims to provide dynamic user interactions and a smooth user experience while prioritizing user satisfaction.",
                link: "https://github.com/safiye-dalkiran/pizza-order-app",
                tags: ["react", "redux", "axios"],
            },
            {
                id: 3,
                img: "/src/assets/eCommerceSite.png",
                name: "Online Store",
                description: "An e-commerce platform where users can browse products, view details, and make purchases. It includes categories like men’s and women’s clothing, jewelry, and electronics, with clear images and descriptions. The project focuses on responsive design, smooth navigation, and a seamless user experience across devices.",
                link: "https://github.com/safiye-dalkiran/e-commerce-site",
                tags: ["react", "redux", "axios"],
            },
        ],
        footerSection: {
            title: "Let's work together on your next product..",
            email: "safiyedal360@gmail.com",
            text: "Personal Blog"
        },
        button: "SWITCH TO TURKISH",
        darkMode: {
            dark: "Dark Mode",
            light: "Light Mode",
        },

    },

};

export default data;