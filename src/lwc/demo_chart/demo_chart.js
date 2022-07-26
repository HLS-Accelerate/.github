/**
  Implements a generic Chart.js LWC
  
  @author Joe McMaster
  @version 1.0
    
  History
  =======
  Jan 10, 2022 - v1.0 - Initial version

  Configuration
  =============
  Set the following custom LWC properties in OmniScript to configure this component
  
  config - (Mandatory) - Provides the Chart.js configuration to render (see https: //www.chartjs.org/docs/latest/configuration/)

 */
import { LightningElement, api } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import { OmniscriptBaseMixin } from 'vlocity_ins/omniscriptBaseMixin';

export default class Demo_chart extends OmniscriptBaseMixin(LightningElement) {

    @api
    get config() {
        return this._config;
    }
    set config(data) {
        
        try {

            if (data) {

                this._config = JSON.parse(JSON.stringify(data));

                if (this.chart) this.updateChart();
                else {
                    // Attempt to load the Chart.js library from the static resources
                    let chartjs = "/resource/vlocity_ins__chartjs";
                    loadScript(this, chartjs).then(() => {
                        console.log("Chart.js loaded!");
                        this.createChart();
                    })
                    .catch(error => {
                        console.error("Error loading Chart.js -> " + error);
                    });
                }
            }  
        }
        catch (err) {
            console.error("Error in set config() -> " + err);
        }
    }

    _config;
    chart;

    /**
     * Builds a chart
     * 
     */
    createChart() {
        
        // Draw the chart
        let ctx1 = this.template.querySelector('canvas.chart').getContext('2d');
        this.chart = new window.Chart(ctx1, this._config);
    }

    /**
     * Updates a chart
     * 
     * NOTE: Unfortunately, this function will never be triggered when the OS passes the entire Chart.js configuration object.  This 
     * seems to be an OmniScript LWC issue where it doesn't recognize changes within the JSON structure and therefore never updates
     * the LWC property.  Not much we can do about this.  If you need a dynamic chart in OmniScript, it would be best to build the Chart.js
     * configuration inside the LWC JavaScript and instead, just pass the modifed data as a property instead of the entire config.
     */
    updateChart() {

        // Do any chart updates here
        //this.chart.data = this._config.data;
        //this.chart.update();
    }
}