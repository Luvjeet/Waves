import { v4 as uuidv4 } from "uuid";

function chillMusic() {
  return [
    {
      name: "Keep Going",
      cover: "https://f4.bcbits.com/img/a1176758100_16.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#BC3F75", "#68225E"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "What If I Told You",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/935da7886600df5eeb2d3b13b12cf27ee8c6c700-1024x1024.jpg",
      artist: "Juan Rios",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=21649",
      color: ["#FDD79A", "#5E0920"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Same Old Circle",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/5821e04fd52fa668a0b9890f213cbb12e454cc6b-1024x1024.jpg",
      artist: "Middle School",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=22935",
      color: ["#384B54", "#F06232"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Fallin'",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/034f52eeaeceb144cca67b0930d705d32fc39e37-1024x1024.jpg",
      artist: "Ruck P",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=20561",
      color: ["#614D75", "#CF848D"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Sunny in Saint Petersburg",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/03/7945133f0b1f4f167f056fe0c369f05f2ef415f2-1024x1024.jpg",
      artist: "Saib",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16076",
      color: ["#FAE542", "#65CFB8"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Festa",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-1024x1024.jpg",
      artist: "Misha, Jussi Halme, Cocabona",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12091",
      color: ["#2E385B", "#FD5171"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Tether",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",
      artist: "Makzo, Bcalm",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=20127",
      color: ["#B5AF3E", "#A67270"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillMusic;
