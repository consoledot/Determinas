import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import WhatWeOffer from "../components/What we Offer";
import Industries from "../components/Indutries";

export default function DATASCI() {
  return (
    <div>
      <Head>
        <title>BUSINESS INTELLIGENCE & DATA VISUALISATION</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <header
        style={{
          backgroundImage: "url('/images/big-data.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="blur-bg"></div>
        <div className="header-text-body">
          <div>
            <h1>BIG DATA AND ANALYTICS</h1>
          </div>
        </div>
      </header>
      <section className="absolute-section">
        <div>
          <h2>DATA SCIENCE</h2>
          <p>
            Using large-scale data science skills, uncover insights that
            revolutionize and drive your business operations and accelerate
            outstanding growth. Machine learning and data science are having a
            significant impact on businesses, and they are quickly becoming
            analytical for differentiation and even survival. Increased
            automation of data operations and supply of quick analytics
            solutions are the two most distinguishing elements of this
            revolution. Our data science consulting services at Determinas
            assist you in framing challenging business problems as machine
            learning or operations research problems, allowing you to uncover
            better data science solutions.
          </p>
          <div className="list">
            <p>Predictive Analytics</p>
            <p>Analytical Text</p>
            <p>Machine Learning</p>
            <p>Forecasting</p>
            <p>Optimisation</p>
          </div>
          <div>
            <h3>Predictive Analytics</h3>
            <p>
              We assist clients in driving digital transformation through
              automated learning and predictive data analytics services,
              enabling you to be proactive, forward-thinking, and managing
              data-driven outcomes.
            </p>
            <ul>
              <li>
                Model building: We use a combination of complicated statistical
                models, data mining techniques, and powerful machine learning
                technologies to discover patterns and forecast outcomes in its
                innovative and predictive analytics.
              </li>
              <li>
                Tailored solutions: Our solutions offer to meet the needs of
                individual customers and the nature of the data they collect.
              </li>
              <li>
                Model selection: Given data, we select a statistical model from
                a number of targets. We also ensure that the data collected is
                well-suited to provide the appropriate solution to the problem
                of model selection.
              </li>
            </ul>
          </div>
          <div>
            <h3>Analytical Text</h3>
            <p>
              Determinas data science solutions help you identify and extract
              valid information from emails, online reviews, tweets, survey
              results, notes from feedback forums, and other sorts of written
              feedback to gain insights into your customers. This information
              tells how they feel about your products and services.
            </p>
            <ul>
              <li>
                Gain consumer insights: Organizations can use our text analytics
                services to decipher the meaning of texts, find trends and
                themes, and gain a better understanding of their customers
                opinions, wants, and requirements.
              </li>
              <li>
                Sentiment analysis, document categorisation, theme
                identification, entity extraction, and text classification are
                some of the text analytics services Determinas provide.
              </li>

              <li>
                Determinas’ data science consulting services combine the power
                of Artificial Intelligence through NLP (Neuro-Linguistic
                Programming) and NLG (Natural Language Generation) to build an
                engine that can collect and understand hundreds of texts.
              </li>
              <li>
                Determinas’ text analytics techniques enable companies to
                improve content with an expansive layer to tag, organize, and
                summarize the available content to reach the targeted audience
                easily.
              </li>
            </ul>
          </div>
          <div>
            <h3>Machine Learning</h3>
            <p>
              Our unique solutions are based on proprietary or open-source
              algorithms/frameworks that process data and perform sophisticated
              algorithms in the cloud and at the edge.
            </p>
            <ul>
              <li>
                Services for machine learning: Using the most up-to-date tools
                and technologies to create, train, validate, optimize, deploy,
                and test machine learning models.
              </li>
              <li>
                Machine learning deployment: TensorBoard, What-If, ML Perf,
                TensorFlow Playground, and other tools used to deploy and test
                models.
              </li>
              <li>
                MLaaS (Machine Learning as a service): Amazon ML and Amazon
                SageMaker
              </li>
              <li>
                Machine learning on structured and unstructured data,
                supervised, semi-supervised, and unsupervised
              </li>
              <li>
                Advancement: Model creation, training, optimization, and
                validation using Python and TensorFlow, SparkML, and OpenCV
                frameworks.
              </li>
            </ul>
          </div>
          <div>
            <h3>Forecasting</h3>
            <p>
              We use innovative tools and methodologies to give clients
              intelligent forecasting techniques to drive digital transformation
              within their organizations. Our intelligent forecasting services
              assist businesses in:
            </p>
            <ul>
              <li>
                Establishing a clear plan of action and a clear goal to
                stimulate growth across the board.
              </li>
              <li>
                Obtaining a competitive advantage using knowledge-based
                methodologies, decision assistance, and accuracy.
              </li>
              <li>
                Correcting managerial judgments about the material, staff,
                sales, and other requirements by providing a logical foundation
                for planning and defining the nature of future business
                activities in advance.
              </li>
              <li>
                Leveraging predictive modelling and external signals to
                integrate decision-making with profitability and set data-driven
                financial targets
              </li>
              <li>
                Improving the accuracy and trust in budgets and forecasts and
                uncover the underlying drivers of business value, both internal
                and external.
              </li>
            </ul>
          </div>
          <div>
            <h3>Optimisation</h3>
            <p>
              Determinas prescriptive analytics effectively resolve complex
              business challenges and determine the optimum decision (typically
              the highest profit with the lowest cost) for a particular business
              challenge.
            </p>
            <ul>
              <li>
                Using optimisation solvers and algorithms, We discover the
                optimum solutions (that maximise or decrease the goal while
                fulfilling the business constraints) for known and unknown
                (forecasts or predictions) input variables, including
                established conditions and objectives.
              </li>
              <li>
                We carry out comparative scenario analysis with -What if-
                simulators to see which of several potential solutions provides
                the most outstanding overall results.
              </li>
              <li>
                We use resource optimisation to improve operations by making the
                best use of resources (people, raw materials, equipment, and
                finances) to generate a product or service.
              </li>
              <li>
                At Determinas, we incorporate machine learning into your
                existing optimisation models as a single new input that aids
                your optimal model in determining the best course of action.
              </li>
              <li>
                We improve the estimates by incorporating machine learning-based
                probabilities and predictions, which aids in developing a new
                strategy and adapt to change.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div>
        <WhatWeOffer />
      </div>

      <section className="talent-pool">
        <p>NEED TO PUT TOGETHER A TEAM OF TALENTS FOR YOUR NEXT PROJECT?</p>
        <button>ACCESS OUR TALENT POOL</button>
      </section>
      <Industries />
      <Footer />
    </div>
  );
}
