$(document).ready(function () {
	'use strict';
	Highcharts.chart('pie-chart-left', {
		chart: {
			type: 'pie',
			options3d: {
				enabled: true,
				alpha: 45
			}
		},
		title: {
			text: 'Token Distribution'
		},
		subtitle: {
			text: ''
		},
		plotOptions: {
			pie: {
				innerSize: 120,
				depth: 45,
				allowPointSelect: true,
				cursor: 'pointer',
			},
			series: {
				dataLabels: {
					enabled: true,
					format: '{point.name}: <br>	{point.y:.1f}%'
				}
			}
		},
		colors: ['#f5a623', '#2bc460', '#108ca2', '#7e63df'],
		series: [{
			name: 'Brands',
			colorByPoint: true,
			data: [{
					name: 'Fundraiser',
					y: 10.00,

				}, {
					name: 'Long Term Budget',
					y: 30.00,

				}, {
					name: 'Founders,Team & Advisors',
					y: 10.00,

				},
				{
					name: 'Community & Partnership ',
					y: 50.00,

				}
			]
		}],
		tooltip: {
			enabled: false,
		},
		  responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                   
                }
            }
        }]
    }

	});
});

$(document).ready(function () {
	'use strict';
	Highcharts.chart('pie-chart-right', {

		chart: {
			type: 'pie',
			options3d: {
				enabled: true,
				alpha: 45
			}
		},
		title: {
			text: 'Use of Proceeds'
		},
		subtitle: {
			text: ''
		},
		plotOptions: {
			pie: {
				innerSize: 120,
				depth: 45,
				allowPointSelect: true,
				cursor: 'pointer',
			},
			series: {
				dataLabels: {
					enabled: true,
					format: '{point.name}: <br>{point.y:.1f}%'
				}
			}
		},
		colors: ['#f5a623', '#2bc460', '#108ca2', '#7e63df'],
		series: [{
			name: 'Brands',
			colorByPoint: true,
			data: [{
					name: 'Software Development',
					y: 30.00,

				}, {
					name: 'Bancor ETH Reserve',
					y: 10.00,

				}, {
					name: 'Legal Expenses',
					y: 10.00,

				},
				{
					name: 'Marketing  ',
					y: 50.00,

				}
			]
		}],
		tooltip: {
			enabled: false,
		},
	});
});