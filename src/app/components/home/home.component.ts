import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface PriceMap {
  [key: string]: number;
}


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NgClass, NgFor, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  // animation css
  ngAfterViewInit(): void {
    const cards = document.querySelectorAll('.card-rtl, .card-up, .card-zoom-in'); 
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('visible');
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.2
    });
  
    cards.forEach(card => observer.observe(card));
  }

  // swiper
  images: string[] = [
    'assets/images/food1.jpeg',
    'assets/images/food2.jpeg',
    'assets/images/food3.jpeg',
    'assets/images/food4.jpeg',
    'assets/images/food5.jpeg',
    'assets/images/food6.jpeg',
    'assets/images/food6.jpeg',
    'assets/images/food7.jpeg'
  ];

  currentIndex = 0;

  getVisibleSlides(): string[] {
    const screenWidth = window.innerWidth;
    const slidesPerView = screenWidth >= 1024 ? 3 : screenWidth >= 768 ? 2 : 1;

    const result: string[] = [];
    for (let i = 0; i < slidesPerView; i++) {
      const index = (this.currentIndex + i) % this.images.length;
      result.push(this.images[index]);
    }
    return result;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  // toggle between navbar & dropdown menu icons
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }


  // menu
  menu = [
  {
    title: 'ركن المشاوي',
    items: [
      { name: 'كباب بتلو', imgUrl: 'assets/images/food2.jpeg', price: { "ربع": 210, "نص": 400, "كيلو": 800 } as PriceMap, description: ""},
      { name: 'كباب بتلو', imgUrl: 'assets/images/food3.jpeg', price: { "ربع": 210, "نص": 400, "كيلو": 800 } as PriceMap, description: " + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'كباب بتلو', imgUrl: 'assets/images/food1.jpeg', price: { "ربع": 210, "نص": 400, "كيلو": 800 } as PriceMap, description: ""},
      { name: 'كباب بتلو', imgUrl: 'assets/images/food6.jpeg', price: { "ربع": 210, "نص": 400, "كيلو": 800 } as PriceMap, description: ""},
      { name: 'كباب بتلو', imgUrl: 'assets/images/food5.jpeg', price: { "ربع": 210, "نص": 400, "كيلو": 800 } as PriceMap, description: " + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'كباب بتلو', imgUrl: 'assets/images/food4.jpeg', price: { "ربع": 210, "نص": 400, "كيلو": 800 } as PriceMap, description: ""}
      
    ],
    note: 'يقدم مع المشاوي عيش وسلطات',
  },
  {
    title: 'ركن الفراخ والحمام',
    items: [
      { name: 'فرخة تكا', imgUrl: 'assets/images/food1.jpeg', price: { "ربع": 210, "نص": 400, "فرخة": 800 } as PriceMap, description: ""},
      { name: 'فرخة قطع', imgUrl: 'assets/images/food2.jpeg', price: { "ربع": 210, "نص": 400, "فرخة": 800 } as PriceMap, description: ""},
      { name: 'حمام ارز', imgUrl: 'assets/images/food3.jpeg', price: { "فرخة": 210 } as PriceMap, description: ""},
      { name: 'حمام فريك', price: { "فرخة": 210 } as PriceMap, description: ""}
    ],
    note: '',
  },
  {
    title: 'ركن الوجبات',
    items: [
      { name: 'وجبة فاتنوم', imgUrl: 'assets/images/food2.jpeg', price: { "": 210 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'وجبة قناص', imgUrl: 'assets/images/food1.jpeg', price: { "": 210 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'وجبة الصاعقة', imgUrl: 'assets/images/food3.jpeg', price: { "": 210 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'وجبة فاتنوم', imgUrl: 'assets/images/food4.jpeg', price: { "": 210 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'وجبة قناص', imgUrl: 'assets/images/food5.jpeg', price: { "": 210 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'وجبة الصاعقة', imgUrl: 'assets/images/food7.jpeg', price: { "": 210 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'وجبة فاتنوم', imgUrl: 'assets/images/food5.jpeg', price: { "": 210 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'وجبة قناص', imgUrl: 'assets/images/food6.jpeg', price: { "": 210 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'وجبة الصاعقة', imgUrl: 'assets/images/food5.jpeg', price: { "": 210 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"}
    ],
    note: 'عند طلب صدر فراخ ( 15 جنيه ) فرق سعر حسب المتاح',
  },
  {
    title: 'ركن الشاورما',
    items: [
      { name: 'كباب بتلو', imgUrl: 'assets/images/food2.jpeg', price: { "": 210 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'كباب بتلو', imgUrl: 'assets/images/food5.jpeg', price: { "": 210 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'كباب بتلو', imgUrl: 'assets/images/food1.jpeg', price: { "": 210 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'كباب بتلو', imgUrl: 'assets/images/food3.jpeg', price: { "": 210 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'كباب بتلو', imgUrl: 'assets/images/food6.jpeg', price: { "": 210 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"}
    ],
    note: '',
  },
  {
    title: 'الصواني',
    items: [
      { name: 'كباب بتلو', imgUrl: 'assets/images/food2.jpeg', price: { "ربع": 210, "نص": 400, "كيلو": 800 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'كباب بتلو', imgUrl: 'assets/images/food6.jpeg', price: { "ربع": 210, "نص": 400, "كيلو": 800 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'كباب بتلو', imgUrl: 'assets/images/food7.jpeg', price: { "ربع": 210, "نص": 400, "كيلو": 800 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"}
    ],
    note: '',
  },
  {
    title: 'الشورب',
    items: [
      { name: 'كباب بتلو', imgUrl: 'assets/images/food1.jpeg', price: { "ربع": 210, "نص": 400, "كيلو": 800 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'كباب بتلو', imgUrl: 'assets/images/food5.jpeg', price: { "ربع": 210, "نص": 400, "كيلو": 800 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'كباب بتلو', imgUrl: 'assets/images/food3.jpeg', price: { "ربع": 210, "نص": 400, "كيلو": 800 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"}
    ],
    note: '',
  },
  {
    title: 'المقبلات',
    items: [
      { name: 'طبق سمبوسة لحمة 5 قطع', imgUrl: 'assets/images/food2.jpeg', price: { "": 60 } as PriceMap, description: ""},
      { name: 'طبق سمبوسة لحمة 5 قطع', imgUrl: 'assets/images/food1.jpeg', price: { "": 60 } as PriceMap, description: ""},
      { name: 'طبق سمبوسة لحمة 5 قطع', imgUrl: 'assets/images/food3.jpeg', price: { "": 60 } as PriceMap, description: ""},
      { name: 'طبق سمبوسة لحمة 5 قطع', imgUrl: 'assets/images/food5.jpeg', price: { "": 60 } as PriceMap, description: ""},
      { name: 'طبق سمبوسة لحمة 5 قطع', imgUrl: 'assets/images/food4.jpeg', price: { "": 60 } as PriceMap, description: ""},
      { name: 'طبق سمبوسة لحمة 5 قطع', imgUrl: 'assets/images/food3.jpeg', price: { "": 60 } as PriceMap, description: ""},
      { name: 'طبق أرز شعرية', imgUrl: 'assets/images/food1.jpeg', price: { "": 50 } as PriceMap, description: ""},
      { name: 'طبق كبيبة 5 قطع', imgUrl: 'assets/images/food2.jpeg', price: { "": 70 } as PriceMap, description: "" }
    ],
    note: '',
  },
  {
    title: 'الكريب',
    items: [
      { name: ' كريب بطاطس', imgUrl: 'assets/images/food1.jpeg', price: { "": 55 } as PriceMap, description: ""},
      { name: ' كريب بطاطس', imgUrl: 'assets/images/food2.jpeg', price: { "": 55 } as PriceMap, description: ""},
      { name: ' كريب بطاطس', imgUrl: 'assets/images/food2.jpeg', price: { "": 55 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: ' كريب بطاطس', imgUrl: 'assets/images/food3.jpeg', price: { "": 55 } as PriceMap, description: ""},
      { name: ' كريب بطاطس', imgUrl: 'assets/images/food4.jpeg', price: { "": 55 } as PriceMap, description: ""},
      { name: ' كريب بطاطس', imgUrl: 'assets/images/food5.jpeg', price: { "": 55 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: ' كريب بطاطس', imgUrl: 'assets/images/food7.jpeg', price: { "": 55 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: ' كريب بطاطس', imgUrl: 'assets/images/food6.jpeg', price: { "": 55 } as PriceMap, description: ""},
      { name: ' كريب بطاطس', imgUrl: 'assets/images/food5.jpeg', price: { "": 55 } as PriceMap, description: ""},
      { name: ' كريب بطاطس', imgUrl: 'assets/images/food2.jpeg', price: { "": 55 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"}
    ],
    note: '',
  },
  {
    title: 'السلطات',
    items: [
      { name: 'سلطة بلدي', imgUrl: 'assets/images/food2.jpeg', price: { "": 15} as PriceMap, description: ""},
      { name: 'سلطة طحينة', imgUrl: 'assets/images/food1.jpeg', price: { "": 10 } as PriceMap, description: ""},
      { name: 'سلطة تومية', imgUrl: 'assets/images/food7.jpeg', price: { "": 5 } as PriceMap, description: ""},
      { name: 'مخلل', imgUrl: 'assets/images/food5.jpeg', price: { "": 5} as PriceMap, description: ""}
    ],
    note: '',
  },
  {
    title: 'المشروبات',
    items: [
      { name: 'مياه صغيرة', imgUrl: 'assets/images/food1.jpeg', price: { "": 10 } as PriceMap, description: ""},
      { name: 'مياه صغيرة', imgUrl: 'assets/images/food2.jpeg', price: { "": 15 } as PriceMap, description: ""},
      { name: 'مياه صغيرة', imgUrl: 'assets/images/food3.jpeg', price: { "": 15 } as PriceMap, description: ""},
      { name: 'مياه صغيرة', imgUrl: 'assets/images/food4.jpeg', price: { "": 15 } as PriceMap, description: ""},
      { name: 'مياه صغيرة', imgUrl: 'assets/images/food5.jpeg', price: { "": 5 } as PriceMap, description: ""}
    ],
    note: '',
  },
  {
    title: 'الحواوشي',
    items: [
      { name: 'حواوشي', imgUrl: 'assets/images/food1.jpeg', price: { "بلدي": 210, "سوري ص": 400, "سوري ك": 800 } as PriceMap, description: ""},
      { name: 'حواوشي كفته', imgUrl: 'assets/images/food2.jpeg', price: { "بلدي": 210, "سوري ص": 400, "سوري ك": 800 } as PriceMap, description: ""}
    ],
    note: '',
  },
  {
    title: 'السندوتشات',
    items: [
      { name: 'بطاطس', imgUrl: 'assets/images/food6.jpeg', price: { "كيزر": 210, "وسط": 400, "كبير": 800 } as PriceMap, description: ""},
      { name: 'سجق', imgUrl: 'assets/images/food7.jpeg', price: { "كيزر": 210, "نص": 400, "كبير": 800 } as PriceMap, description: ""},
      { name: 'كفته', imgUrl: 'assets/images/food5.jpeg', price: { "كيزر": 210, "نص": 400, "كبير": 800 } as PriceMap, description: ""},
      { name: 'بانيه مقلي', imgUrl: 'assets/images/food2.jpeg', price: { "كيزر": 210, "نص": 400, "كبير": 800 } as PriceMap, description: ""},
      { name: 'بانيه مقلي', imgUrl: 'assets/images/food3.jpeg', price: { "كيزر": 210, "نص": 400, "كبير": 800 } as PriceMap, description: ""},
      { name: 'بانيه مقلي', imgUrl: 'assets/images/food4.jpeg', price: { "كيزر": 210, "نص": 400, "كبير": 800 } as PriceMap, description: ""},
      { name: 'بانيه مقلي', imgUrl: 'assets/images/food5.jpeg', price: { "كيزر": 210, "نص": 400, "كبير": 800 } as PriceMap, description: ""},
      { name: 'بانيه مقلي', imgUrl: 'assets/images/food6.jpeg', price: { "كيزر": 210, "نص": 400, "كبير": 800 } as PriceMap, description: ""},
      { name: 'بانيه مقلي', imgUrl: 'assets/images/food7.jpeg', price: { "كيزر": 210, "نص": 400, "كبير": 800 } as PriceMap, description: ""},
      { name: 'بانيه مقلي', imgUrl: 'assets/images/food5.jpeg', price: { "كيزر": 210, "نص": 400} as PriceMap, description: ""},
      { name: 'بانيه مقلي', imgUrl: 'assets/images/food6.jpeg', price: { "كيزر": 210, "نص": 400} as PriceMap, description: ""},
      { name: 'بانيه مقلي', imgUrl: 'assets/images/food1.jpeg', price: { "كيزر": 210, "نص": 400} as PriceMap, description: ""},
      { name: 'بانيه مقلي', imgUrl: 'assets/images/food2.jpeg', price: { "كيزر": 210, "كبير": 800 } as PriceMap, description: ""}
    ],
    note: '',
  },
  {
    title: 'الطواجن',
    items: [
      { name: 'خضار اليوم باللحمة', imgUrl: 'assets/images/food2.jpeg', price: { "صغير": 15, "كبير": 25 } as PriceMap, description: ""},
      { name: 'ملوخية', imgUrl: 'assets/images/food1.jpeg', price: { "كبير": 400 } as PriceMap, description: ""},
      { name: 'بامية سادة', imgUrl: 'assets/images/food7.jpeg', price: { "كبير": 400 } as PriceMap, description: ""},
      { name: 'خضار اليوم سادة', imgUrl: 'assets/images/food5.jpeg', price: { "كبير": 400 } as PriceMap, description: ""},
      { name: 'بامية باللحمة البلدي', imgUrl: 'assets/images/food3.jpeg', price: { "كبير": 400 } as PriceMap, description: ""},
      { name: 'مكرون بشاميل', imgUrl: 'assets/images/food4.jpeg', price: { "كبير": 50} as PriceMap, description: ""}
    ],
    note: '',
  }
 
  ];
  
  getKeys(obj: { [key: string]: number }): string[] {
    return Object.keys(obj);
  }

  // scroll to section
  scrollToSection(sectionName: string) {
    const element = document.getElementById(sectionName);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  


}
