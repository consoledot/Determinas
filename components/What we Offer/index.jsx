import Image from "next/image";

import growth from "../../public/images/growth.svg";
import analytics from "../../public/images/analytics.svg";
import computer from "../../public/images/computer.svg";
import bulb from "../../public/images/bulb.svg";
export default function WhatWeOffer() {
  return (
    <div className="services">
      <div>
        <div className="service-img">
          <Image src={analytics} />
        </div>

        <div className="item">
          <h4>BIG DATA AND ANALYTICS</h4>
          <ul>
            <li>Data Governance</li>
            <li>Data Engineering</li>
            <li>Business Intelligence and Data Visualisation</li>
            <li>Data Science </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="service-img">
          <Image src={computer} />
        </div>

        <div className="item">
          <h4>SOFTWARE PRODUCT INNOVATION</h4>
          <ul>
            <li>End to End Product Engineering</li>
            <li>Product Design</li>
            <li>Product Development</li>
            <li>App Restructuring </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="service-img">
          <Image src={bulb} />
        </div>

        <div className="item">
          <h4>TALENT MOBILITY</h4>
          <ul>
            <li>Talent Fellowship</li>
            <li>Talent As a Service</li>
            <li>Talent Outsourcing</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="service-img">
          <Image src={growth} />
        </div>

        <div className="item">
          <h4> GROWTH MARKETING</h4>
          <ul>
            <li>Business Strategy Support</li>
            <li>Market Research</li>
            <li>Market Intelligence</li>
            <li>Investment Research </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
