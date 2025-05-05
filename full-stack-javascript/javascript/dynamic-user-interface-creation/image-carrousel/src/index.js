import './styles.css';
import image1 from './images/image1.webp';
import image2 from './images/image2.webp';
import image3 from './images/image3.webp';
import image4 from './images/image4.webp';
import image5 from './images/image5.webp';

class Carousel {
    constructor() {
        this.carousel = document.querySelector(".carousel-inner");
        this.items = document.querySelectorAll(".carousel-item");
        this.prevButton = document.querySelector(".prev");
        this.nextButton = document.querySelector(".next");
        this.dotsContainer = document.querySelector(".carousel-dots");
        
        // Set image sources
        this.items[0].querySelector('img').src = image1;
        this.items[1].querySelector('img').src = image2;
        this.items[2].querySelector('img').src = image3;
        this.items[3].querySelector('img').src = image4;
        this.items[4].querySelector('img').src = image5;
        
        this.currentIndex = 0;
        this.itemCount = this.items.length;
        this.autoScrollInterval = null;
        
        this.init();
    }
    
    init() {
        // Create dots
        this.createDots();
        
        // Add event listeners
        this.prevButton.addEventListener("click", () => {
            this.prev();
            this.resetAutoScroll();
        });
        this.nextButton.addEventListener("click", () => {
            this.next();
            this.resetAutoScroll();
        });
        
        // Add keyboard navigation
        document.addEventListener("keydown", (e) => {
            if (e.key === "ArrowLeft") {
                this.prev();
                this.resetAutoScroll();
            }
            if (e.key === "ArrowRight") {
                this.next();
                this.resetAutoScroll();
            }
        });
        
        // Add touch support
        this.addTouchSupport();
        
        // Start auto-scroll
        this.startAutoScroll();
    }
    
    createDots() {
        for (let i = 0; i < this.itemCount; i++) {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            if (i === 0) dot.classList.add("active");
            dot.addEventListener("click", () => {
                this.goToSlide(i);
                this.resetAutoScroll();
            });
            this.dotsContainer.appendChild(dot);
        }
    }
    
    updateDots() {
        const dots = this.dotsContainer.querySelectorAll(".dot");
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === this.currentIndex);
        });
    }
    
    goToSlide(index) {
        this.currentIndex = index;
        this.updateCarousel();
        this.updateDots();
    }
    
    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.itemCount) % this.itemCount;
        this.updateCarousel();
        this.updateDots();
    }
    
    next() {
        this.currentIndex = (this.currentIndex + 1) % this.itemCount;
        this.updateCarousel();
        this.updateDots();
    }
    
    updateCarousel() {
        this.carousel.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    }
    
    addTouchSupport() {
        let startX, moveX;
        
        this.carousel.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
        });
        
        this.carousel.addEventListener("touchmove", (e) => {
            moveX = e.touches[0].clientX;
        });
        
        this.carousel.addEventListener("touchend", () => {
            if (startX - moveX > 50) {
                this.next();
                this.resetAutoScroll();
            } else if (moveX - startX > 50) {
                this.prev();
                this.resetAutoScroll();
            }
        });
    }
    
    resetAutoScroll() {
        if (this.autoScrollInterval) {
            clearInterval(this.autoScrollInterval);
        }
        this.startAutoScroll();
    }
    
    startAutoScroll() {
        this.autoScrollInterval = setInterval(() => {
            this.next();
        }, 5000); // Change slide every 5 seconds
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    new Carousel();
});
