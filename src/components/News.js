import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles=[
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Michael Wayland",
            "title": "Dodge to resurrect 'Fratzog' logo for new electric vehicles - CNBC",
            "description": "The Fratzog – a made up word by a designer – was initially used by Dodge from 1962 through 1981.",
            "url": "https://www.cnbc.com/2021/08/27/dodge-to-resurrect-fratzog-logo-for-new-electric-vehicles.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106931880-1629742697869-Fratzog_red.PNG?v=1629743362",
            "publishedAt": "2021-08-27T12:08:45Z",
            "content": "Dodge CEO Tim Kuniskis speaks Aug. 13, 2021 during a media event. In the back, the Fratzog logo was used alongside Dodge's current logo.\r\nDETROIT Dodge will use a throwback logo called the \"Fratzog\" … [+2933 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Julian  Mark",
            "title": "Trump says his administration killed 'bigger' terrorists than Osama bin Laden - The Washington Post",
            "description": "Trump implied on a conservative radio show that Osama bin Laden struck the United States only once.",
            "url": "https://www.washingtonpost.com/nation/2021/08/27/trump-osama-bin-laden-one-hit/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/YTDD74E2XQI6XMXVPUXQDATVBU.jpg&w=1440",
            "publishedAt": "2021-08-27T12:00:00Z",
            "content": "As the United States grapples with its withdrawal from Afghanistan, where it launched a near-20-year war in response to the 2001 attacks that killed nearly 3,000 Americans, Trump appeared on a conser… [+2911 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Matthew J. Belvedere",
            "title": "5 things to know before the stock market opens Friday - CNBC",
            "description": "U.S. stock futures rose ahead of Fed Reserve Chairman Jerome Powell's speech Friday morning.",
            "url": "https://www.cnbc.com/2021/08/27/5-things-to-know-before-the-stock-market-opens-friday-aug-27.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106931832-1629738914712-gettyimages-1234834003-US-STOCKS.jpg?v=1629738942",
            "publishedAt": "2021-08-27T11:46:13Z",
            "content": "Here are the most important news, trends and analysis that investors need to start their trading day:\r\n1. Stock futures rise ahead of Fed chief Powell's speech\r\nA trader works on the floor of the New… [+3814 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Ryan Gaydos",
            "title": "Jake Paul channels Mike Tyson in hyping up Tyron Woodley fight - Fox News",
            "description": "Jake Paul on Thursday channeled his inner Mike Tyson as he hyped up his upcoming fight against former UFC champion Tyron Woodley.",
            "url": "https://www.foxnews.com/sports/jake-paul-mike-tyson-tyron-woodley-fight",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/08/Jake-Paul-Tyron-Woodley-GETTY.jpg",
            "publishedAt": "2021-08-27T11:02:34Z",
            "content": "Jake Paul on Thursday channeled his inner Mike Tyson as he hyped up his upcoming fight against former UFC champion Tyron Woodley.\r\nPaul talked to TMZ Sports after his and Woodleys camps got into a sc… [+1196 chars]"
        },
        {
            "source": {
                "id": "ars-technica",
                "name": "Ars Technica"
            },
            "author": "Eric Berger",
            "title": "Rocket Report: Webb telescope ready for launch, LOX shortage slows SpaceX - Ars Technica",
            "description": "\"Large NASA taxpayer investments are being thrown away.\"",
            "url": "https://arstechnica.com/science/2021/08/rocket-report-webb-telescope-ready-for-launch-lox-shortage-slows-spacex/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2021/08/Estes_ModelRocket_WIDER-760x380.jpg",
            "publishedAt": "2021-08-27T11:00:49Z",
            "content": "Enlarge/ Estes is now selling a New Shepard model rocket for $69.99.\r\n50 with 31 posters participating\r\nWelcome to Edition 4.13 of the Rocket Report! While there may be a LOX shortage in launch, ther… [+7074 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Gina Harkins",
            "title": "Australian sheep farmer Ben Jackson sent his late 'Aunty Deb' a heart-shaped message using sheep - The Washington Post",
            "description": "« I think she was looking down and had a bit of a peek. »",
            "url": "https://www.washingtonpost.com/nation/2021/08/27/ben-jackson-aunt-deb-sheep-heart-australia/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/08-27-2021/t_bf2c5847f0644adeb60d459165d9c802_name_sheepheart.png&w=1440",
            "publishedAt": "2021-08-27T10:40:48Z",
            "content": "Debra Cowdery known to Jackson as Aunty Deb died of cancer this month at 63. She lived in Brisbane, Queensland. Jackson said he never would have imagined missing her funeral, but Australias pandemic … [+2952 chars]"
        },
        {
            "source": {
                "id": "the-hill",
                "name": "The Hill"
            },
            "author": "Tal Axelrod",
            "title": "Growing scrutiny over Elder roils California recall election | TheHill - The Hill",
            "description": "A flood of scrutiny over conservative radio host Larry Elder’s California gubernatorial recall bi...",
            "url": "https://thehill.com/homenews/campaign/569458-growing-scrutiny-over-elder-roils-california-recall-election",
            "urlToImage": "https://thehill.com/sites/default/files/article_images/elderlarry_81921_twitter.jpg",
            "publishedAt": "2021-08-27T10:00:10Z",
            "content": "A flood of scrutiny over conservative radio host Larry Elders California gubernatorial recall bid over past conduct and controversial remarks is giving Republicans headaches and Democrats hope in the… [+8257 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "NASA’s $10 Billion James Webb Space Telescope Has Successfully Completed Testing - SciTechDaily",
            "description": "After successful completion of its final tests, NASA’s James Webb Space Telescope is being prepped for shipment to its launch site. Engineering teams have completed Webb’s long-spanning comprehensive testing regimen at Northrop Grumman’s facilities. Webb’s ma…",
            "url": "https://scitechdaily.com/nasas-10-billion-james-webb-space-telescope-has-successfully-completed-testing/",
            "urlToImage": "https://scitechdaily.com/images/NASAs-James-Webb-Space-Telescope.gif",
            "publishedAt": "2021-08-27T09:41:10Z",
            "content": "ByThaddeus Cesari, NASA's Goddard Space Flight CenterAugust 27, 2021\r\nNASA’s James Webb Space Telescope. Credit: NASA’s Goddard Space Flight Center Conceptual Image Lab\r\nAfter successful completion o… [+8336 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Weather Channel"
            },
            "author": null,
            "title": "Tropical Storm Ida Is Strengthening and Forecast To Hit Gulf Coast As A Major Hurricane | The Weather Channel - Articles from The Weather Channel | weather.com - The Weather Channel",
            "description": "A dangerous hurricane threat is in play for the Gulf Coast. Here's the latest forecast briefing. - Articles from The Weather Channel | weather.com",
            "url": "https://weather.com/safety/hurricane/news/2021-08-27-tropical-storm-hurricane-ida-forecast-gulf",
            "urlToImage": "https://s.w-x.co/Ida_prim_0827_8a.jpg",
            "publishedAt": "2021-08-27T09:37:57Z",
            "content": "At a Glance\r\n<ul><li>Tropical Storm Ida is strengthening in the Caribbean Sea.</li><li>This system is forecast to grow into a major hurricane in the Gulf of Mexico this weekend.</li><li>Interests alo… [+5862 chars]"
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "Dan Gallagher, Laura Forman",
            "title": "Big Tech Wants You to Live in a Virtual World. Prepare for Real Problems. - The Wall Street Journal",
            "description": "Facebook and other companies view the ‘metaverse’ as the next big thing, but user discretion is advised",
            "url": "https://www.wsj.com/articles/big-tech-wants-you-to-live-in-a-virtual-world-prepare-for-real-problems-11630056626",
            "urlToImage": "https://images.wsj.net/im-391879/social",
            "publishedAt": "2021-08-27T09:30:00Z",
            "content": "Heard of the metaverse lately? It has been hard not to. \r\n Facebook Chief Executive Mark Zuckerberg mentioned techs latest buzzword 16 times on his companys most recent earnings call last month. The … [+1103 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Elliot Smith",
            "title": "U.S. and allies warn more terrorist attacks likely as Afghanistan withdrawal deadline nears - CNBC",
            "description": "The U.S. and its allies have warned that more terrorist attacks in Kabul are likely, as the deadline for military withdrawal from Afghanistan draws near.",
            "url": "https://www.cnbc.com/2021/08/27/us-allies-warn-more-terrorist-attacks-likely-as-afghanistan-withdrawal-deadline-nears.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106933657-1629988806792-gettyimages-1234876386-AA_26082021_447384.jpeg?v=1629988884",
            "publishedAt": "2021-08-27T09:08:44Z",
            "content": "The U.S. and its allies have warned that more terrorist attacks in Kabul are likely, as the deadline for military withdrawal from Afghanistan draws near.\r\nTwo suicide bombers struck on Thursday near … [+2475 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Thomas Ricker",
            "title": "Microsoft Azure cloud vulnerability is the ‘worst you can imagine’ - The Verge",
            "description": "A flaw in Microsoft’s Azure Cosmos DB database product left more than 3,300 Azure customers open to complete unrestricted access to hackers since 2019 when Microsoft added a data visualization feature called Jupyter Notebook to Cosmos DB. The feature was turn…",
            "url": "https://www.theverge.com/2021/8/27/22644161/microsoft-azure-database-vulnerabilty-chaosdb",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/uuecP5NQKjgi9Ijg40sFyVobIB0=/0x292:2040x1360/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/8792137/acastro_170629_1777_0008_v2.jpg",
            "publishedAt": "2021-08-27T09:01:17Z",
            "content": "Thousands of Azure clients warned that data has been exposed for years\r\nAnother day, another major Microsoft vulnerability.\r\nIllustration by Alex Castro / The Verge\r\nMicrosoft has warned thousands of… [+2551 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Mark Mazzetti, Julian E. Barnes, Adam Goldman",
            "title": "Amid Afghan Chaos, a C.I.A. Mission That Will Persist for Years - The New York Times",
            "description": "The spy agency had plans to de-emphasize counterterrorism operations to focus on rising global powers. History got in the way.",
            "url": "https://www.nytimes.com/2021/08/27/us/politics/cia-afghanistan.html",
            "urlToImage": "https://static01.nyt.com/images/2021/08/26/us/politics/26dc-intel/26dc-intel-facebookJumbo.jpg",
            "publishedAt": "2021-08-27T09:00:25Z",
            "content": "The United States will also have to deal with troublesome partners like Pakistan, whose unmatched ability to play both sides of a fight frustrated generations of American leaders.\r\nWilliam J. Burns, … [+1726 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "Jaclyn Diaz",
            "title": "Western Europe Can Expect More Heavy Rainfall And Fatal Floods As The Climate Warms - NPR",
            "description": "The World Weather Attribution initiative has issued a report that said July's historic flooding in Europe is more likely to happen today due to global warming.",
            "url": "https://www.npr.org/2021/08/27/1031193790/western-europe-fatal-floods-climate-change",
            "urlToImage": "https://media.npr.org/assets/img/2021/08/26/ap21196707504898_wide-328809d2adf57588e5c04f0396b88110c13aedc3.jpg?s=1400",
            "publishedAt": "2021-08-27T09:00:00Z",
            "content": "Destroyed houses are seen in Schuld, Germany, on July 15 after devastating floods hit the region.\r\nMichael Probst/AP\r\nHeavy rainfall and catastrophic flooding events like those that hit Western Europ… [+2216 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Jill Disis and CNN's Beijing bureau, CNN Business",
            "title": "China blasts '996' excessive work culture - CNN",
            "description": "China is putting companies that overwork their employees on notice.",
            "url": "https://www.cnn.com/2021/08/27/tech/china-supreme-court-996-intl-hnk/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210827013924-shanghai-financial-district-file-2020-super-tease.jpg",
            "publishedAt": "2021-08-27T08:42:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "WHIO"
            },
            "author": "Theresa Seiger, Bob D'Angelo and Michelle Ewing, Cox Media Group National Content Desk",
            "title": "Kabul attack: US service member death toll rises to 13 (live updates) - WHIO Radio",
            "description": "At least 13 U.S. service members, including 10 Marines and a Navy sailor, died Thursday in a pair of suicide bombings outside Kabul’s Hamid Karzai International Airport as thousands of people were trying to flee Afghanistan following the country’s recent take…",
            "url": "https://www.whio.com/news/trending/live-updates-explosion-reported-outside-kabul-airport/PBAVXUCVPNA2LORTYPKC2I2JEI/",
            "urlToImage": "https://d1hfln2sfez66z.cloudfront.net/08-27-2021/t_2601b45fbd8c4ce5bf91cc97bc756e80_name_Kabul_attack_What_you_need_to_know_6_6128c9e55ea20121cbd10d98_1_Aug_27_2021_11_37_20_poster.jpg",
            "publishedAt": "2021-08-27T07:18:37Z",
            "content": "At least 13 U.S. service members, including 10 Marines and a Navy sailor, died Thursday in a pair of suicide bombings outside Kabuls Hamid Karzai International Airport as thousands of people were try… [+1050 chars]"
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "Keith Zhai",
            "title": "China Plans to Ban U.S. IPOs for Data-Heavy Tech Firms - The Wall Street Journal",
            "description": "China’s stock regulator plans to propose new rules that could thwart internet companies’ plans to list in the U.S.",
            "url": "https://www.wsj.com/articles/china-plans-to-ban-u-s-ipos-for-data-heavy-tech-firms-11630045061",
            "urlToImage": "https://images.wsj.net/im-392158/social",
            "publishedAt": "2021-08-27T07:17:00Z",
            "content": "SINGAPOREChina plans to propose new rules that would ban companies with large amounts of sensitive consumer data from going public in the U.S., people familiar with the matter said, a move that is li… [+1273 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Deadline"
            },
            "author": "Tom Tapp",
            "title": "Kanye West Courts Controversy, Appearing With Marilyn Manson & DaBaby At Massive ‘Donda’ Listening Party In Chicago - Deadline",
            "description": "Kanye West – who recently filed to legally change his name to just Ye – had his third stadium listening party for his evolving album, Donda, on Thursday night. After two similar events at Atlanta’s Mercedes-Benz Stadium, West gathered about 40,000 fans inside…",
            "url": "https://deadline.com/2021/08/kanye-marilyn-manson-dababy-donda-listening-party-1234823176/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2021/08/Screen-Shot-2021-08-26-at-11.38.36-PM.png?w=870",
            "publishedAt": "2021-08-27T06:46:00Z",
            "content": "Kanye West – who recently filed to legally change his name to just Ye – had his third stadium listening party for his evolving album, Donda, on Thursday night.\r\nAfter two similar events at Atlanta’s … [+3021 chars]"
        },
        {
            "source": {
                "id": "ars-technica",
                "name": "Ars Technica"
            },
            "author": "Jon Brodkin",
            "title": "Apple will finally let devs tell users about non-App Store purchase options - Ars Technica",
            "description": "Proposed settlement would make it a bit easier to avoid Apple App Store commission.",
            "url": "https://arstechnica.com/tech-policy/2021/08/apple-will-finally-let-devs-tell-users-about-non-app-store-purchase-options/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2021/08/getty-app-store-760x380.jpg",
            "publishedAt": "2021-08-27T05:37:30Z",
            "content": "56 with 36 posters participating\r\nApple will finally let developers tell users about purchase options available outside the iOS App Store. The iPhone maker agreed to this and other concessionsincludi… [+7599 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Brie Stimson",
            "title": "Kamala Harris stops at Pearl Harbor on way back from Asia -- but avoids press questions - Fox News",
            "description": "Kamala Harris returned to the U.S. on Thursday, landing in Hawaii after her trip to Singapore and Vietnam. But the vice president ignored reporters’ questions – whether about Afghanistan or other topics – as she got off Air Force Two for a stop at Joint Base …",
            "url": "https://www.foxnews.com/politics/kamala-harris-stops-at-pearl-harbor-on-way-back-from-asia-but-avoids-press-questions",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/08/AP21239097224960.jpg",
            "publishedAt": "2021-08-27T05:33:13Z",
            "content": "Kamala Harris returned to the U.S. on Thursday, landing in Hawaii after her trip to Singapore and Vietnam.\r\nBut the vice president ignored reporters questions whether about Afghanistan or other topic… [+3256 chars]"
        }
    ]
    constructor(){
        super();
        console.log("hello this is a constructor");
        this.state={
            articles:this.articles,
            loading:false

        }
    }
    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=b897c7212bba47a19652a06263f884a9";
        let data=await fetch(url);
        let parseData=await data.json()
        this.setState({articles:parseData.articles})
        // console.log(data);


    }
    handlePrevClick=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=b897c7212bba47a19652a06263f884a9&page=${this.state.page-1}`;
        let data=await fetch(url);
        let parseData=await data.json()
        
        this.setState({
            page:this.state.page-1,


        })
    }
    handleNextClick=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=b897c7212bba47a19652a06263f884a9&page=${this.state.page+1}`;
        let data=await fetch(url);
        let parseData=await data.json()
        
        this.setState({
            page:this.state.page+1,


        })
        
    }
    render() {
        return (
            <div className="container my-2">
                <h1>Shivam News App - Headlines</h1>
                
                <div className="row">
                    
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-3 mx-3" key={element.url}>
                    <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}></NewsItem>
                </div>
            })}
                
                
                
                </div>
                <div className="container d-flex justify-content-between">

                <button type="button" disabled={this.state.page<=1} class="btn btn-dark" onClick="{this.handlePrevClick}">&larr;Prev</button>
                <button type="button" class="btn btn-dark" onClick="{this.handleNextClick}">Next&rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
