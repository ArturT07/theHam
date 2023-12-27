document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll('.services-menu');
    const contentImage = document.querySelector('.services-img-1');
    const contentText = document.querySelector('.services-p');
    const triangles = document.querySelectorAll('.triangle');
    const contentTexts = {
        "web-design":"Web design involves planning, creating, and maintaining websites. Key aspects include defining the website's purpose and target audience, creating a visual design with a consistent layout, ensuring responsiveness across devices, and optimizing for search engines. It's essential to focus on user experience, intuitive navigation, clear calls-to-action, and accessibility. Testing, security measures, and analytics integration contribute to a successful website. Collaboration with developers and other stakeholders is crucial, and staying updated on design trends is important.",
        "graphic-design":"Graphic design is the intricate orchestration of visual elements to articulate ideas with finesse. It encompasses the deliberate curation of fonts, colors, and images, weaving them into captivating layouts that transcend mere communication — they embody a symphony of aesthetic sophistication, inviting audiences to engage with a harmonious fusion of creativity and messaging prowess.",
        "online-support":"Online support involves providing assistance and resolving customer queries or issues through digital channels. It includes real-time chat, email support, and other online communication methods to address customer needs, enhance user experience, and build positive relationships.",
        "app-design":"App design is the meticulous creation of user interfaces for mobile or web applications. It involves crafting visually appealing and intuitive designs, ensuring a cohesive visual language, responsiveness across devices, and a focus on enhancing user experience. This process also includes wireframing, prototyping, testing, and optimizing performance for a seamless and engaging user interaction.",
        "online-marketing":"Online marketing, or digital marketing, involves promoting products, services, or brands through various internet channels. This includes activities such as search engine optimization (SEO), social media marketing, content marketing, email marketing, pay-per-click advertising, and affiliate marketing. The goal is to reach and engage target audiences to drive brand awareness, customer acquisition, and business growth.",
        "seo-service":"SEO service focuses on optimizing online content to enhance its visibility in search engine results. This involves strategic use of keywords, content improvement, and technical optimization to improve a website's ranking, ultimately driving more organic traffic."
    };

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            updateTab(item);
        });
    });

    function updateTab(selectedItem) {
        const tabId = selectedItem.getAttribute('data-tab');
        const selectedIndex = Array.from(menuItems).indexOf(selectedItem);

        contentText.textContent = contentTexts[tabId];
        contentImage.src = `images/${selectedItem.getAttribute('data-image')}.png`;

        triangles.forEach(triangle => {
            triangle.style.display = 'none';
        });

        const selectedTriangle = selectedItem.querySelector('.triangle');
        selectedTriangle.style.display = 'block';

        menuItems.forEach(menuItem => {
            menuItem.classList.remove('selected');
            menuItem.style.backgroundColor = '';
            menuItem.style.color = '';
        });
        selectedItem.classList.add('selected');
        selectedItem.style.backgroundColor = '#18CFAB';
        selectedItem.style.color = 'white';
    }

    updateTab(menuItems[0]);
});
document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".work-menu");
    const workImages = document.querySelectorAll(".work-image");
    const loadMoreButton = document.querySelector(".add-images.fix-margin-add");
    const imageContainerAll = document.querySelector(".work-image.all");


    const allTab = document.querySelector(".work-menu.fix-work");
    filterImages(allTab, workImages);
    highlightMenuItem(allTab, menuItems);

    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            filterImages(item, workImages);
            highlightMenuItem(item, menuItems);
        });
    });

    loadMoreButton.addEventListener("click", function() {
        loadNewImages(imageContainerAll);
        loadMoreButton.style.display = "none";
    });
});

function filterImages(selectedItem, images) {
    const category = getCategoryFromItem(selectedItem);

    images.forEach(imageGroup => {
        const categoryImages = imageGroup.classList.contains(category);
        if (category === "fix-work" || categoryImages || category === "all") {
            imageGroup.style.display = "block";
        } else {
            imageGroup.style.display = "none";
        }
    });
}

function getCategoryFromItem(item) {
    if (item.classList.contains("fix-work")) {
        return "fix-work";
    } else {
        return item.textContent.toLowerCase().replace(" ", "-");
    }
}

function highlightMenuItem(selectedItem, menuItems) {
    menuItems.forEach(menuItem => {
        menuItem.style.border = " 0.5px solid #DADADA";
        menuItem.style.color = "#717171";
    });
    selectedItem.style.border = "2px solid #18CFAB";
    selectedItem.style.color = "#18CFAB";
}

function loadNewImages(imageContainer) {
    const newImageUrls = [
        "images/add-shadow-1.png",
        "images/add-shadow-2.png",
        "images/add-shadow-3.png",
        "images/add-shadow-4.png",
        "images/add-morph-1.png",
        "images/add-morph-2.png",
        "images/add-morph-3.png",
        "images/add-morph-4.png",
        "images/add-arc-1.png",
        "images/add-arc-2.png",
        "images/add-arc-3.png",
        "images/add-arc-4.png",
        "images/add-pudge-1.png",
        "images/add-pudge-2.png",
        "images/add-pudge-3.png",
        "images/add-pudge-4.png"
    ];

    newImageUrls.forEach(url => {
        const newImage = document.createElement("img");
        newImage.src = url;
        newImage.alt = "New Image";
        imageContainer.appendChild(newImage);
    });
}
$(document).ready(function() {
    let currentIndex = 0;
    const feedbackData = [
        {
            text: "A Web Designer is a creative professional skilled in blending artistic flair with technical expertise to craft visually appealing and user-friendly websites. They play a pivotal role in shaping the online experience, employing a keen understanding of aesthetics and usability to create websites that captivate and engage visitors. Proficient in the principles of User Interface (UI) and User Experience (UX) design, a Web Designer focuses on optimizing how users interact with a website, ensuring seamless navigation and a delightful journey. In addition to their design prowess, Web Designers often have coding skills, enabling them to bring their creative visions to life in the digital realm.",
            name: "Larissa Meek",
            profession: "Web-Designer",
            image: "images/feedback-2.png"
        },
        {
            text: "A Game Designer is a creative professional who shapes the interactive experiences of video games. They collaborate with teams to design gameplay mechanics, characters, and storylines. Game Designers focus on creating engaging challenges, rewards, and an overall captivating gaming journey. Their role involves a mix of artistic creativity, technical understanding, and a keen awareness of player psychology. They contribute to prototyping, testing, and refining game elements to ensure a compelling user experience in the ever-evolving world of gaming.",
            name: "Jonathan Ackley",
            profession: "Game-Designer",
            image: "images/feedback-3.png"
        },   {
            text: "A UX Designer specializes in improving the usability and satisfaction of digital products. They use research to understand user needs and behaviors, creating wireframes and prototypes to optimize user interactions. Collaborating with cross-functional teams, UX Designers ensure that products align with user expectations and business goals, aiming for intuitive and enjoyable digital experiences.",
            name: "Hasan Ali",
            profession: "UX Designer",
            image: "images/feedback-4.png"
        },   {
            text: "A UI (User Interface) Designer focuses on the visual elements of digital products. They craft the look and feel of interfaces, including icons, buttons, and overall aesthetics. UI Designers work closely with UX counterparts to ensure a seamless and visually appealing user experience. Their role is to create interfaces that are not only visually attractive but also intuitive and easy to navigate.",
            name: "Cathy Pearl",
            profession: "UI Designer",
            image: "images/feedback-5.png"
        }
    ];


    const animationDuration = 400;
    const slideOffset = 10;

    function updateSelectedPerson(selectedIndex) {
        const selectedData = feedbackData[selectedIndex];
        const $selectedImage = $(".selected-person-image");
        const $carouselImages = $(".feedback-carousel-img");

        $selectedImage.fadeOut(animationDuration / 2, function() {
            $selectedImage.attr("src", selectedData.image).fadeIn(animationDuration / 2);
        });

        $(".selected-person-name").text(selectedData.name);
        $(".selected-person-profession").text(selectedData.profession);
        $(".selected-person-text").text(selectedData.text);

        currentIndex = selectedIndex;

        $carouselImages.css("top", 0);
        $carouselImages.eq(selectedIndex).css("top", -slideOffset);
    }

    $(".feedback-carousel-img").click(function() {
        const selectedIndex = $(this).index() - 1;
        if (selectedIndex >= 0 && selectedIndex < feedbackData.length) {
            updateSelectedPerson(selectedIndex);
        }
    });

    $(".arrow-left").click(function() {
        const newIndex = (currentIndex - 1 + feedbackData.length) % feedbackData.length;
        updateSelectedPerson(newIndex);
    });

    $(".arrow-right").click(function() {
        const newIndex = (currentIndex + 1) % feedbackData.length;
        updateSelectedPerson(newIndex);
    });
    updateSelectedPerson(currentIndex);
});


const newImages = [
    "images/grid/grid-1.png",
    "images/grid/grid-2.png",
    "images/grid/grid-6.png",
    "images/grid/grid-5.png",
    "images/grid/grid-2.png",
    "images/grid/grid-1.png",
    "images/grid/grid-9.png",
    "images/grid/grid-5.png",
    "images/grid/grid-6.png"
];
let imageCounter = 0;

function updateLoadMoreVisibility() {
    const loadMoreButtons = document.querySelectorAll(".load-more-button");

    loadMoreButtons.forEach(button => {
        if (imageCounter >= newImages.length) {
            button.style.display = "none";
        } else {
            button.style.display = "block";
        }
    });
}

function addImages() {
    const imageContainers = document.querySelectorAll(".image-container");
    const imagesToAdd = 9;

    imageContainers.forEach(container => {
        for (let i = 0; i < imagesToAdd; i++) {
            if (imageCounter < newImages.length) {
                const imgElement = document.createElement("img");
                imgElement.src = newImages[imageCounter];
                imgElement.alt = "New Image";
                container.appendChild(imgElement);
                imageCounter++;
            }
        }
    });

    updateLoadMoreVisibility();
}

const loadMoreButtons = document.querySelectorAll(".load-more-button");

loadMoreButtons.forEach(button => {
    button.addEventListener("click", event => {
        event.preventDefault();
        addImages();
    });
});

updateLoadMoreVisibility();