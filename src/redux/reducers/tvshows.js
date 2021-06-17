export const tvShowsReducer = (
    state = [
      {
        _id: "m6",
        title: "The Handmaid’s Tale",
        type: "tv-show",
        imgUrl: "/images/m6.jpg",
        imdbRate: "8.4",
        votersNumber: "178205",
        resolution: "WEB-DL 10bit 2160p x265",
        genres: ["درام", "علمی و تخیلی", "هیجان انگیز"],
        year: "2017-2021",
        country: ["آمریکا"],
        director: "Bruce Miller",
        actors: [
          "Amanda Brugel",
          "Elisabeth Moss",
          "Madeline Brewer",
          "Max Minghella",
        ],
        ageRate: "TV-MA",
        summary:
          "داستان سریال که در آینده روایت می شود دورانی را به تصویر می کشد که بر اثر حمله گروهی، رییس جمهور و بیشتر اعضای کنگره کشته شده و اعضای این گروه با برپا کردن کشور جدیدی به نام جمهوری Gilead در قلمرو ایالات متحده کنونی سیستم حکومتی کاملا جدیدی را بر پا کرده اند. در این سیستم جدید علاوه بر تغییرات گسترده در بخش های اداری کشور، جامعه طبقاتی جدیدی شکل گرفته که افراد در طبقات مختلف بر حسب نیاز قرار داده شده و بیشتر امتیازات و حقوق فردی گذشته آنها با تغییرات شدیدی مواجه گشته است.",
        downloadLinks: [
          {
            title: "زبان اصلی",
            linkItems: [
              {
                resolution: "BluRay x265 10bit 1080p",
                format: "mkv",
                encoder: "psa",
                size: "1.9gb",
              },
              {
                resolution: "BluRay 1080p",
                format: "mp4",
                encoder: "yts",
                size: "2.3gb",
              },
              {
                resolution: "BluRay x265 10bit 720p",
                format: "mkv",
                encoder: "psa",
                size: "1.0gb",
              },
            ],
          },
          {
            title: "دوبله فارسی (دو زبانه)",
            linkItems: [
              {
                resolution: "WEB-DL 1080p",
                format: "mkv",
                encoder: "",
                size: "2.4gb",
              },
              {
                resolution: "WEB-DL 720p",
                format: "mkv",
                encoder: "",
                size: "1.4gb",
              },
              {
                resolution: "WEB-DL 480p",
                format: "mkv",
                encoder: "",
                size: "790mb",
              },
            ],
          },
        ],
        relatedMovies: [
          { title: "Hangover", imageUrl: "/images/m5.jpg", imdbRate: "6.2" },
          {
            title: "Millions Dollor Baby",
            imageUrl: "/images/movie2.jpg",
            imdbRate: "7.2",
          },
          { title: "Top Gun", imageUrl: "/images/movie3.jpg", imdbRate: "5.1" },
          {
            title: "The Super Deep",
            imageUrl: "/images/movie4.jpg",
            imdbRate: "3.2",
          },
          { title: "Platform", imageUrl: "/images/m5.jpg", imdbRate: "8.5" },
          { title: "Platform", imageUrl: "/images/movie3.jpg", imdbRate: "8.5" },
          { title: "Platform", imageUrl: "/images/movie2.jpg", imdbRate: "8.5" },
        ],
        trailerLink: "#",
        createAt: "13 آبان 1400",
        comments: "",
      },
      {
        _id: "m7",
        title: "This Is Us",
        type: "tv-show",
        imgUrl: "/images/m7.jpg",
        imdbRate: "8.7",
        votersNumber: "109288",
        resolution: "WEB-DL 10bit 1080p x265",
        genres: ["درام", "عاشقانه", "کمدی"],
        year: "2016",
        country: ["آمریکا"],
        director: "Dan Fogelman",
        actors: [
          "Chrissy Metz",
          "Mandy Moore",
          "Milo Ventimiglia",
          "Sterling K. Brown",
        ],
        ageRate: "TV-14",
        summary:
          "داستان سریال بر روی گروهی از افراد متمرکز است که تاریخ تولدشان یکی می باشد و به صورت تصادفی زندگیشان در راه های مختلف به هم گره می خورد. جک و ربکا زوج جوانی هستند که در پترزبورگ منتظر به دنیا آمدن سه‌قلویشان می باشند. کوین بازیگر موفق و خوشتیپ تلویزیون می باشد که از زندگی مجردی خسته شده است. رندال نیز تاجری است که در کودکی پدرش او را در یک ایستگاه آتش نشانی رها کرده بود و اکنون دارای یک همسر و دو دختر است…",
        downloadLinks: [
          {
            title: "زبان اصلی",
            linkItems: [
              {
                resolution: "BluRay x265 10bit 1080p",
                format: "mkv",
                encoder: "psa",
                size: "1.9gb",
              },
              {
                resolution: "BluRay 1080p",
                format: "mp4",
                encoder: "yts",
                size: "2.3gb",
              },
              {
                resolution: "BluRay x265 10bit 720p",
                format: "mkv",
                encoder: "psa",
                size: "1.0gb",
              },
            ],
          },
          {
            title: "دوبله فارسی (دو زبانه)",
            linkItems: [
              {
                resolution: "WEB-DL 1080p",
                format: "mkv",
                encoder: "",
                size: "2.4gb",
              },
              {
                resolution: "WEB-DL 720p",
                format: "mkv",
                encoder: "",
                size: "1.4gb",
              },
              {
                resolution: "WEB-DL 480p",
                format: "mkv",
                encoder: "",
                size: "790mb",
              },
            ],
          },
        ],
        relatedMovies: [
          { title: "Hangover", imageUrl: "/images/m5.jpg", imdbRate: "6.2" },
          {
            title: "Millions Dollor Baby",
            imageUrl: "/images/movie2.jpg",
            imdbRate: "7.2",
          },
          { title: "Top Gun", imageUrl: "/images/movie3.jpg", imdbRate: "5.1" },
          {
            title: "The Super Deep",
            imageUrl: "/images/movie4.jpg",
            imdbRate: "3.2",
          },
          { title: "Platform", imageUrl: "/images/m5.jpg", imdbRate: "8.5" },
          { title: "Platform", imageUrl: "/images/movie3.jpg", imdbRate: "8.5" },
          { title: "Platform", imageUrl: "/images/movie2.jpg", imdbRate: "8.5" },
        ],
        trailerLink: "#",
        createAt: "5 خرداد 1400",
        comments: "",
      },
      {
        _id: "m8",
        title: "Doctor Who",
        type: "tv-show",
        imgUrl: "/images/m8.jpg",
        imdbRate: "8.6",
        votersNumber: "192582",
        resolution: "WEB-DL 1080p x265",
        genres: ["خانوادگی", "درام", "علمی و تخیلی", "ماجراجویی", "معمایی"],
        year: "2005-2020",
        country: ["آمریکا"],
        director: "Sydney Newman",
        actors: [
          "David Tennant",
          "Matt Smith",
          "Nicholas Briggs",
          "Peter Capaldi",
        ],
        ageRate: "TV-pg",
        summary:
          "یک ماجراجوی بیگانه معروف به دکتر و همراهانش از نژاد اربابان زمان از سیاره ای گالیفری به زمین آمده است...",
        downloadLinks: [
          {
            title: "زبان اصلی",
            linkItems: [
              {
                resolution: "BluRay x265 10bit 1080p",
                format: "mkv",
                encoder: "psa",
                size: "1.9gb",
              },
              {
                resolution: "BluRay 1080p",
                format: "mp4",
                encoder: "yts",
                size: "2.3gb",
              },
              {
                resolution: "BluRay x265 10bit 720p",
                format: "mkv",
                encoder: "psa",
                size: "1.0gb",
              },
            ],
          },
          {
            title: "دوبله فارسی (دو زبانه)",
            linkItems: [
              {
                resolution: "WEB-DL 1080p",
                format: "mkv",
                encoder: "",
                size: "2.4gb",
              },
              {
                resolution: "WEB-DL 720p",
                format: "mkv",
                encoder: "",
                size: "1.4gb",
              },
              {
                resolution: "WEB-DL 480p",
                format: "mkv",
                encoder: "",
                size: "790mb",
              },
            ],
          },
        ],
        relatedMovies: [
          { title: "Hangover", imageUrl: "/images/m5.jpg", imdbRate: "6.2" },
          {
            title: "Millions Dollor Baby",
            imageUrl: "/images/movie2.jpg",
            imdbRate: "7.2",
          },
          { title: "Top Gun", imageUrl: "/images/movie3.jpg", imdbRate: "5.1" },
          {
            title: "The Super Deep",
            imageUrl: "/images/movie4.jpg",
            imdbRate: "3.2",
          },
          { title: "Platform", imageUrl: "/images/m5.jpg", imdbRate: "8.5" },
          { title: "Platform", imageUrl: "/images/movie3.jpg", imdbRate: "8.5" },
          { title: "Platform", imageUrl: "/images/movie2.jpg", imdbRate: "8.5" },
        ],
        trailerLink: "#",
        createAt: "15 دی 1399",
        comments: "",
      },
      {
        _id: "m9",
        title: "The Blacklist",
        type: "tv-show",
        imgUrl: "/images/m9.jpg",
        imdbRate: "8.0",
        votersNumber: "175625",
        resolution: "WEB-DL 10bit 1080p x265",
        genres: ["جنایی", "درام", "معمایی", "هیجان انگیز"],
        year: "2016-2021",
        country: ["آمریکا"],
        director: "Jon Bokenkamp",
        actors: [
          "Diego Klattenhoff",
          "Harry Lennix",
          "James Spader",
          "Megan Boone",
        ],
        ageRate: "TV-pg",
        summary:
          "یک ماجراجوی بیگانه معروف به دکتر و همراهانش از نژاد اربابان زمان از سیاره ای گالیفری به زمین آمده است...",
        downloadLinks: [
          {
            title: "زبان اصلی",
            linkItems: [
              {
                resolution: "BluRay x265 10bit 1080p",
                format: "mkv",
                encoder: "psa",
                size: "1.9gb",
              },
              {
                resolution: "BluRay 1080p",
                format: "mp4",
                encoder: "yts",
                size: "2.3gb",
              },
              {
                resolution: "BluRay x265 10bit 720p",
                format: "mkv",
                encoder: "psa",
                size: "1.0gb",
              },
            ],
          },
          {
            title: "دوبله فارسی (دو زبانه)",
            linkItems: [
              {
                resolution: "WEB-DL 1080p",
                format: "mkv",
                encoder: "",
                size: "2.4gb",
              },
              {
                resolution: "WEB-DL 720p",
                format: "mkv",
                encoder: "",
                size: "1.4gb",
              },
              {
                resolution: "WEB-DL 480p",
                format: "mkv",
                encoder: "",
                size: "790mb",
              },
            ],
          },
        ],
        relatedMovies: [
          { title: "Hangover", imageUrl: "/images/m5.jpg", imdbRate: "6.2" },
          {
            title: "Millions Dollor Baby",
            imageUrl: "/images/movie2.jpg",
            imdbRate: "7.2",
          },
          { title: "Top Gun", imageUrl: "/images/movie3.jpg", imdbRate: "5.1" },
          {
            title: "The Super Deep",
            imageUrl: "/images/movie4.jpg",
            imdbRate: "3.2",
          },
          { title: "Platform", imageUrl: "/images/m5.jpg", imdbRate: "8.5" },
          { title: "Platform", imageUrl: "/images/movie3.jpg", imdbRate: "8.5" },
          { title: "Platform", imageUrl: "/images/movie2.jpg", imdbRate: "8.5" },
        ],
        trailerLink: "#",
        createAt: "15 خرداد 1400",
        comments: "",
      },
    ],
    action
  ) => {
    switch (action.type) {
      case "SET_TVSHOWS":
        return [...action.payload];
      case "CLEAR_TVSHOWS":
        return [...action.payload];
      default:
        return state;
    }
  };
  