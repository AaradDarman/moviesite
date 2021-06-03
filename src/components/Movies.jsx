import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Movie from "./Movie";
import { paginate } from "../utils/paginate";
import styled from "styled-components";
import useBreakpoints from "../utils/useBreakPoints";

const movies = [
  {
    specialOffers: ["همراه با نسخه دوبله فارسی", "همراه با زیرنویس چسبیده"],
    title: "The Courier",
    imgUrl: "/images/TheCourier.jpg",
    imdbRate: "7.1",
    votersNumber: "15000",
    resolution: "BluRay x256 10bit 1080p",
    genres: ["هیجان انگیز"],
    year: "2020",
    country: "انگلستان",
    director: "Dominic Cooke",
    actors: [
      "Fred Haig ",
      "James Schofield",
      "Merab Ninidze",
      "Vladimir Chuprikov",
    ],
    ageRate: "pg-13",
    summary:
      "گریویل وین، جاسوس جنگ سرد و منبع روسی اش سعی می کنند بحران موشکی کوبا را خاتمه دهند...",
    createAt: "11 خرداد 1400",
    comments: "14",
  },
  {
    specialOffers: ["همراه با نسخه دوبله فارسی", "همراه با زیرنویس چسبیده"],
    title: "The Courier",
    imgUrl: "/images/TheCourier.jpg",
    imdbRate: "7.1",
    votersNumber: "15000",
    resolution: "BluRay x256 10bit 1080p",
    genres: ["هیجان انگیز"],
    year: "2020",
    country: "انگلستان",
    director: "Dominic Cooke",
    actors: [
      "Fred Haig ",
      "James Schofield",
      "Merab Ninidze",
      "Vladimir Chuprikov",
    ],
    ageRate: "pg-13",
    summary:
      "گریویل وین، جاسوس جنگ سرد و منبع روسی اش سعی می کنند بحران موشکی کوبا را خاتمه دهند...",
    createAt: "11 خرداد 1400",
    comments: "14",
  },
  {
    specialOffers: ["همراه با نسخه دوبله فارسی", "همراه با زیرنویس چسبیده"],
    title: "The Courier",
    imgUrl: "/images/TheCourier.jpg",
    imdbRate: "7.1",
    votersNumber: "15000",
    resolution: "BluRay x256 10bit 1080p",
    genres: ["هیجان انگیز"],
    year: "2020",
    country: "انگلستان",
    director: "Dominic Cooke",
    actors: [
      "Fred Haig ",
      "James Schofield",
      "Merab Ninidze",
      "Vladimir Chuprikov",
    ],
    ageRate: "pg-13",
    summary:
      "گریویل وین، جاسوس جنگ سرد و منبع روسی اش سعی می کنند بحران موشکی کوبا را خاتمه دهند...",
    createAt: "11 خرداد 1400",
    comments: "14",
  },
  {
    specialOffers: ["همراه با نسخه دوبله فارسی", "همراه با زیرنویس چسبیده"],
    title: "The Courier",
    imgUrl: "/images/TheCourier.jpg",
    imdbRate: "7.1",
    votersNumber: "15000",
    resolution: "BluRay x256 10bit 1080p",
    genres: ["هیجان انگیز"],
    year: "2020",
    country: "انگلستان",
    director: "Dominic Cooke",
    actors: [
      "Fred Haig ",
      "James Schofield",
      "Merab Ninidze",
      "Vladimir Chuprikov",
    ],
    ageRate: "pg-13",
    summary:
      "گریویل وین، جاسوس جنگ سرد و منبع روسی اش سعی می کنند بحران موشکی کوبا را خاتمه دهند...",
    createAt: "11 خرداد 1400",
    comments: "14",
  },
  {
    specialOffers: ["همراه با نسخه دوبله فارسی", "همراه با زیرنویس چسبیده"],
    title: "The Courier",
    imgUrl: "/images/TheCourier.jpg",
    imdbRate: "7.1",
    votersNumber: "15000",
    resolution: "BluRay x256 10bit 1080p",
    genres: ["هیجان انگیز"],
    year: "2020",
    country: "انگلستان",
    director: "Dominic Cooke",
    actors: [
      "Fred Haig ",
      "James Schofield",
      "Merab Ninidze",
      "Vladimir Chuprikov",
    ],
    ageRate: "pg-13",
    summary:
      "گریویل وین، جاسوس جنگ سرد و منبع روسی اش سعی می کنند بحران موشکی کوبا را خاتمه دهند...",
    createAt: "11 خرداد 1400",
    comments: "14",
  },
  {
    specialOffers: ["همراه با نسخه دوبله فارسی", "همراه با زیرنویس چسبیده"],
    title: "The Courier",
    imgUrl: "/images/TheCourier.jpg",
    imdbRate: "7.1",
    votersNumber: "15000",
    resolution: "BluRay x256 10bit 1080p",
    genres: ["هیجان انگیز"],
    year: "2020",
    country: "انگلستان",
    director: "Dominic Cooke",
    actors: [
      "Fred Haig ",
      "James Schofield",
      "Merab Ninidze",
      "Vladimir Chuprikov",
    ],
    ageRate: "pg-13",
    summary:
      "گریویل وین، جاسوس جنگ سرد و منبع روسی اش سعی می کنند بحران موشکی کوبا را خاتمه دهند...",
    createAt: "11 خرداد 1400",
    comments: "14",
  },
  {
    specialOffers: ["همراه با نسخه دوبله فارسی", "همراه با زیرنویس چسبیده"],
    title: "The Courier",
    imgUrl: "/images/TheCourier.jpg",
    imdbRate: "7.1",
    votersNumber: "15000",
    resolution: "BluRay x256 10bit 1080p",
    genres: ["هیجان انگیز"],
    year: "2020",
    country: "انگلستان",
    director: "Dominic Cooke",
    actors: [
      "Fred Haig ",
      "James Schofield",
      "Merab Ninidze",
      "Vladimir Chuprikov",
    ],
    ageRate: "pg-13",
    summary:
      "گریویل وین، جاسوس جنگ سرد و منبع روسی اش سعی می کنند بحران موشکی کوبا را خاتمه دهند...",
    createAt: "11 خرداد 1400",
    comments: "14",
  },
  {
    specialOffers: ["همراه با نسخه دوبله فارسی", "همراه با زیرنویس چسبیده"],
    title: "The Courier",
    imgUrl: "/images/TheCourier.jpg",
    imdbRate: "7.1",
    votersNumber: "15000",
    resolution: "BluRay x256 10bit 1080p",
    genres: ["هیجان انگیز"],
    year: "2020",
    country: "انگلستان",
    director: "Dominic Cooke",
    actors: [
      "Fred Haig ",
      "James Schofield",
      "Merab Ninidze",
      "Vladimir Chuprikov",
    ],
    ageRate: "pg-13",
    summary:
      "گریویل وین، جاسوس جنگ سرد و منبع روسی اش سعی می کنند بحران موشکی کوبا را خاتمه دهند...",
    createAt: "11 خرداد 1400",
    comments: "14",
  },
  {
    specialOffers: ["همراه با نسخه دوبله فارسی", "همراه با زیرنویس چسبیده"],
    title: "The Courier",
    imgUrl: "/images/TheCourier.jpg",
    imdbRate: "7.1",
    votersNumber: "15000",
    resolution: "BluRay x256 10bit 1080p",
    genres: ["هیجان انگیز"],
    year: "2020",
    country: "انگلستان",
    director: "Dominic Cooke",
    actors: [
      "Fred Haig ",
      "James Schofield",
      "Merab Ninidze",
      "Vladimir Chuprikov",
    ],
    ageRate: "pg-13",
    summary:
      "گریویل وین، جاسوس جنگ سرد و منبع روسی اش سعی می کنند بحران موشکی کوبا را خاتمه دهند...",
    createAt: "11 خرداد 1400",
    comments: "14",
  },
  {
    specialOffers: ["همراه با نسخه دوبله فارسی", "همراه با زیرنویس چسبیده"],
    title: "The Courier",
    imgUrl: "/images/TheCourier.jpg",
    imdbRate: "7.1",
    votersNumber: "15000",
    resolution: "BluRay x256 10bit 1080p",
    genres: ["هیجان انگیز"],
    year: "2020",
    country: "انگلستان",
    director: "Dominic Cooke",
    actors: [
      "Fred Haig ",
      "James Schofield",
      "Merab Ninidze",
      "Vladimir Chuprikov",
    ],
    ageRate: "pg-13",
    summary:
      "گریویل وین، جاسوس جنگ سرد و منبع روسی اش سعی می کنند بحران موشکی کوبا را خاتمه دهند...",
    createAt: "11 خرداد 1400",
    comments: "14",
  },
  {
    specialOffers: ["همراه با نسخه دوبله فارسی", "همراه با زیرنویس چسبیده"],
    title: "The Courier",
    imgUrl: "/images/TheCourier.jpg",
    imdbRate: "7.1",
    votersNumber: "15000",
    resolution: "BluRay x256 10bit 1080p",
    genres: ["هیجان انگیز"],
    year: "2020",
    country: "انگلستان",
    director: "Dominic Cooke",
    actors: [
      "Fred Haig ",
      "James Schofield",
      "Merab Ninidze",
      "Vladimir Chuprikov",
    ],
    ageRate: "pg-13",
    summary:
      "گریویل وین، جاسوس جنگ سرد و منبع روسی اش سعی می کنند بحران موشکی کوبا را خاتمه دهند...",
    createAt: "11 خرداد 1400",
    comments: "14",
  },
  {
    specialOffers: ["همراه با نسخه دوبله فارسی", "همراه با زیرنویس چسبیده"],
    title: "The Courier",
    imgUrl: "/images/TheCourier.jpg",
    imdbRate: "7.1",
    votersNumber: "15000",
    resolution: "BluRay x256 10bit 1080p",
    genres: ["هیجان انگیز"],
    year: "2020",
    country: "انگلستان",
    director: "Dominic Cooke",
    actors: [
      "Fred Haig ",
      "James Schofield",
      "Merab Ninidze",
      "Vladimir Chuprikov",
    ],
    ageRate: "pg-13",
    summary:
      "گریویل وین، جاسوس جنگ سرد و منبع روسی اش سعی می کنند بحران موشکی کوبا را خاتمه دهند...",
    createAt: "11 خرداد 1400",
    comments: "14",
  },
  {
    specialOffers: ["همراه با نسخه دوبله فارسی", "همراه با زیرنویس چسبیده"],
    title: "The Courier",
    imgUrl: "/images/TheCourier.jpg",
    imdbRate: "7.1",
    votersNumber: "15000",
    resolution: "BluRay x256 10bit 1080p",
    genres: ["هیجان انگیز"],
    year: "2020",
    country: "انگلستان",
    director: "Dominic Cooke",
    actors: [
      "Fred Haig ",
      "James Schofield",
      "Merab Ninidze",
      "Vladimir Chuprikov",
    ],
    ageRate: "pg-13",
    summary:
      "گریویل وین، جاسوس جنگ سرد و منبع روسی اش سعی می کنند بحران موشکی کوبا را خاتمه دهند...",
    createAt: "11 خرداد 1400",
    comments: "14",
  },
  {
    specialOffers: ["همراه با نسخه دوبله فارسی", "همراه با زیرنویس چسبیده"],
    title: "The Courier",
    imgUrl: "/images/TheCourier.jpg",
    imdbRate: "7.1",
    votersNumber: "15000",
    resolution: "BluRay x256 10bit 1080p",
    genres: ["هیجان انگیز"],
    year: "2020",
    country: "انگلستان",
    director: "Dominic Cooke",
    actors: [
      "Fred Haig ",
      "James Schofield",
      "Merab Ninidze",
      "Vladimir Chuprikov",
    ],
    ageRate: "pg-13",
    summary:
      "گریویل وین، جاسوس جنگ سرد و منبع روسی اش سعی می کنند بحران موشکی کوبا را خاتمه دهند...",
    createAt: "11 خرداد 1400",
    comments: "14",
  },
  {
    specialOffers: ["همراه با نسخه دوبله فارسی", "همراه با زیرنویس چسبیده"],
    title: "The Courier",
    imgUrl: "/images/TheCourier.jpg",
    imdbRate: "7.1",
    votersNumber: "15000",
    resolution: "BluRay x256 10bit 1080p",
    genres: ["هیجان انگیز"],
    year: "2020",
    country: "انگلستان",
    director: "Dominic Cooke",
    actors: [
      "Fred Haig ",
      "James Schofield",
      "Merab Ninidze",
      "Vladimir Chuprikov",
    ],
    ageRate: "pg-13",
    summary:
      "گریویل وین، جاسوس جنگ سرد و منبع روسی اش سعی می کنند بحران موشکی کوبا را خاتمه دهند...",
    createAt: "11 خرداد 1400",
    comments: "14",
  },
  {
    specialOffers: ["همراه با نسخه دوبله فارسی", "همراه با زیرنویس چسبیده"],
    title: "The Courier",
    imgUrl: "/images/TheCourier.jpg",
    imdbRate: "7.1",
    votersNumber: "15000",
    resolution: "BluRay x256 10bit 1080p",
    genres: ["هیجان انگیز"],
    year: "2020",
    country: "انگلستان",
    director: "Dominic Cooke",
    actors: [
      "Fred Haig ",
      "James Schofield",
      "Merab Ninidze",
      "Vladimir Chuprikov",
    ],
    ageRate: "pg-13",
    summary:
      "گریویل وین، جاسوس جنگ سرد و منبع روسی اش سعی می کنند بحران موشکی کوبا را خاتمه دهند...",
    createAt: "11 خرداد 1400",
    comments: "14",
  },
  {
    specialOffers: ["همراه با نسخه دوبله فارسی", "همراه با زیرنویس چسبیده"],
    title: "The Courier",
    imgUrl: "/images/TheCourier.jpg",
    imdbRate: "7.1",
    votersNumber: "15000",
    resolution: "BluRay x256 10bit 1080p",
    genres: ["هیجان انگیز"],
    year: "2020",
    country: "انگلستان",
    director: "Dominic Cooke",
    actors: [
      "Fred Haig ",
      "James Schofield",
      "Merab Ninidze",
      "Vladimir Chuprikov",
    ],
    ageRate: "pg-13",
    summary:
      "گریویل وین، جاسوس جنگ سرد و منبع روسی اش سعی می کنند بحران موشکی کوبا را خاتمه دهند...",
    createAt: "11 خرداد 1400",
    comments: "14",
  },
  {
    specialOffers: ["همراه با نسخه دوبله فارسی", "همراه با زیرنویس چسبیده"],
    title: "The Courier",
    imgUrl: "/images/TheCourier.jpg",
    imdbRate: "7.1",
    votersNumber: "15000",
    resolution: "BluRay x256 10bit 1080p",
    genres: ["هیجان انگیز"],
    year: "2020",
    country: "انگلستان",
    director: "Dominic Cooke",
    actors: [
      "Fred Haig ",
      "James Schofield",
      "Merab Ninidze",
      "Vladimir Chuprikov",
    ],
    ageRate: "pg-13",
    summary:
      "گریویل وین، جاسوس جنگ سرد و منبع روسی اش سعی می کنند بحران موشکی کوبا را خاتمه دهند...",
    createAt: "11 خرداد 1400",
    comments: "14",
  },
  {
    specialOffers: ["همراه با نسخه دوبله فارسی", "همراه با زیرنویس چسبیده"],
    title: "The Courier",
    imgUrl: "/images/TheCourier.jpg",
    imdbRate: "7.1",
    votersNumber: "15000",
    resolution: "BluRay x256 10bit 1080p",
    genres: ["هیجان انگیز"],
    year: "2020",
    country: "انگلستان",
    director: "Dominic Cooke",
    actors: [
      "Fred Haig ",
      "James Schofield",
      "Merab Ninidze",
      "Vladimir Chuprikov",
    ],
    ageRate: "pg-13",
    summary:
      "گریویل وین، جاسوس جنگ سرد و منبع روسی اش سعی می کنند بحران موشکی کوبا را خاتمه دهند...",
    createAt: "11 خرداد 1400",
    comments: "14",
  },
  {
    specialOffers: ["همراه با نسخه دوبله فارسی", "همراه با زیرنویس چسبیده"],
    title: "The Courier",
    imgUrl: "/images/TheCourier.jpg",
    imdbRate: "7.1",
    votersNumber: "15000",
    resolution: "BluRay x256 10bit 1080p",
    genres: ["هیجان انگیز"],
    year: "2020",
    country: "انگلستان",
    director: "Dominic Cooke",
    actors: [
      "Fred Haig ",
      "James Schofield",
      "Merab Ninidze",
      "Vladimir Chuprikov",
    ],
    ageRate: "pg-13",
    summary:
      "گریویل وین، جاسوس جنگ سرد و منبع روسی اش سعی می کنند بحران موشکی کوبا را خاتمه دهند...",
    createAt: "11 خرداد 1400",
    comments: "14",
  },
  {
    specialOffers: ["همراه با نسخه دوبله فارسی", "همراه با زیرنویس چسبیده"],
    title: "The Courier",
    imgUrl: "/images/TheCourier.jpg",
    imdbRate: "7.1",
    votersNumber: "15000",
    resolution: "BluRay x256 10bit 1080p",
    genres: ["هیجان انگیز"],
    year: "2020",
    country: "انگلستان",
    director: "Dominic Cooke",
    actors: [
      "Fred Haig ",
      "James Schofield",
      "Merab Ninidze",
      "Vladimir Chuprikov",
    ],
    ageRate: "pg-13",
    summary:
      "گریویل وین، جاسوس جنگ سرد و منبع روسی اش سعی می کنند بحران موشکی کوبا را خاتمه دهند...",
    createAt: "11 خرداد 1400",
    comments: "14",
  },
  {
    specialOffers: ["همراه با نسخه دوبله فارسی", "همراه با زیرنویس چسبیده"],
    title: "The Courier",
    imgUrl: "/images/TheCourier.jpg",
    imdbRate: "7.1",
    votersNumber: "15000",
    resolution: "BluRay x256 10bit 1080p",
    genres: ["هیجان انگیز"],
    year: "2020",
    country: "انگلستان",
    director: "Dominic Cooke",
    actors: [
      "Fred Haig ",
      "James Schofield",
      "Merab Ninidze",
      "Vladimir Chuprikov",
    ],
    ageRate: "pg-13",
    summary:
      "گریویل وین، جاسوس جنگ سرد و منبع روسی اش سعی می کنند بحران موشکی کوبا را خاتمه دهند...",
    createAt: "11 خرداد 1400",
    comments: "14",
  },
  {
    specialOffers: ["همراه با نسخه دوبله فارسی", "همراه با زیرنویس چسبیده"],
    title: "The Courier",
    imgUrl: "/images/TheCourier.jpg",
    imdbRate: "7.1",
    votersNumber: "15000",
    resolution: "BluRay x256 10bit 1080p",
    genres: ["هیجان انگیز"],
    year: "2020",
    country: "انگلستان",
    director: "Dominic Cooke",
    actors: [
      "Fred Haig ",
      "James Schofield",
      "Merab Ninidze",
      "Vladimir Chuprikov",
    ],
    ageRate: "pg-13",
    summary:
      "گریویل وین، جاسوس جنگ سرد و منبع روسی اش سعی می کنند بحران موشکی کوبا را خاتمه دهند...",
    createAt: "11 خرداد 1400",
    comments: "14",
  },
  {
    specialOffers: ["همراه با نسخه دوبله فارسی", "همراه با زیرنویس چسبیده"],
    title: "The Courier",
    imgUrl: "/images/TheCourier.jpg",
    imdbRate: "7.1",
    votersNumber: "15000",
    resolution: "BluRay x256 10bit 1080p",
    genres: ["هیجان انگیز"],
    year: "2020",
    country: "انگلستان",
    director: "Dominic Cooke",
    actors: [
      "Fred Haig ",
      "James Schofield",
      "Merab Ninidze",
      "Vladimir Chuprikov",
    ],
    ageRate: "pg-13",
    summary:
      "گریویل وین، جاسوس جنگ سرد و منبع روسی اش سعی می کنند بحران موشکی کوبا را خاتمه دهند...",
    createAt: "11 خرداد 1400",
    comments: "14",
  },
  {
    specialOffers: ["همراه با نسخه دوبله فارسی", "همراه با زیرنویس چسبیده"],
    title: "The Courier",
    imgUrl: "/images/TheCourier.jpg",
    imdbRate: "7.1",
    votersNumber: "15000",
    resolution: "BluRay x256 10bit 1080p",
    genres: ["هیجان انگیز"],
    year: "2020",
    country: "انگلستان",
    director: "Dominic Cooke",
    actors: [
      "Fred Haig ",
      "James Schofield",
      "Merab Ninidze",
      "Vladimir Chuprikov",
    ],
    ageRate: "pg-13",
    summary:
      "گریویل وین، جاسوس جنگ سرد و منبع روسی اش سعی می کنند بحران موشکی کوبا را خاتمه دهند...",
    createAt: "11 خرداد 1400",
    comments: "14",
  },
  {
    specialOffers: ["همراه با نسخه دوبله فارسی", "همراه با زیرنویس چسبیده"],
    title: "The Courier",
    imgUrl: "/images/TheCourier.jpg",
    imdbRate: "7.1",
    votersNumber: "15000",
    resolution: "BluRay x256 10bit 1080p",
    genres: ["هیجان انگیز"],
    year: "2020",
    country: "انگلستان",
    director: "Dominic Cooke",
    actors: [
      "Fred Haig ",
      "James Schofield",
      "Merab Ninidze",
      "Vladimir Chuprikov",
    ],
    ageRate: "pg-13",
    summary:
      "گریویل وین، جاسوس جنگ سرد و منبع روسی اش سعی می کنند بحران موشکی کوبا را خاتمه دهند...",
    createAt: "11 خرداد 1400",
    comments: "14",
  },
  {
    specialOffers: ["همراه با نسخه دوبله فارسی", "همراه با زیرنویس چسبیده"],
    title: "The Courier",
    imgUrl: "/images/TheCourier.jpg",
    imdbRate: "7.1",
    votersNumber: "15000",
    resolution: "BluRay x256 10bit 1080p",
    genres: ["هیجان انگیز"],
    year: "2020",
    country: "انگلستان",
    director: "Dominic Cooke",
    actors: [
      "Fred Haig ",
      "James Schofield",
      "Merab Ninidze",
      "Vladimir Chuprikov",
    ],
    ageRate: "pg-13",
    summary:
      "گریویل وین، جاسوس جنگ سرد و منبع روسی اش سعی می کنند بحران موشکی کوبا را خاتمه دهند...",
    createAt: "11 خرداد 1400",
    comments: "14",
  },
  {
    specialOffers: ["همراه با نسخه دوبله فارسی", "همراه با زیرنویس چسبیده"],
    title: "The Courier",
    imgUrl: "/images/TheCourier.jpg",
    imdbRate: "7.1",
    votersNumber: "15000",
    resolution: "BluRay x256 10bit 1080p",
    genres: ["هیجان انگیز"],
    year: "2020",
    country: "انگلستان",
    director: "Dominic Cooke",
    actors: [
      "Fred Haig ",
      "James Schofield",
      "Merab Ninidze",
      "Vladimir Chuprikov",
    ],
    ageRate: "pg-13",
    summary:
      "گریویل وین، جاسوس جنگ سرد و منبع روسی اش سعی می کنند بحران موشکی کوبا را خاتمه دهند...",
    createAt: "11 خرداد 1400",
    comments: "14",
  },
  {
    specialOffers: ["همراه با نسخه دوبله فارسی", "همراه با زیرنویس چسبیده"],
    title: "The Courier",
    imgUrl: "/images/TheCourier.jpg",
    imdbRate: "7.1",
    votersNumber: "15000",
    resolution: "BluRay x256 10bit 1080p",
    genres: ["هیجان انگیز"],
    year: "2020",
    country: "انگلستان",
    director: "Dominic Cooke",
    actors: [
      "Fred Haig ",
      "James Schofield",
      "Merab Ninidze",
      "Vladimir Chuprikov",
    ],
    ageRate: "pg-13",
    summary:
      "گریویل وین، جاسوس جنگ سرد و منبع روسی اش سعی می کنند بحران موشکی کوبا را خاتمه دهند...",
    createAt: "11 خرداد 1400",
    comments: "14",
  },
];

const Wraper = styled.div`
  .pagination {
    direction: rtl;
    background-color: ${({ theme }) => theme.primary.light};
    padding: 0.5rem 0;
  }
  .pagination li {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.primary.main};
    width: 35px;
    height: 35px;
    border-radius: 100%;
    padding: 0;
    margin-right: 5px;
    box-shadow: 1px 2px 3px rgb(25 25 27 / 61%);
    transition: all 200ms ease-in-out;
  }
  li.disabled {
    display: none;
  }
  .pagination .active {
    background-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => (theme.isDark ? theme.primary.main : theme.text)};
  }
  .pagination a {
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Movies = () => {
  const [perPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (data) => {
    let selected = data.selected;
    // let offset = Math.ceil(selected * perPage);
    setCurrentPage(selected + 1);
  };
  const { isLg } = useBreakpoints();

  const archiveMovies = paginate(movies, currentPage, perPage);
  return (
    <Wraper>
      {archiveMovies.map((movie) => (
        <Movie film={movie} />
      ))}
      <ReactPaginate
        previousLabel={<i class="fas fa-angle-double-right"></i>}
        nextLabel={<i class="fas fa-angle-double-left"></i>}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(movies.length / perPage)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={isLg ? 10 : 4}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </Wraper>
  );
};

export default Movies;
