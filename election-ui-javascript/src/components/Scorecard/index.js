import './Scorecard.css';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title
} from 'chart.js';

// Register the components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title
);

function Scorecard({ results }) {
  if (!results || results.length === 0) {
    return <div>No results</div>;
  }

  let scores = [];
  let voteData = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [],
    }]
  };

  const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'];

  for (let i = 0; i < results.length; i++) {
    scores.push(
      <tr className={results[i].winner ? 'winner' : ''} key={i}>
        <td>{results[i].party}</td>
        <td>{results[i].name}</td>
        <td>{results[i].votes}</td>
      </tr>
    );

    voteData.labels.push(results[i].party);
    voteData.datasets[0].data.push(results[i].votes);
    voteData.datasets[0].backgroundColor.push(colors[i % colors.length]);
  }

  return (
    <div className="Scorecard">
      <table className="Scorecard-table">
        <thead>
          <tr>
            <th>Party</th>
            <th>Candidate</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {scores}
        </tbody>
      </table>
      <Pie data={voteData} />
    </div>
  );
}

export default Scorecard;