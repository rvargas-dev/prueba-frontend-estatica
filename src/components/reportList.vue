<!-- <template>
    <div class="container">
        <h1 class="title">Generador de reportes TK</h1>
        <div class="report-table">
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Fecha de creación</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="report in reports" :key="report.id">
                        <td class="center-text">{{ report.tittle }}</td>
                        <td class="center-text">{{ formatDate(report.created_at) }}</td>
                        <td class="center-text"><a @click="downloadReport(report.id)" download>Descargar ⬇</a></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <button class="btn" @click="modalOpen = true">Crear Reporte</button>
        <createReport :isOpen="modalOpen" @close="modalOpen = false" @reportGenerated="fetchReports"/>
    </div>
</template>

<script>
    import axios from '../axios';
    import createReport from "./createReport.vue";

    export default {
        components: {
            createReport,
        },
        data() {
            return {
                modalOpen: false,
                reports: []
            };
        },
        methods: {
            async fetchReports() {
                try {
                    const response = await axios.post('/list-reports');
                    this.reports = response.data;
                } catch (error) {
                    console.error('Error al obtener reportes', error);
                }
            },
            formatDate(dateString) {
                return new Date(dateString).toLocaleDateString();
            },
            openModal() {
                this.modalOpen = true;
            },
            async downloadReport(reportId) {
                try {
                    const response = await axios.post('/get-report', { id: reportId }, { responseType: 'blob' });

                    const blob = new Blob([response.data], {
                        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                    });

                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = `reporte_${reportId}.xlsx`;
                    document.body.appendChild(link);
                    link.click();

                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(url);
                } catch (error) {
                    console.error('Error al descargar el reporte', error);
                }
            }
        },
        mounted() {
            this.fetchReports();
        }
    };
</script> -->
<template>
    <div class="container">
        <h1 class="title">Generador de reportes TK</h1>
        <div class="report-table">
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Fecha de creación</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="report in reports" :key="report.id">
                        <td class="center-text">{{ report.tittle }}</td>
                        <td class="center-text">{{ report.created_at }}</td>
                        <td class="center-text"><a @click="downloadReport(report.id)" download>Descargar ⬇</a></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <button class="btn btn-primary" @click="modalOpen = true">Crear Reporte</button>
        <createReport :isOpen="modalOpen" @close="modalOpen = false" />
    </div>
</template>

<script>
    import createReport from "./createReport.vue";

    export default {
        components: {
            createReport,
        },
        data() {
            return {
                modalOpen: false,
                reports: [
                    { id: 1, tittle: "Reporte 2000", created_at: "31/01/2025" },
                    { id: 2, tittle: "Reporte 2005", created_at: "31/01/2025" },
                    { id: 3, tittle: "Reporte Marzo 2009", created_at: "31/01/2025" }
                ]
            };
        },
        methods: {
            downloadReport(reportId) {
                alert(`Descargando reporte con ID: ${reportId}`);
            }
        }
    };
</script>