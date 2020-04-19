import { Component, OnInit, Output, OnChanges, DoCheck } from '@angular/core';
import * as d3 from 'd3';
import * as t from 'topojson';
import { Countries } from './countries';
import { zoom } from 'd3';

@Component({
  selector: 'app-geo-loc-map',
  templateUrl: './geo-loc-map.component.html',
  styleUrls: ['./geo-loc-map.component.scss']
})
export class GeoLocMapComponent implements OnInit {
  name = 'd3';
  mapFeatures: any;
  airports: any;
  nodeSelection: any;
  countries: any[] = new Countries().countries;
  scaledInitial = 1.13;
  test: any;
  // @Output() countryForData = new EventEmitter();

  public ngOnInit() {
    const country2: any[] = new Countries().countries;
    const countryCities: any[] = new Countries().countryCities;

    let country = '';
    let cities2;

    const width = 620;
    const height = 396;

    const projection = d3.geoMercator()
      .translate([ width / 2, height / 2])
      .scale(100);

    const svg = d3.select('#worldMap').append('svg')
      .attr('width', width)
      .attr('height', height);
    const path = d3.geoPath()
      .projection(projection);
    const g = svg.append('g');
    g.attr('class', 'map');

    d3.json('https://raw.githubusercontent.com/cszang/dendrobox/master/data/world-110m2.json')
    .then((topology) => {
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
            // d3.selection(this)
            const posX = Math.floor(mousePos[0]);
            const posY = Math.floor(mousePos[1]);

            let capitals = '';
            let locations = '';
            console.log(j.id);
            console.log(countryCities);
            console.log(country2);
            console.log(k);
            console.log(d);
            for (let i = 0; i < 130; i++) {
              if ( j.id === country2[i].id ) {
                console.log(j.id);
                for(let k = 0; k < countryCities[i].cities.length; k++) {
                  console.log(countryCities[i].cities[k]);
                  locations += `<div>${countryCities[i].cities[k].city}</div>`;
                }

                // for (let h = 0; countryCities[i].cities.length; h++) {
                //   capitals += `<div>${countryCities[i].cities[h]}\n</div>`;
                // }
                console.log(locations);
                console.log(capitals);
              }
            }

            d3.select('.selectedCountry')
            .text(country)

            .append('div')
            .attr('class', 'countryModal')
            .attr('width', 400)
            .attr('height', 400)
            .attr('z-index', 35)
            .attr('top', 400)
            .attr('position', 'absolute')
            .style('background-color', 'blue')
            .html( (i: any) => {
              // capitals;
              capitals = locations;
              // for (let h = 0; countryCities[h].cities.length; h++) {
              //   capitals += `<div>${countryCities[i].cities[h]}\n</div>`;
              // }
              console.log(capitals);
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

          })

          .on('mouseout', d => {
            d3.select('.countryNames')
            .style('display', 'none');
            // d3.select('.selectedCountry')
            // .style('display', 'none');
          })

          .on('dblclick', d => {
            d3.select('.map')
            .call(zoom()
            .scaleExtent([this.scaledInitial, 4])


            .on('zoom', () => {
              g.attr('transform', (d3.event.transform) );
              })
            )
            .on('wheel', () => {
              d3.select('.map')
              .call(zoom()
              .scaleExtent([this.scaledInitial, 4])


              .on('zoom', () => {
                g.attr('transform', (d3.event.translate) );

                })
              );
            })
            .on('mousewheel.zoom', null);
          });
        });
  }

}

