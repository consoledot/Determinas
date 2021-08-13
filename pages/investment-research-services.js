import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import WhatWeOffer from "../components/What we Offer";
import Industries from "../components/Indutries";

export default function IRS() {
  return (
    <div>
      <Head>
        <title>GROWTH MARKETING</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <header
        style={{
          backgroundImage: "url('/images/growth-marketing.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="overlay"></div>
        <div className="blur-bg"></div>
        <div className="header-text-body">
          <div>
            <span>Home/ services</span>
            <h1>GROWTH MARKETING</h1>
          </div>
        </div>
      </header>
      <section className="absolute-section">
        <div>
          <h2>INVESTMENT RESEARCH SERVICES</h2>
          <p>
            Make your investment decisions more quickly. Rather than working on
            easy, repetitive chores, we solve complicated problems and create
            personalized solutions for our clients. Work with our highly
            qualified and experienced research analysts, who are experts at
            developing investment ideas by combining alternative data with
            fundamental research.
          </p>
          <div className="list">
            <p>Equity Research Services</p>
            <p>Fixed Income and Credit Research</p>
            <p>Private Banking Support</p>
            <p>Hedge Fund Support</p>
            <p>Investment Banking</p>
            <p>Private Equity</p>
          </div>
        </div>
      </section>
      <section className="section-list">
        <div>
          <h3>Equity Research Services</h3>
          <p>
            Determinas uses ratio analysis to produce in-depth thematic/sector
            research studies that address major investment arguments, trends,
            and difficulties. To have actionable ideas, we screen markets,
            evaluate and compare firms and worldwide research trends. In
            addition, we create simple to complicated financial models to assess
            the underlying worth of public equities. We also synthesize
            digitalisation broker reports on firms for the buy-side –
            initiations, industry reports, and management meetings and assist
            the sell-side in launching coverage on listed stocks in various
            sectors and regions.
          </p>
          <ul>
            <li> Updates on industry news and events regularly. </li>
            <li>
              Using forensic investigation, you can spot accounting errors and
              corporate governance difficulties before investing in long-term
              ideas.
            </li>
            <li>
              Modelling with historical financial data, structured forecast
              models, valuation, and sensitivity analysis are all financial
              modelling examples.
            </li>
            <li>
              Clients supply qualitative and quantitative information on the
              companys background to assist in establishing views and making
              decisions. In addition, we provide comprehensive corporate and
              sector reports tailored to your needs.
            </li>
          </ul>
        </div>
        <div>
          <h3>Private Equity</h3>
          <p>
            Throughout the investment life cycle, in-depth transaction execution
            and monitoring services for capital deployment and fund-raising
            activities for PE (Price Earning) funds.
          </p>
          <p>
            Deal sourcing, target appraisal, investment review, value
            enhancement, and investment exit are areas where Determinas can help
            its Clients to:
          </p>
          <ul>
            <li>
              Identify the best investment options through a comprehensive
              industry and company screening procedure.
            </li>
            <li>
              Analyse investment opportunities through learning about the
              business strategy, industry drivers, financial projections, and
              due diligence support, among other things.
            </li>
            <li>
              Performance benchmarking, tracking the operating industry
              environment, keeping dashboards, value mark-up analyses, and other
              activities are all used to track portfolio companies performance.
            </li>
            <li>
              Perform valued studies, creating information memorandums,
              marketing teasers, identifying potential purchasers, managing data
              rooms, and other tasks to formulate an effective investment exit
              strategy.
            </li>
          </ul>
        </div>
        <div>
          <h3>Investment Banking</h3>
          <p>
            For a seamless transaction execution experience, Determinas provide
            comprehensive, high-quality research and analytical help on all
            elements of deal-making i.e.
          </p>
          <ul>
            <li>
              We create and maintain profiles of public and private companies
              from a variety of industries and areas.
            </li>
            <li>
              We conduct in-depth research on industries, market landscapes,
              growth expectations, drivers, competition, and market share
              analysis.
            </li>
            <li>
              We create financial models for enterprises, projects, and
              businesses that range from simple to complicated. New business
              opportunities, anticipated investments, return analyses, and
              growth projections are all detailed in this report.
            </li>
            <li>
              We Provide deal-related presentations that emphasise the targets
              financial and operational data, as well as strategic and economic
              benefits, Identifying and assessing possible purchasers or targets
              for a particular investment banking mandate.
            </li>
          </ul>
        </div>
        <div>
          <h3>Hedge Fund Support</h3>
          <p>
            We use technology to streamline traditional research processes,
            resulting in actionable investment insights that help hedge funds,
            active asset managers. In addition, alternative asset managers,
            independent money managers, mutual fund managers, and ETF (Exchange
            Traded Fund) managers are also beneficiaries of Determinas use of
            technology which enables them to generate alpha.
          </p>
          <ul>
            <li>
              Money managers can get end-to-end solutions across asset classes
              and investment strategies (market neutral, long/short, distressed
              debt, and macro-driven).
            </li>
            <li>
              From idea generation through fund performance monitoring and
              reporting, we offer full-cycle research solutions.
            </li>
            <li>
              Expertise with specialised and advanced analytical tools for
              deep-dive financial modelling
            </li>
            <li>
              Technology and automation solutions put the traditional research
              process to the test to get more accurate results faster.
            </li>
            <li>Support for compliance and evaluation of performance.</li>
          </ul>
        </div>
        <div>
          <h3>Private Banking Support</h3>
          <p>
            We understand the specific research requirements of private banks
            and their end clients at Determinas. Relationship managers,
            analysts, and regulators can benefit from our adaptable,
            configurable solutions. We use bespoke, automation-powered solutions
            to enable adequate coverage of big universes while also helping
            businesses stand out from the crowd.
          </p>
          <ul>
            <li>
              Proven expertise in developing tailored research solutions to meet
              the unique requirements of global private banks
            </li>
            <li>
              White-labeled and ready-to-publish research output that aligns
              with the banks internal investment philosophy.
            </li>
            <li>
              Support for massive universes, including coverage initiation,
              regular monitoring, coverage maintenance, and value.
            </li>
            <li>
              Excellent security mechanisms to ensure data security and
              confidentiality
            </li>
          </ul>
        </div>
        <div>
          <h3>Fixed Income and Credit Research</h3>
          <p>
            Determinas provides global clients with bespoke research and
            analytics in private and public debt, macroeconomics, compliance,
            and cross-asset strategies. We seek to:
          </p>
          <ul>
            <li>
              Improve investment decisions by combining domain expertise with a
              -client first- mentality.
            </li>
            <li>
              Identify investment opportunities, evaluate prospective
              investments, and monitoring the coverage universe are just a few
              services provided during the fixed income life cycle.
            </li>
            <li>
              Investment grade, high yield, and distressed debt all benefit from
              customised support.
            </li>
            <li>Cover both developed and emerging markets.</li>
            <li>
              Cash flow models, indenture screening, covenant headroom
              monitoring, stress testing, and scenario analysis are just a few
              of the tools available to you.
            </li>
          </ul>
        </div>
      </section>

      <section className="talent-pool">
        <p>NEED TO PUT TOGETHER A TEAM OF TALENTS FOR YOUR NEXT PROJECT?</p>
        <button>ACCESS OUR TALENT POOL</button>
      </section>
      <Footer />
    </div>
  );
}
