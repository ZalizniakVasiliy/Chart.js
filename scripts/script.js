import users from "./users_with_rating.js";

console.log(users);

const labels = users;
const data = {
    labels: users.map(item => {
        const getFullName = () => {
            return `${item.firstName} ${item.lastName}`
        }
        return getFullName();
    }),
    datasets: [
        {
            label: 'Success indicator',
            data: users,
            borderColor: 'red',
            backgroundColor: 'hsl(0, 100%, 50%, 0.5)',
            borderWidth: 2,
            borderRadius: Number.MAX_VALUE,
            borderSkipped: false,
        },
        {
            label: 'Current rating',
            data: users,
            borderColor: 'blue',
            backgroundColor: 'hsl(250, 100%, 50%, 0.5)',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
        }
    ]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Random user rating'
            }
        }
    },
};

const myChart = new Chart(document.getElementById('myChart'), config);