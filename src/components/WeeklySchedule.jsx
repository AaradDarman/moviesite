import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { LightenDarkenColor } from "../utils/colorConverter";
import TabView from "./shared/TabView";

const schedule = [
  {
    id: "sdfgsdfhssadfsadf",
    title: "شنبه",
    series: [
      {
        title: "Van Helsing",
        imgUrl: "/images/vanhelsing.jpg",
        updateText: "فصل 05 - قسمت 07 اضافه شد",
        chanel: "Syfy",
      },
      {
        title: "The Chi",
        imgUrl: "/images/thechi.jpg",
        updateText: "فصل 04 - قسمت 02 اضافه شد",
        chanel: "Showtime",
      },
      {
        title: "Black Monday",
        imgUrl: "/images/blackmondey.jpg",
        updateText: "فصل 03 - قسمت 02 اضافه شد",
        chanel: "Showtime",
      },
      {
        title: "War of the Worlds",
        imgUrl: "/images/worofworlds.jpg",
        updateText: "فصل 02 - قسمت 02 اضافه شد",
        chanel: "Fox",
      },
    ],
  },
  {
    id: "sdfgsfdg",
    title: "یکشنبه",
    series: [
      {
        title: "Run the World",
        imgUrl: "/images/runtheworld.jpg",
        updateText: "فصل 01 - قسمت 03 اضافه شد",
        chanel: "Netfilx",
      },
      {
        title: "Dynasty",
        imgUrl: "/images/dynasty.jpg",
        updateText: "فصل 04 - قسمت 04 اضافه شد",
        chanel: "The CW",
      },
      {
        title: "Doctor Who",
        imgUrl: "/images/doctorwho.jpg",
        updateText: "فصل 13 - قسمت 00 اضافه شد",
        chanel: "BBC One",
      },
    ],
  },
  {
    id: "sdfgdfsgg",
    title: "دوشنبه",
    series: [
      {
        title: "Run the World",
        imgUrl: "/images/runtheworld.jpg",
        updateText: "فصل 01 - قسمت 03 اضافه شد",
        chanel: "Netfilx",
      },
      {
        title: "Dynasty",
        imgUrl: "/images/dynasty.jpg",
        updateText: "فصل 04 - قسمت 04 اضافه شد",
        chanel: "The CW",
      },
      {
        title: "Doctor Who",
        imgUrl: "/images/doctorwho.jpg",
        updateText: "فصل 13 - قسمت 00 اضافه شد",
        chanel: "BBC One",
      },
    ],
  },
  {
    id: "sdfgdfgsg",
    title: "سه شنبه",
    series: [
      {
        title: "Van Helsing",
        imgUrl: "/images/vanhelsing.jpg",
        updateText: "فصل 05 - قسمت 07 اضافه شد",
        chanel: "Syfy",
      },
      {
        title: "The Chi",
        imgUrl: "/images/thechi.jpg",
        updateText: "فصل 04 - قسمت 02 اضافه شد",
        chanel: "Showtime",
      },
      {
        title: "Black Monday",
        imgUrl: "/images/blackmondey.jpg",
        updateText: "فصل 03 - قسمت 02 اضافه شد",
        chanel: "Showtime",
      },
      {
        title: "War of the Worlds",
        imgUrl: "/images/worofworlds.jpg",
        updateText: "فصل 02 - قسمت 02 اضافه شد",
        chanel: "Fox",
      },
    ],
  },
  {
    id: "sdfgsdfgsd",
    title: "چهارشنبه",
    series: [
      {
        title: "Run the World",
        imgUrl: "/images/runtheworld.jpg",
        updateText: "فصل 01 - قسمت 03 اضافه شد",
        chanel: "Netfilx",
      },
      {
        title: "Dynasty",
        imgUrl: "/images/dynasty.jpg",
        updateText: "فصل 04 - قسمت 04 اضافه شد",
        chanel: "The CW",
      },
      {
        title: "Doctor Who",
        imgUrl: "/images/doctorwho.jpg",
        updateText: "فصل 13 - قسمت 00 اضافه شد",
        chanel: "BBC One",
      },
    ],
  },
  {
    id: "sdfgdfsgsdg",
    title: "پنج شنبه",
    series: [
      {
        title: "Van Helsing",
        imgUrl: "/images/vanhelsing.jpg",
        updateText: "فصل 05 - قسمت 07 اضافه شد",
        chanel: "Syfy",
      },
      {
        title: "The Chi",
        imgUrl: "/images/thechi.jpg",
        updateText: "فصل 04 - قسمت 02 اضافه شد",
        chanel: "Showtime",
      },
      {
        title: "Black Monday",
        imgUrl: "/images/blackmondey.jpg",
        updateText: "فصل 03 - قسمت 02 اضافه شد",
        chanel: "Showtime",
      },
      {
        title: "War of the Worlds",
        imgUrl: "/images/worofworlds.jpg",
        updateText: "فصل 02 - قسمت 02 اضافه شد",
        chanel: "Fox",
      },
    ],
  },
  {
    id: "sdfgsdfgsfdg",
    title: "جمعه",
    series: [
      {
        title: "Run the World",
        imgUrl: "/images/runtheworld.jpg",
        updateText: "فصل 01 - قسمت 03 اضافه شد",
        chanel: "Netfilx",
      },
      {
        title: "Dynasty",
        imgUrl: "/images/dynasty.jpg",
        updateText: "فصل 04 - قسمت 04 اضافه شد",
        chanel: "The CW",
      },
      {
        title: "Doctor Who",
        imgUrl: "/images/doctorwho.jpg",
        updateText: "فصل 13 - قسمت 00 اضافه شد",
        chanel: "BBC One",
      },
    ],
  },
];

const Wraper = styled.div`
  border-radius: 0.5rem;
  padding: 15px;
  background-color: ${({ theme }) => theme.primary.light};
  .bp3-tab-list {
    background-color: ${({ theme }) => theme.primary.light};
    display: flex;
    flex-wrap: wrap;
  }
  .bp3-tab {
    z-index: 2;
    color: ${({ theme }) => theme.text};
    outline: none;
    padding: 0 4px;
  }
  .bp3-tab[aria-selected="true"] {
    color: ${({ theme }) => (theme.isDark ? theme.primary.main : theme.text)};
  }
  .bp3-tab:not([aria-selected="true"]):hover {
    color: ${({ theme }) => LightenDarkenColor(theme.text, 70)};
  }
  .bp3-tab-indicator-wrapper {
    margin-left: 0 !important;
    height: 100%;
    z-index: 1;
  }
  .bp3-tab-indicator {
    height: 100%;
    margin: 0;
    background-color: ${({ theme }) => theme.accent};
    border-radius: 0.3rem;
  }
  .bp3-tab-list > * {
    margin-right: 0;
    margin-left: 20px;
  }
`;

const Schedules = ({ items }) => {
  const Wraper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    direction: rtl;
    background-color: ${({ theme }) => theme.primary.light};
    font-size: 0.8rem;
    div {
      width: 100%;
      background-color: ${({ theme }) => theme.primary.main};
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
      padding: 0.25rem;
      border-radius: 6px;
    }
    img {
      width: 40px;
      height: 40px;
      margin-left: 10px;
      border-radius: 6px;
    }
    div > span {
      margin-left: 10px;
    }
    a + div > span:first-child a {
      color: ${({ theme }) =>
        theme.isDark ? theme.accent : LightenDarkenColor(theme.accent, -60)};
    }
    strong {
      display: inline-block;
      background-color: ${({ theme }) => theme.primary.light};
      color: ${({ theme }) => theme.text};
      padding: 0 4px;
      border-radius: 1rem;
      margin-left: 5px;
    }
  `;
  return (
    <Wraper>
      {items.map((item, index) => (
        <div key={index} className="d-flex flex-row">
          <a href="">
            <img src={item.imgUrl} alt="" />
          </a>
          <div className="d-flex flex-wrap m-0">
            <span className="mb-1 mb-sm-0">
              <strong>سریال</strong>
              <a href=""> {item.title}</a>
            </span>
            <span className="mb-1 mb-sm-0">
              <strong>بروزرسانی</strong>
              {item.updateText}
            </span>
            <span>
              <strong>شبکه</strong>
              {item.chanel}
            </span>
          </div>
        </div>
      ))}
    </Wraper>
  );
};

const WeeklySchedule = () => {
  const [selectedTab, setSelectedTab] = useState();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const result = schedule.map((sch) => ({
      ...sch,
      panel: <Schedules key={sch.id} items={sch.series} />,
    }));
    setCategories(result);
    setSelectedTab(schedule[4].title);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSelectedTab(schedule[3].title);
      console.log("This will run after 1 second!");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Wraper className="bp3-card mb-3">
      <TabView
        className="rtl"
        data={categories}
        selectedTabId={selectedTab}
        onChange={(index) => setSelectedTab(index)}
      />
    </Wraper>
  );
};

export default WeeklySchedule;
