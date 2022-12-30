![](images/ahlsbanner.png)
<h1>A-HLS LWC - Chart.js Documentation</h1>

Embed complex charts into an OmniScript using the Chart.js (https://www.chartjs.org/) library. For simple charts (i.e. single dataset), you should consider leveraging a FlexCard which also supports a chart component. If you need a bit more flexibility beyond what FlexCards provide, the approach used here should be helpful.

<h2>Overview</h2>

This custom LWC provides a generic container for displaying charts. The following illustrates a few examples of the types of charts that can be supported.

![](/images/overview.png)
<h2>Business Objective</h2>

* Add charting functions to Omnistudio 


<h2>Package Includes:</h2>

*OmniScript (1)*

* ChartJS_OS

*Custom LWC Components (1)*

* /lwc/demochart



<h2>Assumptions</h2>

You are an Omnistudio developer who knows how to use LWC in Omniscript and Flexcard. You should be familiar with SF LWC development and GIT

<h2>Configuration Requirements</h2>

<h3>Pre-Install Configuration Steps:</h3>

1. By default, the LWC will use the version of Chart.js included within the managed package (v2.8 as of January 2022)
2. The library can be found under Setup → Static Resources → chartjs
3. If required, it is possible to upload a more recent version of the Chart.js library and reconfigure the LWC to use it.

Download the appropriate LWC asset that aligns with your managed package. Import the LWC into your org before attempting to use the sample OmniScript.

<h3>Post-Install Configuration Steps:</h3>

1. To configure this custom LWC, set the following Custom Lightning Web Component Properties within your OmniScript.
2. Stacked Bar Chart example:

{
   "options":{
      "plugins":{
         "legend":{
            "position":"top"
         }
      },
      "title":{
         "text":"Sample Stacked Bar Chart",
         "display":true
      },
      "responsive":true,
      "scales":{
         "xAxes":[
            {
               "stacked":true
            }
         ],
         "yAxes":[
            {
               "stacked":true
            }
         ]
      }
   },
   "data":{
      "labels":[
         "Jan",
         "Feb",
         "Mar",
         "Apr",
         "May",
         "Jun",
         "Jul",
         "Aug",
         "Sep",
         "Oct",
         "Nov",
         "Dec"
      ],
      "datasets":[
         {
            "label":"Dataset 1",
            "backgroundColor":"#5c9efa",
            "data":[
               5,
               26,
               57,
               11,
               88,
               41,
               4,
               19,
               32,
               63,
               82,
               94
            ]
         },
         {
            "label":"Dataset 2",
            "backgroundColor":"#fa5c6a",
            "data":[
               61,
               49,
               12,
               78,
               71,
               69,
               53,
               81,
               44,
               22,
               18,
               8
            ]
         }
      ]
   },
   "type":"bar"
}


The above JSON would show the following chart:

![](/images/bar.png)
1. After configuring the JSON, Activate the OmniScript.


<h2>Revision History</h2>

* *Revision Short Description (Month Day, Year)*

    * Initial Release (August 31, 2022)

