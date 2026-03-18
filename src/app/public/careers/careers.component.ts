import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss',
})
export class CareersComponent {
  jobs = [
    {
      title: 'Manager – Cyber Security',
      department: 'IT',
      location: 'Mumbai',
      type: 'Full Time',
      style: 'On Site',
    },
    {
      title: 'Senior Executive – Finance',
      department: 'Finance',
      location: 'Pune',
      type: 'Full Time',
      style: 'Hybrid',
    },
    {
      title: 'SAP SD Functional Consultant',
      department: 'IT',
      location: 'Bangalore',
      type: 'Contract',
      style: 'Remote',
    },
    {
      title: 'Project Engineer – Renewable Energy',
      department: 'Engineering',
      location: 'Delhi',
      type: 'Full Time',
      style: 'On Site',
    },
    {
      title: 'HR Executive',
      department: 'HR',
      location: 'Mumbai',
      type: 'Full Time',
      style: 'On Site',
    },
    {
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Bangalore',
      type: 'Full Time',
      style: 'Hybrid',
    },
    {
      title: 'Data Analyst',
      department: 'IT',
      location: 'Pune',
      type: 'Contract',
      style: 'Remote',
    },
  ];

  filteredJobs: any[] = [];
  paginatedJobs: any[] = [];

  selectedLocation = 'All';
  selectedDepartment = 'All';
  selectedType = 'All';
  selectedStyle = 'All';

  currentPage = 1;
  itemsPerPage = 5;

  ngOnInit() {
    this.filteredJobs = [...this.jobs];
    this.updatePagination();
  }

  filterJobs() {
    this.filteredJobs = this.jobs.filter((job) => {
      return (
        (this.selectedLocation === 'All' ||
          job.location === this.selectedLocation) &&
        (this.selectedDepartment === 'All' ||
          job.department === this.selectedDepartment) &&
        (this.selectedType === 'All' || job.type === this.selectedType) &&
        (this.selectedStyle === 'All' || job.style === this.selectedStyle)
      );
    });
    this.currentPage = 1;
    this.updatePagination();
  }

  resetFilters() {
    this.selectedLocation = 'All';
    this.selectedDepartment = 'All';
    this.selectedType = 'All';
    this.selectedStyle = 'All';
    this.filteredJobs = [...this.jobs];
    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedJobs = this.filteredJobs.slice(
      start,
      start + this.itemsPerPage,
    );
  }

  changePage(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.filteredJobs.length / this.itemsPerPage) || 1;
  }

  scrollToForm() {
    document.getElementById('applyForm')?.scrollIntoView({
      behavior: 'smooth',
    });
  }

  scrollToJobs() {
  const element = document.getElementById('jobs');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
}
