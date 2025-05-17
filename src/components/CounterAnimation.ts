export class CounterAnimation {
  private animationFrameId: number | null = null;

  constructor() {
    this.init();
  }

  private init() {
    // Initialize on page load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.startAnimation());
    } else {
      this.startAnimation();
    }

    // Handle Astro navigation
    document.addEventListener('astro:page-load', () => this.startAnimation());
    document.addEventListener('astro:after-swap', () => this.startAnimation());
  }

  private startAnimation() {
    // Reset counters first
    this.resetCounters();

    // Start animation after a short delay
    setTimeout(() => {
      const counters = document.querySelectorAll('.counter');
      counters.forEach(counter => {
        if (counter instanceof HTMLElement) {
          const wrapper = counter.closest('.counter-wrapper');
          const target = parseInt(wrapper?.getAttribute('data-target') || '0');
          this.animateCounter(counter, target);
        }
      });
    }, 100);
  }

  private resetCounters() {
    document.querySelectorAll('.counter').forEach(counter => {
      if (counter instanceof HTMLElement) {
        counter.textContent = '0';
      }
    });
  }

  private animateCounter(element: HTMLElement, target: number) {
    let current = 0;
    const duration = 2000;
    const startTime = performance.now();

    const updateCounter = () => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      current = Math.floor(easeOutQuart * target);
      
      element.textContent = `${current}+`;

      if (progress < 1) {
        this.animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        element.textContent = `${target}+`;
      }
    };

    updateCounter();
  }
} 