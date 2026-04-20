import { Component, AfterViewInit, ElementRef, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('bgVideo') video!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const v = this.video.nativeElement;

    v.muted = true;
    v.defaultMuted = true;
    v.autoplay = true;

    const playPromise = v.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // fallback retry after user interaction
        document.addEventListener('click', () => v.play(), { once: true });
      });
    }
  }

  cities = [
  {
    name: 'Mumbai',
    region: 'Maharashtra • West India',
    capacity: '7 MW',
    projects: '3',
    efficiency: '98%',
    image: 'assets/mumbai-city.png',
    gradStart: '#1a3a1a',
    gradEnd: '#43a047',
    description: 'Leading industrial hub in Western India with major manufacturing and commercial solar installations. Our Mumbai projects include rooftop systems for warehouses, ground-mounted installations for production facilities, and integrated solutions for logistics centers.',
    icon: '🏭',
    highlights: [
      { title: 'Largest warehouse installation', desc: '2.5 MW rooftop system with 97% efficiency' },
      { title: 'Zero downtime record', desc: '18 months continuous operation achieved' },
      { title: '65% cost reduction', desc: 'Annual energy savings for manufacturing clients' }
    ]
  },
  {
    name: 'Pune',
    region: 'Maharashtra • Automotive Hub',
    capacity: '5 MW',
    projects: '4',
    efficiency: '97%',
    image: 'assets/pune-city.jpg',
    gradStart: '#0a1628',
    gradEnd: '#1976d2',
    description: 'Major automotive and IT manufacturing zone with diverse industrial solar deployments. Pune installations focus on rooftop and ground-mounted systems for automotive suppliers, tech campuses, and industrial parks with emphasis on grid stability.',
    icon: '⚡',
    highlights: [
      { title: 'Automotive sector leader', desc: '3 MW across 4 manufacturing facilities' },
      { title: 'Grid integration excellence', desc: 'Seamless connection to MSEDCL network' },
      { title: 'Smart monitoring system', desc: 'Real-time performance tracking deployed' }
    ]
  },
  {
    name: 'Delhi NCR',
    region: 'National Capital Region • North',
    capacity: '3 MW',
    projects: '2',
    efficiency: '95%',
    image: 'assets/delhi-city.jpg',
    gradStart: '#1a0530',
    gradEnd: '#7b1fa2',
    description: 'Commercial and light industrial installations across NCR region. Projects include corporate office rooftops, warehouse facilities, and logistics hubs with emphasis on regulatory compliance, grid stability, and winter performance optimization.',
    icon: '🏢',
    highlights: [
      { title: 'Corporate campus success', desc: '1.5 MW IT park installation' },
      { title: 'Regulatory compliance', desc: '100% adherence to DERC guidelines' },
      { title: 'Winter performance', desc: 'Optimized for NCR climate conditions' }
    ]
  },
  {
    name: 'Surat',
    region: 'Gujarat • Textile Capital',
    capacity: '4 MW',
    projects: '3',
    efficiency: '96%',
    image: 'assets/surat.jpg',
    gradStart: '#3e2000',
    gradEnd: '#f57c00',
    description: 'Textile and diamond processing hub with high energy demand. Surat projects deliver reliable solar infrastructure for power-intensive manufacturing operations with focus on operational efficiency, load management, and sustained energy output.',
    icon: '🌱',
    highlights: [
      { title: 'Textile industry pioneer', desc: '1.8 MW for textile manufacturing units' },
      { title: 'Rapid deployment', desc: 'All projects completed ahead of schedule' },
      { title: 'Energy independence', desc: '70% daytime power from solar' }
    ]
  }
];

selectedCity: any = this.cities[0];

selectCity(city: any): void {
  this.selectedCity = city;
}
}
