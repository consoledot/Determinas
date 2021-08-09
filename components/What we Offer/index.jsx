import Image from "next/image";
import Link from "next/link";
import growth from "../../public/images/growth.svg";
import analytics from "../../public/images/analytics.svg";
import computer from "../../public/images/computer.svg";
import bulb from "../../public/images/bulb.svg";
export default function WhatWeOffer() {
  return (
    <div className="services">
      <div>
        <div className="service-img">
          <Image src={analytics} alt="" />
        </div>

        <div className="item">
          <h4>BIG DATA AND ANALYTICS</h4>
          <ul>
            <li>
              <Link href="/data-governance">Data Governance</Link>
            </li>
            <li>
              <Link href="/data-engineering">Data Engineering</Link>
            </li>
            <li>
              <Link href="/business-inteligence-&-data-visualization">
                Business Intelligence & Visualisation
              </Link>
            </li>
            <li>
              <Link href="/data-science">Data Science</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="service-img">
          <Image src={computer} alt="" />
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
          <Image src={bulb} alt="" />
        </div>

        <div className="item">
          <h4>TALENT MOBILITY</h4>
          <ul>
            <li>
              <Link href="/talent-fellowship">Talent Fellowship</Link>
            </li>
            <li>
              <Link href="/talent-as-a-service">Talent As a Service</Link>
            </li>
            <li>Talent Outsourcing</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="service-img">
          <Image src={growth} alt="" />
        </div>

        <div className="item">
          <h4> GROWTH MARKETING</h4>
          <ul>
            <li>
              <Link href="/business-strategy-support">
                Business Strategy Support
              </Link>
            </li>
            <li>
              <Link href="/market-research">Market Research</Link>
            </li>
            <li>
              <Link href="/market-intelligence-service">
                Market Intelligence
              </Link>
            </li>
            <li>
              <Link href="/investment-research-services">
                Investment Research
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
