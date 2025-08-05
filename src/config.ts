export const config: IConfig = {
    downloadLinks: [
        { title: "QQ 群", link: "https://qm.qq.com/q/xuhVzPymqu" },
        { title: "重铬酸钠の存储站", link: "https://alist.na2cr2o7.icu/SpaceflightSimulator_CNlang/SFS%E5%AE%89%E8%A3%85%E5%99%A8" },
    ],
    screenshots: [
        "./Screenshot1.jpg",
        "./Screenshot2.jpg",
        "./Screenshot3.jpg",
        "./Screenshot4.jpg"
    ]
}

interface IConfig {
    downloadLinks: IDownloadLink[];
    screenshots: string[];
}

interface IDownloadLink {
    title: string;
    link: string;
}