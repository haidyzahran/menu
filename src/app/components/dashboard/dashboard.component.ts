import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgIf,CommonModule ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  // sidebar toggle
  menuOpen = false;
  isMobile = false;

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 700;
    if (!this.isMobile) {
      this.menuOpen = true;
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

    
  //  show edit modal for menu table
  showModal: boolean = false; 

  // select section to show
  activeSection: string = 'hero';

  showSection(sectionId: string) {
    this.activeSection = sectionId;
  }


  // logo & basic image 
  selectedLogo: string | null = null;
  selectedHeroImage: string | null = null;

  logoUrl: string = '';         
  heroImageUrl: string = '';    

  onLogoChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => this.selectedLogo = reader.result as string;
      reader.readAsDataURL(input.files[0]);
    }
  }

  onHeroImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => this.selectedHeroImage = reader.result as string;
      reader.readAsDataURL(input.files[0]);
    }
  }

  saveLogo() {
    this.logoUrl = this.selectedLogo!;
    this.selectedLogo = null;
  }
  cancelLogo() {
    this.selectedLogo = null;
  }

  saveHeroImage() {
    this.heroImageUrl = this.selectedHeroImage!;
    this.selectedHeroImage = null;
    // console.log(this.heroImageUrl)
  }
  cancelHeroImage() {
    this.selectedHeroImage = null;
  }

  // slider images
  selectedSliderImage: string | null = null;
  sliderImageUrl: string | null = null;

  onSliderImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => this.selectedSliderImage = reader.result as string;
      reader.readAsDataURL(input.files[0]);
    }
  }

  saveSliderImage() {
    this.sliderImageUrl = this.selectedSliderImage!;
    this.selectedSliderImage = null;
    console.log(this.sliderImageUrl)
  }
  cancelSliderImage() {
    this.selectedSliderImage = null;
  }

  // colors
  selectedPrimaryColor: string | null = null;
  selectedBgColor: string | null = null;

  primaryColor: string | null = null;
  bgColor: string | null = null;

  onPrimaryColorChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedPrimaryColor = input.value;
  }
  onBgColorChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedBgColor = input.value;
  }

  savePrimaryColor() {
    this.primaryColor = this.selectedPrimaryColor;
    this.selectedPrimaryColor = null;
    console.log(this.primaryColor);
  }
  cancelPrimaryColor() {
    this.selectedPrimaryColor = null;
  }

  saveBgColor() {
    this.bgColor = this.selectedBgColor;
    this.selectedBgColor = null;
    console.log(this.bgColor);
  }
  cancelBgColor() {
    this.selectedBgColor = null;
  }

}
