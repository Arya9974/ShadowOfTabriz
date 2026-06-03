const characters = {
  main: [
    {
      id: 1,
      name: "سینا",
      image: "../images/sina.jpg",
      theme: "sounds/sina.mp3",
      status: "alive",
      entry: 1,
      unlockAt: 1,
      deathPart: null,
      description:
        "دانشجوی ترم چهارم مهندسی صنایع در دانشگاه تبریز. اهل ساری، با ته‌لهجهٔ ترکی.",
      relations: {
        friends: ["پرواسی", "آریا"],
        enemies: ["ونتوس"],
        family: [],
      },
      timeline: [
        { part: 1, event: "ورود به داستان" },
        { part: 2, event: "آشتی با رهی" },
        { part: 4, event: "قهر و سیلی با رهی" },
        { part: 7, event: "آشتی دوباره با رهی" },
        {
          part: 14,
          event: "انفجار در پارک و شلیک به ونتوس",
          spoiler: true,
        },
        {
          part: 16,
          event: "فراموشی پامیا",
          spoiler: true,
        },
      ],
    },

    {
      id: 2,
      name: "رهی",
      image: "../images/rehi.jpg",
      theme: "sounds/rahi.mp3",
      status: "alive",
      entry: 1,
      unlockAt: 1,
      deathPart: null,
      description:
        "تیک‌تاکری با حدود ۴۰۰ هزار فالوئر که رابطه‌ای پر فراز و نشیب با سینا دارد.",
      relations: {
        friends: ["ستایش", "باران", "پامیا", "دیانا", "ملیکا"],
        enemies: [],
        family: [],
      },
      timeline: [
        { part: 1, event: "ورود به داستان و شروع رابطه با سینا" },
        { part: 1, event: "قهر اول" },
        { part: 2, event: "آشتی اول با سینا" },
        { part: 3, event: "حذف پیج تیک‌تاک", spoiler: true },
        { part: 4, event: "قهر دوم با سینا" },
        { part: 5, event: "آشتی نهایی در ایلگلی" },
      ],
    },

    {
      id: 3,
      name: "آریا",
      image: "../images/arya.jpg",
      theme: "sounds/arya.mp3",
      status: "alive",
      entry: 1,
      unlockAt: 1,
      deathPart: null,
      description:
        "دوست و همخانهٔ سینا. دانشجو و همکار او که با بیماری معده دست و پنجه نرم می‌کند.",
      relations: {
        friends: ["سینا", "پرواسی"],
        enemies: ["جوگی", "سپهر"],
      },
      timeline: [
        { part: 1, event: "ورود به داستان و معرفی به عنوان همخانه سینا" },
        { part: 2, event: "شروع رابطه با مریم" },
        { part: 4, event: "بیماری معده و پایان رابطه با مریم" },
        {
          part: 5,
          event: "کشف داروی بیماری توسط پرواسی",
          spoiler: true,
        },
        {
          part: 5,
          event: "پیوستن به باند جوگی",
          spoiler: true,
        },
        { part: 17, event: "ماموریت ترساندن قاضی کیهانی" },
        {
          part: 17,
          event: "ماموریت ترساندن قاضی کیهانی",
          spoiler: true,
        },
        {
          part: 17,
          event: "شرکت در عملیات ستایش قدیمی",
          spoiler: true,
        },

        {
          part: 19,
          event: "نجات سپهر و اخراج از باند",
          spoiler: true,
        },

        {
          part: 19,
          event: "فروپاشی روانی",
          spoiler: true,
        },
        {
          part: 19,
          event: "قتل ایلیا و دستگیری",
          spoiler: true,
        },
      ],
    },
  ],

  important: [],
  secondary: [],
  government: [],
};

characters.main.push({
  id: 4,
  name: "پرواسی",
  image: "../images/parvasi.jpg",
  theme: "sounds/parvasi.mp3",
  status: "alive",
  entry: 2, // اولین حضور: پارت 2
  unlockAt: 2, // از پارت 2 قابل مشاهده
  deathPart: null, // هنوز زنده
  description:
    "پسری چاق و شلخته که با آب مشکل داره. اکنون در زندان مرکزی تبریز (بند پسران غیرمسلح). با پیشرفت تحصیلی و کشف دارو، مالی و شخصیتی متحول شده.",
  relations: {
    friends: ["سینا", "آریا"],
    enemies: ["محمد", "جوگی"],
  },
  timeline: [
    { part: 2, event: "ورود به داستان در مهمونی آشتی و معرفی" },
    { part: 4, event: "شروع تحول با باشگاه و ملاقات محمد" },
    { part: 4, event: "رابطه با ستایش" },
    { part: 5, event: "توهین آریا در مهمونی" },
    { part: 7, event: "عاشق شدن باران" },
    {
      part: 10,
      event: "کشف داروی آریا و پیشرفت مالی",
      spoiler: true,
    },
    ,
    {
      part: 12,
      event: "مثلث عشقی پرواسی-باران-محمد",
      spoiler: true,
    },
    ,
    {
      part: 13,
      event: "رد کردن ستایش",
      spoiler: true,
    },
    {
      part: 14,
      event: "زخمی شدن از ناحیه کمر در حمله پهپاد",
      spoiler: true,
    },
    {
      part: 16,
      event: "اولین قدم بدون واکر",
      spoiler: true,
    },
  ],
});
characters.main.push({
  id: 5,
  name: "جوگی",
  image: "../images/jogi.jpg",
  theme: "sounds/jogi.mp3",
  status: "alive",
  entry: 2,
  unlockAt: 2,
  deathPart: null,
  description:
    "امیرحسین ملقب به جوگی. شخصیتی که بعد از یک اتفاق تلخ زندگی‌اش کاملاً تغییر کرد و به رهبر یک باند مافیایی تبدیل شد.",
  relations: {
    friends: ["کوثر", "کیاوش", "قدمی", "اصغری"],
    enemies: ["سید محمد", "ستایش قدیمی"],
  },
  timeline: [
    { part: 2, event: "ورود به داستان به عنوان پسری شوخ و پرانرژی" },
    { part: 3, event: "فلش‌بک تجاوز و مرگ جوگی قدیم", spoiler: true },
    {
      part: 5,
      event: "تأسیس باند مافیایی و شروع فعالیت سازمان‌یافته",
      spoiler: true,
    },
    { part: 5, event: "اولین انتقام خونین از عوامل گذشته", spoiler: true },
    { part: 7, event: "آشنایی با کوثر", spoiler: true },
    { part: 8, event: "درگیری پارک کوهستانی", spoiler: true },
    { part: 8, event: "صدور دستور حذف ستایش قدیمی", spoiler: true },
    { part: 11, event: "خواستگاری از کوثر", spoiler: true },
    { part: 13, event: "تهدید شدن توسط سید محمد از طریق کوثر", spoiler: true },
    { part: 17, event: "عملیات انبار قم", spoiler: true },
    { part: 17, event: "جمع‌آوری نیرو و آماده شدن برای جنگ", spoiler: true },
  ],
});
  characters.important.push({
  id: 6,
  name: "ساغر",
  image: "../images/saghar.jpg",
  theme: "sounds/saghar.mp3",
  status: "dead",

  entry: { part: 2, season: 1 },
  death: { part: 18, season: 1 },

  description:
    "دختری پرانرژی و تیک‌تاکر از تبریز. زندگی‌اش درگیر عشق، خیانت، مادر شدن و در نهایت فروپاشی کامل روانی می‌شود.",

  relations: {
    friends: ["رهی", "مهراس"],
    enemies: ["سپهر"],
    lovers: ["سایمان", "مهراس"]
  },

  timeline: [
    {
      part: 2,
      event: "ورود به داستان و آشنایی با سایمان در مهمانی باغ"
    },
    {
      part: 2,
      event: "سیلی به سایمان و پایان رابطه اولیه",
      spoiler: true
    },
    {
      part: 3,
      event: "درخواست بازگشت به سایمان (رد شدن)",
      spoiler: true
    },
    {
      part: 4,
      event: "رابطه و خیانت سپهر",
      spoiler: true
    },
    {
      part: 5,
      event: "بارداری از سپهر و ازدواج با مهراس",
      spoiler: true
    },
    {
      part: 7,
      event: "تولد مهرسا با سندروم داون",
      spoiler: true
    },
    {
      part: 8,
      event: "حمله سپهر و دزدیده شدن کودک",
      spoiler: true
    },
    {
      part: 10,
      event: "مرگ مهرسا",
      spoiler: true
    },
    {
      part: 11,
      event: "طلاق از مهراس",
      spoiler: true
    },
    {
      part: 18,
      event: "خودکشی از پنجره طبقه پنجم",
      spoiler: true
    },
    {
      part: 19,
      event: "خاکسپاری کنار مهرسا در ساری",
      spoiler: true
    }
  ]
})
 characters.important.push({
  id: 7,
  name: "هانا",
  nickname: "ترک مریخی",
  image: "../images/hana.jpg",
  theme: "sounds/hana.mp3",
  status: "alive",

  entry: { part: 2, season: 1 },
  death: null, // هنوز زنده

  description:
    "بلوند پر انرژی، بی‌فیلتر و شوخ‌طبع، که زندگی‌اش بعد از رابطه با سایمان پر از عشق، از دست دادن و افسردگی می‌شود.",

  relations: {
    friends: ["رهی", "باران", "ستایش"],
    enemies: [],
    lovers: ["سایمان"]
  },

  timeline: [
    {
      part: 2,
      event: "ورود به داستان، شوخی با پرواسی و جوگی",
      spoiler: false
    },
    {
      part: 2,
      event: "شروع رابطه با سایمان",
      spoiler: false
    },
    {
      part: 4,
      event: "آشتی با جوگی",
      spoiler: false
    },
    {
      part: 7,
      event: "ازدواج با سایمان",
      spoiler: false
    },
    {
      part: 8,
      event: "بارداری اول",
      spoiler: false
    },
    {
      part: 8,
      event: "سقط جنین اول",
      spoiler: true
    },
    {
      part: 8,
      event: "بارداری دوم و کتک خوردن توسط سایمان، سقط جنین دوم",
      spoiler: true
    },
    {
      part: 8,
      event: "جدایی از سایمان",
      spoiler: true
    },
    {
      part: 9,
      event: "زندگی در سکوت و بهبود جسمی",
      spoiler: false
    },
    {
      part: 14,
      event: "مشاهده اعتراضات و دود از پنجره بیمارستان",
      spoiler: false
    },
    {
      part: 15,
      event: "خبر مرگ سایمان",
      spoiler: true
    },
    {
      part: 5,
      season: 3,
      event: "سوگ و زندگی تنها در خانه با گهواره خالی",
      spoiler: true
    }
  ]
})