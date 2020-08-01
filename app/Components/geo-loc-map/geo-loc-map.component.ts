import { Component, AfterViewInit, HostListener } from '@angular/core';
import * as d3 from 'd3';
import * as t from 'topojson';
import { Countries } from './countries';

@Component({
  selector: 'app-geo-loc-map',
  templateUrl: './geo-loc-map.component.html',
  styleUrls: ['./geo-loc-map.component.scss']
})
export class GeoLocMapComponent implements AfterViewInit {
  name = 'd3';
  mapFeatures: any;
  airports: any;
  nodeSelection: any;
  countries: any[] = new Countries().countries;
  scaledInitial = 1;
  zoomValue: any = 1;
  event: MouseEvent;

  public ngAfterViewInit() {
    this.createMap();
  }

  getZoomValue(event: MouseEvent): void {
    const regexMatch = /[0-9]/g;
    const path = event.composedPath()[3] as HTMLInputElement;
    const worldMapPath = path.childNodes[0].childNodes[0] as unknown as SVGAElement;
    const s = new XMLSerializer();
    let str = s.serializeToString(worldMapPath).split(' ')[4]
      .match(regexMatch).toString().replace(',', '.').replace(/\,/g, '');
    if (str === '1.7120') { str = '1'; }
    const inputPosition = parseFloat((document.getElementById('zoomer') as HTMLInputElement).value);
    this.zoomValue = parseFloat(str) + inputPosition;
    if (this.zoomValue > 5) { this.zoomValue = 5; }
    const zoomValeStr = this.zoomValue.toString();
    (document.getElementById('zoomer') as HTMLInputElement).value = zoomValeStr;
    this.setZoom(this.zoomValue);

    return this.zoomValue;
  }

  setZoom(zoomValue: number): void {
    zoomValue = Math.round(this.zoomValue);
    (document.getElementById('worldMap').style as unknown as HTMLElement) =
      (`transform: scale(${(document.getElementById('zoomer') as HTMLInputElement).value})`) as unknown as HTMLElement ;
  }

  @HostListener('dblclick', ['$event'])
  onMouseZoom(event: MouseEvent): void {
    let count = 0;
    if (event) { count++; }
    if (count > 0) {
      document.getElementById('wrapper').scrollTo(event.clientX - screenLeft, event.clientY / 2 - screenTop);
    }
    if ((event.composedPath()[3] as HTMLElement).id === 'worldMap') {

      this.getZoomValue(event);
    }
  }

  @HostListener('drag', ['$event'])
  whileDrag(event: MouseEvent): void {
    const xCursor = event.clientX;
    const yCursor = event.clientY;
    const imgEle = document.getElementById('worldContainer') as HTMLElement;
  }


  createMap() {

      const country2: any[] = new Countries().countries;
      const countryCities: any[] = new Countries().countryCities;

      let country = '';
      const width = 620;
      const height = 396;

      const projection = d3.geoMercator()
        .translate([ width / 2, height / 2])
        .scale(100);

      const svg = d3.select('#worldMap').append('svg')
        .attr('id', 'container')
        .attr('width', width)
        .attr('height', height);
      const path = d3.geoPath()
        .projection(projection);
      const g = svg.append('g');
      g.attr('class', 'map');

      d3.json('../../../assets/world-110m2.json')
      .then((topology: any) => {
        this.mapFeatures = t.feature(topology, topology.objects.countries);
        for (let i = 0; i < 177; i++) {
          this.countries.push(topology.objects.countries.geometries[i].id);
        }

        g.selectAll('path')
        .data(this.mapFeatures.features)
        .enter()
        .append('path')
        .attr('class', 'countries')
          .attr('stroke', '#171c20')
          .attr('cursor', 'pointer')
          .attr('stroke-width', '0.1')
          .attr('fill', 'white')
          .attr('d', path)
          .on('click', function(j: any, d: any, k) {

            g.selectAll('path').style('fill', 'white');
            const mousePos = d3.mouse(this);
            d3.select(this).style('fill', 'red');
            const posX = Math.floor(mousePos[0]);
            const posY = Math.floor(mousePos[1]);

            let capitals = '';
            let locations = '';

            for (let i = 0; i < country2.length; i++) {
              if ( j.id === country2[i].id ) {
                for (let k = 0; k < countryCities[i].cities.length; k++) {
                  locations += `<div>${countryCities[i].cities[k].city}</div>`;
                }
              }
            }

            d3.select('.selectedCountry')
            .text(country)

            .append('div')
            .attr('class', 'countryModal')
            .attr('width', 400)
            .attr('height', 400)
            .attr('z-index', 35)
            // .attr('top', 400)
            .attr('position', 'absolute')
            .style('background-color', 'blue')
            .html( (i: any) => {
              capitals = locations;
              return capitals;
            });

          })
          .on('mouseover', function(d: any) {
            for (const nation of country2) {
              if (d.id === nation.id) {
                country = nation.name;
                break;
              }
            }
            const mousePos = d3.mouse(this);
            const posX = Math.floor(mousePos[0]);
            const posY = Math.floor(mousePos[1]);
            d3.select('.countryNames')
            .style('transform', `translate( ${posX + 8}px, ${posY + 10}px )`)
            .style('background-color', '#33333388')
            .style('padding', '4px')
            .style('padding-left', '8px')
            .style('padding-right', '8px')
            .style('border-radius', '2px')
            .style('display', 'block')
            .text(country);

          });
      });
  }

}
