import { fetchResultData, fetchCandidateData } from '../fakeAPI'; // Let's imagine this is an external service that we are calling via https

async function fetchResults() {
  const findMaxInArray = (arr) => {
    const max = Math.max(...arr);
    return arr.find(num => num === max);
  }
  const results = await fetchResultData();
  const candidateData = await fetchCandidateData();
  const candidateWinnerVoteValue = findMaxInArray(results.results.map((result) => result.votes)) 

  let combinedResults = results.results.map(
    (result) => {
      let candidate = candidateData.find((candidate) => candidate.id === result.candidateId )
      let candidateName = candidate.name
      let electionWinner = candidateWinnerVoteValue === result.votes
      return {
        ...result,
        name: candidateName,
        winner: electionWinner
      }
    }
  )

  const finalResult = {
    isComplete: results.metadata.isComplete,
    results: combinedResults
};

  return finalResult;
}

export default fetchResults;
