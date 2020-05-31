// Métodos
import _graphDoughnut from '@/methods/graphs/graphDoughnut.js';

// APIs
import VueCharts from 'vue-chartjs';

export default {
  extends: VueCharts.Doughnut,
  name: 'GlobalSummaryAppDoughnutForGlobalCharts',
  data() {
    return {
      totalIndexNumber: 0,
      firstPosition: {
        confirmed: 0,
        deaths: 0,
        recovered: 0,
      },
      globalDataForGraph: {
        date: [],
        confirmed: [],
        deaths: [],
        recovered: [],
        growthRate: {
          confirmed: [],
          deaths: [],
          recovered: [],
        },
        in24Hours: {
          confirmed: [],
          deaths: [],
          recovered: [],
        },
      },
    };
  },
  methods: {
    attGraph(globalData) {
      // Atualizar dados da variavel "globalDataForGraph"
      let reqGlobalData = globalData;
      // Renderização do gráfico atualizado
      this.renderChart(
        {
          labels: ['Casos Confirmados', 'Mortos', 'Recurados'],
          datasets: [
            {
              label: 'Casos Confirmados',
              borderColor: '#2C3E50',
              hoverBorderColor: '#2C3E50',
              borderWidth: 3,
              backgroundColor: [
                'rgba(241, 196, 15, 0.750)',
                'rgba(231, 77, 60, 0.750)',
                'rgba(46, 204, 112, 0.750)',
              ],
              hoverBackgroundColor: ['#F1C40F', '#E74C3C', '#2ECC71'],
              data: [
                reqGlobalData.confirmed,
                reqGlobalData.deaths,
                reqGlobalData.recovered,
              ],
            },
          ],
        },
        _graphDoughnut.option.default
      );
    },
  },
  mounted() {
    // Renderização inicial do Gráfico
    this.renderChart(
      {
        labels: ['', '', ''],
        datasets: [
          {
            borderColor: '#34495E',
            backgroundColor: 'transparent', //["rgba(241, 196, 15, 0.100)", "rgba(231, 77, 60, 0.100)", "rgba(46, 204, 112, 0.100)"],
            data: [-1, -1, -1],
          },
        ],
      },
      _graphDoughnut.option.default
    );
  },
};
