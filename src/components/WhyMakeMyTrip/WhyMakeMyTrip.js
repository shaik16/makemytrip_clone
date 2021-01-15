import React, { Component } from "react";

class WhyMakeMyTrip extends Component {
  render() {
    return (
      <div
        className="container pt-5 pb-5"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="row">
          <div className="col-lg-4">
            <label>Why MakeMyTrip?</label>
            <p className="mt-3" style={{ fontSize: "0.8rem" }}>
              Established in 2000, MakeMyTrip has since positioned itself as one
              of the leading companies, providing great offers, competitive
              airfares, exclusive discounts, and a seamless online booking
              experience to many of its customers. The experience of booking
              your flight tickets, hotel stay, and holiday package through our
              desktop site or mobile app can be done with complete ease and no
              hassles at all. We also deliver amazing offers, such as Instant
              Discounts, Fare Calendar, MyRewardsProgram, MyWallet, and many
              more while updating them from time to time to better suit our
              customers’ evolving needs and demands.
            </p>
          </div>
          <div className="col-lg-4">
            <label>Booking Flights with MakeMyTrip</label>
            <p className="mt-3" style={{ fontSize: "0.8rem" }}>
              At MakeMyTrip, you can find the best of deals and cheap air
              tickets to any place you want by booking your tickets on our
              website or app. Being India’s leading website for hotel, flight,
              and holiday bookings, MakeMyTrip helps you book flight tickets
              that are affordable and customized to your convenience. With
              customer satisfaction being our ultimate goal, we also have a 24/7
              dedicated helpline to cater to our customer’s queries and
              concerns. Serving over 5 million happy customers, we at MakeMyTrip
              are glad to fulfill the dreams of folks who need a quick and easy
              means to find air tickets. You can get a hold of the cheapest
              flight of your choice today while also enjoying the other
              available options for your travel needs with us.
            </p>
          </div>
          <div className="col-lg-4">
            <label>Domestic Flights with MakeMyTrip</label>
            <p className="mt-3" style={{ fontSize: "0.8rem" }}>
              MakeMyTrip is India's leading player for flight bookings, and have
              a dominant position in the domestic flights sector. With the
              cheapest fare guarantee, experience great value at the lowest
              price. Instant notifications ensure current flight status, instant
              fare drops, amazing discounts, instant refunds and rebook options,
              price comparisons and many more interesting features.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default WhyMakeMyTrip;
