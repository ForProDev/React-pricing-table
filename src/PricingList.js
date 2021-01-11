import React, { Fragment } from "react";

const PricingList = () => {
  return (
    <Fragment>
      <div className="pricing_table__box pricing_table__starter">
        <div className="pricing_table__box__pricing">
          <h2 className="pricing_table__box__pricing--heading">Starter</h2>
          <h1 className="pricing_table__box__pricing--rate">&#xFF04;0</h1>
          <p className="pricing_table__box__pricing--pera">
            per user, per month
          </p>
        </div>
        <div className="pricing_table__box__content">
          <ul className="pricing_table__box__content--list">
            <li>
              <span className="pricing_table__box__content--list-icon">
                &#x2714;
              </span>
              Centralized teams
            </li>
            <li>
              <span className="pricing_table__box__content--list-icon">
                &#x2714;
              </span>
              Version history
            </li>
            <li>
              <span className="pricing_table__box__content--list-icon">
                &#x2714;
              </span>
              Plugin administration
            </li>
          </ul>
        </div>
        <div className="pricing_table__box__purchase">
          <button className="pricing_table__box__purchase--btn">
            Get Starter
          </button>
        </div>
      </div>
      <div className="pricing_table__box pricing_table__professional">
        <div className="pricing_table__box__pricing">
          <h2 className="pricing_table__box__pricing--heading">Professional</h2>
          <h1 className="pricing_table__box__pricing--rate">&#xFF04;25</h1>
          <p className="pricing_table__box__pricing--pera">
            per user, per month
          </p>
        </div>
        <div className="pricing_table__box__content">
          <ul className="pricing_table__box__content--list">
            <li>
              <span className="pricing_table__box__content--list-icon">
                &#x2714;
              </span>
              Centralized teams
            </li>
            <li>
              <span className="pricing_table__box__content--list-icon">
                &#x2714;
              </span>
              Version history
            </li>
            <li>
              <span className="pricing_table__box__content--list-icon">
                &#x2714;
              </span>
              Plugin administration
            </li>
            <li>
              <span className="pricing_table__box__content--list-icon">
                &#x2714;
              </span>
              Facebook & Instagram Ads
            </li>
          </ul>
        </div>
        <div className="pricing_table__box__purchase">
          <button className="pricing_table__box__purchase--btn">
            Get Professional
          </button>
        </div>
      </div>
      <div className="pricing_table__box pricing_table__origanization">
        <div className="pricing_table__box__pricing">
          <h2 className="pricing_table__box__pricing--heading">Organization</h2>
          <h1 className="pricing_table__box__pricing--rate">&#xFF04;50</h1>
          <p className="pricing_table__box__pricing--pera">
            per user, per month
          </p>
        </div>
        <div className="pricing_table__box__content">
          <ul className="pricing_table__box__content--list">
            <li>
              <span className="pricing_table__box__content--list-icon">
                &#x2714;
              </span>
              Centralized teams
            </li>
            <li>
              <span className="pricing_table__box__content--list-icon">
                &#x2714;
              </span>
              Version history
            </li>
            <li>
              <span className="pricing_table__box__content--list-icon">
                &#x2714;
              </span>
              Plugin administration
            </li>
            <li>
              <span className="pricing_table__box__content--list-icon">
                &#x2714;
              </span>
              Facebook & Instagram Ads
            </li>
            <li>
              <span className="pricing_table__box__content--list-icon">
                &#x2714;
              </span>
              Design System Analytics
            </li>
            <li>
              <span className="pricing_table__box__content--list-icon">
                &#x2714;
              </span>
              Unlimited Cloud Storage
            </li>
          </ul>
        </div>
        <div className="pricing_table__box__purchase">
          <button className="pricing_table__box__purchase--btn">
            Get Organization
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default PricingList;
