import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent {
  news = [
    {
      title: 'Nevogen Launches 50MW Solar Plant',
      category: 'Projects',
      date: '2025-03-12',
      image: '/assets/solar-renewable (2).jpg',
      description:
        'Nevogen successfully commissioned a 50MW solar power plant in Rajasthan.',
    },

    {
      title: 'Nevogen at Renewable Energy Expo',
      category: 'Events',
      date: '2025-02-20',
      image: '/assets/solar-50mw-view.jpg',
      description:
        'Our team participated in India’s largest renewable energy expo.',
    },

    {
      title: 'Best Solar Innovation Award',
      category: 'Awards',
      date: '2024-12-15',
      image: '/assets/solar-awards.jpg',
      description: 'Nevogen received the national award for solar innovation.',
    },

    {
      title: 'New Solar Project in Gujarat',
      category: 'Projects',
      date: '2024-09-18',
      image: '/assets/solar-infra1.jpeg',
      description:
        'Nevogen begins construction of a new solar plant in Gujarat.',
    },

    {
      title: 'Nevogen Signs Major Solar Partnership',
      category: 'Events',
      date: '2025-01-10',
      image: '/assets/solar-partnership.jpg',
      description:
        'Nevogen announced a strategic partnership to expand solar infrastructure across India.',
    },

    {
      title: 'Nevogen Expands Rooftop Solar Program',
      category: 'Projects',
      date: '2024-11-05',
      image: '/assets/solar rooftop.jpg',
      description:
        'The company launched a new rooftop solar initiative to support sustainable energy adoption.',
    },
  ];

  filteredNews: any[] = [];
  paginatedNews: any[] = [];

  selectedCategory = 'All';
  selectedYear = 'All';
  selectedMonth = 'All';

  currentPage = 1;
  itemsPerPage = 6;
  totalPages = 1;

  ngOnInit() {
    this.filteredNews = [...this.news];
    this.updatePagination();
  }

  filterNews() {
    this.filteredNews = this.news.filter((news) => {
      const newsDate = new Date(news.date);

      const year = newsDate.getFullYear().toString();
      const month = (newsDate.getMonth() + 1).toString();

      return (
        (this.selectedCategory === 'All' ||
          news.category === this.selectedCategory) &&
        (this.selectedYear === 'All' || year === this.selectedYear) &&
        (this.selectedMonth === 'All' || month === this.selectedMonth)
      );
    });

    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.filteredNews.length / this.itemsPerPage);

    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    this.paginatedNews = this.filteredNews.slice(start, end);
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) return;

    this.currentPage = page;
    this.updatePagination();
  }

  getVisiblePages(): number[] {
    const pages: number[] = [];

    if (this.totalPages <= 4) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      pages.push(2);

      if (this.currentPage > 3) {
        pages.push(-1);
      }

      if (this.currentPage > 2 && this.currentPage < this.totalPages - 1) {
        pages.push(this.currentPage);
      }

      if (this.currentPage < this.totalPages - 2) {
        pages.push(-1);
      }

      pages.push(this.totalPages);
    }

    return pages;
  }
}
