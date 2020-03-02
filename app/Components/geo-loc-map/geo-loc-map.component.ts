import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as t from 'topojson';

@Component({
  selector: 'app-geo-loc-map',
  templateUrl: './geo-loc-map.component.html',
  styleUrls: ['./geo-loc-map.component.scss']
})
export class GeoLocMapComponent implements OnInit {
  name = 'd3';
  mapFeatures: any;
  airports: any;

  public ngOnInit(): void {

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

    console.log(g);

    d3.json("https://raw.githubusercontent.com/cszang/dendrobox/master/data/world-110m2.json")

      .then((topology: any) => {
        // console.log('------>', topology.feature);
        console.log(topology);

        this.mapFeatures = t.feature(topology, topology.objects.countries);

        g.selectAll('path')
          .data(this.mapFeatures.features)
          .enter()
          .append('path')
          .attr('d', path)
          .attr('class', 'countries');

      });
  }

}
